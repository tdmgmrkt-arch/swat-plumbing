import type { ServiceConfig } from "./_types"

export const plumbingPumps: ServiceConfig = {
  slug: "plumbing-pumps",
  href: "/plumbing/plumbing-pumps",
  h1: "Plumbing Pumps // Install & Service",
  name: "Plumbing Pumps",
  metaTitle: "Sump, Sewage, & Well Pump Service — Aledo & Fort Worth, TX",
  metaDescription:
    "Sump pump, sewage ejector, well pump, and booster pump install and service across Aledo & Fort Worth. 24/7 emergency response when the pump fails.",
  heroPainLine:
    "A failed pump is a flooded basement, a backed-up sewer line, or a house without water. S.W.A.T. Plumbing installs and services sump, sewage ejector, well, and booster pumps — including the emergency call when yours stops at 2 a.m.",
  trustStrip: [
    "24/7 Dispatch",
    "Licensed & Insured",
    "Pumps On Truck",
    "Battery Backup",
    "Family Owned",
  ],
  problemIntro:
    "Plumbing pumps are the safety net you don't think about until they fail. Sump pumps keep basements dry. Sewage ejectors lift waste from below-grade fixtures to the main sewer. Well pumps supply water to rural North Texas homes. Booster pumps fix low city pressure. S.W.A.T. Plumbing carries common pump sizes on the truck, installs with battery backup where the application warrants it, and dispatches 24/7 for failures.",
  problemSigns: [
    "Sump pump running continuously or not running during rain",
    "Water in the basement or crawlspace after recent rain",
    "Sewage backing up in a below-grade fixture (basement bath, laundry)",
    "Sewage ejector pump cycling repeatedly or making unusual noise",
    "Well pump short-cycling or losing prime",
    "Low water pressure throughout the house on well water",
    "Booster pump installed but pressure still drops at peak use",
    "Pump older than 10 years (sump) or 15 years (well)",
  ],
  processSteps: [
    {
      number: "01",
      label: "Diagnose",
      title: "Failure Mode + Sizing Check.",
      description:
        "We test the existing pump (or pit), check the float switch, inspect the discharge plumbing and check valve, and verify the pump is sized correctly for the application. Undersized sump pumps that run constantly burn out years early; we don't repeat the mistake.",
    },
    {
      number: "02",
      label: "Match",
      title: "Right Pump for the Job.",
      description:
        "Sump applications: cast-iron or thermoplastic pumps with the right GPH for your water table. Sewage ejector: pumps rated for solids handling, sized for fixture count. Well: submersible or jet pump matched to depth and demand. Booster: matched to existing pressure and target. Spec before approval.",
    },
    {
      number: "03",
      label: "Install",
      title: "Code-Compliant Discharge.",
      description:
        "Discharge plumbing, check valves, and unions are installed or refreshed during pump replacement — the new pump shouldn't be paired with a corroded check valve about to fail. Electrical connections are verified for dedicated circuits where code requires. Pit and crock get cleaned out.",
    },
    {
      number: "04",
      label: "Test + Backup",
      title: "Cycled, Logged, Backup Planned.",
      description:
        "We fill the pit and run multiple cycles to confirm operation, check valve seating, and discharge integrity. Battery backup or water-powered backup options are quoted when the application warrants it (sump pumps in finished basements especially). Documentation handed off.",
    },
  ],
  scopeBullets: [
    "Sump pump installation and replacement",
    "Sump pump battery backup installation",
    "Sewage ejector pump install and replacement",
    "Well pump diagnosis, repair, and replacement",
    "Submersible and jet well pump service",
    "Booster pump installation for low city pressure",
    "Pressure tank service and replacement",
    "Float switch repair and replacement",
    "Discharge line, check valve, and union replacement",
    "24/7 emergency pump failure response",
  ],
  whySwatPillars: [
    {
      title: "Pumps On the Truck.",
      bullets: [
        "Common sump and sewage ejector sizes stocked",
        "Most replacements complete on the first call",
        "24/7 emergency dispatch for active failures",
      ],
      primary: true,
    },
    {
      title: "Sized Right, Installed Once.",
      bullets: [
        "GPH calculation against water table and fixture load",
        "Solids-handling spec for sewage applications",
        "Pressure and flow matching for well and booster systems",
      ],
    },
    {
      title: "Backup Planning Included.",
      bullets: [
        "Battery backup options for sump pumps in finished basements",
        "Water-powered backup pump for power-outage protection",
        "Annual inspection plan available",
      ],
    },
  ],
  faqs: [
    {
      question:
        "How much does a sump pump installation cost?",
      answer:
        "A standard sump pump replacement (existing pit, working discharge line) typically runs $475–$850 including the pump, labor, and disposal of the old unit. Battery backup adds $475–$750 depending on the system. First-time sump pump installations in homes without an existing pit run $1,500–$3,500 because of the pit excavation and discharge routing. S.W.A.T. Plumbing quotes flat-rate after seeing the application.",
    },
    {
      question:
        "How long does a sump pump last?",
      answer:
        "Standard pedestal pumps last 5–7 years. Quality cast-iron submersible pumps last 7–10 years. Frequency of use matters more than age — a pump in a high-water-table basement that runs frequently wears faster than one that rarely activates. We recommend planned replacement at year 8 if the pump is in a critical application (finished basement, irreplaceable storage) rather than waiting for failure.",
    },
    {
      question:
        "Do I need a battery backup for my sump pump?",
      answer:
        "If your basement is finished, has irreplaceable storage, or you're in a high-water-table area where rain events match power outages — yes, absolutely. Battery backups run independently of household power for 6–8 hours of pumping. Water-powered backups use municipal water pressure to drive a secondary pump indefinitely. Both pay for themselves the first time the power goes out during a storm.",
    },
    {
      question:
        "What's the difference between a sump pump and a sewage ejector pump?",
      answer:
        "A sump pump removes groundwater that collects in a sump pit, typically in a basement or crawlspace. A sewage ejector pump handles wastewater from below-grade fixtures (basement bathroom, laundry, kitchen) that are below the main sewer line — it lifts that wastewater up to the main sewer line for gravity flow out. Different applications, different pump specs, sometimes both installed in the same home.",
    },
    {
      question:
        "My well pump keeps short-cycling — what's wrong?",
      answer:
        "Short-cycling (pump kicks on and off rapidly) is almost always a waterlogged pressure tank. The bladder inside the tank has failed and the air cushion that normally smooths the pressure curve is gone. Diagnosis takes 10 minutes; the fix is either re-charging the tank (sometimes possible) or replacing it. Running a short-cycling pump destroys the motor in months.",
    },
    {
      question:
        "Do you handle commercial pump applications, or only residential?",
      answer:
        "We handle light commercial pump work — small office buildings, restaurants, mixed-use buildings with sewage ejectors or booster systems. Heavy industrial pumping (high-volume lift stations, multi-pump arrays, large municipal systems) requires specialized contractors. We'll be honest about scope and refer when the application is outside our wheelhouse.",
    },
  ],
  relatedSlugs: ["emergency-plumbers", "plumbing-maintenance", "residential-plumbing"],
  heroImage: "/hero-images/hero-plumbing-pumps.webp",

  lastUpdated: "2026-06-16",
}
