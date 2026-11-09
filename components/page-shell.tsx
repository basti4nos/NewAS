import Link from "next/link"
import { contactEmail, social } from "@/lib/site"

export function PageShell({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const year = new Date().getUTCFullYear()
  return (
    <div className="site-bg min-h-screen text-[var(--ink)]">
      <header className="border-b border-[var(--line)] px-6 py-5">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display text-lg tracking-[0.14em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand)]"
          >
            ASKNIGHTS
          </Link>
          <Link
            href="/"
            className="text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand)]"
          >
            Home
          </Link>
        </div>
      </header>
      <main id="main" className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--ink-muted)]">ASKNIGHTS</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">{title}</h1>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-[var(--ink-muted)]">{children}</div>
      </main>
      <footer className="border-t border-[var(--line)] px-6 py-10 text-sm text-[var(--ink-muted)]">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} ASKNIGHTS</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={social.x} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)]">
              X
            </a>
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)]">
              Instagram
            </a>
            <a href={`mailto:${contactEmail}`} className="hover:text-[var(--ink)]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
