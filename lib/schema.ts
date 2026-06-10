import { siteConfig } from "./site-config"

/** LocalBusiness / Plumber JSON-LD schema for homepage and location pages */
export function plumberSchema() {
  type ServiceLink = { title: string; href: string }
  const allServices: ServiceLink[] = siteConfig.serviceCategories.flatMap(
    (c) => [...c.services] as ServiceLink[]
  )

  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone.primary,
    description: siteConfig.description,
    areaServed: siteConfig.serviceArea.map((city) => ({
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.locations[0].address,
      addressLocality: siteConfig.locations[0].city,
      addressRegion: siteConfig.locations[0].state,
      postalCode: siteConfig.locations[0].zip,
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing Services",
      itemListElement: allServices.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: `${siteConfig.url}${s.href}`,
        },
      })),
    },
  }
}
