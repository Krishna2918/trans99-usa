export const COMPANY = {
  name: "Trans99",
  legal: "Trans99 USA",
  tagline: "Driven to Deliver. Powered by Trust.",
  email: "usateam@trans99.net",
  emailHref: "mailto:usateam@trans99.net",
  hours: "Dispatch & customer care — 24/7",
};

export const LOCATIONS = [
  {
    id: "laredo",
    city: "Laredo",
    label: "Laredo, TX",
    phone: "1-956-869-5161",
    phoneHref: "tel:+19568695161",
    lines: ["1191 Reuthinger Pkwy.", "Suite 100", "Laredo, TX 78045"],
    map: "https://maps.google.com/?q=1191+Reuthinger+Pkwy+Suite+100+Laredo+TX+78045",
  },
  {
    id: "detroit",
    city: "Detroit",
    label: "Detroit / Romulus, MI",
    phone: "1-313-698-5161",
    phoneHref: "tel:+13136985161",
    lines: ["15515 Wayne Rd.", "Romulus, MI 48174"],
    map: "https://maps.google.com/?q=15515+Wayne+Rd+Romulus+MI+48174",
  },
] as const;

export const GALLERY = [
  { src: "/media/yard-aerial.jpg", alt: "Trans99 Laredo yard from the air" },
  { src: "/media/truck-close.jpg", alt: "Trans99 USA tractor" },
  { src: "/media/trailer-logo.jpg", alt: "Trans99 trailer with company logo" },
  { src: "/media/warehouse-aisle.jpg", alt: "Pallet racking in a Trans99 warehouse" },
  { src: "/media/office-team.jpg", alt: "Dispatch and operations team" },
  { src: "/media/yard-sunset.jpg", alt: "Trailers staged at sunset" },
] as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/eco-conscious", label: "Eco Conscious" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export const PILLARS = [
  {
    title: "Timeliness",
    body: "We have a prompt response system that ensures fast and hassle-free solution.",
  },
  {
    title: "Safety",
    body: "We proudly have a variety of safety certifications. In addition to providing an unparalleled service.",
  },
  {
    title: "Customer Service",
    body: "Trans99 takes great pride in the customer service we provide. We value all of our customers, and our top priority is to service them to their best satisfaction.",
  },
  {
    title: "Cross-Border Operations",
    body: "International borders do not inhibit our operations. We are able, and willing, to transport shipments throughout the North American continent.",
  },
] as const;

export const CERTS = [
  { src: "/media/smartway.png", alt: "EPA SmartWay" },
  { src: "/media/cbsa.jpg", alt: "Canada Border Services Agency" },
  { src: "/media/aci.jpg", alt: "ACI eManifest" },
  { src: "/media/ctpat.png", alt: "C-TPAT" },
  { src: "/media/pip.png", alt: "Partners in Protection" },
] as const;

export type Service = {
  slug: string;
  title: string;
  image: string;
  blurb: string;
  body: string;
};

export const SERVICES: Service[] = [
  {
    slug: "truckload",
    title: "Truckload Operations",
    image: "/media/truck-close.jpg",
    blurb: "Asset-based FTL capacity across the continent.",
    body: "Full truckload moves with our own equipment and vetted partners. Dedicated lanes, surge capacity, and live tracking from pickup through delivery.",
  },
  {
    slug: "dedicated",
    title: "Dedicated Operations",
    image: "/media/yard-fleet.jpg",
    blurb: "Private-fleet performance without the overhead.",
    body: "Assigned tractors, trailers, and drivers built around your volume, windows, and SOPs. Predictable capacity, branded service levels, and a team that already knows your docks.",
  },
  {
    slug: "dry-van",
    title: "Dry Van",
    image: "/media/truck-dusk.jpg",
    blurb: "53-foot dry van for general freight.",
    body: "Standard 53' dry van for palletized and floor-loaded freight. Drop-and-hook, live load, and multi-stop options with sealed, GPS-visible trailers.",
  },
  {
    slug: "expedited",
    title: "Expedited Services",
    image: "/media/yard-sunset.jpg",
    blurb: "Time-critical freight that cannot miss the window.",
    body: "Team drivers, hotspot relays, and after-hours dispatch for production-down, retail resets, and appointment-critical freight. Direct comms from quote to POD.",
  },
  {
    slug: "cross-border",
    title: "Cross Border",
    image: "/media/yard-aerial.jpg",
    blurb: "USA–Mexico and USA–Canada movements with bonded process.",
    body: "Laredo southbound lanes and Detroit crossings with ACI eManifest, C-TPAT, and PIP-aligned process. We manage paperwork, PAPS/PARS, and broker handoffs so your freight does not sit at the line.",
  },
  {
    slug: "just-in-time",
    title: "Just in time services",
    image: "/media/warehouse-dock.jpg",
    blurb: "Sequenced deliveries to the production minute.",
    body: "JIT and sequenced drop programs for manufacturers. Tight appointment windows, yard management, and exception alerts before a line ever waits.",
  },
  {
    slug: "line-haul",
    title: "Line Haul",
    image: "/media/trailer-logo.jpg",
    blurb: "Scheduled long-haul between hubs and DCs.",
    body: "Nightly and scheduled linehaul between distribution centers, cross-docks, and regional hubs. Consistent ETAs your planning team can actually use.",
  },
  {
    slug: "refrigeration",
    title: "Refrigeration Transportation",
    image: "/media/yard-fleet.jpg",
    blurb: "Temperature-controlled reefer with continuous logging.",
    body: "Multi-temp reefer capacity for food, pharma, and chemical freight. Pre-cool, setpoint control, and temperature history with every POD.",
  },
  {
    slug: "heated",
    title: "Heated Services",
    image: "/media/truck-close.jpg",
    blurb: "Protect freeze-sensitive product through winter lanes.",
    body: "Heated trailers and insulated equipment for paints, beverages, adhesives, and other freeze-risk freight on northern and prairie lanes.",
  },
  {
    slug: "flatbed",
    title: "Flat-bed Services",
    image: "/media/yard-line.jpg",
    blurb: "Open-deck steel, lumber, machinery, and pipe.",
    body: "Flatbed, tarped, and oversize-capable decks. Certified securement, escort coordination, and mill-to-jobsite experience.",
  },
  {
    slug: "step-deck",
    title: "Step Deck",
    image: "/media/truck-close.jpg",
    blurb: "Lower deck height for taller machinery.",
    body: "Step-deck and drop-deck equipment for construction gear, tanks, and tall crates that will not clear a standard van or flat.",
  },
  {
    slug: "open-board-ftl",
    title: "Open Board FTL",
    image: "/media/truck-dusk.jpg",
    blurb: "Spot-market truckload when you need extra trucks today.",
    body: "Covered and open-board FTL for overflow, seasonal spikes, and one-off projects — quoted fast, covered by a carrier we will stand behind.",
  },
  {
    slug: "warehousing",
    title: "Warehousing & Value Added",
    image: "/media/warehouse-aisle.jpg",
    blurb: "Storage, cross-dock, kitting, and fulfillment.",
    body: "Short- and long-term storage, cross-dock, labeling, kitting, and fulfillment. A single handoff from inbound truck to outbound door.",
  },
];

export const JOBS = [
  {
    slug: "company-driver",
    title: "Company Driver — Cross Border",
    location: "Laredo, TX / Midwest & border lanes",
    type: "Full-time",
    summary:
      "Run scheduled USA–Mexico and domestic truckload with a modern tractor, home time you can plan around, and 24/7 dispatch.",
  },
  {
    slug: "owner-operator",
    title: "Owner Operator",
    location: "North America",
    type: "Contract",
    summary:
      "Bring your truck. We bring the freight, fuel network, and a dispatcher who answers. Dedicated and spot available.",
  },
  {
    slug: "dispatcher",
    title: "Freight Dispatcher",
    location: "Laredo, TX or Romulus, MI — hybrid",
    type: "Full-time",
    summary:
      "Plan loads, protect service, and keep drivers moving. Prior 3PL or asset-based dispatch experience preferred.",
  },
  {
    slug: "warehouse",
    title: "Warehouse Associate",
    location: "Laredo, TX / Romulus, MI",
    type: "Full-time",
    summary:
      "Receive, stage, and load freight on a live dock. Forklift certification is an asset; safety training is provided.",
  },
] as const;

export const CAREER_PERKS = [
  {
    title: "Great team and great culture",
    body: "TRANS99 is creating its future growth and leadership through strengthening its company structure. We have a collaborative atmosphere and we take an enthusiastic approach to work.",
  },
  {
    title: "A safe and healthy workplace",
    body: "we are highly committed to the wellbeing of our staff through safety training programs.",
  },
  {
    title: "A fun atmosphere",
    body: "We are unique in the way we operate, and we succeed in combining hard work with a fun atmosphere. This includes festivities, breakfasts, parties, games, and other enjoyable events to accompany our hard and rewarding work.",
  },
  {
    title: "Get involved in the local community",
    body: "Work with highly trained professionals.",
  },
  {
    title: "Get the sense of creativity and innovation",
    body: "Committed to mutual well-being.",
  },
  {
    title: "Be a part of our ‘Working Green’ mission",
    body: "Free parking.",
  },
] as const;
