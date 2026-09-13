import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Montserrat, Noto_Sans_Malayalam } from 'next/font/google'
import './globals.css'
import { site } from '@/data/site'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CursorTracker } from '@/components/CursorTracker'
import { SmoothScroll } from '@/components/SmoothScroll'
import { ScrollToTop } from '@/components/ui/ScrollToTop'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
  weight: ['400'],
})

const notoSansMalayalam = Noto_Sans_Malayalam({
  subsets: ['malayalam'],
  variable: '--font-malayalam-noto',
  display: 'swap',
  weight: ['500', '700'],
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  icons: {
    icon: [
      { url: '/navbar/Logo.png', sizes: 'any', type: 'image/png' },
    ],
    shortcut: '/navbar/Logo.png',
    apple: '/navbar/Logo.png',
  },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: '/',
    siteName: site.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
}

export const viewport: Viewport = {
  themeColor: '#0e0e0c',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${bebasNeue.variable} ${notoSansMalayalam.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@400;600;700;800&family=Anek+Malayalam:wght@100..800&family=Anek+Tamil:wght@400;600;700;800&family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll />
        <CursorTracker />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
