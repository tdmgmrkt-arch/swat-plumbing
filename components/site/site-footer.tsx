import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  MapPin,
  Mail,
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  Star,
} from "lucide-react"
import { siteConfig } from "@/lib/site-config"

/* Brand SVG icons (inline so we control fidelity and don't depend on
   lucide brand icons being available — they were removed from lucide-react
   because brand logos can't follow lucide's universal stroke style). */
type IconProps = { className?: string }

function FacebookIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  )
}

function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

function YoutubeIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function XIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { name: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { name: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { name: "X (Twitter)", href: siteConfig.social.twitter, Icon: XIcon },
  { name: "YouTube", href: siteConfig.social.youtube, Icon: YoutubeIcon },
] as const

const featuredServices = [
  { label: "Plumbing Services", href: "/plumbing" },
  { label: "Leak Detection & Repair", href: "/plumbing/plumbing-leak-repairs" },
  { label: "Slab Leak Repair", href: "/plumbing/slab-leak" },
  { label: "Water Heaters", href: "/water-heater" },
  { label: "Clogged Drain", href: "/plumbing/clogged-drain" },
  { label: "Water Quality", href: "/water-quality" },
]

const company = [
  { label: "About Us", href: "/about-us" },
  { label: "Financing", href: "/financing" },
  { label: "Coupons & Rebates", href: "/coupons-rebates" },
  { label: "Contact", href: "/contact-us" },
  { label: "Areas Served", href: "/areas-served" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
]

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()
  const totalAreas = siteConfig.serviceArea.length
  const primaryAreas = siteConfig.serviceArea.filter(
    (c) => "featured" in c && c.featured
  )
  const extendedAreas = siteConfig.serviceArea.filter(
    (c) => !("featured" in c && c.featured)
  )

  return (
    <footer className="bg-[#080a0c] border-t border-white/8" aria-label="Site footer">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Col 1: Brand + locations + authority signals */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center mb-4 group" aria-label="S.W.A.T. Plumbing LLC Home">
              <Image
                src="/swatdevlogo.webp"
                alt="S.W.A.T. Plumbing LLC"
                width={375}
                height={322}
                className="h-16 w-auto"
              />
            </Link>

            <p className="text-white/45 text-sm leading-snug mb-5 max-w-xs">
              Precision plumbing and rapid response across North Texas.
            </p>

            {/* Locations */}
            <div className="space-y-3">
              {siteConfig.locations.map((loc) => (
                <address
                  key={loc.name}
                  className="not-italic"
                  itemScope
                  itemType="http://schema.org/PostalAddress"
                >
                  <div className="flex items-start gap-2">
                    <MapPin className="h-3.5 w-3.5 text-red-500 mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <div className="text-white/60 text-xs font-semibold tracking-wide uppercase mb-0.5">
                        {loc.name}
                      </div>
                      <div className="text-white/40 text-xs leading-relaxed">
                        <span itemProp="streetAddress">{loc.address}</span>
                        <br />
                        <span itemProp="addressLocality">{loc.city}</span>,{" "}
                        <span itemProp="addressRegion">{loc.state}</span>{" "}
                        <span itemProp="postalCode">{loc.zip}</span>
                      </div>
                      <Link
                        href={loc.tel}
                        className="text-white/50 text-xs hover:text-red-400 transition-colors mt-0.5 inline-flex items-center gap-1"
                        aria-label={`Call ${loc.name} office at ${loc.phone}`}
                      >
                        <Phone className="h-3 w-3" aria-hidden="true" />
                        {loc.phone}
                      </Link>
                    </div>
                  </div>
                </address>
              ))}
            </div>

          </div>

          {/* Col 2: Featured Services */}
          <div>
            <h3 className="text-white/60 text-[10px] font-semibold tracking-[0.2em] uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2" role="list">
              {featuredServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/40 text-sm hover:text-white/70 transition-colors leading-relaxed flex items-center min-h-9"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="text-white/60 text-[10px] font-semibold tracking-[0.2em] uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2" role="list">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/40 text-sm hover:text-white/70 transition-colors leading-relaxed flex items-center min-h-9"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Emergency contact — strengthened to read as a final CTA, not an info card */}
          <div>
            <h3 className="text-white/60 text-[10px] font-semibold tracking-[0.2em] uppercase mb-4">
              Emergency Line
            </h3>
            <div className="relative bg-white/4 border border-red-600/30 rounded-sm p-5">
              {/* Red command stripe */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.75 bg-red-600"
                aria-hidden="true"
              />
              {/* Corner marks */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-red-600/50" aria-hidden="true" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-red-600/50" aria-hidden="true" />

              <div className="flex items-center gap-1.5 mb-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                </span>
                <span className="text-red-400 text-[10px] font-semibold tracking-[0.15em] uppercase font-mono">
                  24/7 Available
                </span>
              </div>

              {/* Phone number — now red, gets the visual weight it deserves */}
              <Link
                href={siteConfig.phone.primary_tel}
                className="text-red-500 hover:text-red-400 font-black text-xl font-mono tracking-tight transition-colors block mb-3 leading-none"
                aria-label={`Call S.W.A.T. Plumbing emergency line at ${siteConfig.phone.primary}`}
              >
                {siteConfig.phone.primary}
              </Link>

              {/* Supporting urgency proof */}
              <ul role="list" className="space-y-1.5 mb-4">
                <li className="flex items-center gap-2 text-white/65 text-xs">
                  <span className="h-1 w-1 rounded-full bg-red-500 shrink-0" aria-hidden="true" />
                  Under 60-min arrival
                </li>
                <li className="flex items-center gap-2 text-white/65 text-xs">
                  <span className="h-1 w-1 rounded-full bg-red-500 shrink-0" aria-hidden="true" />
                  Dispatch in minutes
                </li>
              </ul>

              {/* Call Now button — closes the CTA */}
              <Link
                href={siteConfig.phone.primary_tel}
                className="inline-flex items-center justify-center gap-1.5 w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-wide uppercase py-2.5 rounded-sm transition-colors min-h-10"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                Call Now
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </Link>

              <div className="mt-4 pt-3 border-t border-white/8">
                <Link
                  href="mailto:info@swatplumbing.com"
                  className="flex items-center gap-2 text-white/35 text-xs hover:text-white/60 transition-colors min-h-9"
                  aria-label="Email S.W.A.T. Plumbing"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  info@swatplumbing.com
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Service Areas — split into Primary Response + Extended Coverage */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10">
          <div className="mb-5">
            <h3 className="text-white/60 text-[10px] font-semibold tracking-[0.2em] uppercase mb-1.5">
              Service Areas
            </h3>
            <p className="text-white/35 text-xs leading-relaxed max-w-xl">
              {`Serving ${totalAreas} North Texas communities across Tarrant, Parker, Denton & Johnson counties from our Aledo and Fort Worth bases.`}
            </p>
          </div>

          {/* Primary Response Areas */}
          {primaryAreas.length > 0 && (
            <div className="mb-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-px w-6 bg-red-600/50" aria-hidden="true" />
                <span className="text-red-400 text-[9px] font-bold tracking-[0.25em] uppercase font-mono">
                  Primary Response
                </span>
              </div>
              <ul
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-1.5"
                role="list"
              >
                {primaryAreas.map((city) => {
                  const cls =
                    "text-white/85 text-xs font-semibold leading-relaxed py-0.5 hover:text-white transition-colors"
                  const label = `${city.name}, TX`
                  return (
                    <li key={city.slug}>
                      {siteConfig.cityPagesLive ? (
                        <Link href={`/areas-served/${city.slug}`} className={cls}>
                          {label}
                        </Link>
                      ) : (
                        <span className={cls}>{label}</span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* Extended Coverage — collapsed by default behind <details>.
              Content stays in the DOM so Google still indexes the cities; we
              just stop dumping them visually on every page load. */}
          {extendedAreas.length > 0 && (
            <details className="group">
              <summary className="list-none cursor-pointer inline-flex items-center gap-2.5 hover:opacity-90 transition-opacity">
                <span className="h-px w-6 bg-white/15" aria-hidden="true" />
                <span className="text-white/50 text-[9px] font-bold tracking-[0.25em] uppercase font-mono">
                  Extended Coverage
                </span>
                <span className="text-white/40 text-[10px] font-mono tracking-wider">
                  ({extendedAreas.length} more)
                </span>
                <span
                  className="text-white/40 text-[10px] transition-transform group-open:rotate-180"
                  aria-hidden="true"
                >
                  ▼
                </span>
              </summary>
              <ul
                className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-1.5"
                role="list"
              >
                {extendedAreas.map((city) => {
                  const cls =
                    "text-white/30 text-xs leading-relaxed py-0.5 hover:text-white/60 transition-colors"
                  const label = `${city.name}, TX`
                  return (
                    <li key={city.slug}>
                      {siteConfig.cityPagesLive ? (
                        <Link href={`/areas-served/${city.slug}`} className={cls}>
                          {label}
                        </Link>
                      ) : (
                        <span className={cls}>{label}</span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </details>
          )}

          {/* View All — outlined button below the lists, bumped to a stronger weight */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/areas-served"
              className="inline-flex items-center gap-2.5 border border-white/20 hover:border-red-600/50 text-white/85 hover:text-white text-sm font-bold tracking-[0.18em] uppercase px-7 py-3.5 rounded-sm transition-colors font-mono min-h-12"
            >
              View All {totalAreas} Communities
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Trust signal row — quiet authority closer, no new color or motion */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5">
          <ul
            role="list"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-white/55"
          >
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-white/55" aria-hidden="true" />
              <span className="text-xs font-medium tracking-wide">
                Licensed &amp; Insured
              </span>
            </li>
            <li className="inline-flex items-center gap-2">
              <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
              <span className="text-xs font-medium tracking-wide">
                <span className="text-white/80 font-bold font-mono">
                  {siteConfig.googleRatingFallback.rating.toFixed(1)}
                </span>{" "}
                Google ·{" "}
                {siteConfig.googleRatingFallback.count.toLocaleString("en-US")}+
                reviews
              </span>
            </li>
            <li className="inline-flex items-center gap-2">
              <BadgeCheck className="h-3.5 w-3.5 text-white/55" aria-hidden="true" />
              <span className="text-xs font-medium tracking-wide">
                Same-As-Cash Financing
              </span>
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
              </span>
              <span className="text-xs font-medium tracking-wide">
                24/7 Dispatch
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social row */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-white/40 font-semibold">
            Follow S.W.A.T.
          </span>
          <ul role="list" className="flex items-center gap-2">
            {SOCIAL_LINKS.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`S.W.A.T. Plumbing on ${name} (opens in new tab)`}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-sm bg-white/4 border border-white/10 text-white/60 hover:text-white hover:bg-white/8 hover:border-white/20 transition-colors"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/25 text-xs">
          <p>
            &copy; {currentYear} S.W.A.T. Plumbing LLC. All rights reserved. · Aledo, TX
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white/50 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Attribution */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-3 text-center text-[11px] text-white/20">
          Designed &amp; Developed by{" "}
          <a
            href="https://tdmarketinggroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/40 transition-colors"
          >
            TD Marketing Group
          </a>
        </div>
      </div>
    </footer>
  )
}
