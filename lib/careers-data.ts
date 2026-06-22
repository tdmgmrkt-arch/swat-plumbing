/**
 * Open positions — single source of truth for the careers page,
 * application-form select, and JobPosting JSON-LD.
 */

export type Position = {
  slug: string
  title: string
  shortDescription: string
  employmentType: "FULL_TIME" | "PART_TIME"
  payMin?: number
  payMax?: number
  payUnit?: "HOUR" | "YEAR"
  payDisplay: string
  about: string
  benefits?: readonly string[]
  skills?: readonly string[]
  requirements?: readonly string[]
}

export const positions: readonly Position[] = [
  {
    slug: "journeyman-plumber",
    title: "Journeyman / Tradesman Plumber",
    shortDescription:
      "Residential service plumber for our DFW hub. Hourly or commission, company truck, full benefits.",
    employmentType: "FULL_TIME",
    payMin: 62000,
    payMax: 156000,
    payUnit: "YEAR",
    payDisplay: "$62,000 – $156,000 / year",
    about:
      "Ready to make a difference? Believe in Trust, Quality, & Care? S.W.A.T. Plumbing is one of the fastest-growing plumbing companies in the DFW Metroplex, and we're looking for residential service plumbers to join our elite team.",
    benefits: [
      "Hourly pay or commission",
      "Monthly bonuses and incentives",
      "Employee referral bonus program",
      "Overtime available",
      "Paid holidays + paid vacation",
      "Medical / dental / vision (company contributes toward group benefits)",
      "Company truck, cell phone, iPad",
      "Company uniforms",
      "Ongoing training and coaching",
      "Fun, family-oriented culture",
    ],
    skills: [
      "Strong customer service, communication, and people skills",
      "Residential service experience + strong troubleshooting",
      "General residential and commercial plumbing",
      "Water heater replacement and repair",
      "Fixture replacement (faucets, tubs, toilets)",
      "Sewer, gas, and water service replacement",
      "Video-inspection troubleshooting",
      "Drain cleaning",
      "Conventional sewer machines and high-power jetters",
      "Leak location and repair (a plus)",
    ],
    requirements: [
      "Current Tradesman / Journeyman Texas Plumbing License",
      "High school diploma or GED",
      "Valid Texas driver's license, clean driving record",
      "Pass background check, driving check, and drug test",
      "Neat, clean appearance",
      "Strong attention to detail",
      "Team player with a 'can do' attitude",
      "Strong, steady work history (a plus)",
      "Willing to work a rotational on-call schedule",
    ],
  },
  {
    slug: "office-lead",
    title: "Office Lead / Manager",
    shortDescription:
      "Lead dispatcher and front-office lead. High-volume, fast-paced, customer-facing.",
    employmentType: "FULL_TIME",
    payMin: 45000,
    payMax: 75000,
    payUnit: "YEAR",
    payDisplay: "$45,000 – $75,000 / year",
    about:
      "We're hiring a Lead Dispatcher / Front Office Lead — the operational heart of our hub. You'll own scheduling, dispatch, permits, inspections, and the customer experience on the phones.",
    benefits: [
      "Competitive hourly pay",
      "Full benefits",
      "Excellent work environment",
      "Commission opportunities on referrals",
      "On-call bonus pay",
    ],
    skills: [
      "Heavy phone use",
      "Comfortable in a fast-paced environment",
      "Excellent management skills",
      "Scheduling experience",
      "Dispatching experience",
      "Experience pulling permits and coordinating city inspections",
      "Excellent computer skills",
      "Excellent communication skills",
      "Positive attitude and adaptability",
      "Ability to multitask and answer multiple phone lines",
      "Excellent customer service",
      "Ability to learn quickly",
      "Reliable and dependable",
    ],
    requirements: [
      "Willing to work a rotational on-call schedule",
      "Willing to work rotational Saturdays",
    ],
  },
  {
    slug: "plumber-apprentice",
    title: "Plumber Apprentice",
    shortDescription:
      "Hands-on apprenticeship at a busy hub. 40+ hours guaranteed, room to advance.",
    employmentType: "FULL_TIME",
    payMin: 12,
    payUnit: "HOUR",
    payDisplay: "From $12.00 / hour",
    about:
      "Busy company, high call volume, 40+ hours guaranteed. If you're ready to learn the trade alongside licensed pros and grow into a Tradesman role, we want to meet you.",
    benefits: [
      "Competitive hourly rates",
      "Opportunity for advancement",
      "Full benefits",
    ],
    requirements: [
      "Valid plumbing apprenticeship card",
      "Residential plumbing experience preferred",
      "'Can do' attitude",
      "Physically able to lift heavy weight",
      "Willing to work evenings and Saturdays when needed",
    ],
  },
] as const

export const POSITION_OPTIONS = positions.map((p) => p.title)
