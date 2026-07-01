import Link from "next/link"
import { Phone, CalendarDays } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

/**
 * Sticky mobile CTA bar — only visible below lg breakpoint.
 * Two primary actions: Call + Schedule Online.
 * Respects iOS safe area inset.
 */
export default function MobileCtaBar() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-[#0a0c0e] border-t border-white/12 pb-[env(safe-area-inset-bottom)]"
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-2 gap-px bg-white/10">
        <Link
          href={siteConfig.phone.primary_tel}
          className="flex items-center justify-center gap-2 bg-[#0a0c0e] hover:bg-white/4 text-white font-bold text-sm py-4 min-h-[56px] transition-colors"
          aria-label={`Call S.W.A.T. Plumbing at ${siteConfig.phone.primary}`}
        >
          <Phone className="h-4 w-4 text-red-400 shrink-0" aria-hidden="true" />
          Call Now
        </Link>
        <Link
          href="/contact-us"
          className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-4 min-h-[56px] transition-colors"
          aria-label="Schedule service online"
        >
          <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
          Schedule Online
        </Link>
      </div>
    </div>
  )
}
