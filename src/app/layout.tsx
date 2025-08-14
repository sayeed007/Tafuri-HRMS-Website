import { Poppins, Merriweather } from 'next/font/google';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RequestDemoPopup from '@/components/RequestDemoPopup';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';

// Google Fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TafuriHR - Comprehensive HR Management Software Solution',
  description: 'Streamline HR processes with TafuriHR, an AI-powered HR management platform for employee onboarding, payroll, time tracking, and more.',
  keywords: 'HR management software, TafuriHR, employee onboarding, payroll management, time tracking, HR automation, AI-powered HR, workforce management',
  alternates: {
    canonical: 'https://www.tafurihr.com',
  },
  openGraph: {
    title: 'TafuriHR - AI-Powered HR Management Platform',
    description: 'Transform your HR operations with TafuriHR’s all-in-one platform for payroll, onboarding, leave management, and more.',
    url: 'https://www.tafurihr.com',
    siteName: 'TafuriHR',
    images: [
      {
        url: '/TafuriHR_Icon.png',
        width: 1200,
        height: 630,
        alt: 'TafuriHR Icon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TafuriHR - HR Management Software',
    description: 'Automate and manage HR tasks with TafuriHR’s comprehensive platform.',
    images: ['/TafuriHR_Icon.png'],
    creator: '@TafuriHR',
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
  icons: {
    icon: '/TafuriHR_Icon.png',
    apple: '/TafuriHR_Icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${merriweather.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'TafuriHR',
              url: 'https://www.tafurihr.com',
              logo: 'https://www.tafurihr.com/TafuriHR_Icon.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+88 01755 645081',
                email: 'sales@tafurihr.com',
                contactType: 'Sales',
                areaServed: 'Global',
              },
              sameAs: [
                'https://www.facebook.com/profile.php?id=61566912183130',
                'https://www.linkedin.com/company/tafuri-hrms/posts/?feedView=all',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'TafuriHR - HR Management Solution',
              url: 'https://www.tafurihr.com',
              description: 'TafuriHR offers a comprehensive HR management platform to automate employee onboarding, payroll, time tracking, and more.',
              publisher: {
                '@type': 'Organization',
                name: 'TafuriHR',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.tafurihr.com/TafuriHR_Icon.png',
                },
              },
            }),
          }}
        />
      </head>
      <body className="font-proxima min-h-screen bg-body overflow-x-clip">
        <Header />
        <main>{children}</main>
        <RequestDemoPopup />
        <Footer />
        <Toaster
          position="top-right"
          expand={true}
          richColors={true}
          closeButton={true}
          toastOptions={{
            style: {
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              padding: '16px',
              fontSize: '14px',
              fontWeight: '500',
            },
            className: 'sonner-toast',
            duration: 3000,
          }}
        />
      </body>
    </html>
  );
}