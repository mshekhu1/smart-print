const {
  getBlogIndexPage,
  renderAppShell,
} = require("../lib/site-seo");

module.exports = async (_req, res) => {
  try {
    const page = getBlogIndexPage();
    const html = renderAppShell({
      title: page.title,
      description: page.description,
      canonicalPath: page.canonicalPath,
      schema: page.schema,
      fallbackHtml: page.fallbackHtml,
    });
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=300");
    res.status(200).send(html);
  } catch (error) {
    console.error("blog index error:", error);
    res.status(500).send("Unable to load blog.");
  }
};
