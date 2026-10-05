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
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12)_0%,transparent_55%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <DraftMarker />
        <h2
          id="showcase-teaser-heading"
          className="mt-8 text-5xl font-black tracking-tighter md:text-7xl"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Showcase
          </span>
        </h2>
        <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-gray-300">
          {teaser.state === "upcoming"
            ? `${teaser.count} works this month, released on a daily schedule.`
            : `${teaser.kicker} in ${teaser.monthLabel}.`}
        </p>
        <p className="mt-2 text-sm text-white/45">A selection in progress. Not the whole collection.</p>

        {teaser.state === "upcoming" ? (
          <div className="mt-12 rounded-3xl border border-dashed border-white/15 px-6 py-12 md:px-10">
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">Opens</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{teaser.opensLabel}</p>
            <p className="mt-4 max-w-lg text-gray-400">{teaser.monthLabel}. Works stay hidden until their day.</p>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {teaser.works.map((work) => (
              <article key={work.slug} className="overflow-hidden rounded-3xl border border-white/10 bg-black/40">
                <Link href={work.href} className="block">
                  <div className="aspect-[4/5] bg-black">
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
                  <p className="text-xs uppercase tracking-[0.16em] text-pink-200/80">{teaser.kicker}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{work.artist}</h3>
                  <p className="text-lg font-light text-white/75">{work.title}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-12">
          <Link
            href={teaser.href}
            className="inline-flex items-center rounded-md bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 px-8 py-4 text-lg font-bold tracking-wide text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
          >
            Enter the showcase
            <ArrowRight className="ml-3 h-5 w-5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
