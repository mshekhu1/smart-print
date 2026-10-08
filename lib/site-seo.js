const SITE_URL = "https://smartprintingsolution.online";
const SITE_NAME = "SmartPrint Solutions";
const OG_IMAGE = `${SITE_URL}/logo512.png`;

const SERVICES = {
  "printer-repair": {
    slug: "printer-repair",
    title: "HP Printer Repair",
    icon: "fa-wrench",
    short:
      "Fast HP printer repair for LaserJet, OfficeJet, and DeskJet errors, paper jams, offline status, and hardware faults.",
    description:
      "Expert HP printer repair for LaserJet, OfficeJet, and DeskJet. Fix offline printers, paper jams, error codes, and print failures with same-day help.",
    features: [
      "HP LaserJet, OfficeJet & DeskJet repair",
      "Error code and offline printer fixes",
      "Same-day HP service available",
      "Free HP diagnostic",
    ],
    benefits: [
      "Specialists focused on Hewlett Packard printers",
      "Quick fixes for common HP error messages",
      "Transparent pricing before repair begins",
      "Warranty on HP parts and labor",
    ],
    process: [
      "Share your HP model and error or symptoms",
      "We diagnose the HP printer on-site or remotely",
      "Approve the quote and we complete the repair",
      "Test print and confirm your HP printer works",
    ],
  },
  maintenance: {
    slug: "maintenance",
    title: "HP Printer Maintenance",
    icon: "fa-cogs",
    short:
      "Preventive HP printer maintenance to keep LaserJet and OfficeJet devices printing clearly and avoid costly downtime.",
    description:
      "Scheduled HP printer maintenance, cleaning, calibration, and performance checks for LaserJet, OfficeJet, and DeskJet fleets.",
    features: [
      "HP preventive maintenance plans",
      "LaserJet & OfficeJet cleaning",
      "Print quality calibration",
      "HP maintenance contracts",
    ],
    benefits: [
      "Fewer HP paper jams and quality issues",
      "Longer life for HP toner and print heads",
      "Steadier HP print quality day to day",
      "Priority scheduling for HP service contracts",
    ],
    process: [
      "Choose a one-time HP visit or recurring plan",
      "We inspect, clean, and calibrate your HP printers",
      "Replace worn HP rollers and consumables as needed",
      "Share a simple health report for your HP fleet",
    ],
  },
  "supply-sales": {
    slug: "supply-sales",
    title: "HP Toner & Ink Supplies",
    icon: "fa-shopping-cart",
    short:
      "Genuine and compatible HP toner, ink cartridges, and supplies for LaserJet, OfficeJet, and DeskJet printers.",
    description:
      "HP toner, ink cartridges, and printer supplies for LaserJet, OfficeJet, and DeskJet—with bulk discounts and fast delivery.",
    features: [
      "Original HP and compatible cartridges",
      "LaserJet toner & OfficeJet ink",
      "Bulk discounts for offices",
      "HP supply management programs",
    ],
    benefits: [
      "Correct HP cartridge matched to your model",
      "Competitive pricing on HP consumables",
      "Fewer stockouts with reorder reminders",
      "Help choosing genuine HP vs compatible options",
    ],
    process: [
      "Share your HP model or cartridge number",
      "We recommend genuine HP or compatible supplies",
      "Order online or by phone",
      "Get fast delivery or scheduled drop-off",
    ],
  },
  installation: {
    slug: "installation",
    title: "HP Printer Setup & Installation",
    icon: "fa-tools",
    short:
      "Professional HP printer setup—wireless, USB, and network configuration plus HP driver installation and user training.",
    description:
      "HP printer installation and wireless setup for LaserJet, OfficeJet, and DeskJet, including HP drivers and network sharing.",
    features: [
      "New HP printer unboxing & setup",
      "HP wireless and network configuration",
      "HP Smart / driver installation",
      "User training for your team",
    ],
    benefits: [
      "HP printers ready to print on day one",
      "Stable Wi-Fi and network share setup",
      "Correct HP drivers for Windows and macOS",
      "Clear walkthrough of HP Smart and print settings",
    ],
    process: [
      "Schedule HP installation at your location",
      "We unpack, place, and connect the HP printer",
      "Install HP drivers and configure wireless/network",
      "Test print and train key users",
    ],
  },
  "business-solutions": {
    slug: "business-solutions",
    title: "HP Business Printer Solutions",
    icon: "fa-building",
    short:
      "HP fleet management for offices—LaserJet support contracts, cost-per-page optimization, and volume supply plans.",
    description:
      "Business HP printer solutions: LaserJet fleet management, cost optimization, HP support contracts, and volume toner programs.",
    features: [
      "HP LaserJet fleet management",
      "Cost-per-page optimization",
      "HP support contracts",
      "Volume HP toner discounts",
    ],
    benefits: [
      "One team for every HP office printer",
      "Lower HP printing costs with smarter supplies",
      "Predictable monthly HP support coverage",
      "Usage reporting across your HP fleet",
    ],
    process: [
      "Audit your current HP printer fleet",
      "Recommend HP models, contracts, and supply plans",
      "Roll out HP installation and support coverage",
      "Review HP fleet performance each quarter",
    ],
  },
  "remote-support": {
    slug: "remote-support",
    title: "HP Remote Printer Support",
    icon: "fa-headset",
    short:
      "Remote HP printer help for offline devices, driver errors, HP Smart issues, and software troubleshooting—often without a visit.",
    description:
      "Remote HP printer support for offline printers, driver errors, wireless issues, and HP Smart troubleshooting with fast response.",
    features: [
      "Remote HP diagnostics",
      "HP driver & HP Smart fixes",
      "Offline and wireless troubleshooting",
      "Rapid remote HP support",
    ],
    benefits: [
      "Fix many HP issues without an on-site visit",
      "Guided help for HP error screens and alerts",
      "HP driver and software updates done for you",
      "Escalate to on-site HP repair when needed",
    ],
    process: [
      "Describe the HP error or share a screenshot",
      "We guide remote diagnostics for your HP printer",
      "Apply HP driver, software, or settings fixes",
      "Confirm printing—or schedule on-site HP service",
    ],
  },
};

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderAppShell({
  title,
  description,
  canonicalPath,
  ogType = "website",
  schema,
  fallbackHtml,
}) {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const pageTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;
  const schemaScript = schema
    ? `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
    : "";

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
    <meta property="og:type" content="${escapeHtml(ogType)}" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />
    <meta property="og:image" content="${escapeHtml(OG_IMAGE)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(pageTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(OG_IMAGE)}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <link href="/static/css/main.59f04214.css" rel="stylesheet" />
    ${schemaScript}
    <style>
      .seo-fallback { max-width: 860px; margin: 5rem auto 2rem; padding: 0 1rem; font-family: system-ui, sans-serif; line-height: 1.6; }
      .seo-fallback h1 { font-size: 1.75rem; margin-bottom: 0.75rem; }
      .seo-fallback h2 { font-size: 1.25rem; margin-top: 1.5rem; }
      .seo-fallback p { margin-bottom: 1rem; }
      .seo-fallback ul { padding-left: 1.25rem; margin-bottom: 1rem; }
      .seo-fallback li { margin-bottom: 0.5rem; }
      .seo-fallback a { color: #4c63d2; }
    </style>
  </head>
  <body>
    <noscript><main class="seo-fallback">${fallbackHtml}</main></noscript>
    <div id="root"><main class="seo-fallback" aria-hidden="true">${fallbackHtml}</main></div>
    <script defer src="/static/js/main.a94053a2.js"></script>
  </body>
</html>`;
}

function renderServiceFallback(service) {
  const features = service.features
    .map((f) => `<li>${escapeHtml(f)}</li>`)
    .join("");
  const benefits = service.benefits
    .map((b) => `<li>${escapeHtml(b)}</li>`)
    .join("");
  return `
    <h1>${escapeHtml(service.title)}</h1>
    <p>${escapeHtml(service.short)}</p>
    <h2>What's included</h2>
    <ul>${features}</ul>
    <h2>Why choose this service</h2>
    <ul>${benefits}</ul>
    <p>Call <a href="tel:+17864002878">+1-786-400-2878</a> · <a href="${SITE_URL}/services">All services</a></p>`;
}

function getServicePage(slug) {
  const service = SERVICES[slug];
  if (!service) return null;
  return {
    title: service.title,
    description: service.description,
    canonicalPath: `/services/${service.slug}`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "LocalBusiness",
        name: SITE_NAME,
        url: SITE_URL,
      },
      areaServed: "United States",
      url: `${SITE_URL}/services/${service.slug}`,
      brand: {
        "@type": "Brand",
        name: "HP",
      },
    },
    fallbackHtml: renderServiceFallback(service),
  };
}

function buildBundleServiceData() {
  const data = {};
  for (const [slug, svc] of Object.entries(SERVICES)) {
    const included = svc.features
      .map(
        (item) =>
          `<li class="mb-2"><i class="fas fa-check text-success me-2"></i>${item}</li>`
      )
      .join("");
    const why = svc.benefits
      .map(
        (item) =>
          `<li class="mb-2"><i class="fas fa-star text-warning me-2"></i>${item}</li>`
      )
      .join("");
    const steps = svc.process
      .map((item) => `<li class="mb-2">${item}</li>`)
      .join("");
    data[slug] = {
      title: svc.title,
      icon: svc.icon,
      short: svc.short,
      html: `<div class="row g-4"><div class="col-lg-4"><div class="card border-0 shadow-sm h-100"><div class="card-body p-4"><h3 class="fw-bold mb-3">What's included</h3><ul class="list-unstyled mb-0">${included}</ul></div></div></div><div class="col-lg-4"><div class="card border-0 shadow-sm h-100"><div class="card-body p-4"><h3 class="fw-bold mb-3">Why choose us</h3><ul class="list-unstyled mb-0">${why}</ul></div></div></div><div class="col-lg-4"><div class="card border-0 shadow-sm h-100"><div class="card-body p-4"><h3 class="fw-bold mb-3">How it works</h3><ol class="ps-3 mb-0">${steps}</ol></div></div></div></div>`,
    };
  }
  return data;
}

const {
  getAllPosts,
  getPostBySlug,
  formatDisplayDate,
} = require("./blog-data");

function getBlogIndexPage() {
  const posts = getAllPosts();
  const list = posts
    .map(
      (p) => `<li style="margin-bottom:1.25rem">
        <a href="${SITE_URL}/blog/${escapeHtml(p.slug)}"><strong>${escapeHtml(p.title)}</strong></a>
        <div style="color:#666;font-size:0.9rem">${escapeHtml(formatDisplayDate(p.date))} · ${escapeHtml(p.category)}</div>
        <p>${escapeHtml(p.excerpt)}</p>
      </li>`
    )
    .join("");

  return {
    title: "HP Printer Tips & Guides",
    description:
      "HP printer troubleshooting guides and setup tips for LaserJet, OfficeJet, and DeskJet—offline fixes, paper jams, drivers, and wireless setup.",
    canonicalPath: "/blog",
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "SmartPrint Solutions HP Printer Blog",
      description:
        "Tips and guides for HP printer repair, setup, and troubleshooting.",
      url: `${SITE_URL}/blog`,
      publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    },
    fallbackHtml: `
      <h1>HP Printer Tips &amp; Guides</h1>
      <p>Practical Hewlett Packard printer help for homes and offices.</p>
      <ul style="list-style:none;padding:0">${list}</ul>`,
  };
}

function getBlogPostPage(slug) {
  const post = getPostBySlug(slug);
  if (!post) return null;
  return {
    title: post.title,
    description: post.description,
    canonicalPath: `/blog/${post.slug}`,
    ogType: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: { "@type": "Organization", name: SITE_NAME },
      publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      articleSection: post.category,
    },
    fallbackHtml: `
      <p><a href="${SITE_URL}/blog">← Back to blog</a></p>
      <p style="color:#666">${escapeHtml(formatDisplayDate(post.date))} · ${escapeHtml(post.category)}</p>
      <h1>${escapeHtml(post.title)}</h1>
      <p><em>${escapeHtml(post.excerpt)}</em></p>
      ${post.content}
      <p><strong>Need HP printer help now?</strong> Call <a href="tel:+17864002878">+1-786-400-2878</a>.</p>`,
  };
}

function buildBundleBlogData() {
  return getAllPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    dateLabel: formatDisplayDate(p.date),
    category: p.category,
    excerpt: p.excerpt,
    content: p.content.replace(/\s+/g, " ").trim(),
  }));
}

module.exports = {
  SITE_URL,
  SITE_NAME,
  SERVICES,
  escapeHtml,
  renderAppShell,
  getServicePage,
  buildBundleServiceData,
  getBlogIndexPage,
  getBlogPostPage,
  buildBundleBlogData,
};
