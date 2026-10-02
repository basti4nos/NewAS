import { createOgImage, ogContentType, ogSize } from "@/lib/og-card"

export const alt = "ASKNIGHTS. Top NFT art curation, phygitals, and Metaverse."
export const size = ogSize
export const contentType = ogContentType

export default function OpenGraphImage() {
  return createOgImage()
}
