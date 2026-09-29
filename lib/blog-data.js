const SITE_URL = "https://smartprintingsolution.online";

const BLOG_POSTS = [
  {
    slug: "fix-hp-printer-offline",
    title: "How to Fix an HP Printer That Shows Offline",
    date: "2026-09-15",
    category: "Troubleshooting",
    excerpt:
      "Clear steps to get an HP LaserJet, OfficeJet, or DeskJet back online when Windows says the printer is offline.",
    description:
      "Fix an HP printer stuck offline. Check Wi-Fi, HP Smart, print spooler, and driver settings for LaserJet, OfficeJet, and DeskJet.",
    content: `
      <p>When your HP printer shows as offline, jobs sit in the queue and nothing prints. This is one of the most common Hewlett Packard issues on Windows and macOS.</p>
      <h2>1. Confirm power and connection</h2>
      <p>Make sure the HP printer is powered on, not in sleep error, and connected to the same Wi-Fi network as your computer. For USB models, reseat the cable and try another port.</p>
      <h2>2. Use HP Smart or the printer control panel</h2>
      <p>Open HP Smart and verify the printer status. On the control panel, run the network or wireless test. If the printer has a different IP than before, Windows may still be pointing at the old offline queue.</p>
      <h2>3. Set the HP printer as default and clear the queue</h2>
      <p>In Windows Settings → Bluetooth &amp; devices → Printers, open your HP printer, clear stuck jobs, and set it as the default. Toggle “Use Printer Offline” off if it is enabled.</p>
      <h2>4. Restart the Print Spooler</h2>
      <p>Restart the Print Spooler service, then turn the HP printer off and on. Many “offline” states clear after a fresh spooler start and a clean job queue.</p>
      <h2>5. Reinstall or update the HP driver</h2>
      <p>If the printer still shows offline, remove the device and re-add it with the current HP driver or HP Smart full feature software for your LaserJet, OfficeJet, or DeskJet model.</p>
      <p>Need hands-on help? Our team offers <a href="/services/remote-support">HP remote support</a> and on-site repair for stubborn offline errors.</p>
    `,
  },
  {
    slug: "hp-printer-paper-jam-guide",
    title: "HP Printer Paper Jam: A Practical Clearing Guide",
    date: "2026-09-18",
    category: "Maintenance",
    excerpt:
      "How to safely clear HP paper jams, find hidden scraps, and stop repeat jams on LaserJet and OfficeJet printers.",
    description:
      "Clear HP paper jams safely. Find hidden scraps, check rollers, and prevent repeat jams on HP LaserJet and OfficeJet printers.",
    content: `
      <p>Paper jams are frustrating, but forcing the sheet can damage HP pick rollers and the print path. Follow a calm, stepwise approach.</p>
      <h2>Power down and open access doors</h2>
      <p>Turn the HP printer off. Open the main cartridge door, rear access (if available), and input tray. Look for paper in the duplex path on models that print on both sides.</p>
      <h2>Pull in the direction of the paper path</h2>
      <p>Gently pull jammed paper in the direction it normally travels. Avoid yanking sideways. If the sheet tears, inspect by flashlight for leftover scraps near the fuser or rollers.</p>
      <h2>Check trays and paper quality</h2>
      <p>Use paper that matches HP’s supported weight. Overfilled trays, curled sheets, and damp paper cause repeat LaserJet and OfficeJet jams.</p>
      <h2>Clean pick rollers</h2>
      <p>Dusty or glazed rollers fail to grab paper cleanly. Wipe accessible rollers with a lint-free cloth slightly dampened with water, then let them dry completely.</p>
      <h2>Run an HP cleaning or alignment page</h2>
      <p>After clearing the jam, print a configuration or test page. If jam messages continue with no paper visible, a sensor flag may be stuck—time for professional HP service.</p>
      <p>For recurring jams, schedule <a href="/services/maintenance">HP printer maintenance</a> so rollers and sensors get a full inspection.</p>
    `,
  },
  {
    slug: "install-hp-printer-drivers-windows",
    title: "How to Install HP Printer Drivers on Windows",
    date: "2026-09-22",
    category: "Setup",
    excerpt:
      "The cleanest way to install HP drivers on Windows 10 and 11 using HP Smart or the full feature software for your model.",
    description:
      "Install HP printer drivers on Windows 10 and 11. Use HP Smart or full feature software for LaserJet, OfficeJet, and DeskJet setup.",
    content: `
      <p>Wrong or incomplete drivers cause “driver unavailable,” missing scan buttons, and wireless HP printers that never finish setup. Install software that matches your exact model.</p>
      <h2>Find your HP model name</h2>
      <p>Read the model from the front badge or configuration page (for example, HP LaserJet Pro M404 or HP OfficeJet Pro 9025). You need the precise name for the correct package.</p>
      <h2>Prefer HP Smart for most home and small office printers</h2>
      <p>HP Smart handles many DeskJet and OfficeJet models, including wireless setup and basic scanning. Install it from Microsoft Store or HP’s site, then add your printer.</p>
      <h2>Use full feature software when you need advanced options</h2>
      <p>Business LaserJet fleets often need the full feature driver for tray selection, secure print, and device toolbox utilities. Download the package for your Windows version (64-bit is typical).</p>
      <h2>Remove old queues first</h2>
      <p>Delete duplicate HP printers from Windows Settings before reinstalling. Leftover offline queues confuse the new driver install.</p>
      <h2>Test print and scan</h2>
      <p>After install, print a test page and, if applicable, run a scan from HP Smart. Update firmware when HP Smart offers it for stability fixes.</p>
      <p>Prefer a technician to handle setup? See our <a href="/services/installation">HP printer setup &amp; installation</a> service.</p>
    `,
  },
  {
    slug: "hp-printer-not-printing-after-toner",
    title: "HP Printer Not Printing After Replacing Toner or Ink",
    date: "2026-09-25",
    category: "Troubleshooting",
    excerpt:
      "What to do when a new HP cartridge is installed but the printer still will not print, including chip and seating checks.",
    description:
      "Fix an HP printer that will not print after new toner or ink. Check cartridge seating, chips, protective tape, and HP cartridge errors.",
    content: `
      <p>You installed a new HP toner or ink cartridge, closed the door—and still no pages. Most of the time the issue is seating, protective tape, or a cartridge authentication message.</p>
      <h2>Remove protective tape and reseat the cartridge</h2>
      <p>Pull remaining orange or plastic tape from the new HP cartridge. Reseat it firmly until it clicks. On LaserJet models, confirm the toner door is fully closed.</p>
      <h2>Use the correct HP cartridge family</h2>
      <p>A cartridge that looks similar but belongs to another HP series will not work. Match the part number in the door label or supply catalog for your LaserJet or OfficeJet.</p>
      <h2>Clear cartridge-related error messages</h2>
      <p>Messages like “cartridge missing,” “incompatible,” or “non-HP” can block printing. Follow the on-screen prompts, then power-cycle the printer.</p>
      <h2>Run cleaning and alignment (ink models)</h2>
      <p>OfficeJet and DeskJet printers may need a printhead cleaning after a new ink install before solid blacks and colors return.</p>
      <h2>Check for firmware or supply lock settings</h2>
      <p>Some HP business devices enforce genuine supply policies. If you use compatible toner, review device policies or try a genuine HP cartridge to isolate the issue.</p>
      <p>We stock <a href="/services/supply-sales">HP toner and ink</a> and can help verify the right cartridge for your model.</p>
    `,
  },
  {
    slug: "hp-wireless-printer-setup-tips",
    title: "HP Wireless Printer Setup Tips for Home and Office",
    date: "2026-09-28",
    category: "Setup",
    excerpt:
      "Reliable Wi-Fi setup tips for HP printers, including 2.4 GHz vs 5 GHz, WPS, and stable IP recommendations.",
    description:
      "Set up an HP wireless printer the right way. Tips for Wi-Fi bands, HP Smart setup, WPS, and stable connections at home or office.",
    content: `
      <p>Wireless HP printers are convenient—until phones and laptops cannot find them on the network. A few setup habits prevent most connection dropouts.</p>
      <h2>Place the printer near the router during setup</h2>
      <p>Start setup close to the access point. After the HP printer joins Wi-Fi successfully, you can move it—then reprint a network config page to confirm signal strength.</p>
      <h2>Mind 2.4 GHz vs 5 GHz</h2>
      <p>Many HP DeskJet and OfficeJet models prefer or only support 2.4 GHz. If your SSID is 5 GHz-only, create a 2.4 GHz network or enable band steering carefully.</p>
      <h2>Use HP Smart guided setup</h2>
      <p>HP Smart walks through wireless association for supported models. Keep Bluetooth and location permissions enabled on your phone during the first pairing steps when prompted.</p>
      <h2>Give the printer a stable address</h2>
      <p>In the router, reserve a DHCP lease for the HP printer’s MAC address. Stable IPs reduce “offline” queues when the printer renews its lease.</p>
      <h2>Update firmware after joining Wi-Fi</h2>
      <p>Once online, apply HP firmware updates. They often improve wireless reliability and fix known association bugs.</p>
      <p>If Wi-Fi setup keeps failing, book <a href="/services/installation">HP wireless setup</a> or <a href="/services/remote-support">remote HP support</a> and we will finish the connection with you.</p>
    `,
  },
];

function getAllPosts() {
  return [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug) || null;
}

function formatDisplayDate(iso) {
  try {
    return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

module.exports = {
  SITE_URL,
  BLOG_POSTS,
  getAllPosts,
  getPostBySlug,
  formatDisplayDate,
};
