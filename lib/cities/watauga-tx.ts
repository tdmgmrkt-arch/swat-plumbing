import type { CityConfig } from "./_types"

export const watauga: CityConfig = {
  slug: "watauga-tx",
  name: "Watauga",
  county: "Tarrant",
  zipCodes: ["76148", "76137"],
  geoCenter: { lat: 32.867, lng: -97.255 },
  serviceRadiusMiles: 4,
  closestHubSlug: "fort-worth",
  hasGbpListing: false,
  primaryHubSlug: "fort-worth",
  driveTimeMinutes: 16,
  href: "/areas-served/watauga-tx",

  h1: "Plumber in Watauga, TX // Surrounded by Four Cities. Own Permits. Fast from Fort Worth.",

  metaTitle: "Plumber in Watauga, TX — 24/7 Master Plumber Service",

  metaDescription:
    "S.W.A.T. Plumbing serves Watauga from its Fort Worth hub — 16 minutes to Capp Smith, Watauga Park, and the Keller ISD boundary zone. 1970s–90s repipe and emergency service, flat-rate pricing, 24/7.",

  heroPainLine:
    "Watauga is a four-city enclave — completely surrounded by Keller, Fort Worth, Haltom City, and North Richland Hills, with its own city government and its own permit authority. Most of the housing stock was built in the 1970s and 1980s, and those systems are past their expected service life. S.W.A.T. Plumbing is 16 minutes away from Fort Worth.",

  entityAnchor:
    "S.W.A.T. Plumbing LLC is a licensed master-plumber-operated contractor (TX Master License #M-39596) headquartered at 2111 East FM1187 in Aledo, TX, serving Watauga — an entirely landlocked city bordered by Keller, Fort Worth, Haltom City, and North Richland Hills, with 1970s–80s housing carrying single-wall ABS drain piping — from its Fort Worth dispatch hub since 2013.",

  trustStrip: [
    "<20 Min from Hub",
    "Texas Master Plumber",
    "24/7 Dispatch",
    "1970s–90s Specialist",
    "Flat-Rate Pricing",
  ],

  localIntro:
    "Watauga is landlocked on all four sides: Keller to the north, Fort Worth to the west, Haltom City to the southwest, and North Richland Hills to the south and east. No ETJ buffer. The city line hits a neighbor's city line on every side. Permit authority stays entirely with the City of Watauga — work inside city limits goes through Watauga City Hall, regardless of which neighboring city looks closer on a map. S.W.A.T. Plumbing confirms the jurisdictional boundary before any permit is pulled and reaches most Watauga addresses in about 16 minutes from Fort Worth.\n\nThe Capp Smith area and the Watauga Park corridor represent the original 1970s and early 1980s construction. These homes carry galvanized supply line connections at main shutoffs and water heater inlets that have been narrowing from mineral deposit buildup for 45 to 50 years. Single-wall ABS drain piping — common in 1970s construction before dual-wall ABS became standard — becomes brittle at joints with age and temperature cycling. Watauga receives a blended north Tarrant wholesale water supply at moderate hardness — sufficient to accumulate scale in aerators, angle-stop valves, and tankless heat exchanger coils over the multi-decade timeframe these homes have been occupied.",

  neighborhoods: [
    {
      name: "Capp Smith Area",
      note: "Park-adjacent, established 1970s–80s residential; galvanized supply connections and single-wall ABS drain piping at replacement age.",
    },
    {
      name: "Watauga Park Corridor",
      note: "Central, original mid-cities tract development; 1970s–80s housing stock uniformly aging into major system service cycles.",
    },
    {
      name: "Keller ISD Boundary Zone",
      note: "NW Watauga, 1990s–2000s construction; newer builds but still 25–35 years old; drain system aging beginning.",
    },
  ],

  commonIssues: [
    "Galvanized supply line connections at main shutoffs and water heater inlets in 1970s–80s Watauga homes — interior diameter has narrowed over 45 years of mineral accumulation, reducing whole-house pressure.",
    "Single-wall ABS drain piping in original Capp Smith and Watauga Park corridor homes becomes brittle at joints with age and temperature cycling — crack and leak failures emerge at horizontal runs and cleanout connectors.",
    "Watauga is entirely surrounded by four cities — permit authority stays with City of Watauga regardless of proximity to a neighbor's boundary, and address confusion causes contractors to pull permits from the wrong entity.",
    "Blended north Tarrant wholesale water at moderate hardness accumulates scale in aerators, angle-stop valves, and tankless coils over the 45-year occupancy timeframe of these homes.",
    "Dense mid-cities location with 2.7% vacancy and high daily occupancy generates call frequency per square mile that exceeds comparably sized suburban cities — systems that get heavy use fail on schedule.",
  ],

  serviceHighlights: [
    {
      serviceSlug: "emergency-plumbers",
      localAngle:
        "S.W.A.T. Plumbing dispatches from Fort Worth and reaches Capp Smith, Watauga Park, and the Keller ISD boundary zone in about 16 minutes — 24/7, any day.",
    },
    {
      serviceSlug: "plumbing-leak-repairs",
      localAngle:
        "Galvanized supply connection failures and single-wall ABS drain joint cracks in Watauga's 1970s–80s homes — diagnosed and repaired without over-selling a full repipe when a targeted repair is the right call.",
    },
    {
      serviceSlug: "slab-leak",
      localAngle:
        "Forty-five-year-old supply lines in Watauga's original slab-on-grade tract homes — electronic detection and thermal imaging locate the failure point before concrete is touched.",
    },
    {
      serviceSlug: "clogged-drain",
      localAngle:
        "Brittle ABS drain joints and scale-narrowed galvanized stub-outs in Watauga's 1970s homes accelerate blockage events — camera confirms the failure mode before cable or hydro-jet is applied.",
    },
    {
      serviceSlug: "sewer-cleaning",
      localAngle:
        "Aging sewer laterals in Watauga's original 1970s–80s construction cleared with hydro-jetting — camera inspection confirms full-line integrity, not just a cleared blockage point.",
    },
    {
      serviceSlug: "gas-line-repair",
      localAngle:
        "Gas line work in Watauga residential structures — pressure-tested and permitted through City of Watauga on all qualifying jobs, confirmed separate from all four surrounding city permit authorities.",
    },
    {
      serviceSlug: "whole-house-repiping",
      localAngle:
        "Galvanized supply systems in Watauga's 1970s–80s Capp Smith and Watauga Park homes repiped with PEX-A — permitted through City of Watauga, inspected, and properly closed.",
    },
    {
      serviceSlug: "water-softener",
      localAngle:
        "Moderate north Tarrant hardness accumulates in aerators and angle stops across 45 years of use in Watauga homes — whole-house softening protects the remaining supply infrastructure.",
    },
  ],

  whySwatPillars: [
    {
      title: "Fort Worth Hub — 16 Minutes to Watauga.",
      primary: true,
      bullets: [
        "Dispatches from Camp Bowie West in Fort Worth — typically 16 minutes to Capp Smith, Watauga Park corridor, and Keller ISD boundary zone addresses",
        "24/7 live dispatch — a real person answers at any hour",
        "1970s–80s housing diagnostic experience: galvanized supply, single-wall ABS drain, and aging slab systems handled correctly",
      ],
    },
    {
      title: "Watauga Permits — Four-City Enclave, One Correct Authority.",
      bullets: [
        "Watauga is entirely surrounded by Keller, Fort Worth, Haltom City, and North Richland Hills — permit authority stays with City of Watauga regardless of which neighbor looks closer on a map",
        "S.W.A.T. Plumbing confirms Watauga city limits jurisdiction before pulling any permit — pulling through a neighboring city's system is a common mistake that delays inspections and creates open-permit problems",
        "All qualifying work permitted through Watauga City Hall — inspections scheduled and closed before job completion",
      ],
    },
    {
      title: "Flat-Rate Pricing. No After-Hours Surcharge.",
      bullets: [
        "Written quote before any work begins — price holds from diagnosis through completion",
        "No after-hours markup — same flat rate at 2 a.m. as at noon",
        "Financing available for whole-house repiping, slab repair, and major drain system replacement",
      ],
    },
  ],

  faqs: [
    {
      question: "Is there a 24-hour emergency plumber in Watauga, TX?",
      answer:
        "Yes. S.W.A.T. Plumbing operates 24/7 dispatch from its Fort Worth hub on Camp Bowie West — approximately 16 minutes from most Watauga addresses. Call 817-438-6955 any hour. A live dispatcher answers every call and routes the nearest available crew. Capp Smith, Watauga Park corridor, and the northwest Keller ISD boundary zone are all within the primary service zone.",
    },
    {
      question: "Watauga is surrounded by other cities — which city handles permits for my home?",
      answer:
        "City of Watauga. Watauga is completely landlocked — Keller to the north, Fort Worth to the west, Haltom City to the southwest, North Richland Hills to the south and east. Despite being surrounded on all sides, Watauga maintains its own city government and its own full permitting authority through Watauga City Hall. Plumbing permits, inspection scheduling, and permit closings all go through Watauga regardless of which neighboring city your address is physically closest to. Pulling a permit through a neighboring city by mistake creates open-permit problems that affect your title. S.W.A.T. Plumbing confirms city limits jurisdiction before any permit is pulled.",
    },
    {
      question: "Why are so many Watauga homes having plumbing failures now?",
      answer:
        "Watauga's housing stock is almost entirely 1970s and 1980s construction — built during the DFW mid-cities population surge. Those homes are now 40 to 50 years old. Galvanized supply connections at main shutoffs and water heater inlets have narrowed from mineral accumulation over decades of use. Single-wall ABS drain piping in original Capp Smith and Watauga Park homes becomes brittle at joints with age and temperature cycling. Slab supply lines have been under load for four-plus decades. The failures are not random — they are predictable outcomes of systems built in 1975 being used in 2026.",
    },
    {
      question: "Does my 1970s Watauga home need to be fully repiped?",
      answer:
        "Not necessarily. Some 1970s Watauga homes have galvanized connections only at the main shutoff, water heater, and select fixtures — not throughout the whole distribution system. A targeted galvanized replacement at those failure points can restore function without a full repipe. Other homes have galvanized throughout and benefit from full PEX-A replacement. S.W.A.T. Plumbing assesses the actual pipe material and condition present before recommending any scope. A repipe assessment is part of the diagnostic visit.",
    },
    {
      question: "Does S.W.A.T. Plumbing pull permits with the City of Watauga?",
      answer:
        "Yes. All qualifying plumbing work in Watauga is permitted through City of Watauga Development Services — not through any of the four surrounding cities. S.W.A.T. Plumbing handles the permit application, coordinates the inspection, and ensures the permit is formally closed before the job is complete. An open permit on a Watauga property can create complications at resale.",
    },
    {
      question: "Does S.W.A.T. Plumbing use its own crew in Watauga, or subcontractors?",
      answer:
        "S.W.A.T. Plumbing does not subcontract plumbing work. Every technician dispatched to a Watauga address is a direct SWAT employee — background-checked, licensed, and working under the supervision of a Texas Master Plumber. The crew that diagnoses the problem is the crew that performs the repair. No third-party handoffs.",
    },
  ],

  nearbyCities: [
    { slug: "north-richland-hills-tx", name: "North Richland Hills", driveMinutes: 5 },
    { slug: "keller-tx", name: "Keller", driveMinutes: 8 },
    { slug: "haltom-city-tx", name: "Haltom City", driveMinutes: 8 },
    { slug: "fort-worth-tx", name: "Fort Worth", driveMinutes: 16 },
  ],

  lastUpdated: "2026-06-16",
}
