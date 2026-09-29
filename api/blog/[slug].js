const { getBlogPostPage, renderAppShell } = require("../../lib/site-seo");

module.exports = async (req, res) => {
  const slug = req.query.slug;
  const page = getBlogPostPage(slug);

  if (!page) {
    res.status(404).send("Not found");
    return;
  }

  try {
    const html = renderAppShell({
      title: page.title,
      description: page.description,
      canonicalPath: page.canonicalPath,
      ogType: page.ogType,
      schema: page.schema,
      fallbackHtml: page.fallbackHtml,
    });
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=300");
    res.status(200).send(html);
  } catch (error) {
    console.error("blog post error:", error);
    res.status(500).send("Unable to load post.");
  }
};
