import Link from "next/link"
import { SiteHeader } from "@/components/showcase/site-header"

export default function ShowcaseNotFound() {
  return (
    <>
      <SiteHeader />
      <main id="showcase-main" className="mx-auto max-w-xl px-6 py-24">
        <h1 className="text-3xl font-semibold tracking-tight">This page is not available</h1>
        <p className="mt-4 text-white/70">
          The work is either still to come, or the address does not match a scheduled release.
        </p>
        <Link
          href="/showcase"
          className="mt-8 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
        >
          Back to the showcase
        </Link>
      </main>
    </>
  )
}
