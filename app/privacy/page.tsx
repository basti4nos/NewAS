import { PageIntro } from "@/components/page-intro"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata(
  "Privacy",
  "Placeholder privacy notice for the ASKNIGHTS draft website. Not a published policy.",
  "/privacy",
)

export default function PrivacyPage() {
  return (
    <article>
      <PageIntro eyebrow="Legal review required" title="Privacy">
        {/* TODO: legal review before this page is treated as a privacy notice. */}
        <p>
          This page is a placeholder. It has not been reviewed by counsel and is
          not a published privacy notice.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="max-w-2xl space-y-4 border-t border-border pt-8 text-muted-foreground">
          <p>
            On this draft, pages ask not to be indexed unless indexing is turned
            on for a launch build. The contact form does not transmit what you
            type. Analytics do not run unless an analytics identifier is
            configured for the build.
          </p>
          <p>Replace this text with a reviewed notice before publication.</p>
        </div>
      </div>
    </article>
  )
}
