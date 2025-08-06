import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Providers } from '@/lib/providers'
import { Toaster } from '@/components/toaster'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#16a34a',
}

export const metadata: Metadata = {
  title: {
    default: 'Arthur Companies - Family Owned Since 1906',
    template: '%s | Arthur Companies'
  },
  description: 'Delivering performance you can measure and people you can trust across North Dakota and beyond. Family owned agricultural company since 1906.',
  keywords: ['agriculture', 'farming', 'North Dakota', 'grain', 'agronomy', 'precision agriculture'],
  authors: [{ name: 'Arthur Companies' }],
  creator: 'Arthur Companies',
  publisher: 'Arthur Companies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://arthurcompanies.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arthurcompanies.com',
    siteName: 'Arthur Companies',
    title: 'Arthur Companies - Family Owned Since 1906',
    description: 'Delivering performance you can measure and people you can trust across North Dakota and beyond.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arthur Companies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arthur Companies - Family Owned Since 1906',
    description: 'Delivering performance you can measure and people you can trust across North Dakota and beyond.',
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
  verification: {
    google: 'your-google-verification-code',
  },
    generator: 'v0.dev'
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  if (!children) {
    throw new Error('RootLayout requires children prop')
  }

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
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
