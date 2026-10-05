import "server-only"

import { connection } from "next/server"
import collection from "@/data/showcase/collection.json"
import type { AiLabel, CollectionFile, StoredWork } from "@/data/showcase/types"
import {
  aiBadge,
  formatLong,
  formatWeekdayLong,
  mediaKind,
  mediumLabel,
  monthEnd,
  monthTitle,
  provenanceLabel,
  todayISO,
  withPreview,
  type MediaKind,
} from "@/lib/showcase-shared"

const data = collection as CollectionFile

export type PublicWork = {
  slug: string
  title: string
  artist: string
  curatorNote: string
  chain: string
  provenanceUrl: string
  provenanceLabel: string
  mediaUrl: string
  mediaMime: string
  mediaKind: MediaKind
  mediumLabel: string
  phygital: boolean
  ai: AiLabel | null
  aiLabel: string | null
  previewStill: boolean
  releaseDate: string
  releaseLabel: string
  exhibitionUrl: string | null
  marketplaceUrl: string
  href: string
}

export type MonthSummary = {
  id: string
  label: string
  count: number
  opens: string
  closes: string
  opensLabel: string
}

export type CalendarItem = { state: "locked" } | { state: "open"; work: PublicWork }

export type CalendarDay = {
  iso: string | null
  inMonth: boolean
  dayNumber: number | null
  isToday: boolean
  items: CalendarItem[]
}

export type HeroModel =
  | { kind: "works"; kicker: string; works: PublicWork[] }
  | { kind: "locked"; kicker: string; dateLabel: string; detail: string }

export type MonthPageModel = {
  summary: MonthSummary
  months: MonthSummary[]
  hero: HeroModel
  days: CalendarDay[]
  released: PublicWork[]
  preview: boolean
  today: string
}

export type Neighbor = { href: string; title: string; artist: string }

export type ViewerModel = {
  work: PublicWork
  prev: Neighbor | null
  next: Neighbor | null
  sibling: Neighbor | null
  monthHref: string
  monthLabel: string
  preview: boolean
  live: boolean
}

type ScheduledWork = StoredWork & { releaseDate: string; month: string }

function scheduled(): ScheduledWork[] {
  return data.works.filter((work): work is ScheduledWork => Boolean(work.releaseDate && work.month))
}

export function isPreview(value: string | string[] | undefined): boolean {
  if (process.env.SHOWCASE_PREVIEW === "1") return true
  const flag = Array.isArray(value) ? value[0] : value
  return flag === "1" || flag === "true"
}

export async function showcaseToday(): Promise<string> {
  await connection()
  return todayISO()
}

export function listMonths(): MonthSummary[] {
  const groups = new Map<string, ScheduledWork[]>()
  for (const work of scheduled()) {
    const list = groups.get(work.month) ?? []
    list.push(work)
    groups.set(work.month, list)
  }
  return [...groups.entries()].map(([id, works]) => ({
    id,
    label: monthTitle(id),
    count: works.length,
    opens: works[0].releaseDate,
    closes: works[works.length - 1].releaseDate,
    opensLabel: formatWeekdayLong(works[0].releaseDate),
  }))
}

export function resolveMonthId(today: string): string {
  const months = listMonths()
  const current = months.find((month) => today >= `${month.id}-01` && today <= monthEnd(month.id))
  if (current) return current.id
  if (today < `${months[0].id}-01`) return months[0].id
  return months[months.length - 1].id
}

function toPublic(work: ScheduledWork, preview: boolean): PublicWork {
  const ai = work.ai ?? null
  return {
    slug: work.slug,
    title: work.title,
    artist: work.artist,
    curatorNote: work.curatorNote,
    chain: work.chain,
    provenanceUrl: work.provenanceUrl,
    provenanceLabel: provenanceLabel(work.provenanceUrl),
    mediaUrl: work.mediaUrl,
    mediaMime: work.mediaMime,
    mediaKind: mediaKind(work.mediaMime),
    mediumLabel: mediumLabel(work.mediaMime, Boolean(work.previewStill)),
    phygital: Boolean(work.phygital),
    ai,
    aiLabel: aiBadge(ai),
    previewStill: Boolean(work.previewStill),
    releaseDate: work.releaseDate,
    releaseLabel: formatWeekdayLong(work.releaseDate),
    exhibitionUrl: work.exhibitionUrl ?? null,
    marketplaceUrl: data.marketplaceUrl,
    href: withPreview(`/showcase/${work.month}/${work.slug}`, preview),
  }
}

function visible(work: ScheduledWork, today: string, preview: boolean): boolean {
  return preview || work.releaseDate <= today
}

export async function getMonthPage(monthId: string, preview: boolean): Promise<MonthPageModel | null> {
  const today = await showcaseToday()
  const months = listMonths()
  const summary = months.find((month) => month.id === monthId)
  if (!summary) return null
  const works = scheduled().filter((work) => work.month === monthId)
  const hero = buildHero(works, today, preview)
  return {
    summary,
    months,
    hero,
    days: buildCalendar(monthId, works, today, preview),
    released: works.filter((work) => visible(work, today, preview)).map((work) => toPublic(work, preview)),
    preview,
    today,
  }
}

export async function getViewer(monthId: string, slug: string, preview: boolean): Promise<ViewerModel | null> {
  const today = await showcaseToday()
  const works = scheduled().filter((work) => work.month === monthId)
  const index = works.findIndex((work) => work.slug === slug)
  if (index < 0) return null
  const work = works[index]
  if (!visible(work, today, preview)) return null
  const navigable = works.filter((item) => visible(item, today, preview))
  const navIndex = navigable.findIndex((item) => item.slug === slug)
  const prev = navIndex > 0 ? navigable[navIndex - 1] : null
  const next = navIndex < navigable.length - 1 ? navigable[navIndex + 1] : null
  const sibling =
    works.find((item) => item !== work && item.releaseDate === work.releaseDate && visible(item, today, preview)) ??
    null
  return {
    work: toPublic(work, preview),
    prev: prev ? neighbor(prev, preview) : null,
    next: next ? neighbor(next, preview) : null,
    sibling: sibling ? neighbor(sibling, preview) : null,
    monthHref: withPreview(`/showcase/${monthId}`, preview),
    monthLabel: monthTitle(monthId),
    preview,
    live: work.releaseDate <= today,
  }
}

function neighbor(work: ScheduledWork, preview: boolean): Neighbor {
  return {
    href: withPreview(`/showcase/${work.month}/${work.slug}`, preview),
    title: work.title,
    artist: work.artist,
  }
}

function buildHero(works: ScheduledWork[], today: string, preview: boolean): HeroModel {
  const todays = works.filter((work) => work.releaseDate === today)
  if (todays.length > 0 && todays.every((work) => visible(work, today, preview))) {
    return { kind: "works", kicker: "Today", works: todays.map((work) => toPublic(work, preview)) }
  }

  const released = works.filter((work) => visible(work, today, preview))
  if (preview && today < works[0].releaseDate) {
    const opening = works.filter((work) => work.releaseDate === works[0].releaseDate)
    return {
      kind: "works",
      kicker: `Preview · opens ${formatLong(works[0].releaseDate)}`,
      works: opening.map((work) => toPublic(work, preview)),
    }
  }

  if (released.length === 0) {
    return {
      kind: "locked",
      kicker: "Opens",
      dateLabel: formatWeekdayLong(works[0].releaseDate),
      detail: "The first work in this cycle is released on this day.",
    }
  }

  const latestDate = released[released.length - 1].releaseDate
  const latest = released.filter((work) => work.releaseDate === latestDate)
  const monthOver = today > works[works.length - 1].releaseDate
  return {
    kind: "works",
    kicker: monthOver ? "Closing day" : "Latest release",
    works: latest.map((work) => toPublic(work, preview)),
  }
}

function buildCalendar(monthId: string, works: ScheduledWork[], today: string, preview: boolean): CalendarDay[] {
  const [year, month] = monthId.split("-").map(Number)
  const firstWeekday = new Date(Date.UTC(year, month - 1, 1)).getUTCDay()
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate()
  const byDate = new Map<string, ScheduledWork[]>()
  for (const work of works) {
    const list = byDate.get(work.releaseDate) ?? []
    list.push(work)
    byDate.set(work.releaseDate, list)
  }

  const cells: CalendarDay[] = []
  for (let index = 0; index < firstWeekday; index += 1) {
    cells.push({ iso: null, inMonth: false, dayNumber: null, isToday: false, items: [] })
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    const iso = `${monthId}-${String(day).padStart(2, "0")}`
    const scheduledToday = byDate.get(iso) ?? []
    const items: CalendarItem[] = scheduledToday.map((work) =>
      visible(work, today, preview) ? { state: "open", work: toPublic(work, preview) } : { state: "locked" },
    )
    cells.push({ iso, inMonth: true, dayNumber: day, isToday: iso === today, items })
  }
  while (cells.length % 7 !== 0) {
    cells.push({ iso: null, inMonth: false, dayNumber: null, isToday: false, items: [] })
  }
  return cells
}

export type HomeTeaser =
  | { state: "upcoming"; monthLabel: string; opensLabel: string; count: number; href: string }
  | { state: "works"; kicker: string; monthLabel: string; works: PublicWork[]; href: string }

export async function getOgSubject(
  monthId: string,
  slug: string,
): Promise<{ status: "open"; work: PublicWork } | { status: "locked"; dateLabel: string } | { status: "missing" }> {
  const today = await showcaseToday()
  const work = scheduled().find((item) => item.month === monthId && item.slug === slug)
  if (!work) return { status: "missing" }
  if (work.releaseDate > today) return { status: "locked", dateLabel: formatWeekdayLong(work.releaseDate) }
  return { status: "open", work: toPublic(work, false) }
}

export async function getHomeTeaser(): Promise<HomeTeaser> {
  const today = await showcaseToday()
  const monthId = resolveMonthId(today)
  const summary = listMonths().find((month) => month.id === monthId)
  if (!summary) {
    return {
      state: "upcoming",
      monthLabel: "Showcase",
      opensLabel: "Date to be set",
      count: 33,
      href: "/showcase",
    }
  }
  const works = scheduled().filter((work) => work.month === monthId)
  const href = `/showcase/${monthId}`
  if (today < summary.opens) {
    return { state: "upcoming", monthLabel: summary.label, opensLabel: summary.opensLabel, count: summary.count, href }
  }
  const todays = works.filter((work) => work.releaseDate === today)
  const chosen = todays.length > 0 ? todays : works.filter((work) => work.releaseDate <= today).slice(-1)
  const latestDate = chosen[0]?.releaseDate
  const shown = latestDate ? works.filter((work) => work.releaseDate === latestDate && work.releaseDate <= today) : []
  if (shown.length === 0) {
    return { state: "upcoming", monthLabel: summary.label, opensLabel: summary.opensLabel, count: summary.count, href }
  }
  return {
    state: "works",
    kicker: shown[0].releaseDate === today ? "Today" : "Latest release",
    monthLabel: summary.label,
    works: shown.map((work) => toPublic(work, false)),
    href,
  }
}
