const fs = require("fs");
const path = require("path");
const { buildBundleBlogData } = require("../lib/site-seo");

const bundlePath = path.join(__dirname, "../static/js/main.a94053a2.js");
let s = fs.readFileSync(bundlePath, "utf8");

if (s.includes("BLOG_PAGES_V1")) {
  console.log("Blog already patched");
  process.exit(0);
}

const posts = buildBundleBlogData();
const postsJson = JSON.stringify(posts);

const blogComponents = `,Blist=()=>{const e=${postsJson};return(0,Ag.jsxs)("div",{children:[(0,Ag.jsx)("section",{className:"py-5 bg-primary text-white",children:(0,Ag.jsx)("div",{className:"container",children:(0,Ag.jsx)("div",{className:"row",children:(0,Ag.jsxs)("div",{className:"col-lg-8 mx-auto text-center",children:[(0,Ag.jsx)("h1",{className:"display-4 fw-bold",children:"HP Printer Tips & Guides"}),(0,Ag.jsx)("p",{className:"lead mb-0",children:"Practical Hewlett Packard help for LaserJet, OfficeJet, and DeskJet setup and troubleshooting"})]})})})}),(0,Ag.jsx)("section",{className:"py-5",children:(0,Ag.jsx)("div",{className:"container",children:(0,Ag.jsx)("div",{className:"row g-4",children:e.map(function(t){return(0,Ag.jsx)("div",{className:"col-lg-6",children:(0,Ag.jsxs)("div",{className:"card border-0 shadow-sm h-100",children:[(0,Ag.jsxs)("div",{className:"card-body p-4",children:[(0,Ag.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-2 text-muted small",children:[(0,Ag.jsx)("span",{children:t.category}),(0,Ag.jsx)("span",{children:t.dateLabel})]}),(0,Ag.jsx)("h2",{className:"h4 fw-bold",children:t.title}),(0,Ag.jsx)("p",{className:"text-muted",children:t.excerpt}),(0,Ag.jsx)(Ce,{to:"/blog/"+t.slug,className:"btn btn-outline-primary btn-sm",children:"Read article"})]})]})},t.slug)})})})})]})}
,Blp=()=>{const{slug:e}=function(){let{matches:e}=s.useContext($),t=e[e.length-1];return t?t.params:{}}(),t=${postsJson}.find(function(t){return t.slug===e});return t?(0,Ag.jsxs)("div",{children:[(0,Ag.jsx)("section",{className:"py-5 bg-primary text-white",children:(0,Ag.jsx)("div",{className:"container",children:(0,Ag.jsxs)("div",{className:"col-lg-8 mx-auto",children:[(0,Ag.jsx)("p",{className:"mb-2",children:(0,Ag.jsx)(Ce,{to:"/blog",className:"text-white text-decoration-underline",children:"Back to blog"})}),(0,Ag.jsx)("p",{className:"mb-2 opacity-75",children:t.dateLabel+" · "+t.category}),(0,Ag.jsx)("h1",{className:"display-5 fw-bold mb-0",children:t.title})]})})}),(0,Ag.jsx)("section",{className:"py-5",children:(0,Ag.jsx)("div",{className:"container",children:(0,Ag.jsxs)("div",{className:"row justify-content-center",children:[(0,Ag.jsxs)("div",{className:"col-lg-8",children:[(0,Ag.jsx)("p",{className:"lead text-muted",children:t.excerpt}),(0,Ag.jsx)("div",{className:"blog-content",dangerouslySetInnerHTML:{__html:t.content}}),(0,Ag.jsxs)("div",{className:"mt-5 p-4 bg-light rounded",children:[(0,Ag.jsx)("h3",{className:"h5 fw-bold",children:"Need HP printer help now?"}),(0,Ag.jsx)("p",{className:"text-muted mb-3",children:"Our technicians fix offline HP printers, paper jams, driver issues, and wireless setup."}),(0,Ag.jsxs)("div",{className:"d-flex flex-wrap gap-2",children:[(0,Ag.jsx)(Ce,{to:"/contact",className:"btn btn-primary",children:"Contact Us"}),(0,Ag.jsx)(Ce,{to:"/services",className:"btn btn-outline-primary",children:"View HP Services"})]})]})]})]})})})]}):(0,Ag.jsxs)("div",{className:"container py-5",children:[(0,Ag.jsx)("h1",{children:"Post not found"}),(0,Ag.jsx)(Ce,{to:"/blog",children:"Back to blog"})]})}/*BLOG_PAGES_V1*/`;

const insertBefore =
  ',SpLp=()=>{const{slug:e}=function(){let{matches:e}=s.useContext($),t=e[e.length-1];return t?t.params:{}}()';
if (!s.includes(insertBefore)) {
  console.error("SpLp insert point not found");
  process.exit(1);
}
s = s.replace(insertBefore, blogComponents + insertBefore);

const routeOld =
  '(0,Ag.jsx)(ve,{path:"/services/:slug",element:(0,Ag.jsx)(SpLp,{})})';
const routeNew =
  '(0,Ag.jsx)(ve,{path:"/services/:slug",element:(0,Ag.jsx)(SpLp,{})}),(0,Ag.jsx)(ve,{path:"/blog",element:(0,Ag.jsx)(Blist,{})}),(0,Ag.jsx)(ve,{path:"/blog/:slug",element:(0,Ag.jsx)(Blp,{})})';
if (!s.includes(routeOld)) {
  console.error("services/:slug route not found");
  process.exit(1);
}
s = s.replace(routeOld, routeNew);

// Nav: add Blog after Services (appears in desktop + possibly mobile - replace_all if duplicated)
const navFrom =
  '(0,Ag.jsx)(Ce,{className:"nav-link ".concat(f("/services")),to:"/services",onClick:h,children:"Services"})}),(0,Ag.jsx)("li",{className:"nav-item",children:(0,Ag.jsx)(Ce,{className:"nav-link ".concat(f("/forum")),to:"/forum",onClick:h,children:"Forum"})})';
const navTo =
  '(0,Ag.jsx)(Ce,{className:"nav-link ".concat(f("/services")),to:"/services",onClick:h,children:"Services"})}),(0,Ag.jsx)("li",{className:"nav-item",children:(0,Ag.jsx)(Ce,{className:"nav-link ".concat(f("/blog")),to:"/blog",onClick:h,children:"Blog"})}),(0,Ag.jsx)("li",{className:"nav-item",children:(0,Ag.jsx)(Ce,{className:"nav-link ".concat(f("/forum")),to:"/forum",onClick:h,children:"Forum"})})';

if (!s.includes(navFrom)) {
  console.error("Nav Services→Forum pattern not found");
  process.exit(1);
}
s = s.split(navFrom).join(navTo);

// Footer quick links if present
const footerFrom = 'children:"Forum"})})]})]}),(0,Ag.jsxs)("div",{className:"col-lg-3 col-md-6 mb-4",children:[(0,Ag.jsx)("h6",{className:"text-uppercase fw-bold mb-3",children:"Contact Info"}';
// try a simpler footer services list addition
const footerServices =
  'children:"Services"}),(0,Ag.jsx)("li",{className:"mb-2",children:(0,Ag.jsx)(Ce,{to:"/forum"';
const footerServicesNew =
  'children:"Services"}),(0,Ag.jsx)("li",{className:"mb-2",children:(0,Ag.jsx)(Ce,{to:"/blog",className:"text-light text-decoration-none",children:"Blog"})}),(0,Ag.jsx)("li",{className:"mb-2",children:(0,Ag.jsx)(Ce,{to:"/forum"';

// Inspect footer separately - optional
if (s.includes('to:"/forum",className:"text-light text-decoration-none",children:"Forum"')) {
  const fFrom =
    '(0,Ag.jsx)(Ce,{to:"/services",className:"text-light text-decoration-none",children:"Services"})})}),(0,Ag.jsx)("li",{className:"mb-2",children:(0,Ag.jsx)(Ce,{to:"/forum",className:"text-light text-decoration-none",children:"Forum"})})';
  const fTo =
    '(0,Ag.jsx)(Ce,{to:"/services",className:"text-light text-decoration-none",children:"Services"})})}),(0,Ag.jsx)("li",{className:"mb-2",children:(0,Ag.jsx)(Ce,{to:"/blog",className:"text-light text-decoration-none",children:"Blog"})})}),(0,Ag.jsx)("li",{className:"mb-2",children:(0,Ag.jsx)(Ce,{to:"/forum",className:"text-light text-decoration-none",children:"Forum"})})';
  if (s.includes(fFrom)) {
    s = s.replace(fFrom, fTo);
    console.log("Footer blog link added");
  } else {
    console.log("Footer pattern skipped");
  }
}

fs.writeFileSync(bundlePath, s);

try {
  new Function(s);
  console.log("bundle parses OK");
} catch (e) {
  console.error("PARSE FAIL", e.message);
  process.exit(1);
}

console.log("posts:", posts.length);
console.log("nav blog:", s.includes('to:"/blog",onClick:h,children:"Blog"') || s.includes('children:"Blog"'));
console.log("routes:", s.includes('path:"/blog"') && s.includes('path:"/blog/:slug"'));
