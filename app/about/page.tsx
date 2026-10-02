import { PageIntro } from "@/components/page-intro"
import { SocialLinks } from "@/components/social-links"
import { exhibitions, pageMetadata, site } from "@/lib/site"

export const metadata = pageMetadata(
  "About",
  "ASKNIGHTS was founded in 2020. NFT art curation, phygitals, and Metaverse exposure. AI informs. Human curators decide.",
  "/about",
)

export default function AboutPage() {
  return (
    <article>
      <PageIntro eyebrow={`Founded ${site.founded}`} title="About">
        <p>
          ASKNIGHTS was founded in {site.founded}. The work is NFT art curation,
          phygitals (physical-digital art), and Metaverse exposure.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-6xl space-y-16 px-6 pb-24">
        <p className="max-w-2xl text-xl text-foreground">{site.positioning}</p>

        <section aria-labelledby="about-programme">
          <h2 id="about-programme" className="font-serif text-3xl">
            Programme
          </h2>
          <ul className="mt-6 max-w-2xl space-y-4 text-muted-foreground">
            <li>ASKNIGHTS Magazine — curated editorial on digital art.</li>
            <li>
              {exhibitions.portals.title} — {exhibitions.portals.summary}
            </li>
            <li>
              {exhibitions.rareBits.title} — {exhibitions.rareBits.summary}
            </li>
            <li id="preservation">Preservation and archival of NFT art.</li>
            <li>A curated marketplace, in development on testnet. Coming soon.</li>
          </ul>
        </section>

        <section aria-labelledby="about-publish">
          <h2 id="about-publish" className="font-serif text-3xl">
            Published at
          </h2>
          <p className="mt-4">
            <a
              href={site.url}
              className="underline decoration-accent underline-offset-4"
            >
              {site.domain}
            </a>
          </p>
          <SocialLinks className="mt-6 space-y-2" />
        </section>
      </div>
    </article>
  )
}
