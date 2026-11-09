export function DraftMarker({ className = "" }: { className?: string }) {
  return (
    <p
      data-testid="draft-marker"
      className={`inline-flex items-center gap-2 border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)] ${className}`}
    >
      <span className="h-1.5 w-1.5 bg-[var(--brand)]" aria-hidden />
      Draft preview
    </p>
  )
}
