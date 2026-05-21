const fs = require("fs");
const bundle = fs.readFileSync(
  require("path").join(__dirname, "../static/js/main.a94053a2.js"),
  "utf8"
);

const idx = bundle.indexOf('Wg="answers"');
console.log(bundle.slice(idx, idx + 2500).replace(/\s+/g, " "));
