import React, { Suspense } from 'react';
import Loading from './loading';
import './globals.css';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';

import { Metadata } from 'next';
import ParallaxProvider from '@/components/ParallaxProvider';
import Header from '@/components/Header';
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: '../../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cn(
        'text-gray-100 antialiased',
        fontSans.variable,
        fontHeading.variable
      )}
    >
      <body
        className='flex flex-col min-h-screen antialiased '
        suppressHydrationWarning
      >
        <Header />
        <div className='flex-grow flex justify-center'>
          <ParallaxProvider>
            <main className='flex flex-col items-center '>
              <Suspense fallback={<Loading />}>{children}</Suspense>
              <Analytics />
            </main>
          </ParallaxProvider>
        </div>
      </body>
    </html>
  );
}
