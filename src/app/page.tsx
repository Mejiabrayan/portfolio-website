import Image from 'next/image';
import Link from 'next/link';
import LargeHeading from '@/components/ui/LargeHeading';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/Paragraph';

import Subheading from '@/components/ui/SubHeading';

export const metadata: Metadata = {
  title: 'Brayan Mejia Cuenca | Full-Stack Software Engineer',
  description: 'Portfolio of Brayan Mejia Cuenca',
};

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='container pt-25 px-6 min-h-full max-w-2xl mx-auto'>
        <div className='h-full gap-3 flex flex-col justify-center items-center lg:items-center'>
          <Image
            src='/avatar.jpg'
            alt='Picture of the author'
            width={100}
            height={100}
            className='rounded-full filter grayscale'
          />
          <Subheading
            size='default'
            className='text-center lg:text-center mt-0 tracking-tighter'
          >
            Full-Stack Software Engineer
          </Subheading>
          <Subheading
            size='sm'
            className='text-center lg:text-left tracking-tight'
          >
            Brayan Mejia Cuenca
          </Subheading>
          <div className='flex gap-4 mt-6'>
            <Link
              href='https://github.com/Mejiabrayan'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-github'
                >
                  <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                  <path d='M9 18c-4.51 2-5-2-7-2'></path>
                </svg>
              </div>
            </Link>
            <Link
              href='https://www.linkedin.com/in/brayan-mejia/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-linkedin'
                >
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                  <rect width='4' height='12' x='2' y='9'></rect>
                  <circle cx='4' cy='4' r='2'></circle>
                </svg>
              </div>
            </Link>
            <Link
              href='https://twitter.com/CyperpunkDev'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-twitter'
                >
                  <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
                </svg>
              </div>
            </Link>
          </div>
          <div className='text-center flex flex-col gap-4 mt-0'>
            <Paragraph className='tracking-tight flex-nowrap max-w-md lg:max-w-xl text-center lg:text-left mb-6 '>
              I&apos;m passionate about technology, music and building things on
              the web.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}
