"use client"

import * as React from "react"
import { X } from "lucide-react"
import {
  OUTAGE_NOTICE_COPY,
  OUTAGE_NOTICE_STORAGE_KEYS,
} from "@/lib/site-outage"
import { cn } from "@/lib/utils"

const FOCUSABLE =
  'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

const OUTAGE_CHANGE_EVENT = "swat-outage-notice-change"

function subscribe(onChange: () => void) {
  window.addEventListener(OUTAGE_CHANGE_EVENT, onChange)
  window.addEventListener("storage", onChange)
  return () => {
    window.removeEventListener(OUTAGE_CHANGE_EVENT, onChange)
    window.removeEventListener("storage", onChange)
  }
}

function readStored(key: string) {
  try {
    return sessionStorage.getItem(key) === "1"
  } catch {
    return false
  }
}

function writeStored(...keys: string[]) {
  try {
    keys.forEach((key) => sessionStorage.setItem(key, "1"))
  } catch {
    // Private mode and blocked storage should still let the notice close.
  }
  window.dispatchEvent(new Event(OUTAGE_CHANGE_EVENT))
}

function snapshotDismissed() {
  return readStored(OUTAGE_NOTICE_STORAGE_KEYS.dismissed)
}

function snapshotPopupSeen() {
  return readStored(OUTAGE_NOTICE_STORAGE_KEYS.popupSeen)
}

/**
 * Site-wide outage notice: a dismissible alert dialog plus a slim top strip
 * that stays until the visitor dismisses it for this browser session.
 */
export default function OutageNotice() {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const bannerRef = React.useRef<HTMLDivElement>(null)
  const dialogRef = React.useRef<HTMLDivElement>(null)
  const openerRef = React.useRef<HTMLElement | null>(null)
  const [detailsOpen, setDetailsOpen] = React.useState(false)

  // Server and first client render both show the dialog. A stored session
  // hides it before paint via #outage-session, then this snapshot drops it.
  const dismissed = React.useSyncExternalStore(
    subscribe,
    snapshotDismissed,
    () => false
  )
  const popupSeen = React.useSyncExternalStore(
    subscribe,
    snapshotPopupSeen,
    () => false
  )
  const popupOpen = !dismissed && (!popupSeen || detailsOpen)

  React.useLayoutEffect(() => {
    const root = document.documentElement
    if (dismissed) {
      root.style.setProperty("--outage-banner-offset", "0px")
      return
    }

    const banner = bannerRef.current
    if (!banner) return

    const apply = () => {
      root.style.setProperty(
        "--outage-banner-offset",
        `${Math.ceil(banner.getBoundingClientRect().height)}px`
      )
    }

    apply()
    const observer = new ResizeObserver(apply)
    observer.observe(banner)
    return () => {
      observer.disconnect()
      root.style.setProperty("--outage-banner-offset", "0px")
    }
  }, [dismissed])

  const closePopup = React.useCallback(() => {
    setDetailsOpen(false)
    document.documentElement.setAttribute("data-outage-popup-seen", "")
    writeStored(OUTAGE_NOTICE_STORAGE_KEYS.popupSeen)
  }, [])

  const dismissNotice = React.useCallback(() => {
    setDetailsOpen(false)
    document.documentElement.setAttribute("data-outage-dismissed", "")
    writeStored(
      OUTAGE_NOTICE_STORAGE_KEYS.dismissed,
      OUTAGE_NOTICE_STORAGE_KEYS.popupSeen
    )
  }, [])

  const openPopup = React.useCallback((opener: HTMLElement | null) => {
    openerRef.current = opener
    document.documentElement.removeAttribute("data-outage-popup-seen")
    setDetailsOpen(true)
  }, [])

  React.useEffect(() => {
    if (!popupOpen) return

    const dialog = dialogRef.current
    const root = rootRef.current
    const previouslyInert: HTMLElement[] = []

    dialog?.focus()

    Array.from(document.body.children).forEach((child) => {
      if (!(child instanceof HTMLElement)) return
      if (child === root || root?.contains(child) || child.inert) return
      child.inert = true
      previouslyInert.push(child)
    })

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        event.stopPropagation()
        closePopup()
        return
      }

      if (event.key !== "Tab" || !dialog) return

      const items = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (items.length === 0) {
        event.preventDefault()
        return
      }

      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement

      if (active === dialog || !dialog.contains(active)) {
        event.preventDefault()
        ;(event.shiftKey ? last : first).focus()
        return
      }

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown, true)
    return () => {
      document.removeEventListener("keydown", onKeyDown, true)
      document.body.style.overflow = previousOverflow
      previouslyInert.forEach((element) => {
        element.inert = false
      })
      const opener = openerRef.current
      openerRef.current = null
      if (opener?.isConnected) opener.focus()
    }
  }, [popupOpen, closePopup])

  if (dismissed) return null

  return (
    <div ref={rootRef} data-outage-notice="">
      <style>{`html{--outage-banner-offset:3.25rem}`}</style>
      <div
        aria-hidden="true"
        className="shrink-0"
        style={{ height: "var(--outage-banner-offset, 3.25rem)" }}
      />

      <div
        ref={bannerRef}
        role="status"
        aria-live="polite"
        aria-hidden={popupOpen ? true : undefined}
        className="fixed top-0 inset-x-0 z-[45] border-b border-white/10 bg-[#080a0c]"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault()
            dismissNotice()
          }
        }}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-1 bg-red-600"
          aria-hidden="true"
        />
        <div className="mx-auto flex max-w-7xl items-center gap-2 py-2 pl-4 pr-2 sm:gap-3 sm:px-6">
          <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
          </span>
          <p className="hidden shrink-0 font-mono text-[10px] font-semibold tracking-[0.22em] text-red-400 uppercase sm:block">
            {OUTAGE_NOTICE_COPY.label}
          </p>
          <p className="min-w-0 flex-1 text-[13px] leading-snug text-white/85 sm:text-sm">
            {OUTAGE_NOTICE_COPY.strip}
          </p>
          <button
            type="button"
            className={cn(
              "inline-flex h-8 shrink-0 items-center rounded-sm border border-white/15 px-2.5",
              "text-[11px] font-bold tracking-wide text-white uppercase",
              "hover:border-white/30 hover:bg-white/8",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            )}
            onClick={(event) => openPopup(event.currentTarget)}
          >
            Details
          </button>
          <button
            type="button"
            className={cn(
              "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm text-white/70",
              "hover:bg-white/8 hover:text-white",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            )}
            aria-label="Dismiss service notice"
            onClick={dismissNotice}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {popupOpen && (
        <div
          data-outage-dialog=""
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className="absolute inset-0 bg-[#080a0c]/80"
            onClick={closePopup}
            aria-hidden="true"
          />
          <div
            ref={dialogRef}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="outage-notice-title"
            aria-describedby="outage-notice-body"
            tabIndex={-1}
            className="relative w-full max-w-lg border border-white/10 bg-[#0e1012] shadow-2xl shadow-black/60 outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
          >
            <div
              className="absolute top-0 bottom-0 left-0 w-1 bg-red-600"
              aria-hidden="true"
            />
            <div
              className="absolute top-2.5 left-3 h-3 w-3 border-t border-l border-red-600/50"
              aria-hidden="true"
            />
            <div
              className="absolute top-2.5 right-3 h-3 w-3 border-t border-r border-red-600/50"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-2.5 left-3 h-3 w-3 border-b border-l border-red-600/50"
              aria-hidden="true"
            />
            <div
              className="absolute right-3 bottom-2.5 h-3 w-3 border-r border-b border-red-600/50"
              aria-hidden="true"
            />

            <div className="px-6 py-6 sm:px-7 sm:py-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2 pt-1">
                  <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                  </span>
                  <p className="font-mono text-[10px] font-semibold tracking-[0.25em] text-red-400 uppercase">
                    {OUTAGE_NOTICE_COPY.label}
                  </p>
                </div>
                <button
                  type="button"
                  className={cn(
                    "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm text-white/70",
                    "hover:bg-white/8 hover:text-white",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  )}
                  aria-label="Close service notice"
                  onClick={closePopup}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <h2
                id="outage-notice-title"
                className="mt-4 text-2xl font-black tracking-tight text-white sm:text-[1.75rem] sm:leading-tight"
              >
                {OUTAGE_NOTICE_COPY.title}
              </h2>

              <div
                id="outage-notice-body"
                className="mt-3 space-y-3 text-sm leading-relaxed text-white/80 sm:text-[15px]"
              >
                {OUTAGE_NOTICE_COPY.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <button
                type="button"
                className={cn(
                  "mt-6 inline-flex h-10 items-center justify-center rounded-lg border border-red-500/50",
                  "bg-red-600 px-5 text-sm font-bold text-white",
                  "hover:bg-red-700",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                )}
                onClick={closePopup}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
