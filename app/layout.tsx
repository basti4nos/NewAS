import type { Metadata, Viewport } from "next"
import { DM_Sans, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { siteUrl } from "@/lib/site"

const sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "ASKNIGHTS — Curated digital art",
  description:
    "ASKNIGHTS curates, tokenises, and preserves high-quality NFT art. Selective programme with a private monthly showcase.",
  keywords:
    "NFT, digital art, art curation, tokenization, blockchain art, crypto art, digital artists, NFT platform",
  authors: [{ name: "ASKNIGHTS Team" }],
  creator: "ASKNIGHTS",
  publisher: "ASKNIGHTS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ASKNIGHTS — Curated digital art",
    description:
      "ASKNIGHTS curates, tokenises, and preserves high-quality NFT art. Selective programme with a private monthly showcase.",
    url: siteUrl,
    siteName: "ASKNIGHTS",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ASKNIGHTS",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASKNIGHTS — Curated digital art",
    description:
      "ASKNIGHTS curates, tokenises, and preserves high-quality NFT art. Selective programme with a private monthly showcase.",
    images: ["/opengraph-image"],
    creator: "@top_NFT_art",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "ASKNIGHTS",
    statusBarStyle: "default",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f2efe8",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB">
      <body className={`${sans.variable} ${display.variable} font-sans-body antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-sm focus:bg-[var(--ink)] focus:px-3 focus:py-2 focus:text-sm focus:text-[var(--bg)]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
