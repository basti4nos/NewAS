/**
 * Neutral stand-in where a work will be published later.
 * TODO: replace with the real artwork file and a descriptive alt text.
 * Do not use stock images and present them as ASKNIGHTS works.
 */
export function ArtworkPlaceholder({ label }: { label: string }) {
  return (
    <figure className="min-w-0">
      <div
        role="img"
        aria-label={`${label}. Placeholder. Artwork to follow.`}
        className="flex aspect-[4/5] items-end border border-border bg-card p-4"
      >
        <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Placeholder
        </span>
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground">{label}</figcaption>
    </figure>
  )
}
