import React, { Suspense } from 'react';
import Loading from './loading';
import './globals.css';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';

import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fontHeading = localFont({
  src: '../../assets/fonts/NeuzeitGrotesk-Bold.woff2',
  variable: '--font-heading',
});

// const fontHeading = Inter({
//   variable: '--font',
//   subsets: ['latin'],

// });

const body = localFont({
  src: '../../assets/fonts/Biotif-Regular.woff',
  variable: '--body',
});

export const metadata: Metadata = {
  title: {
    default: 'Brayan Mejia Cuenca Portfolio | Home',
    template: '%s | Brayan Mejia Cuenca',
  },
  description: 'Brayan Mejia Cuenca Portfolio Website',
  openGraph: {
    title: 'Brayan Mejia Cuenca',
    description: 'Brayan Mejia Cuenca Portfolio Website',
    url: 'https://brayancodes.com',
    siteName: 'Brayan Mejia Cuenca',
    images: [
      {
        url: '/logo.svg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
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
  twitter: {
    title: 'Brayan Mejia Cuenca',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'WzL-yjxsjdHj-kHwNBqzUz53pjiGnM2M273PfmwPrZ',
  },
};

export const runtime = 'edge';

export const dynamic = 'force-dynamic';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cn(
        'text-gray-50 antialiased',
        fontHeading.variable,
        body.variable
      )}
    >
      <body
        className='bg-[#131313] min-h-screen antialiased'
        suppressHydrationWarning
      >
        <Header />
        <Suspense fallback={<Loading />}>
          <div className='flex justify-center'>
            {/* <GradientBlur /> */}
            <main className='max-w-screen-lg w-full px-4 py-4'>
              {children}
              <Analytics />
            </main>
          </div>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
