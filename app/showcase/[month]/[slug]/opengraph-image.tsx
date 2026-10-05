import { ImageResponse } from "next/og"
import { getOgSubject } from "@/lib/showcase"
import { mediaKind } from "@/lib/showcase-shared"

export const dynamic = "force-dynamic"
export const alt = "ASKNIGHTS Showcase"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function WorkImage({ params }: { params: Promise<{ month: string; slug: string }> }) {
  const { month, slug } = await params
  const subject = await getOgSubject(month, slug)

  if (subject.status !== "open") {
    const dateLabel = subject.status === "locked" ? subject.dateLabel : ""
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#07070a",
            color: "white",
            padding: "72px",
          }}
        >
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#f5d48a" }}>DRAFT PREVIEW</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 28, letterSpacing: 8 }}>ASKNIGHTS</div>
            <div style={{ display: "flex", fontSize: 64, fontWeight: 600, marginTop: 16 }}>Not yet released</div>
            {dateLabel ? (
              <div style={{ display: "flex", fontSize: 32, color: "#ffffffb3", marginTop: 16 }}>{dateLabel}</div>
            ) : null}
          </div>
        </div>
      ),
      { ...size },
    )
  }

  const image = await loadStill(subject.work.mediaUrl, subject.work.mediaMime)
  const work = subject.work

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#07070a",
          color: "white",
        }}
      >
        <div
          style={{
            width: 630,
            height: 630,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#111114",
          }}
        >
          {image ? (
            // Satori renders this fetched still into the share card.
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} width={560} height={560} style={{ objectFit: "contain" }} alt="" />
          ) : (
            <div style={{ display: "flex", fontSize: 28, color: "#ffffff99" }}>{work.mediumLabel}</div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 48px",
            width: 570,
          }}
        >
          <div style={{ display: "flex", fontSize: 18, letterSpacing: 4, color: "#f5d48a" }}>DRAFT PREVIEW</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 42, fontWeight: 600, lineHeight: 1.15 }}>{work.artist}</div>
            <div style={{ display: "flex", fontSize: 28, color: "#ffffffcc", marginTop: 12 }}>{work.title}</div>
            <div style={{ display: "flex", fontSize: 20, color: "#ffffff80", marginTop: 18 }}>
              {work.chain} · {work.mediumLabel}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 18, letterSpacing: 4, color: "#ffffff66" }}>ASKNIGHTS</div>
        </div>
      </div>
    ),
    { ...size },
  )
}

async function loadStill(url: string, mime: string): Promise<string | null> {
  const kind = mediaKind(mime)
  if (kind !== "image") return null
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 4000)
    const response = await fetch(url, { signal: controller.signal })
    clearTimeout(timer)
    if (!response.ok) return null
    const bytes = await response.arrayBuffer()
    if (bytes.byteLength > 1_200_000) return null
    const type = mime.toLowerCase().startsWith("image/") ? mime : "image/jpeg"
    return `data:${type};base64,${Buffer.from(bytes).toString("base64")}`
  } catch {
    return null
  }
}
