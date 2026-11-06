import { ImageResponse } from "next/og"

export const alt = "ASKNIGHTS - Premier NFT Art Platform"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #09090b 0%, #1a1025 45%, #0b1220 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#f9a8d4",
            marginBottom: 24,
          }}
        >
          ASKNIGHTS
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
          Elevate digital art
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: "#d4d4d8", maxWidth: 760 }}>
          Curation, tokenization, and recognition for NFT art.
        </div>
      </div>
    ),
    size,
  )
}
