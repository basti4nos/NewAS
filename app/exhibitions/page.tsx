import { ArtworkPlaceholder } from "@/components/artwork-placeholder"
import { PageIntro } from "@/components/page-intro"
import { exhibitions, pageMetadata } from "@/lib/site"

export const metadata = pageMetadata(
  "Exhibitions",
  "Portals, a Spatial Metaverse room, and Rare Bits & Bytes, a curated NFT art showcase of 48 works in seven rooms.",
  "/exhibitions",
)

export default function ExhibitionsPage() {
  return (
    <article>
      <PageIntro eyebrow="Programme" title="Exhibitions">
        <p>Two exhibitions. Works will be shown here as they are published.</p>
      </PageIntro>

      <div className="mx-auto max-w-6xl space-y-20 px-6 pb-24">
        <section aria-labelledby="portals-heading" className="border-t border-border pt-10">
          <h2 id="portals-heading" className="font-serif text-4xl">
            {exhibitions.portals.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {exhibitions.portals.summary}
          </p>
          <div className="mt-10 max-w-sm">
            <ArtworkPlaceholder label="Portals — artwork to follow" />
          </div>
        </section>

        <section aria-labelledby="rare-bits-heading" className="border-t border-border pt-10">
          <h2 id="rare-bits-heading" className="font-serif text-4xl">
            {exhibitions.rareBits.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {exhibitions.rareBits.summary}
          </p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2">
            {exhibitions.rareBits.rooms.map((room, index) => (
              <li key={room} className="border border-border px-4 py-3 text-sm">
                <span className="mr-3 text-accent">{String(index + 1).padStart(2, "0")}</span>
                {room}
              </li>
            ))}
          </ol>
          <div className="mt-10 max-w-sm">
            <ArtworkPlaceholder label="Rare Bits & Bytes — artwork to follow" />
          </div>
        </section>
      </div>
    </article>
  )
}
