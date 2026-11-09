import Link from "next/link"
import { Sparkles } from "lucide-react"
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
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-black tracking-[0.22em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500">
              <Sparkles className="h-4 w-4" aria-hidden />
            </span>
            ASKNIGHTS
          </Link>
          <Link
            href="/"
            className="text-sm text-white/65 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300"
          >
            Home
          </Link>
        </div>
      </header>
      <main id="main" className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.22em] text-pink-200/80">ASKNIGHTS</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-white/75">{children}</div>
      </main>
      <footer className="border-t border-white/10 px-6 py-10 text-sm text-white/50">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} ASKNIGHTS</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={social.x} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              X
            </a>
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Instagram
            </a>
            <a href={`mailto:${contactEmail}`} className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
