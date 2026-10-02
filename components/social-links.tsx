import { site } from "@/lib/site"

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={className}>
      {site.socials.map((social) => (
        <li key={social.href}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {social.label}{" "}
            <span className="text-foreground">{social.handle}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
