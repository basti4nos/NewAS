export type MediaKind = "image" | "gif" | "video" | "html" | "file"

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const IPFS_GATEWAYS = [
  "https://ipfs.filebase.io/ipfs/",
  "https://gateway.pinata.cloud/ipfs/",
  "https://cloudflare-ipfs.com/ipfs/",
  "https://ipfs.io/ipfs/",
  "https://dweb.link/ipfs/",
]

export function mediaKind(mime: string): MediaKind {
  const value = mime.toLowerCase()
  if (value.includes("text/html")) return "html"
  if (value.startsWith("video/")) return "video"
  if (value === "image/gif") return "gif"
  if (value.startsWith("image/")) return "image"
  return "file"
}

export function mediumLabel(mime: string, previewStill = false): string {
  const kind = mediaKind(mime)
  const base =
    kind === "gif"
      ? "Animated GIF"
      : kind === "video"
        ? mime.toLowerCase().includes("quicktime")
          ? "Video (MOV)"
          : "Video (MP4)"
        : kind === "html"
          ? "Interactive HTML"
          : kind === "image"
            ? mime.toLowerCase().includes("png")
              ? "PNG"
              : mime.toLowerCase().includes("webp")
                ? "WebP"
                : mime.toLowerCase().includes("jpeg")
                  ? "JPEG"
                  : "Image"
            : "Digital file"
  return previewStill ? `${base} preview still` : base
}

export function aiBadge(ai: "generated" | "assisted" | null | undefined): string | null {
  if (ai === "generated") return "AI-generated"
  if (ai === "assisted") return "AI-assisted"
  return null
}

/** Same CID, other gateways. The original URL stays first. */
export function mediaCandidates(url: string): string[] {
  try {
    const parsed = new URL(url)
    const ipfs = parsed.pathname.match(/\/ipfs\/(.+)$/)
    if (ipfs) {
      const path = `${ipfs[1]}${parsed.search}`
      const mirrored = IPFS_GATEWAYS.map((gateway) => `${gateway}${path}`)
      return unique([url, ...mirrored])
    }
    if (parsed.hostname === "arweave.net" || parsed.hostname === "www.arweave.net") {
      const id = parsed.pathname.replace(/^\//, "")
      return unique([url, `https://arweave.dev/${id}${parsed.search}`])
    }
    return [url]
  } catch {
    return [url]
  }
}

export function provenanceLabel(url: string): string {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "")
    if (host.includes("opensea")) return "OpenSea"
    if (host.includes("objkt")) return "objkt"
    if (host.includes("tensor")) return "Tensor"
    if (host.includes("magiceden")) return "Magic Eden"
    if (host.includes("zora")) return "Zora"
    return "Provenance record"
  } catch {
    return "Provenance record"
  }
}

export function todayISO(now = new Date()): string {
  return now.toISOString().slice(0, 10)
}

export function formatLong(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number)
  return `${day} ${MONTHS[month - 1]} ${year}`
}

export function formatWeekdayLong(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number)
  const weekday = WEEKDAYS[new Date(Date.UTC(year, month - 1, day)).getUTCDay()]
  return `${weekday} ${day} ${MONTHS[month - 1]} ${year}`
}

export function monthTitle(id: string): string {
  const [year, month] = id.split("-").map(Number)
  return `${MONTHS[month - 1]} ${year}`
}

export function monthEnd(id: string): string {
  const [year, month] = id.split("-").map(Number)
  const last = new Date(Date.UTC(year, month, 0)).getUTCDate()
  return `${id}-${String(last).padStart(2, "0")}`
}

export function withPreview(path: string, preview: boolean): string {
  if (!preview) return path
  return path.includes("?") ? `${path}&preview=1` : `${path}?preview=1`
}

function unique(values: string[]): string[] {
  return [...new Set(values)]
}
