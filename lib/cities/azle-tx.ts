import type { CityConfig } from "./_types"

export const azle: CityConfig = {
  slug: "azle-tx",
  name: "Azle",
  county: "Tarrant",
  zipCodes: ["76020", "76039"],
  geoCenter: { lat: 32.89806, lng: -97.54556 },
  serviceRadiusMiles: 6,
  closestHubSlug: "fort-worth",
  hasGbpListing: false,
  primaryHubSlug: "fort-worth",
  driveTimeMinutes: 26,
  href: "/areas-served/azle-tx",

  h1: "Plumber in Azle, TX // Eagle Mountain Lake Corridor. Fast Dispatch.",

  metaTitle: "Plumber in Azle, TX — 24/7 Emergency Service",

  metaDescription:
    "S.W.A.T. Plumbing serves Azle, TX — licensed master plumbers reaching Cardinal Cove, Eagle Mountain Estates, and Downtown Azle in 26 minutes from Fort Worth dispatch. Call 817-438-6142.",

  heroPainLine:
    "Lakeshore homes in Cardinal Cove and Eagle Mountain Estates sit on shallow water tables — and when the pier-and-beam shifts after a dry summer, the crawlspace moisture problem becomes a plumbing problem. S.W.A.T. Plumbing dispatches from Fort Worth and reaches most Azle addresses in under 30 minutes.",

  entityAnchor:
    "S.W.A.T. Plumbing LLC is a licensed master-plumber-operated contractor (TX Master License #M-39596) headquartered at 2111 East FM1187 in Aledo, TX, serving Azle — including lakefront Cardinal Cove and Eagle Mountain Estates pier-and-beam homes where shallow water tables and high humidity accelerate under-floor corrosion — from its Fort Worth dispatch hub since 2013.",

  trustStrip: [
    "26 Min from FW Hub",
    "24/7 Dispatch",
    "TX Master Plumber",
    "Permit-Ready",
    "Flat-Rate Pricing",
  ],

  localIntro:
    "Azle sits at the intersection of two very different plumbing worlds. On the eastern edge — the Eagle Mountain Lake shoreline communities of Cardinal Cove and Eagle Mountain Estates — you have pier-and-beam homes with shallow water tables, high humidity year-round, and exposed underfloor plumbing that sees moisture stress most other DFW neighborhoods don't. On the south and east sides along the Boyd Road and US-199 corridor, you have 1960s and 1970s ranch homes with original galvanized steel supply lines that have been narrowing from the inside for decades. When those lines finally fail, the symptom is rust-colored water and pressure so low it barely reaches a second-floor shower. S.W.A.T. Plumbing dispatches from its Fort Worth hub and reaches most Azle addresses in approximately 26 minutes.\n\nAzle's water supply creates its own set of issues. North Azle draws from Fort Worth's treated water system — managed through the Tarrant Regional Water District via Eagle Mountain Lake. But a significant portion of the city and its ETJ still pulls from private wells drawing out of the Trinity River basin aquifer, which carries high total dissolved solids and hard mineral content. That water attacks water heater anode rods, coats fixture aerators with calcium scale, and deposits sediment in tank-style heaters within 18 months on an untreated supply. Whole-house water softeners and pre-filters aren't optional on those addresses; they're the difference between a 6-year water heater life and a 12-year one.\n\nOne permitting detail that trips up contractors unfamiliar with Azle: the city straddles both Tarrant and Parker counties along the US-199 alignment. For addresses inside Azle city limits, permits run through the City of Azle. For rural addresses in the ETJ, permits may fall under Parker County or Tarrant County depending on the exact location. SWAT confirms the correct jurisdiction before pulling any permit — unpermitted work on a rural Azle address is a problem that surfaces at resale.",

  neighborhoods: [
    {
      name: "Cardinal Cove",
      note: "Lakeshore pier-and-beam; shallow water table, crawlspace moisture issues",
    },
    {
      name: "Eagle Mountain Estates",
      note: "Lakefront homes; freeze exposure on exterior supply runs, hard water scale",
    },
    {
      name: "Pelican Bay Area",
      note: "Shared 76020 ZIP with Pelican Bay city — confirm permit jurisdiction before pulling",
    },
    {
      name: "Downtown Azle / Main Street District",
      note: "Pre-1980s homes; galvanized supply lines, root intrusion in aging clay sewer laterals",
    },
    {
      name: "Briar / Pecan Acres Corridor",
      note: "Rural-edge lots on private wells; pressure tank and water quality issues",
    },
    {
      name: "Boyd Road / US-199 Corridor",
      note: "1960s-80s ranch stock; galvanized steel supply lines past service life",
    },
  ],

  commonIssues: [
    "Original galvanized steel supply lines in 1960s–80s ranch homes along the US-199 corridor — interior corrosion restricts flow and produces discolored water before any external leak appears.",
    "Shallow water tables near Eagle Mountain Lake shoreline in Cardinal Cove and Eagle Mountain Estates — pier-and-beam homes require sump pump and crawlspace moisture management.",
    "Hard water from the Trinity River basin aquifer on private well systems — high TDS accelerates scale in water heaters, coats aerators, and shortens appliance life without treatment.",
    "Aging sewer laterals in Downtown Azle pre-1980s blocks — root intrusion from mature trees combines with mineral scale to cause partial blockages that worsen progressively.",
    "Flood-zone adjacency near Eagle Mountain Lake and Trinity tributaries — improper sump discharge and missing backflow prevention are recurring code compliance issues.",
  ],

  serviceHighlights: [
    {
      serviceSlug: "emergency-plumbers",
      localAngle:
        "SWAT dispatches from Fort Worth and reaches most Azle addresses in approximately 26 minutes — 24 hours a day.",
    },
    {
      serviceSlug: "plumbing-leak-repairs",
      localAngle:
        "Galvanized lines in Azle's 1960s–80s ranch homes corrode from the inside — pinhole failures and fitting leaks diagnosed same visit.",
    },
    {
      serviceSlug: "slab-leak",
      localAngle:
        "Newer slab construction in 76020 subdivision areas faces clay-soil movement in summer droughts — electronic detection locates breaks before any jackhammering.",
    },
    {
      serviceSlug: "clogged-drain",
      localAngle:
        "Hard aquifer water plus aging drain lines in downtown Azle — camera-confirmed clearing removes the blockage and identifies the root cause.",
    },
    {
      serviceSlug: "sewer-cleaning",
      localAngle:
        "Root intrusion in pre-1980s clay sewer laterals along Main Street and the downtown corridor — hydro-jetting restores full capacity.",
    },
    {
      serviceSlug: "gas-line-repair",
      localAngle:
        "Aging gas appliance connections in Azle's older ranch homes pressure-tested and repaired under City of Azle permit.",
    },
    {
      serviceSlug: "whole-house-repiping",
      localAngle:
        "Galvanized steel supply systems in Azle's mid-century homes are past service life — SWAT repipes with PEX-A under permit.",
    },
    {
      serviceSlug: "water-softener",
      localAngle:
        "High-TDS well water and hard lake-fed municipal supply in Azle require whole-house softening to protect water heaters and fixtures.",
    },
  ],

  whySwatPillars: [
    {
      title: "Fort Worth Hub Reaches Azle in 26 Minutes",
      primary: true,
      bullets: [
        "SWAT dispatches from its Fort Worth hub — approximately 26 minutes to most Azle addresses",
        "24/7 live dispatch — no voicemail, no after-hours relay, no waiting until morning",
        "Eagle Mountain Lake corridor, Downtown Azle, and the Boyd Road stretch all within the service radius",
      ],
    },
    {
      title: "Azle Permits Done Right — City and County",
      bullets: [
        "Azle straddles Tarrant and Parker counties — SWAT confirms the correct jurisdiction before pulling any permit",
        "City of Azle permits for in-city work; Parker County or Tarrant County for ETJ rural addresses",
        "Permits closed with inspection — no open permits left on your property record",
      ],
    },
    {
      title: "Flat-Rate Pricing. No After-Hours Markup.",
      bullets: [
        "Written estimate before any work begins — price holds whether it's 10 a.m. or 2 a.m.",
        "No weekend surcharge, no holiday premium",
        "Diagnostic fee credited toward the repair if you proceed same visit",
      ],
    },
  ],

  faqs: [
    {
      question: "Is there a 24-hour plumber who serves Azle, TX?",
      answer:
        "Yes. S.W.A.T. Plumbing runs 24/7 dispatch from its Fort Worth hub and reaches most Azle addresses in approximately 26 minutes. That covers Cardinal Cove, Eagle Mountain Estates, Downtown Azle, and the Boyd Road corridor. Call 817-438-6142 any hour — a live dispatcher answers, not an automated system.",
    },
    {
      question: "How much does a plumber cost in Azle?",
      answer:
        "S.W.A.T. Plumbing uses flat-rate pricing with a written estimate before any work starts. A standard diagnostic visit runs $89–$149, credited toward the repair if you proceed. Common repairs such as a pressure regulator swap, a toilet rebuild, or a shutoff valve replacement typically run $250–$600 installed. Slab leak detection and whole-house repiping quotes are scoped per job after an on-site diagnostic. Pricing does not change after hours.",
    },
    {
      question: "How long does it take SWAT to reach Azle from Fort Worth?",
      answer:
        "From SWAT's Fort Worth dispatch hub, the drive to most Azle addresses runs approximately 26 minutes under typical traffic conditions. The Eagle Mountain Lake shoreline communities, downtown Azle, and the US-199 corridor all fall within that window. For emergency calls, dispatch goes out immediately upon your call — no hold queue, no relay.",
    },
    {
      question: "Which permit office handles plumbing work in Azle?",
      answer:
        "It depends on the address. Work inside Azle city limits pulls permits through the City of Azle. Rural addresses in the ETJ may fall under Parker County or Tarrant County jurisdiction, depending on exact location. SWAT confirms the correct permit authority before starting any job — pulling a permit under the wrong jurisdiction creates problems at inspection and at resale.",
    },
    {
      question: "Do Azle homes near Eagle Mountain Lake have specific plumbing risks?",
      answer:
        "Yes. Lakeshore homes in Cardinal Cove and Eagle Mountain Estates sit on shallow water tables, which means pier-and-beam foundations face persistent crawlspace moisture. That moisture accelerates corrosion on exposed ferrous fittings and creates conditions for sump pump issues. The lake watershed also delivers hard water high in calcium — without a whole-house softener, scale builds in water heaters and fixture aerators within 18 months.",
    },
  ],

  nearbyCities: [
    { slug: "pelican-bay-tx", name: "Pelican Bay", driveMinutes: 5 },
    { slug: "reno-tx", name: "Reno", driveMinutes: 8 },
    { slug: "lakeside-tx", name: "Lakeside", driveMinutes: 10 },
    { slug: "fort-worth-tx", name: "Fort Worth", driveMinutes: 26 },
  ],

  lastUpdated: "2026-06-16",
}
