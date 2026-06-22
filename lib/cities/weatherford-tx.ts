import type { CityConfig } from "./_types"

export const weatherford: CityConfig = {
  slug: "weatherford-tx",
  name: "Weatherford",
  county: "Parker",
  zipCodes: ["76085", "76086", "76087", "76088"],
  geoCenter: { lat: 32.7593, lng: -97.7972 },
  serviceRadiusMiles: 7,
  closestHubSlug: "aledo",
  hasGbpListing: false,
  primaryHubSlug: "aledo",
  driveTimeMinutes: 16,
  href: "/areas-served/weatherford-tx",

  h1: "Plumber in Weatherford, TX // 16 Minutes from Our Aledo HQ.",

  metaTitle: "Plumber in Weatherford, TX — 24/7 Parker County Service",

  metaDescription:
    "S.W.A.T. Plumbing serves Weatherford, TX from its Aledo HQ — 16 minutes away. Licensed master plumbers for galvanized repipes, slab leaks, well systems & drain cleaning. Call 817-438-6142.",

  heroPainLine:
    "The Victorian-era homes north of US-180 near the Parker County Courthouse are still running on original galvanized supply lines — corroded narrow and running brown. S.W.A.T. Plumbing is 16 minutes from Downtown Historic Core when that call comes in.",

  entityAnchor:
    "S.W.A.T. Plumbing LLC is a licensed master-plumber-operated contractor (TX Master License #M-39596) headquartered at 2111 East FM1187 in Aledo, TX, serving Weatherford — the Parker County seat where Victorian-era homes north of US-180 near the courthouse carry original galvanized supply and 35 inches of annual rainfall saturates clay sewer laterals — from its Aledo dispatch hub since 2013.",

  trustStrip: [
    "16 Min from Aledo HQ",
    "Texas Master Plumber",
    "24/7 Dispatch",
    "Flat-Rate Pricing",
    "Family Owned",
  ],

  localIntro:
    "Weatherford carries two distinct plumbing realities under the same zip code. The Downtown Historic Core, Cherry Park, and Old Town East Side run on housing stock built between the 1890s and 1950s — Queen Anne and Victorian-era homes with original galvanized steel supply lines and clay sewer laterals. Galvanized corrodes inward. The interior diameter on a 70-year-old galvanized supply line is often less than half what it was when the pipe was installed. Homeowners in those neighborhoods know the signs: water pressure that drops at the showerhead when the kitchen faucet opens, rust-tinted water on a morning flush, and fittings that weep at every joint. Parker County's 35 inches of annual rainfall saturates the ground each spring, pushing roots into every joint gap in those aging clay laterals. Drain calls in the historic core spike every April and May without fail.\n\nThe western and southern growth corridors tell a different story. Crown Pointe, Clear Fork Estates, and Quail Ridge were built on slab-on-grade foundations in the 1990s and 2000s — modern pipe, modern fixtures, and a Blackland Prairie-adjacent clay subsoil that shifts with every seasonal moisture swing. When a dry Parker County summer pulls water out of the clay, slabs contract. ABS drain stub-outs flex with that movement, and stress cracks develop at the fittings. Slab leak calls in those newer neighborhoods cluster between July and October — the same drought window that causes the most severe clay shrink.\n\nUnincorporated Parker County parcels outside city limits add a third layer. Private wells drawing from the Parker County limestone aquifer carry elevated iron and hardness — enough that water quality treatment is routine maintenance rather than an optional upgrade. Septic backups on rural parcels east and west of Weatherford are a significant share of emergency dispatch. S.W.A.T. Plumbing operates out of Aledo, 16 minutes from the Parker County Courthouse, with a crew that has worked both the historic galvanized side of town and the new-build slab corridors.",

  neighborhoods: [
    {
      name: "Downtown Historic Core",
      note: "1890s–1930s Victorian stock; galvanized supply, clay sewer laterals",
    },
    {
      name: "Cherry Park",
      note: "Pre-WWII homes; cast iron drains, root intrusion from mature trees",
    },
    {
      name: "Old Town East Side",
      note: "Aging galvanized supply, low pressure a recurring complaint",
    },
    {
      name: "Crown Pointe",
      note: "1990s–2000s slab; ABS fittings stressed by expansive clay movement",
    },
    {
      name: "Clear Fork Estates",
      note: "Slab construction; slab leak risk elevated in dry summer cycles",
    },
    {
      name: "Holland Lake",
      note: "Mixed vintage; proximity to Holland Lake Park, tree root laterals",
    },
    {
      name: "Hilltop",
      note: "Elevated lots, variable pressure; well parcels in ETJ fringe",
    },
    {
      name: "Quail Ridge",
      note: "2000s subdivision; first-generation fixture and water heater replacements",
    },
  ],

  commonIssues: [
    "Galvanized steel supply lines in pre-1950 homes north of US-180 have corroded to a fraction of their original diameter — brown-tinted water and low fixture pressure are the visible signs.",
    "Clay sewer laterals in the historic core collect root intrusion every spring after Parker County's rainfall saturates the ground — drain calls peak April through May.",
    "Unincorporated Parker County wells deliver elevated iron and hardness from the limestone aquifer — water treatment is maintenance, not a luxury, on those parcels.",
    "Lake Weatherford supply experiences seasonal turbidity spikes after heavy rain — sediment accumulates in older tank water heaters, shortening anode rod life and accelerating tank failure.",
    "Expansive clay in Crown Pointe and Clear Fork Estates shifts during summer drought cycles — ABS drain stub-outs crack at fittings, and slab-leak calls cluster between July and October.",
  ],

  serviceHighlights: [
    {
      serviceSlug: "emergency-plumbers",
      localAngle:
        "S.W.A.T. Plumbing dispatches from Aledo — 16 minutes to the Parker County Courthouse area, 24 hours a day.",
    },
    {
      serviceSlug: "plumbing-leak-repairs",
      localAngle:
        "Corroded galvanized supply lines in Weatherford's historic core leak at fittings — pinhole diagnosis and repair same visit.",
    },
    {
      serviceSlug: "slab-leak",
      localAngle:
        "Crown Pointe and Clear Fork Estates slab-leak calls peak July through October when Parker County clay shrinks hardest.",
    },
    {
      serviceSlug: "clogged-drain",
      localAngle:
        "Root intrusion into clay laterals in Cherry Park and Old Town spikes every spring — cable clear plus camera confirms the extent.",
    },
    {
      serviceSlug: "sewer-cleaning",
      localAngle:
        "Historic-core clay sewer joints are prime root entry points — hydro-jetting restores full capacity and camera confirms clear passage.",
    },
    {
      serviceSlug: "gas-line-repair",
      localAngle:
        "Older Weatherford homes with aging black iron gas lines pressure-tested and permitted with City of Weatherford Building Inspections.",
    },
    {
      serviceSlug: "whole-house-repiping",
      localAngle:
        "Galvanized supply systems in Weatherford's Victorian-era homes repiped with PEX-A — permits pulled through City of Weatherford Building Inspections on Palo Pinto St.",
    },
    {
      serviceSlug: "trenchless-repair",
      localAngle:
        "Aging clay and cast iron sewer laterals under Weatherford's historic lots lined without excavating through mature landscaping.",
    },
  ],

  whySwatPillars: [
    {
      title: "Aledo HQ — 16 Minutes to Downtown Weatherford.",
      primary: true,
      bullets: [
        "Dispatched from 2111 East FM1187 in Aledo — not routed from Fort Worth",
        "16-minute drive reaches the Parker County Courthouse area during off-peak hours",
        "24/7 dispatch covers Peach Festival weekends and rural Parker County emergencies alike",
      ],
    },
    {
      title: "Texas Master Plumber + Weatherford Permits.",
      bullets: [
        "All work performed under a licensed Texas Master Plumber — not supervised apprentice-only jobs",
        "Permits pulled through City of Weatherford Building Inspections at 303 Palo Pinto St for incorporated addresses",
        "Parker County handles unincorporated ETJ and rural parcels — SWAT files with the correct jurisdiction",
      ],
    },
    {
      title: "Flat-Rate Pricing. No After-Hours Markup.",
      bullets: [
        "Written estimate delivered before any wrench turns — no verbal ballparks",
        "Rate does not change between 8 AM and 2 AM",
        "Financing available for whole-house repipe and major sewer repair projects",
      ],
    },
  ],

  faqs: [
    {
      question: "Is there a 24-hour emergency plumber in Weatherford, TX?",
      answer:
        "Yes. S.W.A.T. Plumbing runs 24/7 dispatch from its Aledo headquarters at 2111 East FM1187 — 16 minutes from the Parker County Courthouse. For plumbing emergencies in Weatherford's 76085, 76086, 76087, or 76088 zip codes, call 817-438-6142. A live dispatcher answers — no voicemail queue, no relay to a call center.",
    },
    {
      question: "How much does a plumber cost in Weatherford or Parker County?",
      answer:
        "S.W.A.T. Plumbing uses flat-rate pricing with a written estimate before work starts — no pricing is given verbally and changed after the fact. The cost depends on the job type: a diagnostic visit, a drain clear, a water heater replacement, or a galvanized repipe are all scoped differently. Pricing does not increase after hours. Ask for the estimate on the first call.",
    },
    {
      question: "Why are galvanized supply lines such a problem in Weatherford?",
      answer:
        "Homes in Weatherford's Downtown Historic Core and Cherry Park were built between the 1890s and 1950s, when galvanized steel was the standard supply pipe. Galvanized corrodes from the inside out — mineral deposits and rust accumulate on the interior walls for decades. By the time pressure drops at fixtures or water runs brown, the pipe interior may have narrowed to 30–40% of its original diameter. Replacement with PEX-A is the permanent solution. S.W.A.T. Plumbing has repiped numerous historic-era homes in Parker County and coordinates permits through City of Weatherford Building Inspections.",
    },
    {
      question: "Do you serve unincorporated Parker County and private well properties?",
      answer:
        "Yes. S.W.A.T. Plumbing serves Weatherford's incorporated addresses and unincorporated Parker County ETJ parcels. Private well systems are common in the Weatherford area — the team carries water quality test kits and is experienced with iron filtration, sulfur treatment, pressure tank diagnosis, and well pump failures. Permits for unincorporated work are pulled through Parker County rather than the city.",
    },
    {
      question: "Do you pull permits in Weatherford for plumbing work?",
      answer:
        "Yes. Any work that requires a permit — water heater replacements, sewer repairs, gas-line work, repipes — is permitted through the City of Weatherford Building Inspections office at 303 Palo Pinto St for addresses inside city limits. For parcels in the unincorporated ETJ, Parker County handles permits. Either way, SWAT files and closes the permit as part of the job.",
    },
    {
      question: "Does S.W.A.T. Plumbing use its own crew or subcontractors?",
      answer:
        "S.W.A.T. Plumbing does not subcontract field work. Every technician dispatched to a Weatherford address is a direct employee — background-checked and working under a licensed Texas Master Plumber. The same crew that diagnoses the problem is the crew that fixes it.",
    },
  ],

  nearbyCities: [
    { slug: "aledo-tx", name: "Aledo", driveMinutes: 13 },
    { slug: "willow-park-tx", name: "Willow Park", driveMinutes: 6 },
    { slug: "hudson-oaks-tx", name: "Hudson Oaks", driveMinutes: 8 },
    { slug: "fort-worth-tx", name: "Fort Worth", driveMinutes: 34 },
  ],

  lastUpdated: "2026-06-16",
}
