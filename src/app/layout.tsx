import Header from '@/components/Header';
import './globals.css';
import {
  Nunito,
  Playfair_Display,
  Inter,
  Kaisei_Tokumin,
} from 'next/font/google';
import { cn } from '@/lib/utils';

const playFair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });
const kaisei = Kaisei_Tokumin({
  subsets: ['latin'],
  weight: ['700'],
});

export const metadata = {
  title: 'Brayan Mejia Cuenca Portfolio | Home',
  description: 'Brayan Mejia Cuenca Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cn('bg-gray-910 text-gray-100 antialiased', kaisei.className)}
    >
      <body className='relative min-h-screen flex flex-col antialiased'>
        <Header />
        <div className='flex-grow flex flex-col justify-center items-center'>
          {children}
        </div>
      </body>
    </html>
  );
}
