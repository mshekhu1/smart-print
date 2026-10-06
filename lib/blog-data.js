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
  {
    slug: "hp-printer-faded-streaks-print-quality",
    title: "How to Fix Faded Prints and Streaks on an HP Printer",
    date: "2026-10-01",
    category: "Troubleshooting",
    excerpt:
      "Clear faded pages, vertical streaks, and blotchy color on HP LaserJet, OfficeJet, and DeskJet printers.",
    description:
      "Fix faded HP prints and streaks. Clean rollers, run cartridge alignment, and check toner or ink on LaserJet, OfficeJet, and DeskJet.",
    content: `
      <p>Faded text, pale color, or repeating streaks usually mean low supplies, a dirty path, or a print head that needs cleaning—not a dead HP printer.</p>
      <h2>Check toner or ink levels first</h2>
      <p>Open HP Smart or the printer’s supply menu. A LaserJet with low toner often fades across the page. An OfficeJet or DeskJet with an empty color cartridge can leave streaks even when black still looks fine.</p>
      <h2>Run the built-in cleaning and alignment</h2>
      <p>From the control panel or HP Smart, run Print Quality Diagnostic, Clean Printhead, and Align Printhead. Ink models often need two cleaning cycles before color looks even again.</p>
      <h2>Reseat the cartridge and remove tape</h2>
      <p>Power the printer off, remove the HP cartridge, and confirm no protective tape remains. Reseat it until it clicks. A loose toner cartridge is a common cause of vertical LaserJet streaks.</p>
      <h2>Clean the paper path</h2>
      <p>Dust on pick rollers and the scanner glass (on all-in-ones) shows up as spots or lines. Wipe accessible rollers and the glass with a lint-free cloth. Let everything dry before the next test page.</p>
      <h2>Match paper type in the driver</h2>
      <p>Printing on plain paper with a “photo” or “thick” setting, or the reverse, makes HP output look washed out. Set the tray and driver to the paper you actually loaded.</p>
      <p>If streaks stay after new genuine supplies, schedule <a href="/services/maintenance">HP printer maintenance</a> or <a href="/services/printer-repair">HP printer repair</a>.</p>
    `,
  },
  {
    slug: "hp-printer-prints-slowly",
    title: "Why an HP Printer Prints Slowly and How to Speed It Up",
    date: "2026-10-02",
    category: "Troubleshooting",
    excerpt:
      "Speed up a slow HP LaserJet or OfficeJet by changing quality settings, drivers, and network bottlenecks.",
    description:
      "Fix a slow HP printer. Adjust quality mode, drivers, spooling, and Wi-Fi so LaserJet and OfficeJet jobs finish faster.",
    content: `
      <p>A printer that used to finish a page in seconds and now pauses between sheets is usually waiting on a setting, a driver, or the network—not wearing out.</p>
      <h2>Turn off high-quality and quiet modes</h2>
      <p>Draft or Normal is much faster than Best or Photo. Quiet mode and “EconoMode” also change speed. For everyday documents, Normal on plain paper is the right HP default.</p>
      <h2>Print in black when you do not need color</h2>
      <p>OfficeJet and DeskJet jobs slow down when the driver composites color. Choose grayscale or black cartridge only for text documents.</p>
      <h2>Update the HP driver and avoid generic queues</h2>
      <p>A generic Windows class driver often processes pages on the computer instead of the printer. Install the model-specific HP driver or HP Smart full feature software, then print a short test.</p>
      <h2>Check Wi-Fi signal</h2>
      <p>Weak wireless makes the printer wait for data. Move the HP printer closer to the router for a test, or use Ethernet on LaserJet models that have a network port. USB is a useful comparison if Wi-Fi is the only slow path.</p>
      <h2>Clear a stuck spooler</h2>
      <p>One corrupt job can make every later job crawl. Cancel all documents, restart the Print Spooler, and send a single-page test.</p>
      <p>Still slow after a clean driver install? <a href="/services/remote-support">HP remote support</a> can check the queue, driver, and connection with you.</p>
    `,
  },
  {
    slug: "hp-scanner-not-working",
    title: "HP Scanner Not Working: Fixes for Scan to Computer",
    date: "2026-10-03",
    category: "Troubleshooting",
    excerpt:
      "Get HP all-in-one scanning working again in HP Smart and Windows when the computer cannot see the scanner.",
    description:
      "Fix an HP scanner that will not scan. Repair HP Smart, Windows scan settings, and drivers for OfficeJet and LaserJet all-in-one printers.",
    content: `
      <p>Printing can work while scanning fails. On HP all-in-ones the scan path uses extra software, so a printer that prints fine may still show “scanner not found.”</p>
      <h2>Confirm the computer and printer are on the same network</h2>
      <p>Scan-to-computer needs the HP printer and the PC on the same Wi-Fi or LAN. A guest network or VPN on the computer blocks discovery even when printing via a saved queue still works.</p>
      <h2>Use HP Smart before older scan tools</h2>
      <p>Open HP Smart, select the printer, and try Scan. If the app cannot see the device, remove it and add it again. Older “HP Scan” shortcuts break after Windows or driver updates.</p>
      <h2>Enable scan permissions in Windows</h2>
      <p>In Windows Settings, allow the HP app through the firewall on private networks. In Printers &amp; scanners, open the device and check that the scanner appears as a separate function, not only a print queue.</p>
      <h2>Reinstall the full HP software package</h2>
      <p>Basic drivers sometimes install print only. Download the full feature package for your OfficeJet or LaserJet MFP so the scan driver (WIA/TWAIN) is included, then restart the computer.</p>
      <h2>Test from the glass, then the feeder</h2>
      <p>If the flatbed scans but the document feeder does not, the ADF rollers or sensor need service. If neither works, the problem is software or the scanner unit itself.</p>
      <p>For a scan path that stays broken after a reinstall, book <a href="/services/installation">HP setup</a> or <a href="/services/printer-repair">HP repair</a>.</p>
    `,
  },
  {
    slug: "common-hp-printer-error-codes",
    title: "Common HP Printer Error Codes and What They Mean",
    date: "2026-10-04",
    category: "Troubleshooting",
    excerpt:
      "A plain-language guide to frequent HP printer errors: paper, cartridge, door, and offline messages.",
    description:
      "Understand common HP printer error codes for paper jams, cartridges, open doors, and offline status on LaserJet and OfficeJet.",
    content: `
      <p>HP control panels often show a short code or a sentence. The code matters less than the category: paper, supplies, a door, or the connection.</p>
      <h2>Paper path errors</h2>
      <p>Messages such as “Paper Jam,” “13.xx” style jam codes on many LaserJets, or “load paper” mean the printer cannot move a sheet. Clear every tray and the rear door, then check for torn scraps before you send another job.</p>
      <h2>Cartridge and supply errors</h2>
      <p>“Cartridge missing,” “incompatible,” “supply problem,” or “non-HP cartridge” stop printing until the toner or ink is reseated or replaced with the correct HP family for that model.</p>
      <h2>Door and hardware errors</h2>
      <p>“Close door or cover” and similar alerts mean a sensor still sees an open panel. Close the toner door, rear access, and duplex unit until each one clicks.</p>
      <h2>Connection errors</h2>
      <p>“Offline,” “printer not found,” and wireless setup failures are network or driver problems, not paper problems. Confirm Wi-Fi, then the Windows queue, before you replace hardware.</p>
      <h2>When to stop retrying</h2>
      <p>If the same code returns with no paper in the path, or a new genuine cartridge is still rejected, the sensor or formatter may need service. Write down the exact code and model name before you call.</p>
      <p>Our team handles these daily through <a href="/services/remote-support">HP remote support</a> and on-site <a href="/services/printer-repair">HP printer repair</a>.</p>
    `,
  },
  {
    slug: "hp-printer-wont-connect-after-new-router",
    title: "HP Printer Will Not Connect After a New Router",
    date: "2026-10-06",
    category: "Setup",
    excerpt:
      "Reconnect an HP printer after you replace a router, change the Wi-Fi name, or update the password.",
    description:
      "Reconnect an HP printer after a new router or Wi-Fi password change. Restore wireless setup for LaserJet, OfficeJet, and DeskJet.",
    content: `
      <p>A new router, a renamed Wi-Fi network, or a new password leaves the HP printer joined to a network that no longer exists. Printing stops even though the printer still powers on.</p>
      <h2>Restore wireless setup on the printer</h2>
      <p>On the control panel, open Wireless or Network settings and choose Restore Network Settings, or run Wireless Setup Wizard. This forgets the old SSID so the printer can join the new one.</p>
      <h2>Join the 2.4 GHz network when required</h2>
      <p>Many DeskJet and OfficeJet models cannot use a 5 GHz-only name. If the new router combined bands under one name, temporarily split 2.4 GHz or enable Smart Connect in a way those HP models accept.</p>
      <h2>Add the printer again in HP Smart</h2>
      <p>Remove the old device in HP Smart and in Windows Printers &amp; scanners. Add it again while the computer is on the new Wi-Fi. Do not keep the old offline queue.</p>
      <h2>Reserve an address on the new router</h2>
      <p>After the printer connects, reserve its DHCP lease. That keeps Windows from losing the HP printer the next time the router reboots.</p>
      <h2>Update firmware once it is online</h2>
      <p>New routers sometimes expose connection bugs that a current HP firmware build already fixes. Apply the update from HP Smart after the first successful test page.</p>
      <p>If the wizard never finds your network, we can finish <a href="/services/installation">HP wireless setup</a> on site or by <a href="/services/remote-support">remote support</a>.</p>
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
