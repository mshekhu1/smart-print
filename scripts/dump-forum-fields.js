const fs = require("fs");
const path = require("path");

const bundle = fs.readFileSync(
  path.join(__dirname, "../static/js/main.a94053a2.js"),
  "utf8"
);

const markers = [
  "Create answer",
  "add answer",
  "answer error",
  "authorId:e.authorId",
  "questionId",
  "upvotes",
];

for (const m of markers) {
  const idx = bundle.indexOf(m);
  if (idx >= 0) {
    console.log(`\n=== ${m} ===`);
    console.log(bundle.slice(idx, idx + 400).replace(/\s+/g, " "));
  }
}
