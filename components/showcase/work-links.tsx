import { ExternalLink } from "lucide-react"

export function WorkLinks({
  provenanceUrl,
  provenanceLabel,
  title,
  marketplaceUrl,
  exhibitionUrl,
}: {
  provenanceUrl: string
  provenanceLabel: string
  title: string
  marketplaceUrl: string
  exhibitionUrl: string | null
}) {
  return (
    <div className="grid gap-3">
      <a
        href={provenanceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-xl border border-white/10 px-4 py-3 hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
      >
        <span className="block text-[11px] uppercase tracking-[0.16em] text-white/45">On-chain record</span>
        <span className="mt-1 flex items-center gap-1 text-sm text-white">
          {provenanceLabel}
          <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden />
          <span className="sr-only"> for {title}, opens in a new tab</span>
        </span>
      </a>
      <a
        href={marketplaceUrl}
        rel="nofollow noreferrer"
        className="rounded-xl border border-dashed border-white/15 px-4 py-3 hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
      >
        <span className="block text-[11px] uppercase tracking-[0.16em] text-white/45">Marketplace 2.0</span>
        <span className="mt-1 block text-sm text-white">nft.asknights.org</span>
        <span className="text-xs text-white/45">Coming soon</span>
      </a>
      <div className="rounded-xl border border-dashed border-white/15 px-4 py-3">
        <span className="block text-[11px] uppercase tracking-[0.16em] text-white/45">Metaverse exhibition</span>
        {exhibitionUrl ? (
          <a
            href={exhibitionUrl}
            className="mt-1 inline-flex text-sm text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
          >
            Exhibition link
          </a>
        ) : (
          <p className="mt-1 text-sm text-white/70">Link to be added</p>
        )}
      </div>
    </div>
  )
}
