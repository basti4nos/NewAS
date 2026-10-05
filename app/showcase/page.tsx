import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MonthView } from "@/components/showcase/month-view"
import { getMonthPage, isPreview, resolveMonthId, showcaseToday } from "@/lib/showcase"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Showcase · ASKNIGHTS",
  description: "A monthly cycle of works from the ASKNIGHTS curation, released one a day. Private draft.",
  robots: { index: false, follow: false },
}

export default async function ShowcasePage({
  searchParams,
}: {
  searchParams: Promise<{ preview?: string | string[] }>
}) {
  const params = await searchParams
  const today = await showcaseToday()
  const model = await getMonthPage(resolveMonthId(today), isPreview(params.preview))
  if (!model) notFound()
  return <MonthView model={model} />
}
