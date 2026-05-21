const fs = require("fs");
const path = require("path");

const bundle = fs.readFileSync(
  path.join(__dirname, "../static/js/main.a94053a2.js"),
  "utf8"
);

for (const term of ["questions", "answers", "users", "authorId", "userId", "author"]) {
  let idx = 0;
  let n = 0;
  while (n < 5) {
    idx = bundle.indexOf(`"${term}"`, idx);
    if (idx === -1) break;
    console.log(`\n--- ${term} @ ${idx} ---`);
    console.log(bundle.slice(Math.max(0, idx - 80), idx + 120).replace(/\s+/g, " "));
    idx += term.length + 2;
    n++;
  }
}
