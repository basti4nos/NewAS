"use client"

import { useEffect, useRef, useState, type TouchEvent } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DraftMarker } from "@/components/showcase/draft-marker"
import { MediaFrame } from "@/components/showcase/media-frame"
import { WorkBadges } from "@/components/showcase/work-badges"
import { WorkLinks } from "@/components/showcase/work-links"
import type { Neighbor, ViewerModel } from "@/lib/showcase"

export function WorkViewer({ model }: { model: ViewerModel }) {
  const router = useRouter()
  const { work, prev, next, sibling, monthHref, monthLabel, preview, live } = model
  const [details, setDetails] = useState(false)
  const [copied, setCopied] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    headingRef.current?.focus()
  }, [work.slug])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return
      if (event.key === "ArrowRight" && next) {
        event.preventDefault()
        router.push(next.href)
      } else if (event.key === "ArrowLeft" && prev) {
        event.preventDefault()
        router.push(prev.href)
      } else if (event.key === "Escape") {
        event.preventDefault()
        router.push(monthHref)
      } else if (event.key === "i" || event.key === "I") {
        setDetails((open) => !open)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, prev, monthHref, router])

  function onTouchStart(event: TouchEvent) {
    const touch = event.changedTouches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  function onTouchEnd(event: TouchEvent) {
    if (!touchStart.current) return
    const touch = event.changedTouches[0]
    const dx = touch.clientX - touchStart.current.x
    const dy = touch.clientY - touchStart.current.y
    touchStart.current = null
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.2) return
    if (dx < 0 && next) router.push(next.href)
    if (dx > 0 && prev) router.push(prev.href)
  }

  async function copyLink() {
    const path = work.href.split("?")[0]
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${path}`)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div data-testid="work-viewer" className="flex h-dvh flex-col bg-black text-white">
      <header className="flex items-center justify-between gap-3 border-b border-white/10 px-3 py-2">
        <Link
          href={monthHref}
          className="inline-flex items-center gap-1 rounded-md px-2 py-2 text-sm text-white/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
          {monthLabel}
        </Link>
        <div className="flex items-center gap-2">
          {preview ? (
            <span className="hidden text-[11px] uppercase tracking-[0.14em] text-pink-200 sm:inline">Preview</span>
          ) : null}
          <DraftMarker />
        </div>
      </header>

      <p className="sr-only">Use the left and right arrow keys to move between works. Escape returns to the month.</p>

      <div
        className="relative min-h-0 flex-1 touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="absolute inset-0">
          <MediaFrame
            url={work.mediaUrl}
            mime={work.mediaMime}
            kind={work.mediaKind}
            alt={`${work.title} by ${work.artist}`}
            fit="contain"
            priority
            mode="viewer"
          />
        </div>
        <NavButton direction="prev" neighbor={prev} />
        <NavButton direction="next" neighbor={next} />
      </div>

      <footer className="border-t border-white/10 bg-black/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 ref={headingRef} tabIndex={-1} className="text-xl font-semibold tracking-tight outline-none md:text-2xl">
              {work.artist}
              <span className="mt-0.5 block text-base font-light text-white/75">{work.title}</span>
            </h1>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">{work.releaseLabel}</p>
            <p className="mt-2 line-clamp-2 max-w-xl text-sm leading-relaxed text-white/65">{work.curatorNote}</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <WorkBadges chain={work.chain} phygital={work.phygital} aiLabel={work.aiLabel} />
              <p className="text-xs uppercase tracking-[0.14em] text-white/40">{work.mediumLabel}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              aria-expanded={details}
              aria-controls="work-details"
              onClick={() => setDetails((open) => !open)}
              className="rounded-full border border-white/20 px-4 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
            >
              {details ? "Hide details" : "Details"}
            </button>
            <button
              type="button"
              onClick={copyLink}
              className="rounded-full border border-white/20 px-4 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
            >
              {copied ? "Link copied" : live ? "Copy link" : "Copy public link"}
            </button>
          </div>
        </div>
        {details ? (
          <div id="work-details" className="max-h-[46vh] overflow-y-auto border-t border-white/10">
            <div className="mx-auto grid max-w-6xl gap-6 px-4 py-5">
              <WorkBadges chain={work.chain} phygital={work.phygital} aiLabel={work.aiLabel} />
              <div>
                <h2 className="text-[11px] uppercase tracking-[0.16em] text-white/45">Curator note</h2>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-white/80">{work.curatorNote}</p>
              </div>
              <p className="text-sm text-white/70">
                <span className="text-white/45">Medium · </span>
                {work.mediumLabel}
              </p>
              {sibling ? (
                <p className="text-sm text-white/70">
                  Also on this day:{" "}
                  <Link href={sibling.href} className="underline-offset-4 hover:underline">
                    {sibling.artist}, {sibling.title}
                  </Link>
                </p>
              ) : null}
              {!live ? (
                <p className="text-sm text-amber-100/90">
                  Shown in preview. The public link stays closed until {work.releaseLabel}.
                </p>
              ) : null}
              <WorkLinks
                provenanceUrl={work.provenanceUrl}
                provenanceLabel={work.provenanceLabel}
                title={work.title}
                marketplaceUrl={work.marketplaceUrl}
                exhibitionUrl={work.exhibitionUrl}
              />
            </div>
          </div>
        ) : null}
      </footer>
    </div>
  )
}

function NavButton({ direction, neighbor }: { direction: "prev" | "next"; neighbor: Neighbor | null }) {
  if (!neighbor) return <span className="sr-only">{direction === "prev" ? "No previous work" : "No next work"}</span>
  const side = direction === "prev" ? "left-2" : "right-2"
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight
  return (
    <Link
      href={neighbor.href}
      aria-label={`${direction === "prev" ? "Previous" : "Next"} work: ${neighbor.title} by ${neighbor.artist}`}
      className={`absolute top-1/2 ${side} z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300`}
    >
      <Icon className="h-5 w-5" aria-hidden />
    </Link>
  )
}
