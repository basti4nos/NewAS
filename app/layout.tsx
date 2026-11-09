import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { siteUrl } from '@/lib/site'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'ASKNIGHTS - Premier NFT Art Platform | Curation, Tokenization & Awards',
  description: 'Discover, create, and celebrate digital art on ASKNIGHTS. Premier NFT art curation, tokenization, and awards platform. Join the digital art revolution.',
  keywords: 'NFT, digital art, art curation, tokenization, blockchain art, crypto art, digital artists, NFT platform, art awards, digital collectibles',
  authors: [{ name: 'ASKNIGHTS Team' }],
  creator: 'ASKNIGHTS',
  publisher: 'ASKNIGHTS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ASKNIGHTS - Premier NFT Art Platform',
    description: 'Discover, create, and celebrate digital art on ASKNIGHTS. Premier NFT art curation, tokenization, and awards platform.',
    url: siteUrl,
    siteName: 'ASKNIGHTS',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'ASKNIGHTS - Premier NFT Art Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASKNIGHTS - Premier NFT Art Platform',
    description: 'Discover, create, and celebrate digital art on ASKNIGHTS. Premier NFT art curation, tokenization, and awards platform.',
    images: ['/opengraph-image'],
    creator: '@top_NFT_art',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'ASKNIGHTS',
    statusBarStyle: 'black-translucent',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
