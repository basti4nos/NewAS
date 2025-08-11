import type { Metadata } from 'next'
import './globals.css'

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
  metadataBase: new URL('https://asknights.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ASKNIGHTS - Premier NFT Art Platform',
    description: 'Discover, create, and celebrate digital art on ASKNIGHTS. Premier NFT art curation, tokenization, and awards platform.',
    url: 'https://asknights.com',
    siteName: 'ASKNIGHTS',
    images: [
      {
        url: '/og-image.jpg',
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
    images: ['/twitter-image.jpg'],
    creator: '@asknights',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>{children}</body>
    </html>
  )
}
