import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #06b6d4 100%)",
          color: "white",
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: "-0.04em",
        }}
      >
        AK
      </div>
    ),
    size,
  )
}
