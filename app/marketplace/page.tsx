import { PageIntro } from "@/components/page-intro"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata(
  "Marketplace",
  "The ASKNIGHTS curated marketplace is in development on testnet. Coming soon.",
  "/marketplace",
)

export default function MarketplacePage() {
  return (
    <article>
      <PageIntro eyebrow="Coming soon" title="Marketplace">
        <p>
          A curated marketplace is in development on testnet. It is not open, and
          there is no public address yet.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-6xl px-6 pb-24">
        {/* TODO: link this page when a public marketplace address exists. Do not add an external dApp URL before then. */}
        <p className="max-w-2xl border-t border-border pt-8 text-muted-foreground">
          This page is a placeholder. Nothing here is for sale, and no launch date
          is set.
        </p>
      </div>
    </article>
  )
}
