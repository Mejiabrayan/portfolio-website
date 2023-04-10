import Image from 'next/image';
import { Inter, Nunito, Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import LargeHeading from '@/components/ui/LargeHeading';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/Paragraph';
import { buttonVariants } from '@/components/ui/Button';
import AvatarDemo from '@/components/Avatar';
import Subheading from '@/components/ui/SubHeading';

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
          <Subheading size='new' className='text-center lg:text-left mt-6'>
            Full-Stack Software Engineer
          </Subheading>
          <Subheading size='sm' className='text-center lg:text-left'>
            Brayan Mejia Cuenca
          </Subheading>

          <Paragraph className='max-w-md lg:max-w-xl text-center lg:text-left mb-6 '>
            I'm passionate about building amazing UIs, animations, and learning
            how to build better software.
          </Paragraph>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center text-white mt-16 mb-6'>
        <LargeHeading size='sm' className='mb-8'>
          My Latest Projects
        </LargeHeading>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 rounded shadow-md text-gray-910 w-8 h-8 '>hello world</div>
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
