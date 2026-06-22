import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Enter a valid US phone number")
    .regex(/^[\d\s\-().+]+$/, "Enter a valid US phone number"),
  email: z.string().email("Enter a valid email address"),
  city: z.string().optional(),
  service_type: z.enum(
    [
      "Emergency Service",
      "Leak Detection",
      "Water Heater",
      "Drain Cleaning",
      "Slab Leak",
      "Water Quality",
      "Other Plumbing",
    ],
    { error: "Select the service you need" }
  ),
  urgency: z.enum(
    [
      "Emergency — now (24/7)",
      "Today if possible",
      "This week",
      "Just planning",
    ],
    { error: "Select your urgency" }
  ),
  preferred_contact: z.enum(["Phone", "Email", "Text"], {
    error: "Select a preferred contact method",
  }),
  message: z.string().optional(),
  website: z.string().optional(), // honeypot
})

export type ContactFormValues = z.infer<typeof contactSchema>

export const SERVICE_TYPE_OPTIONS = [
  "Emergency Service",
  "Leak Detection",
  "Water Heater",
  "Drain Cleaning",
  "Slab Leak",
  "Water Quality",
  "Other Plumbing",
] as const

export const URGENCY_OPTIONS = [
  "Emergency — now (24/7)",
  "Today if possible",
  "This week",
  "Just planning",
] as const

export const PREFERRED_CONTACT_OPTIONS = ["Phone", "Email", "Text"] as const

/**
 * Map a service-page href (e.g. "/plumbing/slab-leak") to one of the seven
 * SERVICE_TYPE_OPTIONS used by the contact form. Returns undefined if the
 * href doesn't match a known service — caller should fall back to leaving
 * the dropdown unselected.
 *
 * Used by service-page CTAs to deep-link into /contact-us with the service
 * pre-selected, so visitors don't have to re-state what they came in for.
 */
export function hrefToContactServiceType(
  href: string
): (typeof SERVICE_TYPE_OPTIONS)[number] | undefined {
  // Specific overrides for high-intent slugs that don't follow category mapping
  if (href === "/plumbing/emergency-plumbers") return "Emergency Service"
  if (href === "/plumbing/slab-leak") return "Slab Leak"
  if (href === "/plumbing/plumbing-leak-repairs") return "Leak Detection"

  // Drain / sewer family — all funnel to "Drain Cleaning"
  if (
    href === "/plumbing/clogged-drain" ||
    href === "/plumbing/hydro-jetting" ||
    href === "/plumbing/sewer-cleaning" ||
    href === "/plumbing/sewer-camera-inspections" ||
    href === "/plumbing/sewer-line-repairs"
  )
    return "Drain Cleaning"

  // Category-level catch-alls (in priority order — more specific first)
  if (href.startsWith("/water-heater")) return "Water Heater"
  if (href.startsWith("/water-quality")) return "Water Quality"
  if (href.startsWith("/plumbing")) return "Other Plumbing"

  return undefined
}
