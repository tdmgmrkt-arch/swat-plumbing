"use client"

import Link from "next/link"
import { MessageSquare } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  SMS_CONSENT_TEXT,
  SMS_PRIVACY_URL,
  SMS_TERMS_URL,
} from "@/lib/sms-consent"

type SmsConsentCheckboxProps = {
  /** Unique DOM id — forms share this component, so pass a per-form value. */
  id: string
} & React.ComponentPropsWithoutRef<"input">

/**
 * Carrier-required SMS opt-in checkbox (10DLC).
 *
 * Deliberately UNCHECKED by default and NOT required to submit: SMS consent
 * has to be affirmative and voluntary, so it can't gate the form. A visitor
 * who leaves it unchecked still submits — they just don't get texted.
 *
 * The label copy is verbatim from `lib/sms-consent.ts`. Don't inline or
 * reword it here.
 */
export function SmsConsentCheckbox({
  id,
  className,
  ...inputProps
}: SmsConsentCheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "flex items-start gap-3.5 cursor-pointer select-none",
        "bg-[#0a0c0e] border border-white/15 hover:border-white/30 rounded-sm",
        "p-4 transition-colors",
        className
      )}
    >
      <input
        id={id}
        type="checkbox"
        className={cn(
          "mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded-sm accent-red-600",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
        )}
        {...inputProps}
      />
      <span className="min-w-0">
        <span className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1.5">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-[0.18em] uppercase text-white font-semibold">
            <MessageSquare
              className="h-3.5 w-3.5 text-red-400"
              aria-hidden="true"
            />
            Text Message Opt-In
          </span>
          <span className="text-white/40 text-[10px]">optional</span>
        </span>
        <span className="block text-white/65 text-[13px] leading-relaxed">
          {SMS_CONSENT_TEXT}{" "}
          <Link
            href="/privacy-policy"
            className="text-white/80 hover:text-red-400 underline underline-offset-2 break-words transition-colors"
          >
            {SMS_PRIVACY_URL}
          </Link>{" "}
          <Link
            href="/terms-of-service"
            className="text-white/80 hover:text-red-400 underline underline-offset-2 break-words transition-colors"
          >
            {SMS_TERMS_URL}
          </Link>
        </span>
      </span>
    </label>
  )
}
