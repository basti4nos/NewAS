import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { contactEmail } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy · ASKNIGHTS",
  description: "Privacy placeholder for the ASKNIGHTS public draft site.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
}

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy">
      <p className="rounded-xl border border-amber-300/30 bg-amber-300/10 px-4 py-3 text-sm text-amber-50">
        Placeholder for legal review. This is not a final privacy policy.
      </p>
      <p>
        This draft site is mostly static marketing content plus a private showcase. It does not run
        an account system or payment flow.
      </p>
      <p>
        If analytics or other third-party scripts are added later, this page will be updated before
        they go live. Questions:{" "}
        <a href={`mailto:${contactEmail}`} className="text-white underline-offset-4 hover:underline">
          {contactEmail}
        </a>
        .
      </p>
    </PageShell>
  )
}
