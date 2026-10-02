import Link from "next/link"
import { SocialLinks } from "@/components/social-links"
import { site } from "@/lib/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl tracking-[0.14em]">ASKNIGHTS</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.brandStrip}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-accent">Social</p>
          <SocialLinks className="mt-4 space-y-2 text-sm" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-accent">Pages</p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.url}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {site.domain}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-6 text-sm text-muted-foreground">
          © {year} ASKNIGHTS
        </p>
      </div>
    </footer>
  )
}
