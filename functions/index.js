const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();
const SITE_URL = "https://smartprintingsolution.online";
const SITE_NAME = "SmartPrint Solutions";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function toIsoDate(value) {
  if (!value) {
    return new Date().toISOString();
  }
  if (typeof value.toDate === "function") {
    return value.toDate().toISOString();
  }
  if (typeof value === "object" && typeof value._seconds === "number") {
    return new Date(value._seconds * 1000).toISOString();
  }
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return new Date().toISOString();
  }
  return parsed.toISOString();
}

function formatDisplayDate(value) {
  try {
    return new Date(toIsoDate(value)).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return toIsoDate(value);
  }
}

function metaDescription(text, maxLength = 160) {
  const plain = String(text ?? "").replace(/\s+/g, " ").trim();
  if (plain.length <= maxLength) {
    return plain;
  }
  return `${plain.slice(0, maxLength - 3)}...`;
}

function extractQuestionId(path) {
  const match = String(path).match(/\/forum\/question\/([^/?#]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

async function getQuestionWithAnswers(questionId) {
  const questionRef = db.collection("questions").doc(questionId);
  const questionSnap = await questionRef.get();
  if (!questionSnap.exists) {
    return null;
  }

  const answersSnap = await questionRef.collection("answers").get();
  const answers = answersSnap.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .sort(
      (a, b) => new Date(toIsoDate(a.date)) - new Date(toIsoDate(b.date))
    );

  return {
    id: questionSnap.id,
    ...questionSnap.data(),
    answers,
  };
}

function buildQuestionSchema(question) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: question.title,
      text: question.description,
      dateCreated: toIsoDate(question.date),
      author: {
        "@type": "Person",
        name: question.author || "Anonymous",
      },
      answerCount: question.answers.length,
    },
  };

  if (question.answers.length > 0) {
    schema.mainEntity.suggestedAnswer = question.answers.map((answer) => ({
      "@type": "Answer",
      text: answer.text,
      dateCreated: toIsoDate(answer.date),
      author: {
        "@type": "Person",
        name: answer.author || "Anonymous",
      },
    }));
  }

  return schema;
}

function renderAnswers(answers) {
  if (!answers.length) {
    return '<p class="no-answers">No answers yet. Be the first to reply.</p>';
  }

  return answers
    .map(
      (answer) => `
        <article class="answer">
          <p class="answer-meta">
            <strong>${escapeHtml(answer.author || "Anonymous")}</strong>
            · ${escapeHtml(formatDisplayDate(answer.date))}
          </p>
          <div class="answer-text">${escapeHtml(answer.text).replace(/\n/g, "<br>")}</div>
        </article>`
    )
    .join("");
}

function renderSeoFallback(question) {
  return `
        <h1>${escapeHtml(question.title)}</h1>
        <p class="meta">Asked by ${escapeHtml(question.author || "Anonymous")} · ${escapeHtml(formatDisplayDate(question.date))}</p>
        <p>${escapeHtml(question.description).replace(/\n/g, "<br>")}</p>
        <h2>${question.answers.length} ${question.answers.length === 1 ? "Answer" : "Answers"}</h2>
        ${renderAnswers(question.answers)}`;
}

function renderQuestionPage(question) {
  const pageTitle = `${question.title} | ${SITE_NAME} Forum`;
  const description = metaDescription(question.description);
  const canonicalUrl = `${SITE_URL}/forum/question/${question.id}`;
  const schema = buildQuestionSchema(question);
  const fallback = renderSeoFallback(question);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(pageTitle)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    <meta property="og:title" content="${escapeHtml(pageTitle)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <link href="/static/css/main.59f04214.css" rel="stylesheet" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
    <style>
      .seo-fallback { max-width: 860px; margin: 5rem auto 2rem; padding: 0 1rem; font-family: system-ui, sans-serif; line-height: 1.6; }
      .seo-fallback h1 { font-size: 1.75rem; margin-bottom: 0.5rem; }
      .seo-fallback .meta { color: #666; margin-bottom: 1rem; }
      .seo-fallback .answer { border-top: 1px solid #eee; padding: 1rem 0; }
    </style>
  </head>
  <body>
    <noscript><main class="seo-fallback">${fallback}</main></noscript>
    <div id="root"><main class="seo-fallback" aria-hidden="true">${fallback}</main></div>
    <script defer src="/static/js/main.a94053a2.js"></script>
  </body>
</html>`;
}

function renderNotFoundPage() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Question not found | ${escapeHtml(SITE_NAME)}</title>
    <meta name="robots" content="noindex, follow" />
    <link href="/static/css/main.59f04214.css" rel="stylesheet" />
  </head>
  <body>
    <div id="root">
      <main style="max-width:640px;margin:4rem auto;padding:0 1rem;font-family:system-ui,sans-serif;">
        <h1>Question not found</h1>
        <p>This forum question may have been removed or the link is incorrect.</p>
        <p><a href="${SITE_URL}/forum">Back to forum</a></p>
      </main>
    </div>
    <script defer src="/static/js/main.a94053a2.js"></script>
  </body>
</html>`;
}

exports.renderQuestion = onRequest(
  { region: "us-central1", maxInstances: 10 },
  async (req, res) => {
    const questionId = extractQuestionId(req.path);
    if (!questionId) {
      res.status(404).set("Cache-Control", "public, max-age=300").send(renderNotFoundPage());
      return;
    }

    try {
      const question = await getQuestionWithAnswers(questionId);
      if (!question) {
        res.status(404).set("Cache-Control", "public, max-age=300").send(renderNotFoundPage());
        return;
      }

      res
        .status(200)
        .set("Content-Type", "text/html; charset=utf-8")
        .set("Cache-Control", "public, max-age=300")
        .send(renderQuestionPage(question));
    } catch (error) {
      console.error("renderQuestion error:", error);
      res.status(500).send("Unable to load question.");
    }
  }
);

exports.forumSitemap = onRequest(
  { region: "us-central1", maxInstances: 5 },
  async (_req, res) => {
    try {
      const snapshot = await db.collection("questions").get();
      const urls = snapshot.docs
        .map((doc) => {
          const data = doc.data();
          return {
            loc: `${SITE_URL}/forum/question/${doc.id}`,
            lastmod: toIsoDate(data.date).slice(0, 10),
          };
        })
        .sort((a, b) => b.lastmod.localeCompare(a.lastmod));

      const body = urls
        .map(
          (url) => `  <url>
    <loc>${escapeHtml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`
        )
        .join("\n");

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;

      res
        .status(200)
        .set("Content-Type", "application/xml; charset=utf-8")
        .set("Cache-Control", "public, max-age=3600")
        .send(xml);
    } catch (error) {
      console.error("forumSitemap error:", error);
      res.status(500).send("Unable to generate sitemap.");
    }
  }
);
