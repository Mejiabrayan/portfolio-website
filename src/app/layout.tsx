import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Loading from './loading';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';

import { Metadata } from 'next';
import ParallaxLayout from '@/components/parallaxLayout';
import MobileMenu from '@/components/MobileMenu';
import { Menubar } from '@/components/ui/menubar';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
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
        url: 'logo.svg',
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
      className={cn('text-gray-100 antialiased ', inter.className)}
    >
      <body className='flex flex-col min-h-full antialiased'>
        <Header />
        <Suspense fallback={<Loading />}>
          <ParallaxLayout>
            <main className='flex-grow flex flex-col justify-center items-center'>
              {children}

              <Analytics />
            </main>
          </ParallaxLayout>
        </Suspense>
      </body>
    </html>
  );
}
