const { listAllQuestions } = require("../lib/firestore-rest");
const { renderForumSitemap } = require("../lib/forum-seo");

module.exports = async (_req, res) => {
  try {
    const questions = await listAllQuestions();
    const xml = renderForumSitemap(questions);

    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.status(200).send(xml);
  } catch (error) {
    console.error("sitemap-forum error:", error);
    res.status(500).send("Unable to generate sitemap.");
  }
};
