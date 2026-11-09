import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { HomeTeaser } from "@/components/showcase/home-teaser"
import { getHomeTeaser } from "@/lib/showcase"
import { contactEmail, social } from "@/lib/site"

/** Home teaser follows UTC day; refresh hourly so “today” stays current. */
export const revalidate = 3600

export default async function Component() {
  const teaser = await getHomeTeaser()
  const year = new Date().getUTCFullYear()
  return (
    <div className="site-bg grain min-h-screen text-[var(--ink)]">
      <main id="main">
        <HeroSection />
        <ServicesSection />
        <HomeTeaser teaser={teaser} />

        <section className="border-t border-[var(--line)] px-6 py-24 md:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">Work with us</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
              Artist submissions and partnerships are welcome by email. We read carefully and reply
              when we can take something forward.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${contactEmail}?subject=Artist%20submission`}
                className="btn inline-flex items-center justify-center bg-[var(--ink)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition hover:bg-[var(--brand)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
              >
                Submit your art
              </a>
              <Link
                href="/contact"
                className="btn inline-flex items-center justify-center border border-[var(--ink)] px-5 py-3 text-sm font-medium transition hover:bg-[var(--bg-elevated)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
              >
                Contact
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl tracking-[0.12em]">ASKNIGHTS</p>
            <p className="mt-2 text-sm text-[var(--ink-muted)]">
              &copy; {year} ASKNIGHTS. Elevating digital art with care.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--ink-muted)]">
            <Link href="/showcase" className="hover:text-[var(--ink)]">
              Showcase
            </Link>
            <Link href="/about" className="hover:text-[var(--ink)]">
              About
            </Link>
            <Link href="/contact" className="hover:text-[var(--ink)]">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-[var(--ink)]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--ink)]">
              Terms
            </Link>
            <a href={social.x} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)]">
              X
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
