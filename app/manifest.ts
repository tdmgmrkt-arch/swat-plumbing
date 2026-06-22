import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

/**
 * PWA manifest.
 *
 * When a customer adds the site to their phone's home screen
 * ("Add to Home Screen" on iOS, "Install app" on Android), this manifest
 * controls how the shortcut looks + behaves:
 *
 *   - `name` / `short_name`: app label shown under the icon
 *   - `icons`: home-screen icon (also referenced by `app/icon.png` /
 *              `app/apple-icon.png` conventions)
 *   - `theme_color`: status bar / task-switcher chrome
 *   - `background_color`: PWA splash background while loading
 *
 * For a local-service business, the "saved to home screen" use case is real:
 * past customers often save a plumber's site for next time.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "S.W.A.T. Plumbing",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    theme_color: "#0e1012",
    background_color: "#080a0c",
    orientation: "portrait",
    categories: ["business", "utilities", "services"],
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
