import Link from "next/link"

export default function NotFound() {
  return (
    <main className="site-bg flex min-h-screen flex-col items-center justify-center px-6 text-center text-[var(--ink)]">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-muted)]">ASKNIGHTS</p>
      <h1 className="mt-6 font-display text-5xl tracking-tight md:text-6xl">Page not found</h1>
      <p className="mt-4 max-w-md text-base text-[var(--ink-muted)] md:text-lg">
        That route is not part of this site. Head home or open the draft showcase.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="btn inline-flex bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
        >
          Home
        </Link>
        <Link
          href="/showcase"
          className="btn inline-flex border border-[var(--ink)] px-6 py-3 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
        >
          Showcase
        </Link>
      </div>
    </main>
  )
}
