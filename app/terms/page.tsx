import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { contactEmail } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms · ASKNIGHTS",
  description: "Terms placeholder for the ASKNIGHTS public draft site.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
}

export default function TermsPage() {
  return (
    <PageShell title="Terms">
      <p className="rounded-xl border border-amber-300/30 bg-amber-300/10 px-4 py-3 text-sm text-amber-50">
        Placeholder for legal review. This is not a final terms of use document.
      </p>
      <p>
        Content on this draft site is provided for information about the ASKNIGHTS programme. Artwork
        in the showcase remains subject to the rights of the respective artists and platforms linked
        from each work.
      </p>
      <p>
        Marketplace features described here are not live unless a public marketplace address is
        published. Questions:{" "}
        <a href={`mailto:${contactEmail}`} className="text-white underline-offset-4 hover:underline">
          {contactEmail}
        </a>
        .
      </p>
    </PageShell>
  )
}