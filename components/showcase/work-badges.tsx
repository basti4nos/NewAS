export function WorkBadges({
  chain,
  phygital,
  aiLabel,
}: {
  chain: string
  phygital: boolean
  aiLabel: string | null
}) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Work details">
      <li className="rounded-full border border-white/20 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-white/80">
        {chain}
      </li>
      {phygital ? (
        <li className="rounded-full border border-pink-300/40 bg-pink-400/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-pink-100">
          Phygital
        </li>
      ) : null}
      {aiLabel ? (
        <li className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-cyan-100">
          {aiLabel}
        </li>
      ) : null}
    </ul>
  )
}
