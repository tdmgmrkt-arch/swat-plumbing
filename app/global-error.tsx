"use client"

/**
 * Global error boundary.
 *
 * Last line of defense — catches errors that happen IN the root layout
 * itself (font loading, schema generation, etc.) before the layout's HTML
 * can render. Because the layout failed, this file must render its own
 * <html> + <body> from scratch.
 *
 * Kept deliberately minimal and dependency-free: no fonts, no shared
 * components, no Tailwind utilities that depend on layout-level setup.
 * Just inline styles so it renders even when everything else is broken.
 */

import { useEffect } from "react"

type GlobalErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("[app/global-error]", error)
  }, [error])

  const ALEDO_TEL = "tel:+18174386142"
  const ALEDO_DISPLAY = "817-438-6142"

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          backgroundColor: "#080a0c",
          color: "#ffffff",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "560px",
            padding: "48px 24px",
            borderLeft: "4px solid #dc2626",
          }}
        >
          <p
            style={{
              fontFamily: "'SF Mono', Consolas, ui-monospace, monospace",
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#f87171",
              fontWeight: 700,
              margin: "0 0 16px 0",
            }}
          >
            Critical System Error
          </p>
          <h1
            style={{
              fontSize: "32px",
              lineHeight: 1.1,
              fontWeight: 900,
              letterSpacing: "-0.01em",
              margin: "0 0 16px 0",
            }}
          >
            The site couldn&apos;t load.
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.7)",
              margin: "0 0 32px 0",
            }}
          >
            Something failed at a level we can&apos;t recover from in your
            browser. The dispatch line is live 24/7 regardless — call us
            directly and we&apos;ll get you taken care of.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <a
              href={ALEDO_TEL}
              style={{
                display: "inline-block",
                padding: "14px 28px",
                backgroundColor: "#dc2626",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 800,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              📞 Call {ALEDO_DISPLAY}
            </a>
            <button
              type="button"
              onClick={reset}
              style={{
                display: "inline-block",
                padding: "14px 28px",
                backgroundColor: "transparent",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                border: "1px solid rgba(255,255,255,0.25)",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Retry
            </button>
          </div>
          {error.digest && (
            <p
              style={{
                marginTop: "40px",
                fontFamily: "'SF Mono', Consolas, ui-monospace, monospace",
                fontSize: "10px",
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.1em",
              }}
            >
              Error ref: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  )
}
