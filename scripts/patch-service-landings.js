const fs = require("fs");
const path = require("path");

const bundlePath = path.join(__dirname, "../static/js/main.a94053a2.js");
let s = fs.readFileSync(bundlePath, "utf8");

if (s.includes("SERVICE_LANDING_PAGES_V1")) {
  console.log("Already patched");
  process.exit(0);
}

const services = {
  "printer-repair": {
    title: "Printer Repair",
    icon: "fa-wrench",
    short:
      "Professional repair services for all printer brands and models. Our certified technicians diagnose and fix issues quickly and efficiently.",
    included: [
      "All major brands supported",
      "Same-day service available",
      "Warranty on all repairs",
      "Free diagnostic",
    ],
    why: [
      "Fast turnaround so your office keeps printing",
      "Certified technicians for HP LaserJet, OfficeJet, and DeskJet",
      "Transparent pricing before work begins",
      "Parts and labor warranty on completed repairs",
    ],
    steps: [
      "Tell us the brand, model, and error symptoms",
      "We diagnose the fault on-site or remotely",
      "Approve the quote and we complete the repair",
      "Test print and confirm everything works",
    ],
  },
  maintenance: {
    title: "Printer Maintenance",
    icon: "fa-cogs",
    short:
      "Regular maintenance services to keep your printers running at peak performance and prevent costly breakdowns.",
    included: [
      "Preventive maintenance",
      "Cleaning and calibration",
      "Performance optimization",
      "Maintenance contracts",
    ],
    why: [
      "Fewer unexpected breakdowns",
      "Better print quality and reliability",
      "Longer printer lifespan",
      "Priority scheduling with maintenance contracts",
    ],
    steps: [
      "Choose a one-time visit or recurring plan",
      "We inspect, clean, and calibrate your devices",
      "Replace worn consumables as needed",
      "Deliver a simple health report for your fleet",
    ],
  },
  "supply-sales": {
    title: "Supply Sales",
    icon: "fa-shopping-cart",
    short:
      "High-quality printer supplies including toner, ink cartridges, paper, and other consumables at competitive prices.",
    included: [
      "Original and compatible supplies",
      "Bulk discounts available",
      "Fast delivery",
      "Supply management programs",
    ],
    why: [
      "Competitive pricing for businesses and homes",
      "Genuine and high-quality compatible options",
      "Auto-reorder programs to avoid stockouts",
      "Help matching the right cartridge to your model",
    ],
    steps: [
      "Share your printer model or cartridge number",
      "We recommend original or compatible options",
      "Order online or by phone",
      "Receive fast delivery or schedule drop-off",
    ],
  },
  installation: {
    title: "Printer Installation",
    icon: "fa-tools",
    short:
      "Professional installation and setup services for new printers, including network configuration and driver installation.",
    included: [
      "New printer setup",
      "Network configuration",
      "Driver installation",
      "User training",
    ],
    why: [
      "Printers working the first day you unbox them",
      "Correct wireless, USB, and network setup",
      "Drivers installed for Windows and macOS",
      "Short walkthrough so your team can print confidently",
    ],
    steps: [
      "Schedule installation for your location",
      "We unpack, place, and connect the printer",
      "Configure network sharing and drivers",
      "Test print and train key users",
    ],
  },
  "business-solutions": {
    title: "Business Solutions",
    icon: "fa-building",
    short:
      "Comprehensive printing solutions for businesses, including fleet management, cost optimization, and support contracts.",
    included: [
      "Fleet management",
      "Cost optimization",
      "Support contracts",
      "Volume discounts",
    ],
    why: [
      "Centralized support for every office printer",
      "Lower cost-per-page with smarter supply plans",
      "Predictable monthly support contracts",
      "Reporting that shows usage and savings",
    ],
    steps: [
      "Audit your current printer fleet",
      "Recommend models, contracts, and supply plans",
      "Roll out installation and support coverage",
      "Review performance and optimize quarterly",
    ],
  },
  "remote-support": {
    title: "Remote Support",
    icon: "fa-headset",
    short:
      "Remote diagnostic and support services to quickly resolve printer issues without the need for on-site visits.",
    included: [
      "Remote diagnostics",
      "Software troubleshooting",
      "Driver updates",
      "24/7 support",
    ],
    why: [
      "Faster fixes without waiting for a technician visit",
      "Secure remote diagnostics when appropriate",
      "Driver and software updates done for you",
      "Escalation to on-site service when hardware needs repair",
    ],
    steps: [
      "Describe the error or share a screenshot",
      "We connect or guide you through diagnostics",
      "Apply software, driver, or settings fixes",
      "Confirm printing works—or schedule on-site help",
    ],
  },
};

function listHtml(items, iconClass) {
  return items
    .map(
      (item) =>
        `<li class="mb-2"><i class="fas ${iconClass} me-2"></i>${item}</li>`
    )
    .join("");
}

function stepsHtml(items) {
  return items.map((item) => `<li class="mb-2">${item}</li>`).join("");
}

function bodyHtml(svc) {
  return `<div class="row g-4">
<div class="col-lg-4"><div class="card border-0 shadow-sm h-100"><div class="card-body p-4"><h3 class="fw-bold mb-3">What's included</h3><ul class="list-unstyled mb-0">${listHtml(svc.included, "fa-check text-success")}</ul></div></div></div>
<div class="col-lg-4"><div class="card border-0 shadow-sm h-100"><div class="card-body p-4"><h3 class="fw-bold mb-3">Why choose us</h3><ul class="list-unstyled mb-0">${listHtml(svc.why, "fa-star text-warning")}</ul></div></div></div>
<div class="col-lg-4"><div class="card border-0 shadow-sm h-100"><div class="card-body p-4"><h3 class="fw-bold mb-3">How it works</h3><ol class="ps-3 mb-0">${stepsHtml(svc.steps)}</ol></div></div></div>
</div>`;
}

const dataObj = {};
for (const [slug, svc] of Object.entries(services)) {
  dataObj[slug] = {
    title: svc.title,
    icon: svc.icon,
    short: svc.short,
    html: bodyHtml(svc),
  };
}

const dataJson = JSON.stringify(dataObj);

const landingComponent = `,SpLp=()=>{const{slug:e}=function(){let{matches:e}=s.useContext($),t=e[e.length-1];return t?t.params:{}}(),t=${dataJson}[e];return t?(0,Ag.jsxs)("div",{children:[(0,Ag.jsx)("section",{className:"py-5 bg-primary text-white",children:(0,Ag.jsx)("div",{className:"container",children:(0,Ag.jsx)("div",{className:"row",children:(0,Ag.jsxs)("div",{className:"col-lg-8 mx-auto text-center",children:[(0,Ag.jsx)("div",{className:"mb-3",children:(0,Ag.jsx)("i",{className:"fas "+t.icon,style:{fontSize:"3rem"}})}),(0,Ag.jsx)("h1",{className:"display-4 fw-bold",children:t.title}),(0,Ag.jsx)("p",{className:"lead mb-0",children:t.short}),(0,Ag.jsx)("p",{className:"mt-3 mb-0",children:(0,Ag.jsx)(Ce,{to:"/services",className:"text-white text-decoration-underline",children:"Back to all services"})})]})})})}),(0,Ag.jsx)("section",{className:"py-5",children:(0,Ag.jsx)("div",{className:"container",dangerouslySetInnerHTML:{__html:t.html}})}),(0,Ag.jsx)("section",{className:"py-5 bg-light",children:(0,Ag.jsx)("div",{className:"container",children:(0,Ag.jsxs)("div",{className:"row align-items-center",children:[(0,Ag.jsxs)("div",{className:"col-lg-8",children:[(0,Ag.jsx)("h2",{className:"fw-bold mb-2",children:"Ready to get started?"}),(0,Ag.jsx)("p",{className:"text-muted mb-0",children:"Talk with our team about "+t.title.toLowerCase()+" for your home or business printers."})]}),(0,Ag.jsx)("div",{className:"col-lg-4 text-lg-end mt-3 mt-lg-0",children:(0,Ag.jsxs)("div",{className:"d-flex flex-wrap gap-2 justify-content-lg-end",children:[(0,Ag.jsx)(Ce,{to:"/contact",className:"btn btn-primary btn-lg",children:"Contact Us"}),(0,Ag.jsx)("a",{href:"tel:+17864002878",className:"btn btn-outline-primary btn-lg",children:"Call Now"})]})})]})})})]}):(0,Ag.jsxs)("div",{className:"container py-5",children:[(0,Ag.jsx)("h1",{children:"Service not found"}),(0,Ag.jsx)("p",{children:"This service page does not exist."}),(0,Ag.jsx)(Ce,{to:"/services",children:"View all services"})]})}/*SERVICE_LANDING_PAGES_V1*/`;

const vgMarker =
  ',Vg=()=>(0,Ag.jsxs)("div",{children:[(0,Ag.jsx)("section",{className:"py-5 bg-primary text-white"';
if (!s.includes(vgMarker)) {
  console.error("Vg marker not found");
  process.exit(1);
}
s = s.replace(vgMarker, landingComponent + vgMarker);

const routeOld =
  '(0,Ag.jsx)(ve,{path:"/services",element:(0,Ag.jsx)(Vg,{})})';
const routeNew =
  '(0,Ag.jsx)(ve,{path:"/services",element:(0,Ag.jsx)(Vg,{})}),(0,Ag.jsx)(ve,{path:"/services/:slug",element:(0,Ag.jsx)(SpLp,{})})';
if (!s.includes(routeOld)) {
  console.error("services route not found");
  process.exit(1);
}
s = s.replace(routeOld, routeNew);

const learnMoreInserts = [
  [
    '"Free diagnostic"]})]})]})})}),(0,Ag.jsx)("div",{className:"col-lg-4 col-md-6"',
    '"Free diagnostic"]}),(0,Ag.jsx)(Ce,{to:"/services/printer-repair",className:"btn btn-outline-primary btn-sm mt-3",children:"Learn More"})]})]})})}),(0,Ag.jsx)("div",{className:"col-lg-4 col-md-6"',
  ],
  [
    '"Maintenance contracts"]})]})]})})}),(0,Ag.jsx)("div",{className:"col-lg-4 col-md-6"',
    '"Maintenance contracts"]}),(0,Ag.jsx)(Ce,{to:"/services/maintenance",className:"btn btn-outline-primary btn-sm mt-3",children:"Learn More"})]})]})})}),(0,Ag.jsx)("div",{className:"col-lg-4 col-md-6"',
  ],
  [
    '"Supply management programs"]})]})]})})}),(0,Ag.jsx)("div",{className:"col-lg-4 col-md-6"',
    '"Supply management programs"]}),(0,Ag.jsx)(Ce,{to:"/services/supply-sales",className:"btn btn-outline-primary btn-sm mt-3",children:"Learn More"})]})]})})}),(0,Ag.jsx)("div",{className:"col-lg-4 col-md-6"',
  ],
  [
    '"User training"]})]})]})})}),(0,Ag.jsx)("div",{className:"col-lg-4 col-md-6"',
    '"User training"]}),(0,Ag.jsx)(Ce,{to:"/services/installation",className:"btn btn-outline-primary btn-sm mt-3",children:"Learn More"})]})]})})}),(0,Ag.jsx)("div",{className:"col-lg-4 col-md-6"',
  ],
  [
    '"Volume discounts"]})]})]})})}),(0,Ag.jsx)("div",{className:"col-lg-4 col-md-6"',
    '"Volume discounts"]}),(0,Ag.jsx)(Ce,{to:"/services/business-solutions",className:"btn btn-outline-primary btn-sm mt-3",children:"Learn More"})]})]})})}),(0,Ag.jsx)("div",{className:"col-lg-4 col-md-6"',
  ],
  [
    '"24/7 support"]})]})]})})})]})})}),(0,Ag.jsx)("section",{className:"py-5 bg-light"',
    '"24/7 support"]}),(0,Ag.jsx)(Ce,{to:"/services/remote-support",className:"btn btn-outline-primary btn-sm mt-3",children:"Learn More"})]})]})})})]})})}),(0,Ag.jsx)("section",{className:"py-5 bg-light"',
  ],
];

for (const [find, replace] of learnMoreInserts) {
  if (!s.includes(find)) {
    console.error("Learn More anchor not found:", find.slice(0, 60));
    process.exit(1);
  }
  s = s.replace(find, replace);
}

fs.writeFileSync(bundlePath, s);

try {
  new Function(s);
  console.log("bundle parses OK");
} catch (e) {
  console.error("PARSE FAIL", e.message);
  process.exit(1);
}

console.log("Learn More count:", (s.match(/Learn More/g) || []).length);
console.log("Has route:", s.includes('path:"/services/:slug"'));
