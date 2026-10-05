import { ImageResponse } from "next/og"
import { listMonths } from "@/lib/showcase"

export const dynamic = "force-dynamic"
export const alt = "ASKNIGHTS Showcase, private draft"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function MonthImage({ params }: { params: Promise<{ month: string }> }) {
  const { month } = await params
  const summary = listMonths().find((item) => item.id === month)
  const label = summary?.label ?? "Showcase"
  const count = summary ? `${summary.count} works` : "Monthly cycle"

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
          <div style={{ display: "flex", fontSize: 28, letterSpacing: 8, color: "#ffffff99" }}>ASKNIGHTS</div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 600, marginTop: 12 }}>{label}</div>
          <div style={{ display: "flex", fontSize: 32, color: "#ffffffb3", marginTop: 16 }}>{count}, one a day</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
