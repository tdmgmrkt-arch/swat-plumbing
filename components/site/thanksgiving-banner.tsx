"use client"

import * as React from "react"
import { siteConfig } from "@/lib/site-config"

/**
 * Slim holiday strip. A spacer reserves its height in the page, and the bar
 * itself is fixed, so the sticky header can sit directly underneath it
 * without jumping or covering the message. The height is published as
 * `--outage-banner-offset`, which the header and skip link already use.
 */
export default function ThanksgivingBanner() {
  const bannerRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    const root = document.documentElement
    const banner = bannerRef.current
    if (!banner) return

    const apply = () => {
      const hidden = root.hasAttribute("data-thanksgiving-hidden")
      const height = hidden ? 0 : banner.offsetHeight
      root.style.setProperty("--outage-banner-offset", `${height}px`)
    }

    apply()
    const observer = new ResizeObserver(apply)
    observer.observe(banner)
    return () => {
      observer.disconnect()
      root.style.setProperty("--outage-banner-offset", "0px")
    }
  }, [])

  return (
    <div data-thanksgiving-banner="">
      <style>{`html{--outage-banner-offset:2.75rem}`}</style>
      <div
        aria-hidden="true"
        className="shrink-0"
        style={{ height: "var(--outage-banner-offset, 2.75rem)" }}
      />
      <div
        ref={bannerRef}
        role="status"
        className="fixed top-0 inset-x-0 z-[45] border-b border-red-800 bg-red-600 text-white"
      >
        <p className="mx-auto max-w-7xl px-4 py-2 text-center text-sm leading-snug font-semibold sm:px-6 sm:py-2.5">
          Happy Thanksgiving! Our office is closed today, Thursday, Nov 26, for
          standard service calls. We&apos;re still available 24/7 for emergency
          plumbing. Call{" "}
          <a
            href={siteConfig.phone.primary_tel}
            className="font-bold underline decoration-white underline-offset-2 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {siteConfig.phone.primary}
          </a>
          .
        </p>
      </div>
    </div>
  )
}
