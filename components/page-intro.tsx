import type { ReactNode } from "react"

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string
  title: string
  children?: ReactNode
}) {
  return (
    <header className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:pt-24">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      ) : null}
      <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl">{title}</h1>
      {children ? (
        <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {children}
        </div>
      ) : null}
    </header>
  )
}
