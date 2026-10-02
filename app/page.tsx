import type { Metadata } from "next"
import Link from "next/link"
import { ArtworkPlaceholder } from "@/components/artwork-placeholder"
import { exhibitions, site } from "@/lib/site"

export const metadata: Metadata = {
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: site.ogLocale,
    type: "website",
  },
}

const programme = [
  {
    title: "Magazine",
    text: "ASKNIGHTS Magazine. Curated editorial on digital art.",
    href: "/magazine",
    link: "Read",
  },
  {
    title: "Exhibitions",
    text: `${exhibitions.portals.title}, and ${exhibitions.rareBits.title}.`,
    href: "/exhibitions",
    link: "View",
  },
  {
    title: "Preservation",
    text: "Preservation and archival of NFT art.",
    href: "/about#preservation",
    link: "About",
  },
  {
    title: "Marketplace",
    text: "A curated marketplace, in development on testnet. Coming soon.",
    href: "/marketplace",
    link: "Status",
  },
]

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">
            {site.brandStrip}
          </p>
          <h1 className="mt-8 font-serif text-6xl leading-none text-foreground md:text-8xl">
            ASKNIGHTS
          </h1>
          <div className="mt-8 h-px w-16 bg-accent" />
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Founded in {site.founded}. NFT art curation, phygitals (physical-digital
            art), and Metaverse exposure.
          </p>
          <p className="mt-6 text-foreground">{site.positioning}</p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm tracking-wide">
            <Link href="/exhibitions" className="underline decoration-accent underline-offset-4">
              Exhibitions
            </Link>
            <Link href="/magazine" className="underline decoration-accent underline-offset-4">
              Magazine
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="programme-heading" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 id="programme-heading" className="font-serif text-4xl">
            Programme
          </h2>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {programme.map((item) => (
              <li
                key={item.title}
                className="grid gap-3 py-8 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <h3 className="font-serif text-2xl md:col-span-3">{item.title}</h3>
                <p className="text-muted-foreground md:col-span-7">{item.text}</p>
                <Link
                  href={item.href}
                  className="text-sm tracking-wide text-foreground underline decoration-accent underline-offset-4 md:col-span-2"
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="exhibitions-heading">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex items-end justify-between gap-6">
            <h2 id="exhibitions-heading" className="font-serif text-4xl">
              Exhibitions
            </h2>
            <Link
              href="/exhibitions"
              className="text-sm tracking-wide underline decoration-accent underline-offset-4"
            >
              All exhibitions
            </Link>
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <article>
              <h3 className="font-serif text-3xl">{exhibitions.portals.title}</h3>
              <p className="mt-4 text-muted-foreground">{exhibitions.portals.summary}</p>
              <div className="mt-8">
                <ArtworkPlaceholder label="Portals — artwork to follow" />
              </div>
            </article>
            <article>
              <h3 className="font-serif text-3xl">{exhibitions.rareBits.title}</h3>
              <p className="mt-4 text-muted-foreground">{exhibitions.rareBits.summary}</p>
              <div className="mt-8">
                <ArtworkPlaceholder label="Rare Bits & Bytes — artwork to follow" />
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
