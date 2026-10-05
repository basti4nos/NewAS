import type { ReactNode } from "react"
import Link from "next/link"
import { DraftMarker } from "@/components/showcase/draft-marker"

export function SiteHeader({
  trailing,
}: {
  trailing?: ReactNode
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/85 backdrop-blur-md">
      <a
        href="#showcase-main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-black"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-black tracking-[0.22em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300"
          >
            ASKNIGHTS
          </Link>
          <Link
            href="/showcase"
            className="text-sm text-white/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300"
          >
            Showcase
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {trailing}
          <DraftMarker />
        </div>
      </div>
    </header>
  )
}
