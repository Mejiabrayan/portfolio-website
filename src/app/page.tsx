import Image from 'next/image';
import { Inter, Nunito, Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import LargeHeading from '@/components/ui/LargeHeading';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/Paragraph';
import { buttonVariants } from '@/components/ui/Button';
import AvatarDemo from '@/components/Avatar';
import Subheading from '@/components/ui/SubHeading';
import SeparatorDemo from '@/components/ui/Separator';

const inter = Inter({ subsets: ['latin'] });
const nunito = Nunito({ subsets: ['latin'] });
const playFair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brayan Mejia Cuenca | Full-Stack Software Engineer',
  description: 'Portfolio of Brayan Mejia Cuenca',
};

export default function Home() {
  return (
    <div className='min-h-screen max-w-2xl flex items-center overflow-x-hidden bg-gray-910'>
      <div className='container pt-30 px-6 min-h-full w-full mx-auto'>
        <div className='h-full gap-5 flex flex-col justify-center items-center lg:items-center'>
          <AvatarDemo />
          <Subheading
            size='default'
            className='text-center lg:text-center mt-6'
          >
            Full-Stack Software Engineer
          </Subheading>
          <Subheading size='sm' className='text-center lg:text-left'>
            Brayan Mejia Cuenca
          </Subheading>
          <div className='flex gap-4 mt-6'>
            <a
              href='https://www.linkedin.com/in/brayan-mejia-cuenca'
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
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='lucide lucide-github'
                >
                  <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                  <path d='M9 18c-4.51 2-5-2-7-2'></path>
                </svg>
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/brayan-mejia-cuenca'
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
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-linkedin'
                >
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                  <rect width='4' height='12' x='2' y='9'></rect>
                  <circle cx='4' cy='4' r='2'></circle>
                </svg>
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/brayan-mejia-cuenca'
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
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-twitter'
                >
                  <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
                </svg>
              </div>
            </a>
          </div>

          <Paragraph className='max-w-md lg:max-w-xl text-center lg:text-left mb-6 '>
            im passionate about building amazing UIs, animations, and learning
            how to build better software.
          </Paragraph>
        </div>
      </div>
      <SeparatorDemo />
      <div className='flex flex-col justify-center items-center text-white mt-16 mb-6'>
        <LargeHeading size='sm' className='mb-8'>
          My Latest Projects
        </LargeHeading>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 rounded shadow-md text-gray-910 w-8 h-8 '>
          hello world
        </div>
        <Link
          href='/projects'
          className='inline-flex items-center mt-8 text-gray-400 hover:text-white gap-4'
        >
          View all projects
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-arrow-right-circle'
          >
            <circle cx='12' cy='12' r='10'></circle>
            <polyline points='12 16 16 12 12 8'></polyline>
            <line x1='8' x2='16' y1='12' y2='12'></line>
          </svg>
        </Link>
      </div>
    </div>
  );
}
