const { getQuestionWithAnswers } = require("../../../lib/firestore-rest");
const {
  renderQuestionPage,
  renderNotFoundPage,
} = require("../../../lib/forum-seo");

module.exports = async (req, res) => {
  const questionId = req.query.id;
  if (!questionId) {
    res.setHeader("Cache-Control", "public, max-age=300");
    res.status(404).send(renderNotFoundPage());
    return;
  }

  try {
    const question = await getQuestionWithAnswers(questionId);
    if (!question || !question.title) {
      res.setHeader("Cache-Control", "public, max-age=300");
      res.status(404).send(renderNotFoundPage());
      return;
    }

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=300");
    res.status(200).send(renderQuestionPage(question));
  } catch (error) {
    console.error("forum question error:", error);
    res.status(500).send("Unable to load question.");
  }
};
