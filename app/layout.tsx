import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Providers } from '@/lib/providers'
import { Toaster } from '@/components/toaster'
import { styreneA, styreneB, tiempos, garamond } from '@/lib/fonts'
import { StructuredData, organizationSchema } from '@/components/structured-data'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#f0eee7', // Light warm tan background
}

export const metadata: Metadata = {
  title: {
    default: 'Arthur Companies - Agricultural Excellence Since 1906',
    template: '%s | Arthur Companies'
  },
  description: 'For over a century, Arthur Companies has been at the forefront of sustainable agriculture, partnering with farmers across the Northern Plains to cultivate prosperity and innovation.',
  keywords: ['agriculture', 'farming', 'North Dakota', 'grain', 'agronomy', 'precision agriculture', 'sustainable farming'],
  authors: [{ name: 'Arthur Companies' }],
  creator: 'Arthur Companies',
  publisher: 'Arthur Companies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aug-arthur-mhuirz2j7-bttr.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aug-arthur-mhuirz2j7-bttr.vercel.app',
    siteName: 'Arthur Companies',
    title: 'Arthur Companies - Agricultural Excellence Since 1906',
    description: 'For over a century, Arthur Companies has been at the forefront of sustainable agriculture, partnering with farmers across the Northern Plains.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Arthur Companies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arthur Companies - Agricultural Excellence Since 1906',
    description: 'For over a century, Arthur Companies has been at the forefront of sustainable agriculture.',
    images: ['/og-image.jpg'],
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
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  if (!children) {
    throw new Error('RootLayout requires children prop')
  }

  return (
    <html lang="en" suppressHydrationWarning className={`${styreneA.variable} ${styreneB.variable} ${tiempos.variable} ${garamond.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <StructuredData data={organizationSchema} />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-24 lg:pt-28">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}