// Single source of truth for NAP, navigation, services, and cities.
// URL slugs MATCH the legacy swatplumbing.com sitemap exactly so we preserve
// link equity / redirects on launch. Edit this file to update content across
// the entire site.

export const siteConfig = {
  name: "S.W.A.T. Plumbing LLC",
  tagline: "Precision Plumbing. Rapid Response.",
  description:
    "S.W.A.T. Plumbing LLC delivers 24/7 emergency plumbing, drain cleaning, slab leak repair, water heater service, and more across Aledo, Fort Worth, and surrounding Tarrant County communities.",
  url: "https://www.swatplumbing.com",

  phone: {
    aledo: "817-438-6142",
    fortWorth: "817-438-6955",
    primary: "817-438-6142",
    aled_tel: "tel:+18174386142",
    fw_tel: "tel:+18174386955",
    primary_tel: "tel:+18174386142",
  },

  locations: [
    {
      name: "Aledo",
      address: "2111 East FM1187",
      city: "Aledo",
      state: "TX",
      zip: "76008",
      phone: "817-438-6142",
      tel: "tel:+18174386142",
      placeId: "ChIJw_9l9-kNToYR2AOo_k4eIU4",
    },
    {
      name: "Fort Worth",
      address: "9905 Camp Bowie W Blvd",
      city: "Fort Worth",
      state: "TX",
      zip: "76116",
      phone: "817-438-6955",
      tel: "tel:+18174386955",
      placeId: "ChIJdfxYXo4NToYRKTQCNXplxQ4",
    },
  ],

  // 2026-06-16 — flipped to true. All 49 city configs ship in `lib/cities/`, the
  // dynamic route at `app/areas-served/[slug]/page.tsx` resolves every slug,
  // and the sitemap emits all 49 city URLs via the `builtCities` aggregator.
  // City names render as clickable links across the header mega-menu, mobile
  // accordion, footer, and the index-hub all-cities grid.
  cityPagesLive: true,

  // City slugs include the "-tx" suffix to match the legacy URL pattern
  // /areas-served/[slug]/  →  e.g. /areas-served/aledo-tx/
  // `featured: true` marks priority markets shown in the desktop mega menu.
  // All 49 appear on the homepage area section, in the footer, and in the
  // JSON-LD areaServed schema regardless of featured status.
  serviceArea: [
    { name: "Aledo", slug: "aledo-tx", featured: true },
    { name: "Annetta", slug: "annetta-tx" },
    { name: "Annetta North", slug: "annetta-north-tx" },
    { name: "Annetta South", slug: "annetta-south-tx" },
    { name: "Arlington", slug: "arlington-tx", featured: true },
    { name: "Azle", slug: "azle-tx" },
    { name: "Bedford", slug: "bedford-tx", featured: true },
    { name: "Benbrook", slug: "benbrook-tx" },
    { name: "Blue Mound", slug: "blue-mound-tx" },
    { name: "Burleson", slug: "burleson-tx" },
    { name: "Colleyville", slug: "colleyville-tx" },
    { name: "Crowley", slug: "crowley-tx" },
    { name: "Dalworthington Gardens", slug: "dalworthington-gardens-tx" },
    { name: "Edgecliff Village", slug: "edgecliff-village-tx" },
    { name: "Euless", slug: "euless-tx", featured: true },
    { name: "Everman", slug: "everman-tx" },
    { name: "Flower Mound", slug: "flower-mound-tx" },
    { name: "Forest Hill", slug: "forest-hill-tx" },
    { name: "Fort Worth", slug: "fort-worth-tx", featured: true },
    { name: "Grand Prairie", slug: "grand-prairie-tx" },
    { name: "Grapevine", slug: "grapevine-tx", featured: true },
    { name: "Haltom City", slug: "haltom-city-tx" },
    { name: "Haslet", slug: "haslet-tx" },
    { name: "Hudson Oaks", slug: "hudson-oaks-tx" },
    { name: "Hurst", slug: "hurst-tx", featured: true },
    { name: "Keller", slug: "keller-tx", featured: true },
    { name: "Kennedale", slug: "kennedale-tx" },
    { name: "Lake Worth", slug: "lake-worth-tx" },
    { name: "Lakeside", slug: "lakeside-tx" },
    { name: "Mansfield", slug: "mansfield-tx", featured: true },
    { name: "Newark", slug: "newark-tx" },
    { name: "North Richland Hills", slug: "north-richland-hills-tx", featured: true },
    { name: "Pantego", slug: "pantego-tx" },
    { name: "Pelican Bay", slug: "pelican-bay-tx" },
    { name: "Reno", slug: "reno-tx" },
    { name: "Richland Hills", slug: "richland-hills-tx" },
    { name: "River Oaks", slug: "river-oaks-tx" },
    { name: "Saginaw", slug: "saginaw-tx" },
    { name: "Sansom Park", slug: "sansom-park-tx" },
    { name: "Southlake", slug: "southlake-tx", featured: true },
    { name: "Springtown", slug: "springtown-tx" },
    { name: "Trophy Club", slug: "trophy-club-tx" },
    { name: "Watauga", slug: "watauga-tx" },
    { name: "Weatherford", slug: "weatherford-tx", featured: true },
    { name: "Westlake", slug: "westlake-tx" },
    { name: "Westover Hills", slug: "westover-hills-tx" },
    { name: "Westworth Village", slug: "westworth-village-tx" },
    { name: "White Settlement", slug: "white-settlement-tx" },
    { name: "Willow Park", slug: "willow-park-tx" },
  ],

  // Master service taxonomy. Hub pages live at the category root (e.g. /plumbing/);
  // sub-services nest under their category (e.g. /plumbing/clogged-drain/).
  // "Running Water" is intentionally a root-level URL — matches legacy sitemap.
  serviceCategories: [
    {
      slug: "plumbing",
      hubHref: "/plumbing",
      title: "Plumbing Services",
      shortDescription:
        "Full-scope residential & commercial plumbing — repairs, installation, gas, sewer, and drain.",
      icon: "Wrench",
      services: [
        { title: "Plumbing Contractor", href: "/plumbing" },
        { title: "Commercial Plumbers", href: "/plumbing/commercial-plumbers" },
        { title: "Plumbing Fixtures", href: "/plumbing/plumbing-fixtures" },
        { title: "Gas Line Repair", href: "/plumbing/gas-line-repair" },
        { title: "Leak Detection & Repair", href: "/plumbing/plumbing-leak-repairs" },
        { title: "Water Line Repairs", href: "/plumbing/water-line-repairs" },
        { title: "Residential Plumbing", href: "/plumbing/residential-plumbing" },
        { title: "Sewer Line Cleaning", href: "/plumbing/sewer-cleaning" },
        { title: "Running Water", href: "/plumbing/running-water" },
        { title: "Slab Leak", href: "/plumbing/slab-leak" },
        { title: "Trenchless Repair", href: "/plumbing/trenchless-repair" },
        { title: "Plumbing Pumps", href: "/plumbing/plumbing-pumps" },
        { title: "Clogged Drain", href: "/plumbing/clogged-drain" },
        { title: "Emergency Plumbers", href: "/plumbing/emergency-plumbers" },
        { title: "Garbage Disposals", href: "/plumbing/garbage-disposals" },
        { title: "Hydro-Jetting", href: "/plumbing/hydro-jetting" },
        { title: "Main Water Line Repair", href: "/plumbing/main-water-line-repair" },
        { title: "Whole House Repiping", href: "/plumbing/whole-house-repiping" },
        { title: "Sewer Camera Inspections", href: "/plumbing/sewer-camera-inspections" },
        { title: "Plumbing Maintenance", href: "/plumbing/plumbing-maintenance" },
        { title: "Sewer Line Repairs", href: "/plumbing/sewer-line-repairs" },
        { title: "Toilet Repair", href: "/plumbing/toilet-repair" },
        { title: "Plumbing Tunneling", href: "/plumbing/plumbing-tunneling" },
      ],
    },
    {
      slug: "water-heater",
      hubHref: "/water-heater",
      title: "Water Heaters",
      shortDescription:
        "Installation, repair, and replacement — tank and tankless water heaters.",
      icon: "Flame",
      services: [
        { title: "All Water Heaters", href: "/water-heater" },
        { title: "Tankless Water Heaters", href: "/water-heater/tankless-water-heaters" },
        { title: "Tank Water Heater Installation", href: "/water-heater/tank-heater-installation" },
      ],
    },
    {
      slug: "water-quality",
      hubHref: "/water-quality",
      title: "Water Quality",
      shortDescription:
        "Filtration, softeners, treatment — clean, safe water at every tap.",
      icon: "ShieldCheck",
      services: [
        { title: "Water Quality Services", href: "/water-quality" },
        { title: "Water Filtration", href: "/water-quality/water-filtration" },
        { title: "Residential Water Treatment", href: "/water-quality/residential-water-treatment" },
        { title: "Water Softener", href: "/water-quality/water-softener" },
        { title: "Reverse Osmosis", href: "/water-quality/reverse-osmosis" },
      ],
    },
  ],

  // Hand-picked services for the homepage grid + footer "Services" column.
  // Keep this list at 6 — these are the highest-intent / highest-margin lines.
  featuredServices: [
    {
      title: "Leak Detection & Repair",
      href: "/plumbing/plumbing-leak-repairs",
      description:
        "Non-invasive leak detection locates hidden water loss fast — before it becomes structural damage.",
      icon: "Droplets",
    },
    {
      title: "Slab Leak Repair",
      href: "/plumbing/slab-leak",
      description:
        "Specialized slab leak diagnosis and repair with minimal disruption to your foundation and flooring.",
      icon: "Layers",
    },
    {
      title: "Water Heaters",
      href: "/water-heater",
      description:
        "Tank and tankless installation, repair, and replacement — get hot water back on schedule.",
      icon: "Flame",
    },
    {
      title: "Clogged Drains",
      href: "/plumbing/clogged-drain",
      description:
        "Camera inspection and hydro-jetting to clear blockages completely — not just temporarily.",
      icon: "Waves",
    },
    {
      title: "Water Quality",
      href: "/water-quality",
      description:
        "Softeners, filtration systems, and treatment solutions for clean, safe water at every tap.",
      icon: "ShieldCheck",
    },
    {
      title: "24/7 Emergency Plumbing",
      href: "/plumbing/emergency-plumbers",
      description:
        "Burst pipes, slab leaks, flooded fixtures — rapid response any hour, any day.",
      icon: "Wrench",
    },
  ],

  // Top-level navigation. Mega-menu items are wired by category slug.
  nav: [
    {
      label: "Plumbing",
      href: "/plumbing",
      hasMega: true,
      megaCategory: "plumbing",
    },
    {
      label: "Water Heaters",
      href: "/water-heater",
      hasMega: true,
      megaCategory: "water-heater",
    },
    {
      label: "Water Quality",
      href: "/water-quality",
      hasMega: true,
      megaCategory: "water-quality",
    },
    {
      label: "Areas Served",
      href: "/areas-served",
      hasMega: true,
      megaCategory: "areas",
    },
    {
      label: "Coupons",
      href: "/coupons-rebates",
      hasMega: false,
    },
    {
      label: "Company",
      href: "/about-us",
      hasMega: true,
      megaCategory: "company",
    },
    {
      label: "Contact",
      href: "/contact-us",
      hasMega: false,
    },
  ],

  // Company / About sub-pages — wired into the Company mega menu.
  companyLinks: [
    {
      title: "About Us",
      href: "/about-us",
      description: "Our story, leadership, and the crew behind the SWAT name.",
      icon: "Users",
    },
    {
      title: "Financing",
      href: "/financing",
      description: "GreenSky home improvement financing — prequalify with no credit impact.",
      icon: "CreditCard",
    },
    {
      title: "Areas Served",
      href: "/areas-served",
      description: "49 communities across Tarrant, Parker, Denton, and Johnson counties.",
      icon: "MapPin",
    },
    {
      title: "Careers",
      href: "/careers",
      description: "Join the team — licensed plumbers, apprentices, and office roles.",
      icon: "Briefcase",
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Plumbing tips, project breakdowns, and seasonal homeowner guides.",
      icon: "Newspaper",
    },
  ],

  // Static routes (used by sitemap + redirects)
  staticPages: [
    { href: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { href: "/about-us", priority: 0.7, changeFrequency: "monthly" as const },
    { href: "/areas-served", priority: 0.9, changeFrequency: "monthly" as const },
    { href: "/financing", priority: 0.7, changeFrequency: "monthly" as const },
    { href: "/coupons-rebates", priority: 0.7, changeFrequency: "weekly" as const },
    { href: "/contact-us", priority: 0.8, changeFrequency: "monthly" as const },
    { href: "/careers", priority: 0.5, changeFrequency: "monthly" as const },
    { href: "/blog", priority: 0.6, changeFrequency: "weekly" as const },
    { href: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { href: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" as const },
  ],

  social: {
    facebook: "https://www.facebook.com/SWATplumbingllc",
    instagram: "https://www.instagram.com/s.w.a.t._plumbing_llc/",
    twitter: "https://x.com/SWATPlumb",
    youtube: "https://www.youtube.com/@swatplumbingllc618",
    google: "https://g.page/swatplumbing",
  },

  // Google rating badge fallback — used when Places API env vars are not set,
  // or when the live fetch fails. Numbers from the Aledo (primary) GBP listing.
  // The Fort Worth location has its own rating (4.6 / 792 as of 2026-06) —
  // surface that separately on the FW location page when built.
  googleRatingFallback: {
    rating: 4.2,
    count: 1710,
  },
} as const
