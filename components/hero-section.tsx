import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import { contactEmail } from "@/lib/site"

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden text-[var(--bg)]">
      <div className="glitch-field" aria-hidden>
        <div className="glitch-field__noise" />
        <div className="glitch-field__tear" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,transparent_0%,rgba(12,13,16,0.35)_70%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 md:pb-24 md:pt-32">
        <p className="animate-rise font-display text-5xl tracking-[0.08em] text-white md:text-7xl lg:text-8xl">
          <GlitchText text="ASKNIGHTS" onDark className="font-display" />
        </p>

        <h1 className="animate-rise-delay mt-8 max-w-3xl font-display text-3xl leading-tight text-white md:text-5xl">
          Curated digital art, held with care.
        </h1>

        <p className="animate-rise-late mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          Selective curation, responsible tokenisation, and a private monthly showcase in progress.
        </p>

        <div className="animate-rise-late mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/showcase"
            className="btn inline-flex items-center justify-center gap-2 bg-[var(--bg)] px-6 py-3 text-sm font-medium tracking-wide text-[var(--ink)] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Preview showcase
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href={`mailto:${contactEmail}?subject=Artist%20submission`}
            className="btn inline-flex items-center justify-center border border-white/35 px-6 py-3 text-sm font-medium tracking-wide text-white transition hover:border-white hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Submit art
          </a>
        </div>
      </div>
    </section>
  )
}
