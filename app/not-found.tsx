import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      <p className="text-xs uppercase tracking-[0.28em] text-pink-200/80">ASKNIGHTS</p>
      <h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">Page not found</h1>
      <p className="mt-4 max-w-md text-lg text-white/65">
        That route is not part of this site. Head home or open the draft showcase.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
        >
          Home
        </Link>
        <Link
          href="/showcase"
          className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
        >
          Showcase
        </Link>
      </div>
    </main>
  )
}
