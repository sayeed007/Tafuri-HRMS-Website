// app/layout.tsx
import { Poppins, Merriweather } from 'next/font/google';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RequestDemoPopup from '@/components/RequestDemoPopup';
import type { Metadata } from 'next';

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
  title: 'TafuriHR - HR Management Solution',
  description: 'Streamline your HR processes with TafuriHR, a comprehensive HR management platform.',
  icons: {
    icon: '/TafuriHR_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${merriweather.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className='font-proxima min-h-screen bg-body overflow-x-clip'>
        <Header />
        {children}
        <RequestDemoPopup />
        <Footer />
      </body>
    </html>
  );
}