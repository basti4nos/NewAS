import { ImageResponse } from "next/og"

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = "image/png"

export function createOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#121211",
          color: "#f4f1eb",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#c6b48a",
          }}
        >
          asknights.org
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              letterSpacing: "0.06em",
              lineHeight: 1,
            }}
          >
            ASKNIGHTS
          </div>
          <div
            style={{
              display: "flex",
              width: 72,
              height: 1,
              background: "#c6b48a",
              marginTop: 32,
              marginBottom: 32,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#d9d3c7",
            }}
          >
            Top NFT art curation · phygitals · Metaverse
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  )
}
