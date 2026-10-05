import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { WorkViewer } from "@/components/showcase/work-viewer"
import { getViewer, isPreview } from "@/lib/showcase"

export const dynamic = "force-dynamic"

type RouteParams = {
  params: Promise<{ month: string; slug: string }>
  searchParams: Promise<{ preview?: string | string[] }>
}

export async function generateMetadata({ params, searchParams }: RouteParams): Promise<Metadata> {
  const { month, slug } = await params
  const query = await searchParams
  const preview = isPreview(query.preview)
  const model = await getViewer(month, slug, preview)
  const robots = { index: false, follow: false } as const
  if (!model) {
    return { title: "Showcase · ASKNIGHTS", robots }
  }
  const title = `${model.work.artist} — ${model.work.title} · ASKNIGHTS`
  const description = model.work.curatorNote
  return {
    title,
    description,
    robots,
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: `/showcase/${month}/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${model.work.title} by ${model.work.artist}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/showcase/${month}/${slug}/opengraph-image`],
    },
  }
}

export default async function ShowcaseWorkPage({ params, searchParams }: RouteParams) {
  const { month, slug } = await params
  const query = await searchParams
  const model = await getViewer(month, slug, isPreview(query.preview))
  if (!model) notFound()
  return <WorkViewer model={model} />
}
