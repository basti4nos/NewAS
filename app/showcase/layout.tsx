import type { Metadata } from "next"
import type { ReactNode } from "react"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Showcase · ASKNIGHTS",
  description: "Private draft of the ASKNIGHTS monthly showcase.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
}

export default function ShowcaseLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-black text-white">{children}</div>
}
