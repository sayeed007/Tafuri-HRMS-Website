// app/layout.tsx
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { headers } from 'next/headers'
import RequestDemoPopup from '@/components/RequestDemoPopup'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TafuriHR - HR Management Solution',
  description: 'Streamline your HR processes with TafuriHR, a comprehensive HR management platform.',
  icons: {
    icon: '/TafuriHR_logo.png', // Path to favicon in /public
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  const currentPath = headersList.get('x-invoke-path') || '/' // Get the current pathname

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header currentPath={currentPath} />
        <div className="">
          {children}
          <RequestDemoPopup />
        </div>
        <Footer />
      </body>
    </html>
  )
}