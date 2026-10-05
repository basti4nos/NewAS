import Link from "next/link"
import { Lock } from "lucide-react"
import { MediaFrame } from "@/components/showcase/media-frame"
import { SiteHeader } from "@/components/showcase/site-header"
import { WorkBadges } from "@/components/showcase/work-badges"
import { WorkLinks } from "@/components/showcase/work-links"
import type { CalendarDay, MonthPageModel, PublicWork } from "@/lib/showcase"
import { formatLong, withPreview } from "@/lib/showcase-shared"

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function MonthView({ model }: { model: MonthPageModel }) {
  const { summary, hero, days, released, preview, months } = model
  return (
    <>
      <SiteHeader />
      {preview ? (
        <p
          data-testid="preview-banner"
          className="bg-pink-500/15 px-4 py-2 text-center text-sm text-pink-100"
          role="status"
        >
          Preview mode is on. Unreleased works are visible here and are still marked noindex.
        </p>
      ) : null}
      <main id="showcase-main" className="mx-auto max-w-6xl px-4 pb-24 pt-10">
        <p className="text-xs uppercase tracking-[0.22em] text-white/45">Private draft · not the whole collection</p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">{summary.label}</h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70">
              {summary.count} works, released on a daily schedule. A few dates carry two. Each work appears at 00:00 UTC.
            </p>
          </div>
          <nav aria-label="Months" className="flex flex-wrap gap-2">
            {months.map((month) => (
              <Link
                key={month.id}
                href={withPreview(`/showcase/${month.id}`, preview)}
                aria-current={month.id === summary.id ? "page" : undefined}
                className={`rounded-full border px-3 py-1.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300 ${
                  month.id === summary.id
                    ? "border-white bg-white text-black"
                    : "border-white/15 text-white/75 hover:border-white/40"
                }`}
              >
                {month.label}
              </Link>
            ))}
          </nav>
        </div>

        <Hero hero={hero} />

        <section className="mt-16" aria-labelledby="calendar-heading">
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 id="calendar-heading" className="text-xl font-medium tracking-tight">
              Month calendar
            </h2>
            <p className="text-xs text-white/45">Dashed days are still to come</p>
          </div>
          <div data-testid="month-calendar" className="showcase-calendar" role="grid" aria-label={`${summary.label} release calendar`}>
            <div role="row" className="grid grid-cols-7 gap-1 sm:gap-2">
              {WEEKDAYS.map((day) => (
                <div
                  key={day}
                  role="columnheader"
                  className="pb-2 text-center text-[10px] uppercase tracking-[0.16em] text-white/40 sm:text-xs"
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {chunk(days, 7).map((week, weekIndex) => (
                <div key={weekIndex} role="row" className="contents">
                  {week.map((day, dayIndex) => (
                    <DayCell key={day.iso ?? `pad-${weekIndex}-${dayIndex}`} day={day} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {released.length > 0 ? (
          <section className="mt-16" aria-labelledby="released-heading">
            <h2 id="released-heading" className="text-xl font-medium tracking-tight">
              {preview ? "Full cycle" : "Released so far"}
            </h2>
            <ol className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {released.map((work) => (
                <li key={work.slug}>
                  <Link
                    href={work.href}
                    className="flex items-baseline justify-between gap-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
                  >
                    <span>
                      <span className="block text-base text-white">{work.artist}</span>
                      <span className="block text-sm font-light text-white/65">{work.title}</span>
                    </span>
                    <span className="shrink-0 text-xs uppercase tracking-[0.14em] text-white/40">
                      {formatLong(work.releaseDate)}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        ) : null}
      </main>
    </>
  )
}

function Hero({ hero }: { hero: MonthPageModel["hero"] }) {
  if (hero.kind === "locked") {
    return (
      <section
        data-testid="locked-hero"
        aria-label="Upcoming release"
        className="mt-12 flex min-h-[320px] flex-col items-start justify-end rounded-3xl border border-dashed border-white/15 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.16),transparent_55%)] px-6 py-10 md:min-h-[460px] md:px-10"
      >
        <Lock className="mb-6 h-5 w-5 text-white/50" aria-hidden />
        <p className="text-xs uppercase tracking-[0.22em] text-white/50">{hero.kicker}</p>
        <p className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">{hero.dateLabel}</p>
        <p className="mt-4 max-w-md text-base text-white/65">{hero.detail}</p>
      </section>
    )
  }

  return (
    <section data-testid="showcase-hero" aria-label={hero.kicker} className="mt-12">
      <p className="text-xs uppercase tracking-[0.22em] text-pink-200/80">{hero.kicker}</p>
      <div className={`mt-4 grid gap-10 ${hero.works.length > 1 ? "lg:grid-cols-2" : ""}`}>
        {hero.works.map((work) => (
          <HeroWork key={work.slug} work={work} solo={hero.works.length === 1} />
        ))}
      </div>
    </section>
  )
}

function HeroWork({ work, solo }: { work: PublicWork; solo: boolean }) {
  return (
    <article className={solo ? "grid items-end gap-8 lg:grid-cols-12" : "flex flex-col gap-5"}>
      <Link
        href={work.href}
        className={`block overflow-hidden rounded-2xl bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300 ${
          solo ? "lg:col-span-7" : ""
        }`}
      >
        <div className="aspect-[4/5]">
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
      </Link>
      <div className={`flex flex-col justify-end pb-2 ${solo ? "lg:col-span-5" : ""}`}>
        <WorkBadges chain={work.chain} phygital={work.phygital} aiLabel={work.aiLabel} />
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">{work.artist}</h2>
        <p className="mt-1 text-xl font-light text-white/75">{work.title}</p>
        <p className="mt-1 text-sm text-white/45">{work.releaseLabel}</p>
        <p className="mt-4 text-sm leading-relaxed text-white/75">{work.curatorNote}</p>
        <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/40">Medium · {work.mediumLabel}</p>
        <div className="mt-6">
          <WorkLinks
            provenanceUrl={work.provenanceUrl}
            provenanceLabel={work.provenanceLabel}
            title={work.title}
            marketplaceUrl={work.marketplaceUrl}
            exhibitionUrl={work.exhibitionUrl}
          />
        </div>
      </div>
    </article>
  )
}

function DayCell({ day }: { day: CalendarDay }) {
  if (!day.inMonth || day.dayNumber == null) {
    return <div role="gridcell" aria-hidden className="aspect-square" />
  }

  const label = day.iso ? formatLong(day.iso) : ""
  const todayClass = day.isToday ? "ring-2 ring-pink-400" : ""

  if (day.items.length === 0) {
    return (
      <div
        role="gridcell"
        aria-label={`${label}, no work scheduled`}
        aria-current={day.isToday ? "date" : undefined}
        className={`flex aspect-square items-center justify-center rounded-md text-xs text-white/50 ${todayClass}`}
      >
        {day.dayNumber}
      </div>
    )
  }

  return (
    <div
      role="gridcell"
      aria-label={day.items.every((item) => item.state === "locked") ? `${label}, not yet released` : undefined}
      aria-current={day.isToday ? "date" : undefined}
      className={`aspect-square overflow-hidden rounded-md ${todayClass}`}
    >
      <div className={day.items.length > 1 ? "grid h-full grid-rows-2 gap-px" : "h-full"}>
        {day.items.map((item, index) =>
          item.state === "locked" ? (
            <div
              key={index}
              aria-hidden
              className="flex h-full flex-col items-center justify-center border border-dashed border-white/15 bg-white/[0.02] text-white/55"
            >
              <Lock className="mb-1 h-3 w-3" aria-hidden />
              <span className="text-xs">{day.dayNumber}</span>
            </div>
          ) : (
            <Link
              key={item.work.slug}
              href={item.work.href}
              aria-label={`${item.work.title} by ${item.work.artist}, ${label}`}
              className="relative block h-full overflow-hidden bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
            >
              <MediaFrame
                url={item.work.mediaUrl}
                mime={item.work.mediaMime}
                kind={item.work.mediaKind}
                alt=""
                fit="cover"
                mode="thumb"
              />
              <span className="absolute left-1 top-1 rounded bg-black/70 px-1 text-[10px] text-white">{day.dayNumber}</span>
            </Link>
          ),
        )}
      </div>
    </div>
  )
}

function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = []
  for (let index = 0; index < items.length; index += size) rows.push(items.slice(index, index + size))
  return rows
}
