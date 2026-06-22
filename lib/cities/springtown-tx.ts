import type { CityConfig } from "./_types"

export const springtown: CityConfig = {
  slug: "springtown-tx",
  name: "Springtown",
  county: "Parker",
  zipCodes: ["76082"],
  geoCenter: { lat: 32.96806, lng: -97.68278 },
  serviceRadiusMiles: 5,
  closestHubSlug: "fort-worth",
  hasGbpListing: false,
  primaryHubSlug: "fort-worth",
  driveTimeMinutes: 34,
  href: "/areas-served/springtown-tx",

  h1: "Plumber in Springtown, TX // Parker County. 24/7 Dispatch.",

  metaTitle: "Plumber in Springtown, TX — Licensed, Fast Response",

  metaDescription:
    "S.W.A.T. Plumbing serves Springtown, TX — licensed master plumbers covering Downtown Springtown, Hunter Ridge, and Plantation Estates. Fort Worth dispatch hub. Call 817-438-6142.",

  heroPainLine:
    "Springtown grew 135% since 2000 — and the older downtown blocks on private wells weren't built for this kind of demand. When a pressure tank fails on a Hunter Ridge well system at midnight, S.W.A.T. Plumbing dispatches from Fort Worth and arrives in about 34 minutes.",

  entityAnchor:
    "S.W.A.T. Plumbing LLC is a licensed master-plumber-operated contractor (TX Master License #M-39596) headquartered at 2111 East FM1187 in Aledo, TX, serving Springtown — a Parker-Wise county seat incorporated in 1884 that has grown 135% since 2000, with a downtown Main Street carrying cast-iron drain lines from the original municipal build — from its Fort Worth dispatch hub since 2013.",

  trustStrip: [
    "34 Min from FW Hub",
    "24/7 Dispatch",
    "TX Master Plumber",
    "Parker County Permits",
    "Flat-Rate Pricing",
  ],

  localIntro:
    "Springtown has grown faster than almost any small city in Parker County — population up 135% since 2000. That growth created a split personality in the city's plumbing infrastructure: the newer subdivisions — Hunter Ridge, Plantation Estates, and the post-2010 slab builds on the outskirts — are approaching the age when pinhole leaks surface for the first time. The older downtown core along Main Street, some of it dating to Springtown's 1884 incorporation, runs on original cast-iron drain lines with decades of root intrusion and scale. Both ends of that spectrum call SWAT.\n\nWater supply is a compounding factor. Springtown pulls from Parker and Wise County aquifer sources, and that water is hard. Mineral buildup in tank-style water heaters accelerates sediment accumulation, which shortens heater life and raises energy costs before the unit ever shows a warning light. Rural-edge properties and some older downtown parcels on private wells face additional challenges: pressure tank failures, pump degradation, and iron or sulfur concentrations that require treatment before the water meets basic quality standards. A water quality test is often the first service call on a new well address. S.W.A.T. Plumbing dispatches from its Fort Worth hub and reaches most Springtown addresses in approximately 34 minutes.\n\nFor permitted work, Springtown issues its own permits regardless of which county side of the city limits a given address falls on. The city straddles Parker and Wise counties along the US-199 alignment, but plumbing permits for addresses inside Springtown city limits route through the City of Springtown — not Parker County, not Wise County. For ETJ addresses outside city limits, the correct permit authority depends on the exact location. SWAT confirms jurisdiction before pulling any permit and closes inspections properly — open permits create problems at resale and can void manufacturer warranties on new installations.",

  neighborhoods: [
    {
      name: "Downtown Springtown / Main Street District",
      note: "1880s–1960s construction; cast-iron drains, root intrusion, aging supply lines",
    },
    {
      name: "Hunter Ridge",
      note: "Post-2010 slab construction approaching pinhole-leak detection window",
    },
    {
      name: "Plantation Estates Area",
      note: "Newer subdivision on slab; hard mineral water accelerates water heater sediment",
    },
    {
      name: "Spring Valley",
      note: "Mixed vintage; some private well systems with pressure tank issues",
    },
    {
      name: "Bronze Circle Area",
      note: "Rural-edge parcels; well pump degradation, water quality testing recommended",
    },
  ],

  commonIssues: [
    "Rapid growth outpacing sewer capacity in older downtown blocks — backflow and slow-drain calls increase as the aging infrastructure handles volume it wasn't designed for.",
    "Private well and pressure tank failures on rural-edge and older downtown parcels — iron, sulfur, and high hardness in Parker and Wise County aquifer water require treatment.",
    "Hard mineral water from local aquifer sources accelerates sediment in water heaters — tank-style units fill with scale and lose efficiency well before their rated service life.",
    "Pre-1960 downtown housing with original cast-iron drain lines — root intrusion and scale cause partial blockages that worsen gradually until the line stops passing flow.",
    "Post-2010 Hunter Ridge and Plantation Estates slab construction approaching the window for first-generation pinhole leak detection and slab-leak evaluation.",
  ],

  serviceHighlights: [
    {
      serviceSlug: "emergency-plumbers",
      localAngle:
        "SWAT dispatches from Fort Worth and reaches most Springtown addresses in approximately 34 minutes — any hour, any day.",
    },
    {
      serviceSlug: "plumbing-leak-repairs",
      localAngle:
        "Post-2010 slab homes in Hunter Ridge approaching first pinhole-leak window — SWAT diagnoses and repairs same visit.",
    },
    {
      serviceSlug: "slab-leak",
      localAngle:
        "Newer Springtown slab construction on Parker County clay soil — electronic leak detection locates failures before any jackhammering begins.",
    },
    {
      serviceSlug: "clogged-drain",
      localAngle:
        "Root intrusion and scale in downtown Springtown cast-iron drains — camera-confirmed clearing removes the blockage and documents the pipe condition.",
    },
    {
      serviceSlug: "sewer-cleaning",
      localAngle:
        "Aging sewer capacity in downtown Springtown blocks — hydro-jetting clears root mass and scale without open trenching.",
    },
    {
      serviceSlug: "gas-line-repair",
      localAngle:
        "Gas line repairs and new appliance connections in Springtown permitted through the City of Springtown — SWAT handles the permit and inspection.",
    },
    {
      serviceSlug: "whole-house-repiping",
      localAngle:
        "Downtown Springtown's oldest homes have original supply lines past service life — SWAT repipes with PEX-A under City of Springtown permit.",
    },
    {
      serviceSlug: "water-softener",
      localAngle:
        "Hard Parker and Wise County aquifer water shortens water heater and fixture life — whole-house softening protects the entire plumbing system.",
    },
  ],

  whySwatPillars: [
    {
      title: "Fort Worth Hub Serves Springtown in 34 Minutes",
      primary: true,
      bullets: [
        "SWAT dispatches from its Fort Worth hub — approximately 34 minutes to most Springtown addresses",
        "24/7 live dispatch — no voicemail, no relay, no morning-only window",
        "Downtown Springtown, Hunter Ridge, and Plantation Estates all within the service radius",
      ],
    },
    {
      title: "Springtown Permits — City and County Sorted",
      bullets: [
        "City of Springtown issues permits for all in-city addresses regardless of Parker or Wise County side",
        "ETJ addresses outside city limits may require Parker County or Wise County permits — SWAT confirms before pulling",
        "Inspections closed properly — no open permits left on your property record",
      ],
    },
    {
      title: "Flat-Rate Pricing. No After-Hours Markup.",
      bullets: [
        "Written estimate before any work begins — no verbal ballparks",
        "Same rate at 10 p.m. as at 10 a.m. — no weekend or holiday premium",
        "Diagnostic fee credited toward the repair if you proceed same visit",
      ],
    },
  ],

  faqs: [
    {
      question: "Is there a 24-hour plumber who serves Springtown, TX?",
      answer:
        "Yes. S.W.A.T. Plumbing runs 24/7 dispatch from its Fort Worth hub and reaches most Springtown addresses in approximately 34 minutes. Downtown Springtown, Hunter Ridge, and the rural-edge parcels along the US-199 corridor are all within the service area. Call 817-438-6142 any time — dispatch answers live.",
    },
    {
      question: "How much does a plumber cost in Springtown?",
      answer:
        "S.W.A.T. Plumbing uses flat-rate pricing with a written estimate before work starts. Standard diagnostic visits typically run $89–$149, credited toward the repair if you proceed. Common repairs — a shutoff valve, a toilet rebuild, a pressure regulator — run $250–$600 installed. Slab leak detection and repiping quotes are scoped after an on-site diagnostic. No after-hours markup.",
    },
    {
      question: "Do you service private well systems in Springtown?",
      answer:
        "Yes. A portion of Springtown's older downtown core and rural-edge properties draw from private wells fed by Parker and Wise County aquifer sources. SWAT handles pressure tank failures, well pump diagnostics, and water quality testing on those addresses. If the water shows high iron, sulfur, or hardness, the team can recommend and install treatment at the same visit.",
    },
    {
      question: "Which permit office handles plumbing work in Springtown?",
      answer:
        "For addresses inside Springtown city limits, all plumbing permits route through the City of Springtown — regardless of whether the address is on the Parker County or Wise County side of the boundary. For addresses in the ETJ outside city limits, the correct permit authority is Parker County or Wise County depending on location. SWAT determines the right jurisdiction before pulling any permit and closes inspections so there are no open permits on your record.",
    },
    {
      question: "Are the newer subdivisions in Springtown prone to plumbing problems?",
      answer:
        "Post-2010 slab builds in Hunter Ridge and Plantation Estates are now entering the window when first-generation pinhole leaks and slab-leak conditions typically surface. Parker County clay soil creates seasonal ground movement that stresses embedded supply lines. If a home in these neighborhoods was built between 2010 and 2018, a plumbing diagnostic inspection is a reasonable precaution — especially before a property sale.",
    },
  ],

  nearbyCities: [
    { slug: "reno-tx", name: "Reno", driveMinutes: 12 },
    { slug: "azle-tx", name: "Azle", driveMinutes: 15 },
    { slug: "newark-tx", name: "Newark", driveMinutes: 15 },
    { slug: "fort-worth-tx", name: "Fort Worth", driveMinutes: 34 },
  ],

  lastUpdated: "2026-06-16",
}
