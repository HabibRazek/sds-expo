'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import Bar from '@/components/header/Bar'
import Footer from '@/components/footer/Footer'
import BarFooter from '@/components/footer/BarFooter'
import Navigation from '@/components/header/Navigation'
import { usePathname } from 'next/navigation'
import { metadata } from './metadata' // I

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title> {/* Set the title */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={`https://www.sds-expo.com${pathname}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta property="fb:app_id" content="SDSEXPO" />
      </head>


      <body className={inter.className}>
        <div>
          <Bar />
          {pathname !== '/' && <Navigation />}
        </div>
        {children}
        <Footer />
        <BarFooter />
      </body>
    </html>
  )
}
