import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "About · ASKNIGHTS",
  description: "ASKNIGHTS curates, tokenises, and preserves high-quality NFT art.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <PageShell title="About">
      <p>
        ASKNIGHTS is a cultural-technology initiative focused on selective NFT art curation,
        responsible tokenisation, recognition, and long-term preservation.
      </p>
      <p>
        This site hosts the public draft of that programme, including a private monthly showcase
        that is still marked as a work in progress.
      </p>
      <p>
        For the broader project overview, visit{" "}
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline-offset-4 hover:underline"
        >
          asknights.org
        </a>
        , or go to{" "}
        <Link href="/contact" className="text-white underline-offset-4 hover:underline">
          Contact
        </Link>
        .
      </p>
    </PageShell>
  )
}
