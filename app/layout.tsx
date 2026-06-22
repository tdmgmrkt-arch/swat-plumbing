import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"
import { siteConfig } from "@/lib/site-config"
import { canonicalUrl } from "@/lib/utils"
import { AccessibilityWidget } from "@/components/site/accessibility-widget"

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
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: canonicalUrl("/"),
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Precision Plumbing in Aledo & Fort Worth, TX`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Precision Plumbing in Aledo & Fort Worth, TX`,
    description: siteConfig.description,
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
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Skip-to-main — keyboard/screen-reader users press Tab once on
            page load and can jump past the nav. Visually hidden by default,
            appears with focus styling on keyboard activation. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-red-600 focus:text-white focus:font-bold focus:text-sm focus:tracking-wide focus:uppercase focus:rounded-sm focus:outline-2 focus:outline-white focus:outline-offset-2"
        >
          Skip to main content
        </a>
        {children}
        <AccessibilityWidget />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  )
}
