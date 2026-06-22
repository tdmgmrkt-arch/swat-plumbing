import type { CityConfig } from "./_types"

export const trophyClub: CityConfig = {
  slug: "trophy-club-tx",
  name: "Trophy Club",
  county: "Denton",
  zipCodes: ["76262"],
  geoCenter: { lat: 32.9909, lng: -97.18 },
  serviceRadiusMiles: 4,
  closestHubSlug: "fort-worth",
  hasGbpListing: false,
  primaryHubSlug: "fort-worth",
  driveTimeMinutes: 28,
  href: "/areas-served/trophy-club-tx",

  h1: "Plumber in Trophy Club, TX // Golf-Community Standards. 28 Min from Fort Worth.",

  metaTitle: "Plumber in Trophy Club, TX — 24/7 Master Plumber Service",

  metaDescription:
    "S.W.A.T. Plumbing serves Trophy Club from its Fort Worth hub — 28 minutes to Trophy Club Country Club Estates, The Highlands, and Grapevine Lake corridor. Licensed master plumbers, flat-rate pricing, 24/7 dispatch.",

  heroPainLine:
    "Trophy Club runs on its own Municipal Utility District water supply — a different system than Fort Worth or Denton, with its own chemistry and its own quirks. S.W.A.T. Plumbing reaches most Trophy Club addresses in about 28 minutes from Fort Worth.",

  entityAnchor:
    "S.W.A.T. Plumbing LLC is a licensed master-plumber-operated contractor (TX Master License #M-39596) headquartered at 2111 East FM1187 in Aledo, TX, serving Trophy Club — a master-planned community that operates through its own Municipal Utility District for independent water and wastewater treatment, with golf-course-adjacent lots receiving reclaimed irrigation water — from its Fort Worth dispatch hub since 2013.",

  trustStrip: [
    "<30 Min from Hub",
    "Texas Master Plumber",
    "24/7 Dispatch",
    "Flat-Rate Pricing",
    "Family Owned",
  ],

  localIntro:
    "Trophy Club incorporated in 1985 and built out in phases through the 2010s. Phase-one homes from the late 1980s and 1990s are now approaching 30 to 40 years old — which puts them squarely in the range where supply lines, water heaters, main shutoffs, and sewer lateral access points are due for attention. S.W.A.T. Plumbing dispatches from Fort Worth and reaches most Trophy Club addresses in about 28 minutes.\n\nThe most important utility distinction in Trophy Club is one that surprises many contractors: Trophy Club operates through its own Municipal Utility District. The Trophy Club MUD — not Fort Worth, not Denton, not Tarrant or Denton County — owns and operates the water and wastewater treatment infrastructure that serves the city. Water chemistry in Trophy Club varies from the surrounding systems precisely because it is treated independently. Golf-course-adjacent lots receive reclaimed irrigation water for landscape use, and in some older phase-one builds, reclaimed and potable cross-connection risks exist at outdoor hose bibs and irrigation backflow assemblies. That distinction matters for diagnostic work — an outside contractor who assumes Trophy Club runs on standard Fort Worth supply may misread the water quality data.\n\nPhase-one Trophy Club Country Club Estates (1985–1995) carries original copper supply lines, cast iron drain stacks in some cases, and — in a minority of early builds — polybutylene-era fittings mixed with copper. The Highlands and other 2000s-era phases shifted to CPVC and early PEX. Grapevine Lake proximity on the southwestern edge creates seasonal groundwater elevation swings that affect slab moisture and hydrostatic pressure on drain laterals. Custom homes throughout the city run high-end fixture loads: steam rooms, spa tubs, pot-fillers, and thermostatic shower systems that stress original supply sizing in phase-one builds not designed for that demand. All qualifying work is permitted through Town of Trophy Club Development Services — separate from both Denton and Tarrant County processes. S.W.A.T. Plumbing confirms the correct jurisdiction before work begins on any Trophy Club job.",

  neighborhoods: [
    {
      name: "Trophy Club Country Club Estates",
      note: "Original 1973-concept parcels; phase-one 1985–1995 homes approaching 30–40 year system milestones.",
    },
    {
      name: "The Highlands at Trophy Club",
      note: "2000s–2010s phase; CPVC and early PEX construction; high-end fixture loads.",
    },
    {
      name: "Trophy Club Estates",
      note: "1990s residential lake-adjacent; Grapevine Lake proximity; seasonal groundwater elevation swings.",
    },
  ],

  commonIssues: [
    "Trophy Club MUD operates water and wastewater independently — water chemistry differs from surrounding Fort Worth and Denton systems; outside contractors who miss this misread diagnostic data.",
    "Golf-course-adjacent properties receive reclaimed irrigation water — landscape backflow assembly failures and cross-connection risk at outdoor hose bibs are a recurring issue in older phase-one homes.",
    "Phase-one Trophy Club Country Club Estates homes (1985–1995) carry original copper supply lines with polybutylene-era fittings in some builds — selective failure patterns are active, not theoretical.",
    "Grapevine Lake proximity on the SW edge creates seasonal groundwater elevation swings — hydrostatic pressure on drain laterals and slab moisture events follow heavy rainfall.",
    "High-end fixture loads in golf-community custom homes — steam rooms, spa tubs, pot-fillers — stress original supply sizing in phase-one builds designed before those amenities were standard.",
  ],

  serviceHighlights: [
    {
      serviceSlug: "emergency-plumbers",
      localAngle:
        "S.W.A.T. Plumbing dispatches from Fort Worth and reaches Trophy Club Country Club Estates and The Highlands in about 28 minutes — 24/7, any hour.",
    },
    {
      serviceSlug: "plumbing-leak-repairs",
      localAngle:
        "Phase-one copper supply lines with polybutylene-era fittings in Trophy Club's 1985–1995 homes — pinhole and fitting failures diagnosed and repaired same visit.",
    },
    {
      serviceSlug: "slab-leak",
      localAngle:
        "Grapevine Lake groundwater fluctuations and golf-course-adjacent soil moisture cycles drive slab movement in Trophy Club — electronic leak detection pinpoints the break before concrete is touched.",
    },
    {
      serviceSlug: "clogged-drain",
      localAngle:
        "MUD-treated water with its own chemistry profile accelerates scale buildup in drain lines — camera-confirmed clearing identifies the root cause in phase-one Trophy Club homes.",
    },
    {
      serviceSlug: "sewer-cleaning",
      localAngle:
        "Seasonal high groundwater from Grapevine Lake proximity increases infiltration risk in sewer laterals — hydro-jetting clears debris load and camera confirms lateral integrity.",
    },
    {
      serviceSlug: "gas-line-repair",
      localAngle:
        "Outdoor kitchen and interior gas line work in Trophy Club custom homes — pressure-tested and permitted with Town of Trophy Club Development Services.",
    },
    {
      serviceSlug: "tankless-water-heaters",
      localAngle:
        "Trophy Club MUD water chemistry varies from surrounding systems — S.W.A.T. Plumbing tests supply hardness at the meter before sizing and installing Navien or Rinnai units.",
    },
    {
      serviceSlug: "water-filtration",
      localAngle:
        "Whole-home filtration and softening matched to Trophy Club MUD supply chemistry — protecting steam rooms, spa tubs, and premium fixtures in golf-community custom homes.",
    },
  ],

  whySwatPillars: [
    {
      title: "Fort Worth Hub — 28 Minutes to Trophy Club.",
      primary: true,
      bullets: [
        "Dispatches from Camp Bowie West in Fort Worth — typically 28 minutes to Trophy Club Country Club Estates, The Highlands, and Trophy Club Estates",
        "24/7 live dispatch — a real person answers every call at any hour",
        "Custom-home diagnostic experience: high-end fixture systems and complex supply configurations handled on every visit",
      ],
    },
    {
      title: "Trophy Club MUD — The Utility Distinction That Matters.",
      bullets: [
        "Trophy Club MUD operates water and wastewater independently of surrounding systems — S.W.A.T. Plumbing accounts for distinct water chemistry rather than assuming Fort Worth or Denton supply",
        "All qualifying work permitted through Town of Trophy Club Development Services — separate from both Denton and Tarrant County processes",
        "City straddles the Denton/Tarrant county line — S.W.A.T. Plumbing confirms the correct inspection jurisdiction before pulling any permit",
      ],
    },
    {
      title: "Flat-Rate Pricing. No After-Hours Surcharge.",
      bullets: [
        "Written quote before any work begins — price holds from diagnosis through completion",
        "No after-hours markup — same flat rate at 2 a.m. as at noon",
        "Financing available for tankless conversions, filtration systems, and major repairs",
      ],
    },
  ],

  faqs: [
    {
      question: "Is there a 24-hour emergency plumber in Trophy Club, TX?",
      answer:
        "Yes. S.W.A.T. Plumbing operates 24/7 dispatch from its Fort Worth hub on Camp Bowie West — approximately 28 minutes from most Trophy Club addresses. Call 817-438-6955 any hour. A live dispatcher answers every call and routes the nearest available crew. Trophy Club Country Club Estates, The Highlands, and Trophy Club Estates are all within the primary service zone.",
    },
    {
      question: "What is the Trophy Club MUD and why does it matter for plumbing?",
      answer:
        "Trophy Club Municipal Utility District operates the city's water and wastewater treatment infrastructure independently — it is not connected to Fort Worth, Denton, or either county's utility systems. That means water chemistry in Trophy Club can differ from surrounding areas. A contractor who assumes standard Fort Worth or Denton supply water may size a whole-home softener or water treatment system incorrectly. S.W.A.T. Plumbing tests supply hardness and chemistry at the meter before specifying any treatment system in Trophy Club.",
    },
    {
      question: "Do you pull permits with the Town of Trophy Club?",
      answer:
        "Yes. All qualifying plumbing work in Trophy Club is permitted through Town of Trophy Club Development Services — not through Denton County or Tarrant County separately. The Trophy Club MUD's utility authority is distinct from the town's permitting authority; they are two separate entities. Trophy Club also straddles the Denton and Tarrant county lines. S.W.A.T. Plumbing confirms the correct jurisdiction for both permitting and inspection before work begins.",
    },
    {
      question: "Why do some older Trophy Club homes have plumbing failures more often?",
      answer:
        "Phase-one Trophy Club Country Club Estates homes built between 1985 and 1995 are now 30 to 40 years old. Original copper supply lines with polybutylene-era fittings in some of these builds are past expected service life. Grapevine Lake proximity on the southwestern edge creates seasonal groundwater elevation swings that load slab moisture and drain lateral hydrostatic pressure. High-end fixture additions — steam rooms, spa tubs, pot-fillers — strain supply lines that were not originally sized for that demand. These factors combine in phase-one Trophy Club homes to produce a higher frequency of service calls than the city's newer inventory.",
    },
    {
      question: "Does S.W.A.T. Plumbing serve all of Trophy Club, including golf-course-adjacent lots?",
      answer:
        "Yes. S.W.A.T. Plumbing serves all of Trophy Club including golf-course-adjacent properties. Reclaimed irrigation water on golf-adjacent lots creates specific backflow assembly and cross-connection inspection needs that require a plumber familiar with MUD-operated systems. The team carries backflow test equipment and is familiar with the reclaimed-water landscape irrigation configuration common in Trophy Club's original golf-community lots.",
    },
    {
      question: "Does S.W.A.T. Plumbing use its own crew in Trophy Club, or subcontractors?",
      answer:
        "S.W.A.T. Plumbing does not subcontract plumbing work. Every technician dispatched to a Trophy Club address is a direct SWAT employee — background-checked, licensed, and working under the supervision of a Texas Master Plumber. The crew that diagnoses the problem is the crew that fixes it. No third-party handoffs.",
    },
  ],

  nearbyCities: [
    { slug: "southlake-tx", name: "Southlake", driveMinutes: 8 },
    { slug: "westlake-tx", name: "Westlake", driveMinutes: 5 },
    { slug: "flower-mound-tx", name: "Flower Mound", driveMinutes: 10 },
    { slug: "fort-worth-tx", name: "Fort Worth", driveMinutes: 28 },
  ],

  lastUpdated: "2026-06-16",
}
