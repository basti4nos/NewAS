import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { DraftMarker } from "@/components/showcase/draft-marker"
import { MediaFrame } from "@/components/showcase/media-frame"
import type { HomeTeaser as HomeTeaserModel } from "@/lib/showcase"

export function HomeTeaser({ teaser }: { teaser: HomeTeaserModel }) {
  return (
    <section
      id="showcase"
      aria-labelledby="showcase-teaser-heading"
      className="border-t border-[var(--line)] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <DraftMarker />
        <h2
          id="showcase-teaser-heading"
          className="mt-6 font-display text-3xl tracking-tight text-[var(--ink)] md:text-4xl"
        >
          Showcase
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
          {teaser.state === "upcoming"
            ? `${teaser.count} works this month, released on a daily schedule.`
            : `${teaser.kicker} in ${teaser.monthLabel}.`}
        </p>
        <p className="mt-2 text-sm text-[var(--ink-muted)]">A selection in progress. Not the whole collection.</p>

        {teaser.state === "upcoming" ? (
          <div className="mt-12 border border-dashed border-[var(--line)] bg-[var(--bg-elevated)] px-6 py-10 md:px-10">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--ink-muted)]">Opens</p>
            <p className="mt-3 font-display text-3xl tracking-tight text-[var(--ink)] md:text-4xl">
              {teaser.opensLabel}
            </p>
            <p className="mt-4 max-w-lg text-[var(--ink-muted)]">
              {teaser.monthLabel}. Works stay hidden until their day.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {teaser.works.map((work) => (
              <article key={work.slug} className="overflow-hidden border border-[var(--line)] bg-[var(--bg-elevated)]">
                <Link href={work.href} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]">
                  <div className="aspect-[4/5] bg-[#111]">
                    <MediaFrame
                      url={work.mediaUrl}
                      mime={work.mediaMime}
                      kind={work.mediaKind}
                      alt={`${work.title} by ${work.artist}`}
                      fit="contain"
                      priority
                    />
                  </div>
                </Link>
                <div className="px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--ink-muted)]">{teaser.kicker}</p>
                  <h3 className="mt-2 font-display text-2xl text-[var(--ink)]">{work.artist}</h3>
                  <p className="text-base text-[var(--ink-muted)]">{work.title}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-10">
          <Link
            href={teaser.href}
            className="btn inline-flex items-center gap-2 border border-[var(--ink)] bg-[var(--ink)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition hover:bg-transparent hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
          >
            Enter the showcase
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
