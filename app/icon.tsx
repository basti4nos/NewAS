import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

// TODO: replace with the official ASKNIGHTS logo if it is cleared for this public repo.
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
          background: "#121211",
          color: "#f4f1eb",
          fontSize: 20,
        }}
      >
        A
      </div>
    ),
    { ...size },
  )
}
