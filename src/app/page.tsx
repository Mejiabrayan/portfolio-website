import Image from 'next/image';
import Link from 'next/link';
import LargeHeading from '@/components/ui/LargeHeading';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/Paragraph';
import Subheading from '@/components/ui/SubHeading';
import { aboutMe, name, title } from '@/lib/info';
import { svgIcons } from '@/lib/icons';
import { Open_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Brayan Mejia Cuenca | Full-Stack Software Engineer',
  description: 'Portfolio of Brayan Mejia Cuenca',
};

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='container px-4 mx-auto'>
        <div className='h-full gap-6 flex flex-col justify-center items-center lg:items-center'>
          <Image
            src='/avatar.jpg'
            alt='Picture of the author'
            width={100}
            height={100}
            className='rounded-full filter grayscale'
          />
          <LargeHeading
            size='lg'
            className='text-center lg:text-center mt-4 tracking-tighter'
          >
            <span className='bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text px-2 max-w-auto'>
              {title()}
            </span>
          </LargeHeading>

          <Subheading
            size='sm'
            className='text-center lg:text-left tracking-tight font-sem'
          >
            {name}
          </Subheading>
          <div className='flex gap-4 mt-6'>
            <Link
              href='https://github.com/Mejiabrayan'
              target='_blank'
              rel='noopener noreferrer'
              className='w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out'
            >
              {svgIcons.github}
            </Link>
            <Link
              href='https://www.linkedin.com/in/brayan-mejia/'
              target='_blank'
              rel='noopener noreferrer'
              className='w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out'
            >
              {svgIcons.linkedin}
            </Link>
            <Link
              href='https://twitter.com/CyperpunkDev'
              target='_blank'
              rel='noopener noreferrer'
              className='w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out'
            >
              {svgIcons.twitter}
            </Link>
          </div>
          <div className='text-center flex flex-col gap-4 mt-4'>
            <Paragraph
              className={cn(
                'leading-tight max-w-md lg:max-w-xl text-center mb-6 flex-nowrap',
                openSans.className
              )}
            >
              {aboutMe()}
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}
