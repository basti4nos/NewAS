import type { Metadata } from "next"

export const site = {
  name: "ASKNIGHTS",
  url: "https://asknights.org",
  domain: "asknights.org",
  locale: "en-GB",
  ogLocale: "en_GB",
  founded: 2020,
  brandStrip: "Top NFT art curation · phygitals · Metaverse",
  positioning: "AI informs. Human curators decide.",
  description:
    "ASKNIGHTS curates NFT art, phygitals, and Metaverse exposure. Founded in 2020. AI informs. Human curators decide.",
  socials: [
    {
      label: "X",
      handle: "@top_NFT_art",
      href: "https://x.com/top_NFT_art",
    },
    {
      label: "Instagram",
      handle: "@asknights",
      href: "https://www.instagram.com/asknights",
    },
  ],
  nav: [
    { href: "/magazine", label: "Magazine" },
    { href: "/exhibitions", label: "Exhibitions" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
} as const

export const exhibitions = {
  portals: {
    title: "Portals",
    summary:
      "A Spatial Metaverse room on thresholds between physical and digital, artists and collectors. Quiet, selective, 6–10 works.",
  },
  rareBits: {
    title: "Rare Bits & Bytes",
    summary:
      "A curated NFT art exclusive showcase: 48 works in seven rooms.",
    rooms: [
      "Threshold",
      "Studio",
      "Cast",
      "Singular",
      "Material",
      "Rare Rodeo Bits",
      "Bytes of Series",
    ],
  },
} as const

/** Draft stays out of search indexes unless this is exactly "true" at build time. */
export function isSiteIndexable() {
  return process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true"
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: site.ogLocale,
      type: "website",
    },
  }
}
