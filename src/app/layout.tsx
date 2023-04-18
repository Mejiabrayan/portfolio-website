import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Loading from './loading';
import './globals.css';
import { Kaisei_Tokumin } from 'next/font/google';
import { cn } from '@/lib/utils';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

const kaisei = Kaisei_Tokumin({
  subsets: ['latin'],
  weight: ['700'],
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
        url: 'https://raw.githubusercontent.com/Mejiabrayan/portfolio_2.0/main/public/avatar.jpg',
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
        'bg-gradient-to-bl from-gray-910 via-gray-910 to-yellow-50 text-gray-100 antialiased bg-contain',
        kaisei.className
      )}
    >
      <body className='relative min-h-screen flex flex-col antialiased'>
        <Suspense fallback={<Loading />}>
          <Header />
          <div className='flex-grow flex flex-col justify-center items-center'>
            {children}
          </div>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
