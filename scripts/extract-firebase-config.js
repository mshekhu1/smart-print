const fs = require("fs");
const path = require("path");

const bundle = fs.readFileSync(
  path.join(__dirname, "../static/js/main.a94053a2.js"),
  "utf8"
);

const keys = [
  "apiKey",
  "authDomain",
  "projectId",
  "storageBucket",
  "messagingSenderId",
  "appId",
  "measurementId",
];

for (const key of keys) {
  const patterns = [
    new RegExp(`${key}:"([^"]+)"`),
    new RegExp(`${key}:'([^']+)'`),
  ];
  for (const re of patterns) {
    const m = bundle.match(re);
    if (m) {
      console.log(`${key}: ${m[1]}`);
      break;
    }
  }
}

const ai = [...bundle.matchAll(/AIza[A-Za-z0-9_-]{20,}/g)].map((m) => m[0]);
console.log("apiKeys found:", [...new Set(ai)].join(", "));

const firebaseStrings = [
  ...bundle.matchAll(
    /[a-zA-Z0-9._-]*(?:firebaseapp\.com|firebasestorage\.app|googleapis\.com)[a-zA-Z0-9._/-]*/g
  ),
].map((m) => m[0]);
console.log("firebase urls:", [...new Set(firebaseStrings)].slice(0, 20).join("\n"));

const reactEnv = [...bundle.matchAll(/REACT_APP_[A-Z0-9_]+/g)].map((m) => m[0]);
console.log("REACT_APP vars:", [...new Set(reactEnv)].join(", "));

const names = [
  "questions",
  "answers",
  "posts",
  "users",
  "profiles",
  "forumPosts",
  "forum",
  "comments",
  "replies",
];
for (const name of names) {
  const re = new RegExp(`"${name}"`, "g");
  const count = (bundle.match(re) || []).length;
  if (count) console.log(`"${name}" occurrences:`, count);
}
