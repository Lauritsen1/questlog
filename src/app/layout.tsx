import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from '@/components/providers/providers'
import { SiteHeader } from '@/components/site-header'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Questlog',
  description: 'Organize, discover, and track the games you want to play',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main>
            <SiteHeader />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
