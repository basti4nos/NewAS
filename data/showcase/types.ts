export type AiLabel = "generated" | "assisted"

/** A work as stored in the curator file. `ref` is a spreadsheet row id, not a rank. */
export type StoredWork = {
  ref: string
  slug: string
  title: string
  artist: string
  curatorNote: string
  chain: string
  provenanceUrl: string
  mediaUrl: string
  mediaMime: string
  contract?: string
  tokenId?: string
  phygital?: boolean
  ai?: AiLabel
  previewStill?: boolean
  /** Set when a Metaverse exhibition page exists. Omitted until then. */
  exhibitionUrl?: string
  releaseDate?: string
  month?: string
}

export type CollectionFile = {
  notes: string
  timezone: string
  marketplaceUrl: string
  works: StoredWork[]
  reserve: StoredWork[]
}
