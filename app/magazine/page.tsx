import { PageIntro } from "@/components/page-intro"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata(
  "Magazine",
  "ASKNIGHTS Magazine is curated editorial on digital art.",
  "/magazine",
)

export default function MagazinePage() {
  return (
    <article>
      <PageIntro eyebrow="Programme" title="ASKNIGHTS Magazine">
        <p>Curated editorial on digital art.</p>
      </PageIntro>
      <div className="mx-auto max-w-6xl px-6 pb-24">
        {/* TODO: publish Magazine essays here. Do not insert invented articles. */}
        <p className="max-w-2xl border-t border-border pt-8 text-muted-foreground">
          Essays will be published on this page. None are posted yet.
        </p>
      </div>
    </article>
  )
}
