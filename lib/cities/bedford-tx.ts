import type { CityConfig } from "./_types"

export const bedford: CityConfig = {
  slug: "bedford-tx",
  name: "Bedford",
  county: "Tarrant",
  zipCodes: ["76021", "76022", "76095"],
  geoCenter: { lat: 32.844, lng: -97.1436 },
  serviceRadiusMiles: 5,
  closestHubSlug: "fort-worth",
  hasGbpListing: false,
  primaryHubSlug: "fort-worth",
  driveTimeMinutes: 20,
  href: "/areas-served/bedford-tx",

  h1: "Plumber in Bedford, TX // HEB Mid-Cities. 20-Minute Dispatch.",

  metaTitle: "Plumber in Bedford, TX — Pinhole Leaks, Repipes & 24/7 Service",

  metaDescription:
    "S.W.A.T. Plumbing serves Bedford, TX from its Fort Worth hub — 20 minutes out. Licensed master plumbers for copper pinhole leaks, poly repipes, drain clearing & 24/7 emergencies. Call 817-438-6955.",

  heroPainLine:
    "Bedford was fully built out by the early 1990s, and almost all of it went in between 1965 and 1990. That means copper supply lines that are 35 to 60 years old — and a meaningful share of polybutylene in the 1978–1990 construction window.",

  entityAnchor:
    "S.W.A.T. Plumbing LLC is a licensed master-plumber-operated contractor (TX Master License #M-39596) headquartered at 2111 East FM1187 in Aledo, TX, serving Bedford — a fully built-out Mid-Cities community where polybutylene supply pipe remains in Stonegate and Westwood Hills homes built between 1978 and 1990 — from its Fort Worth dispatch hub since 2013.",

  trustStrip: [
    "20 Min from FW Hub",
    "Texas Master Plumber",
    "24/7 Dispatch",
    "Flat-Rate Pricing",
    "Family Owned",
  ],

  localIntro:
    "Bedford is one of the most predictable plumbing markets in Tarrant County — and not in a reassuring way. The city developed almost entirely between 1965 and 1990 and has been fully built out since the early 1990s. There is no significant pre-1960 stock and almost no post-2000 residential construction. What that means in practice is that virtually every home in Bedford is sitting on the same aging-pipe profile: copper supply lines between 35 and 60 years old, a meaningful share of polybutylene pipe installed during the 1978–1990 construction window, and cast iron drain stacks that are approaching or past 60 years of service life.\n\nCopper and moderately hard water from Fort Worth's wholesale supply — drawing from Eagle Mountain and Bridgeport lakes via the Trinity River Authority — make a slow but steady combination. TRWD-sourced water to Bedford runs approximately 200 mg/L hardness. Decades of that water moving through copper supply lines in Westwood Hills, Stonegate, and Harwood Hills has thinned pipe walls to the point where pinhole leaks are the single most common emergency call type across the city. A pinhole in a wall cavity doesn't annouince itself with a gush — it announces itself with a wet spot on drywall, a spike on a water bill, or a cabinet floor that has been quietly soft for weeks.\n\nPolybutylene is the second risk. Homes in Bedford built between 1978 and 1990 — a construction window that covers a large share of the Stonegate and Westwood Hills stock — were frequently plumbed with gray poly. Chlorine and chloramine in Fort Worth's treated supply degrade the polymer at the fittings over time. The failure is sudden and typically inside a wall. S.W.A.T. Plumbing has completed whole-house PEX-A repipes in Bedford addresses where poly was confirmed; when the fittings start failing, patching them one at a time is the most expensive long-term path.\n\nBedford's mature tree canopy — the sycamores, Bradford pears, and oaks that line the Central Park district and the Village Creek corridor — has been threading roots into the city's 1970s and 1980s sewer laterals for 40-plus years. Cast iron and Orangeburg laterals at end-of-life with active root intrusion are a consistent camera-inspection finding across Bedford. At 46.5% renter occupancy, deferred maintenance is structural: landlord-owned properties regularly call with water heaters 15-plus years old and shutoff valves that corrode shut over decades of disuse.",

  neighborhoods: [
    {
      name: "Forest Ridge",
      note: "1970s–80s copper supply; pinhole leak pattern consistent with age",
    },
    {
      name: "Stonegate",
      note: "1978–1990 build window; polybutylene presence confirmed in this stock",
    },
    {
      name: "Central Park district",
      note: "Around Bedford Boys Ranch; sycamore roots, aging cast iron laterals",
    },
    {
      name: "Harwood Hills",
      note: "1970s–80s residential; thinning copper, older water heater stock",
    },
    {
      name: "Westwood Hills",
      note: "Late-1970s builds; polybutylene and copper mix, end-of-life drain stacks",
    },
    {
      name: "Village Creek area",
      note: "Mature tree corridor; root intrusion into laterals, camera clears run high",
    },
    {
      name: "Bear Creek Crossing",
      note: "1980s development; aging shutoff valves, deferred water heater replacements",
    },
    {
      name: "Shady Brook Estates",
      note: "Established 1970s–80s stock; consistent aging-pipe emergency profile",
    },
  ],

  commonIssues: [
    "Copper supply lines installed 1965–1990 throughout Bedford have thinned under decades of Fort Worth wholesale supply at ~200 mg/L hardness — pinhole leaks are the city's most frequent emergency call type.",
    "Polybutylene (gray poly) supply pipe in homes built 1978–1990 — Stonegate and Westwood Hills in particular — degrades at fittings over time, producing sudden in-wall failures without visible warning.",
    "Bedford's mature sycamore and oak canopy has threaded roots into 1970s–80s cast iron and Orangeburg sewer laterals for 40-plus years — camera inspection commonly reveals multiple simultaneous intrusion points.",
    "Fort Worth wholesale supply at ~200 mg/L hardness accelerates scale accumulation in tank water heaters — 15–20-year-old units are common in this aging housing stock and represent a reliable failure-risk pool.",
    "Bedford's 46.5% renter rate creates a structural deferred-maintenance backlog — landlord-deferred water heater replacement and corroded shutoff valves are consistent emergency dispatch sources.",
  ],

  serviceHighlights: [
    {
      serviceSlug: "emergency-plumbers",
      localAngle:
        "Fort Worth hub is 20 minutes from Bedford — pinhole copper leaks and poly fitting failures dispatched same hour, any time of day.",
    },
    {
      serviceSlug: "plumbing-leak-repairs",
      localAngle:
        "Pinhole copper leaks in Bedford's 35-to-60-year-old supply lines located with listening equipment and thermal imaging — wall opened once, at the right spot.",
    },
    {
      serviceSlug: "slab-leak",
      localAngle:
        "Electronic leak detection locates under-slab copper failures in Bedford's 1965–1985 slab homes without open-trench exploration.",
    },
    {
      serviceSlug: "clogged-drain",
      localAngle:
        "Root intrusion in Bedford's aging cast iron and Orangeburg laterals cleared by cable and confirmed by camera — Central Park district and Village Creek corridor are repeat-call territory.",
    },
    {
      serviceSlug: "sewer-cleaning",
      localAngle:
        "End-of-life laterals under Bedford's mature tree canopy hydro-jetted and camera-documented — root mass cleared, structural condition assessed before crew leaves.",
    },
    {
      serviceSlug: "gas-line-repair",
      localAngle:
        "Gas line pressure-testing and permitted repair for Bedford addresses through the City of Bedford Building Inspections at 2000 Forest Ridge Dr.",
    },
    {
      serviceSlug: "whole-house-repiping",
      localAngle:
        "Gray poly repipes and copper repipes in Bedford's 1965–1990 housing stock — PEX-A replacement with Bedford Building Inspections permit pulled and closed.",
    },
    {
      serviceSlug: "trenchless-repair",
      localAngle:
        "End-of-life Orangeburg and cast iron sewer laterals under Bedford's mature landscaping lined without excavation through established yards and tree canopy.",
    },
  ],

  whySwatPillars: [
    {
      title: "Fort Worth Hub — 20 Minutes to Bedford.",
      primary: true,
      bullets: [
        "Dispatched from the Fort Worth hub — 20 minutes to Bedford Boys Ranch Park and the SH-121 corridor",
        "HEB Mid-Cities location means west-side response times beat any dispatch routed from east or south DFW",
        "24/7 dispatch covers pinhole-leak emergencies in Bedford's fully-built-out aging residential stock",
      ],
    },
    {
      title: "Texas Master Plumber + Bedford Permits.",
      bullets: [
        "All work performed under a licensed Texas Master Plumber — not apprentice-supervised jobs",
        "Permits pulled through City of Bedford Building Inspections at 2000 Forest Ridge Dr on all qualifying work",
        "Bedford is fully incorporated with no significant ETJ — one jurisdiction, one permit process",
      ],
    },
    {
      title: "Flat-Rate Pricing. Written Before Work Starts.",
      bullets: [
        "Written estimate delivered before any work begins — price does not change mid-job",
        "No after-hours surcharge, no weekend premium, no markup for same-day calls",
        "Financing available for whole-house repipe projects common in Bedford's aging housing stock",
      ],
    },
  ],

  faqs: [
    {
      question: "Is there a 24-hour emergency plumber in Bedford, TX?",
      answer:
        "Yes. S.W.A.T. Plumbing dispatches 24/7 from its Fort Worth hub, 20 minutes from Bedford. For plumbing emergencies in 76021, 76022, or 76095 — pinhole copper leaks, poly fitting failures, mainline backups — call 817-438-6955. A live dispatcher answers at any hour, no voicemail.",
    },
    {
      question: "How much does a plumber cost in Bedford, TX?",
      answer:
        "S.W.A.T. Plumbing uses flat-rate pricing with a written estimate before work begins. The cost varies by job type — a drain clear, a pinhole leak repair, a whole-house repipe, and a water heater replacement all scope differently. Pricing does not increase after hours or on weekends. Call for an on-site estimate before any work starts.",
    },
    {
      question: "How do I know if my Bedford home has polybutylene pipe?",
      answer:
        "Polybutylene is gray, flexible plastic pipe — often found under sinks, running through walls, and entering the water heater. Homes built in Bedford between 1978 and 1990 are the primary risk window. If your supply lines are gray and flexible (not white PVC, copper-colored, or the translucent red and blue of newer PEX), there is a strong likelihood of poly. S.W.A.T. Plumbing can confirm during a service visit and explain the options for replacement before a fitting fails in a wall.",
    },
    {
      question: "Do you pull permits in Bedford for plumbing work?",
      answer:
        "Yes. Permitted plumbing work in Bedford — water heaters, sewer repairs, gas lines, repipes — is coordinated through City of Bedford Building Inspections at 2000 Forest Ridge Dr. Bedford is fully incorporated with a straightforward single-jurisdiction permitting process. The permit is SWAT's responsibility to obtain and close, not yours.",
    },
    {
      question: "Why are pinhole copper leaks so common in Bedford?",
      answer:
        "Bedford's residential development was almost entirely completed between 1965 and 1990 — the copper supply lines in those homes have been carrying Fort Worth wholesale water at roughly 200 mg/L hardness for 35 to 60 years. Minerals and mild chloramine exposure thin pipe walls gradually; the failure typically shows up as a wet spot on drywall or a rising water bill before a visible drip appears. Electronic leak detection pinpoints the failure without opening multiple wall sections.",
    },
    {
      question: "Does S.W.A.T. Plumbing use its own crew in Bedford?",
      answer:
        "Yes. Every technician dispatched to a Bedford address is a direct S.W.A.T. Plumbing employee — background-checked and working under a licensed Texas Master Plumber. No subcontractors are used. The crew that diagnoses the problem is the crew that repairs it.",
    },
  ],

  nearbyCities: [
    { slug: "hurst-tx", name: "Hurst", driveMinutes: 5 },
    { slug: "euless-tx", name: "Euless", driveMinutes: 5 },
    { slug: "north-richland-hills-tx", name: "North Richland Hills", driveMinutes: 8 },
    { slug: "fort-worth-tx", name: "Fort Worth", driveMinutes: 20 },
  ],

  lastUpdated: "2026-06-16",
}
