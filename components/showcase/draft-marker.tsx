export function DraftMarker({ className = "" }: { className?: string }) {
  return (
    <p
      data-testid="draft-marker"
      className={`inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-amber-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden />
      Draft preview
    </p>
  )
}
