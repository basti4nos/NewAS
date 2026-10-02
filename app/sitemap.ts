import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/magazine",
    "/exhibitions",
    "/marketplace",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ]
  const lastModified = new Date()

  return paths.map((path) => ({
    url: `${site.url}${path || "/"}`,
    lastModified,
    priority: path === "" ? 1 : 0.6,
  }))
}
