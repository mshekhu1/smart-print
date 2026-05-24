const s = require("fs").readFileSync(
  require("path").join(__dirname, "../static/js/main.a94053a2.js"),
  "utf8"
);

const terms = [
  "forum/question",
  "document.title",
  "Helmet",
  "QAPage",
  "schema.org",
  "meta name",
  "useParams",
  "react-helmet",
];

for (const t of terms) {
  let count = 0;
  let i = 0;
  while ((i = s.indexOf(t, i)) !== -1) {
    count++;
    i += t.length;
  }
  console.log(`${t}: ${count}`);
}

const routeIdx = s.indexOf("forum/question");
if (routeIdx >= 0) {
  console.log("\nroute context:", s.slice(routeIdx - 100, routeIdx + 200));
}
