import { PageIntro } from "@/components/page-intro"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata(
  "Terms",
  "Placeholder terms for the ASKNIGHTS draft website. Not a published agreement.",
  "/terms",
)

export default function TermsPage() {
  return (
    <article>
      <PageIntro eyebrow="Legal review required" title="Terms">
        {/* TODO: legal review before this page is treated as terms of use. */}
        <p>
          This page is a placeholder. It has not been reviewed by counsel and is
          not a published agreement.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <p className="max-w-2xl border-t border-border pt-8 text-muted-foreground">
          Do not treat this draft as offering a marketplace, a membership, or a
          sale. Replace this text with reviewed terms before publication.
        </p>
      </div>
    </article>
  )
}
