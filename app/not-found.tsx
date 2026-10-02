import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.22em] text-accent">404</p>
      <h1 className="mt-4 font-serif text-5xl">Page not found</h1>
      <p className="mt-6 max-w-md text-muted-foreground">
        That address is not part of this site.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm underline decoration-accent underline-offset-4"
      >
        Back to ASKNIGHTS
      </Link>
    </div>
  )
}
