import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

// TODO: replace with the official ASKNIGHTS logo if it is cleared for this public repo.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#121211",
          color: "#f4f1eb",
        }}
      >
        <div style={{ display: "flex", fontSize: 96 }}>A</div>
        <div
          style={{
            display: "flex",
            width: 48,
            height: 2,
            background: "#c6b48a",
            marginTop: 8,
          }}
        />
      </div>
    ),
    { ...size },
  )
}
