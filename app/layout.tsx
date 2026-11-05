import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"
import { siteConfig } from "@/lib/site-config"
import { canonicalUrl } from "@/lib/utils"
import { defaultOgImages, defaultTwitterImages } from "@/lib/metadata"
import { AccessibilityWidget } from "@/components/site/accessibility-widget"
import OutageNotice from "@/components/site/outage-notice"
import {
  OUTAGE_NOTICE_STORAGE_KEYS,
  SITE_OUTAGE_BANNER_ENABLED,
} from "@/lib/site-outage"

/**
 * GA4 Measurement ID. Set in .env.local as NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX.
 * If unset (e.g. local dev without analytics), the GoogleAnalytics tag
 * simply isn't rendered — no client-side errors, no broken page.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Precision Plumbing in Aledo & Fort Worth, TX`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "plumber aledo tx",
    "plumber fort worth tx",
    "emergency plumber",
    "24/7 plumbing",
    "slab leak repair",
    "water heater repair",
    "drain cleaning",
    "leak detection",
  ],
  alternates: {
    canonical: canonicalUrl("/"),
    types: {
      "application/json": [
        { url: "/ai-actions.json", title: "S.W.A.T. Plumbing LLC AI Service Menu" },
      ],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: canonicalUrl("/"),
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Precision Plumbing in Aledo & Fort Worth, TX`,
    description: siteConfig.description,
    images: defaultOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Precision Plumbing in Aledo & Fort Worth, TX`,
    description: siteConfig.description,
    images: defaultTwitterImages,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

/**
 * Mobile browser chrome color — matches the dark site bg so the URL bar
 * (and Android task-switcher card) flows visually into the site instead
 * of clashing with the default white. Also drives the PWA splash bg.
 */
export const viewport: Viewport = {
  themeColor: "#0e1012",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      // Session script may set data-outage-* before hydration.
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {SITE_OUTAGE_BANNER_ENABLED ? (
          <Script id="outage-session" strategy="beforeInteractive">
            {`try{var k=${JSON.stringify(OUTAGE_NOTICE_STORAGE_KEYS)};if(sessionStorage.getItem(k.dismissed)==="1")document.documentElement.setAttribute("data-outage-dismissed","");else if(sessionStorage.getItem(k.popupSeen)==="1")document.documentElement.setAttribute("data-outage-popup-seen","")}catch(e){}`}
          </Script>
        ) : null}
        {/* Skip-to-main — keyboard/screen-reader users press Tab once on
            page load and can jump past the nav. Visually hidden by default,
            appears with focus styling on keyboard activation. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-[calc(var(--outage-banner-offset,0px)+0.75rem)] focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-red-600 focus:text-white focus:font-bold focus:text-sm focus:tracking-wide focus:uppercase focus:rounded-sm focus:outline-2 focus:outline-white focus:outline-offset-2"
        >
          Skip to main content
        </a>
        {SITE_OUTAGE_BANNER_ENABLED ? <OutageNotice /> : null}
        {children}
        <AccessibilityWidget />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  )
}
