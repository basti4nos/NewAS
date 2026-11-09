import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { contactEmail, social } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact · ASKNIGHTS",
  description: "Contact ASKNIGHTS for artist submissions, partnerships, and press.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <PageShell title="Contact">
      <p>
        For artist submissions, partnerships, and press, email{" "}
        <a href={`mailto:${contactEmail}`} className="text-white underline-offset-4 hover:underline">
          {contactEmail}
        </a>
        .
      </p>
      <p>
        You can also reach the team on{" "}
        <a href={social.x} target="_blank" rel="noopener noreferrer" className="text-white underline-offset-4 hover:underline">
          X (@top_NFT_art)
        </a>{" "}
        or{" "}
        <a
          href={social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline-offset-4 hover:underline"
        >
          Instagram (@asknights)
        </a>
        .
      </p>
      <p className="rounded-xl border border-dashed border-white/20 px-4 py-3 text-sm text-white/60">
        There is no automated contact form on this draft site yet. Messages go through email or social
        channels only.
      </p>
    </PageShell>
  )
}
