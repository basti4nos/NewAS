import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MonthView } from "@/components/showcase/month-view"
import { getMonthPage, isPreview, listMonths } from "@/lib/showcase"

export const dynamic = "force-dynamic"

type RouteParams = { params: Promise<{ month: string }>; searchParams: Promise<{ preview?: string | string[] }> }

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { month } = await params
  const summary = listMonths().find((item) => item.id === month)
  const title = summary ? `${summary.label} · ASKNIGHTS Showcase` : "Showcase · ASKNIGHTS"
  return {
    title,
    description: summary
      ? `${summary.count} works released through ${summary.label}. Private draft.`
      : "Private draft of the ASKNIGHTS monthly showcase.",
    robots: { index: false, follow: false },
    openGraph: {
      title,
      description: "Private draft. Not the whole collection.",
      images: summary ? [`/showcase/${summary.id}/opengraph-image`] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      images: summary ? [`/showcase/${summary.id}/opengraph-image`] : [],
    },
  }
}

export default async function ShowcaseMonthPage({ params, searchParams }: RouteParams) {
  const { month } = await params
  const query = await searchParams
  const model = await getMonthPage(month, isPreview(query.preview))
  if (!model) notFound()
  return <MonthView model={model} />
}
