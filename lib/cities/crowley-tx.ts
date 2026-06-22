import type { CityConfig } from "./_types"

export const crowley: CityConfig = {
  slug: "crowley-tx",
  name: "Crowley",
  county: "Tarrant",
  zipCodes: ["76036"],
  geoCenter: { lat: 32.57906, lng: -97.36217 },
  serviceRadiusMiles: 4,
  closestHubSlug: "fort-worth",
  hasGbpListing: false,
  primaryHubSlug: "fort-worth",
  driveTimeMinutes: 19,

  href: "/areas-served/crowley-tx",

  h1: "Plumber in Crowley, TX // Fort Worth Crew. 19-Minute Dispatch.",

  metaTitle: "Plumber in Crowley, TX — 24/7 Emergency Plumbing Service",

  metaDescription:
    "S.W.A.T. Plumbing serves Crowley, TX from its Fort Worth hub — 19 minutes out. Licensed master plumbers for slab leaks, repiping, drain cleaning & 24/7 emergencies in 76036. Call 817-438-6955.",

  heroPainLine:
    "Crowley grew 40% in a decade, and the 1980s-2000s subdivisions that anchored that growth are now entering the pipe-fatigue window. Galvanized supply, early CPVC, and builder-grade compression drain joints on clay-heavy soil — the Fort Worth crew is 19 minutes away when it goes wrong.",

  entityAnchor:
    "S.W.A.T. Plumbing LLC is a licensed master-plumber-operated contractor (TX Master License #M-39596) headquartered at 2111 East FM1187 in Aledo, TX, serving Crowley — where Rocky Creek drainage creates periodic soil saturation in adjacent subdivisions and a 40.8% population surge between 2010 and 2020 pushed infrastructure to its limits — from its Fort Worth dispatch hub since 2013.",

  trustStrip: [
    "19 Min from FW Hub",
    "Texas Master Plumber",
    "24/7 Dispatch",
    "Flat-Rate Pricing",
    "Family Owned",
  ],

  localIntro:
    "Crowley has a single ZIP code — 76036 — with a dual-layer plumbing profile: an established inner core of 1980s and 1990s subdivisions that are now past the first serious maintenance window, and a newer outer ring of 2010s-to-2020s construction where builder-grade materials are still performing but sitting on the same clay-heavy Tarrant County soil that causes problems for everything built on it.\n\nCrowley receives treated water from the City of Fort Worth wholesale system. Fort Worth surface water sits at 8 to 12 grains per gallon of hardness — elevated enough that scale accumulates in tankless water heater coils and fixture aerators without treatment. The 1980s-90s tract developments near the city center used galvanized supply and early CPVC runs that are now showing the characteristic failure patterns: pinhole corrosion in galvanized, and joint separation and stress cracking in first-generation CPVC. The Rocky Creek drainage corridor runs through parts of Crowley and creates periodic soil saturation in adjacent subdivisions — saturation that stresses sewer laterals and outdoor cleanout access in ways that a purely dry-climate install would not face.\n\nThe newer construction at Crowley's southern and western growth edge — Astoria Crossing, Emily Estates, and Stone Meadow — brought PVC drain lines with compression fittings. Those fittings perform well in stable conditions, but Tarrant County clay-heavy soil shifts with the seasons. Compression joints in active clay movement zones can fail within 10 to 15 years of installation, well before the homeowner expects any drain problems. Crowley maintains its own building permit and inspection department, independent from Fort Worth and Burleson — plumbing permits for Crowley addresses must be filed with the City of Crowley, not Tarrant County and not Fort Worth.",

  neighborhoods: [
    {
      name: "Astoria Crossing",
      note: "Newer 2010s build; PVC compression drain joints in clay-active soil",
    },
    {
      name: "Deer Creek",
      note: "Established subdivision; mixed galvanized and early copper supply",
    },
    {
      name: "Emily Estates",
      note: "2000s-era construction; aging water heater installations entering replacement window",
    },
    {
      name: "Rocky Creek Ranch",
      note: "Adjacent to Rocky Creek corridor; sewer lateral saturation risk in wet seasons",
    },
    {
      name: "Stone Meadow",
      note: "Newer build; PEX supply holding well but clay-soil slab movement still a factor",
    },
    {
      name: "Crowley Town Center area",
      note: "Mixed commercial and residential; aging drain infrastructure in 1990s-era buildings",
    },
  ],

  commonIssues: [
    "Fort Worth wholesale water at 8–12 grains per gallon of hardness accumulates scale in tankless coils, aerators, and angle-stop valves across all 76036 addresses — particularly in homes without a whole-house softener.",
    "Galvanized supply and early CPVC runs in 1980s-90s tract developments show characteristic failure patterns — pinhole corrosion in galvanized, stress cracking and joint separation in first-generation CPVC.",
    "Rocky Creek drainage corridor creates periodic soil saturation in adjacent subdivisions — waterlogged clay soil stresses buried sewer laterals and makes outdoor cleanout access difficult during wet seasons.",
    "Builder-grade PVC drain lines with compression joints in newer southern and western subdivisions can fail within 10–15 years in clay-heavy soil that shifts seasonally with moisture content.",
    "Crowley's 40.8% population growth between 2010 and 2020 concentrated new construction at the city's edge — infrastructure in that growth zone is outpacing inspection and maintenance cycles.",
  ],

  serviceHighlights: [
    {
      serviceSlug: "emergency-plumbers",
      localAngle:
        "Fort Worth hub is 19 minutes from Crowley — galvanized failures in Deer Creek and compression joint failures in Astoria Crossing get a crew fast.",
    },
    {
      serviceSlug: "plumbing-leak-repairs",
      localAngle:
        "Pinhole corrosion in 1980s-90s galvanized supply and CPVC stress cracks diagnosed same visit — confirmed location before any wall is opened.",
    },
    {
      serviceSlug: "slab-leak",
      localAngle:
        "Tarrant County clay-heavy soil shifts seasonally — SWAT uses electronic detection to locate under-slab failures before any concrete cutting begins.",
    },
    {
      serviceSlug: "clogged-drain",
      localAngle:
        "Scale from Fort Worth hard water combines with clay-soil lateral movement in older Crowley subdivisions — camera confirms blockage before the clearing method is chosen.",
    },
    {
      serviceSlug: "sewer-cleaning",
      localAngle:
        "Rocky Creek corridor saturation and clay-heavy soil make root intrusion in adjacent sewer laterals a regular occurrence — hydro-jetting removes the mass and camera confirms the line.",
    },
    {
      serviceSlug: "gas-line-repair",
      localAngle:
        "Gas line pressure-testing and repair for Crowley addresses permitted with City of Crowley Building and Inspection Services — not Fort Worth, not Burleson.",
    },
    {
      serviceSlug: "whole-house-repiping",
      localAngle:
        "Galvanized supply systems and first-generation CPVC in 1980s-2000s Crowley builds are candidates for full PEX-A repipe — SWAT pulls the Crowley permit and closes the inspection.",
    },
    {
      serviceSlug: "tankless-water-heaters",
      localAngle:
        "Fort Worth wholesale water at 8–12 gpg hardness shortens tankless heat exchanger life without a pre-filter — SWAT installs Navien and Rinnai units with matched water treatment.",
    },
  ],

  whySwatPillars: [
    {
      title: "Fort Worth Hub — 19 Minutes to Crowley.",
      primary: true,
      bullets: [
        "Dispatched from the Fort Worth hub — 19-minute average drive to Crowley addresses in 76036",
        "24/7 dispatch covers late-night galvanized failures and slab events across all Crowley neighborhoods",
        "Crew familiar with Crowley's dual housing era — 1980s-90s established stock and 2010s-20s growth-edge builds",
      ],
    },
    {
      title: "City of Crowley Permits — Not Fort Worth, Not Burleson.",
      bullets: [
        "Crowley maintains independent permitting through its own Building and Inspection Services — separate from both neighboring cities",
        "SWAT pulls with City of Crowley on every qualifying job and closes inspections before the file is marked complete",
        "All work performed under a licensed Texas Master Plumber — not supervised apprentice labor",
      ],
    },
    {
      title: "Flat-Rate Pricing. Same Price at 2 a.m.",
      bullets: [
        "Written estimate before any work begins — price does not change mid-job",
        "No after-hours surcharge, no weekend markup, no holiday premium",
        "Financing available for whole-house repipe and major drain or slab repair projects",
      ],
    },
  ],

  faqs: [
    {
      question: "Is there a 24-hour emergency plumber in Crowley, TX?",
      answer:
        "Yes. S.W.A.T. Plumbing dispatches 24/7 from its Fort Worth hub, 19 minutes from Crowley. For emergencies anywhere in 76036 — Deer Creek, Astoria Crossing, Rocky Creek Ranch, or the Town Center corridor — call 817-438-6955. A live dispatcher answers at any hour.",
    },
    {
      question: "How much does a plumber cost in Crowley?",
      answer:
        "S.W.A.T. Plumbing uses flat-rate pricing with a written estimate before work begins. The cost depends on the job type — a drain clear, a water heater replacement, a whole-house repipe, and a slab-leak repair each scope differently. Pricing does not change after hours. The estimate is delivered on-site before any work starts.",
    },
    {
      question: "Does S.W.A.T. Plumbing pull permits with the City of Crowley?",
      answer:
        "Yes. Crowley maintains its own Building and Inspection Services department, independent from Fort Worth and Burleson. SWAT files plumbing permits directly with the City of Crowley on all qualifying work — water heaters, sewer repairs, gas lines, and structural plumbing. The permit is SWAT's responsibility to obtain and close, not yours.",
    },
    {
      question: "My Crowley home was built in the 1980s — what should I watch for?",
      answer:
        "Homes in that era used galvanized iron supply lines or early CPVC. Galvanized corrodes from the inside out, reducing pressure and creating pinhole leaks. First-generation CPVC becomes brittle with age and develops stress cracks and joint separation. If your home has either material, S.W.A.T. Plumbing can confirm during a diagnostic visit and scope a PEX-A repipe if needed.",
    },
    {
      question: "Why does my Crowley home have hard water problems?",
      answer:
        "Crowley receives treated water from the City of Fort Worth wholesale system, which delivers water at 8–12 grains per gallon of hardness. That is elevated enough to scale tankless water heater coils, clog fixture aerators, and shorten angle-stop valve life over time. A whole-house water softener addresses the problem at the point of entry. SWAT sizes and installs softening systems for Crowley's specific water chemistry.",
    },
    {
      question: "Does S.W.A.T. Plumbing subcontract in Crowley?",
      answer:
        "No. Every technician dispatched to a Crowley address is a direct S.W.A.T. Plumbing employee, working under a licensed Texas Master Plumber. No subcontractors, no third-party handoffs. The crew that diagnoses the problem is the crew that fixes it.",
    },
  ],

  nearbyCities: [
    { slug: "burleson-tx", name: "Burleson", driveMinutes: 10 },
    { slug: "fort-worth-tx", name: "Fort Worth", driveMinutes: 19 },
    { slug: "everman-tx", name: "Everman", driveMinutes: 10 },
    { slug: "forest-hill-tx", name: "Forest Hill", driveMinutes: 15 },
  ],

  lastUpdated: "2026-06-16",
}
