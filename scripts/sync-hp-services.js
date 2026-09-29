const fs = require("fs");
const path = require("path");
const { SERVICES, buildBundleServiceData } = require("../lib/site-seo");

const bundlePath = path.join(__dirname, "../static/js/main.a94053a2.js");
let s = fs.readFileSync(bundlePath, "utf8");

const startMarker =
  "SpLp=()=>{const{slug:e}=function(){let{matches:e}=s.useContext($),t=e[e.length-1];return t?t.params:{}}(),t=";
const start = s.indexOf(startMarker);
if (start < 0) {
  console.error("SpLp data start not found");
  process.exit(1);
}
const jsonStart = start + startMarker.length;
let depth = 0;
let jsonEnd = -1;
for (let i = jsonStart; i < s.length; i++) {
  if (s[i] === "{") depth++;
  else if (s[i] === "}") {
    depth--;
    if (depth === 0) {
      jsonEnd = i + 1;
      break;
    }
  }
}
s =
  s.slice(0, jsonStart) +
  JSON.stringify(buildBundleServiceData()) +
  s.slice(jsonEnd);

const cardUpdates = [
  [
    'children:"Our Services"}),(0,Ag.jsx)("p",{className:"lead",children:"Comprehensive printer support services to meet all your printing needs"}',
    'children:"HP Printer Services"}),(0,Ag.jsx)("p",{className:"lead",children:"Hewlett Packard printer repair, setup, maintenance, supplies, and remote support for LaserJet, OfficeJet, and DeskJet"}',
  ],
  [
    'children:"Printer Repair"}),(0,Ag.jsx)("p",{className:"card-text text-muted",children:"Professional repair services for all printer brands and models. Our certified technicians diagnose and fix issues quickly and efficiently."}',
    'children:"HP Printer Repair"}),(0,Ag.jsx)("p",{className:"card-text text-muted",children:"Fast HP LaserJet, OfficeJet, and DeskJet repair for error codes, paper jams, offline printers, and hardware faults."}',
  ],
  [
    '),"All major brands supported"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Same-day service available"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Warranty on all repairs"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Free diagnostic"]}),(0,Ag.jsx)(Ce,{to:"/services/printer-repair"',
    '),"HP LaserJet, OfficeJet & DeskJet"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"HP error & offline fixes"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Same-day HP service"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Free HP diagnostic"]}),(0,Ag.jsx)(Ce,{to:"/services/printer-repair"',
  ],
  [
    'children:"Maintenance"}),(0,Ag.jsx)("p",{className:"card-text text-muted",children:"Regular maintenance services to keep your printers running at peak performance and prevent costly breakdowns."}',
    'children:"HP Printer Maintenance"}),(0,Ag.jsx)("p",{className:"card-text text-muted",children:"Preventive HP maintenance for LaserJet and OfficeJet printers to protect print quality and avoid unexpected downtime."}',
  ],
  [
    '),"Preventive maintenance"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Cleaning and calibration"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Performance optimization"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Maintenance contracts"]}),(0,Ag.jsx)(Ce,{to:"/services/maintenance"',
    '),"HP preventive maintenance"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"LaserJet & OfficeJet cleaning"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"HP print quality calibration"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"HP maintenance contracts"]}),(0,Ag.jsx)(Ce,{to:"/services/maintenance"',
  ],
  [
    'children:"Supply Sales"}),(0,Ag.jsx)("p",{className:"card-text text-muted",children:"High-quality printer supplies including toner, ink cartridges, paper, and other consumables at competitive prices."}',
    'children:"HP Toner & Ink"}),(0,Ag.jsx)("p",{className:"card-text text-muted",children:"Genuine and compatible HP toner and ink for LaserJet, OfficeJet, and DeskJet—with bulk discounts and fast delivery."}',
  ],
  [
    '),"Original and compatible supplies"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Bulk discounts available"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Fast delivery"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Supply management programs"]}),(0,Ag.jsx)(Ce,{to:"/services/supply-sales"',
    '),"Original HP & compatible cartridges"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"LaserJet toner & OfficeJet ink"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Office bulk discounts"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"HP supply management"]}),(0,Ag.jsx)(Ce,{to:"/services/supply-sales"',
  ],
  [
    'children:"Installation"}),(0,Ag.jsx)("p",{className:"card-text text-muted",children:"Professional installation and setup services for new printers, including network configuration and driver installation."}',
    'children:"HP Printer Setup"}),(0,Ag.jsx)("p",{className:"card-text text-muted",children:"HP printer installation with wireless setup, HP driver / HP Smart install, network sharing, and user training."}',
  ],
  [
    '),"New printer setup"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Network configuration"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Driver installation"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"User training"]}),(0,Ag.jsx)(Ce,{to:"/services/installation"',
    '),"New HP printer setup"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"HP wireless & network setup"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"HP Smart / driver install"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"User training"]}),(0,Ag.jsx)(Ce,{to:"/services/installation"',
  ],
  [
    'children:"Business Solutions"}),(0,Ag.jsx)("p",{className:"card-text text-muted",children:"Comprehensive printing solutions for businesses, including fleet management, cost optimization, and support contracts."}',
    'children:"HP Business Solutions"}),(0,Ag.jsx)("p",{className:"card-text text-muted",children:"HP LaserJet fleet management for offices—support contracts, cost-per-page optimization, and volume toner programs."}',
  ],
  [
    '),"Fleet management"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Cost optimization"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Support contracts"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Volume discounts"]}),(0,Ag.jsx)(Ce,{to:"/services/business-solutions"',
    '),"HP LaserJet fleet management"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"HP cost-per-page optimization"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"HP support contracts"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Volume HP toner discounts"]}),(0,Ag.jsx)(Ce,{to:"/services/business-solutions"',
  ],
  [
    'children:"Remote Support"}),(0,Ag.jsx)("p",{className:"card-text text-muted",children:"Remote diagnostic and support services to quickly resolve printer issues without the need for on-site visits."}',
    'children:"HP Remote Support"}),(0,Ag.jsx)("p",{className:"card-text text-muted",children:"Remote HP help for offline printers, driver errors, HP Smart issues, and wireless problems—often without a visit."}',
  ],
  [
    '),"Remote diagnostics"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Software troubleshooting"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Driver updates"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"24/7 support"]}),(0,Ag.jsx)(Ce,{to:"/services/remote-support"',
    '),"Remote HP diagnostics"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"HP Smart & driver fixes"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Offline / wireless HP help"]}),(0,Ag.jsxs)("li",{children:[(0,Ag.jsx)("i",{className:"fas fa-check text-success me-2"}),"Rapid HP remote support"]}),(0,Ag.jsx)(Ce,{to:"/services/remote-support"',
  ],
];

for (const [from, to] of cardUpdates) {
  if (!s.includes(from)) {
    console.error("Card text not found:", from.slice(0, 90));
    process.exit(1);
  }
  s = s.replace(from, to);
}

fs.writeFileSync(bundlePath, s);

try {
  new Function(s);
  console.log("bundle parses OK");
} catch (e) {
  console.error("parse fail", e.message);
  process.exit(1);
}

for (const [slug, svc] of Object.entries(buildBundleServiceData())) {
  console.log(slug + ":", svc.title);
}
