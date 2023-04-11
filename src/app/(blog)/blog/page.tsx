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
  title: 'Blog | Brayan Mejia Cuenca',
  description: 'Blog of Brayan Mejia Cuenca',
};

export default function Blog() {
  return (
    <div className='min-h-screen max-w-2xl flex items-center overflow-x-hidden bg-gray-910'>
      <div className='container pt-30 px-6 min-h-full w-full mx-auto'>
        <div className='h-full gap-5 flex flex-col justify-center items-center lg:items-center'>
          <LargeHeading size='lg' className='text-center lg:text-center mt-6'>
            Welcome to my blog
          </LargeHeading>
          <Paragraph size='sm' className='text-center lg:text-center'>
            Here, I write about my experiences, thoughts, and learnings as a
            full-stack software engineer.
          </Paragraph>
          {/* <SeparatorDemo className='my-8' /> */}
          <div className='flex flex-col md:flex-row md:items-center justify-center gap-6'>
            <Image
              src='/'
              alt='Picture of the author'
              width={300}
              height={300}
              className='rounded-full'
            />
            <div className='flex flex-col justify-center items-center'>
              <Subheading size='default'>Hi, Im Brayan</Subheading>
              <Paragraph size='sm' className='text-center'>
                Im a Full-Stack Software Engineer with experience building web
                applications and APIs.
              </Paragraph>
              <Link href='/about' className='btn' {...buttonVariants}>
                  About me
             
              </Link>
            </div>
          </div>
          {/* <SeparatorDemo className='my-8' /> */}
          <div className='flex flex-col justify-center items-center gap-4'>
            <LargeHeading size='sm' className='text-center lg:text-center mt-6'>
              Latest posts
            </LargeHeading>
            <div className='flex flex-col lg:flex-row justify-center gap-4'>
              <div className='w-full lg:w-1/3'>
                <div className='rounded-lg overflow-hidden'>
                  <Image
                    src='/images/post1.jpg'
                    alt='Picture of a computer'
                    width={400}
                    height={250}
                    className='object-cover'
                  />
                </div>
                <Subheading size='sm' className='mt-2'>
                  My experience learning React
                </Subheading>
                <Paragraph size='sm' className='mt-2'>
                  In this post, I share my journey learning React and building
                  web applications with it.
                </Paragraph>
                <Link href='/posts/learning-react' className='btn' {...buttonVariants}>
                    Read more
               
                </Link>
              </div>
              <div className='w-full lg:w-1/3'>
                <div className='rounded-lg overflow-hidden'>
                  <Image
                    src='/images/post2.jpg'
                    alt='Picture of a coding environment'
                    width={400}
                    height={250}
                    className='object-cover'
                  />
                </div>
                <Subheading size='sm' className='mt-2'>
                  My experience building a RESTful API with Node.js and MongoDB
                </Subheading>
                <Paragraph size='sm' className='mt-2'>
                  In this post, I talk about my experience building a RESTful
                  API with Node.js and MongoDB and share some tips and best
                  practices I learned along the way.
                </Paragraph>
                <Link href='/posts/building-restful-api' className='btn' {...buttonVariants}>
                    Read more
               
                </Link>
              </div>
              <div className='w-full lg:w-1/3'>
                <div className='rounded-lg overflow-hidden'>
                  <Image
                    src='/images/post3.jpg'
                    alt='Picture of a code editor'
                    width={400}
                    height={250}
                    className='object-cover'
                  />
                </div>
                <Subheading size='sm' className='mt-2'>
                  How to improve the performance of your React applications
                </Subheading>
                <Paragraph size='sm' className='mt-2'>
                  In this post, I share some tips and best practices for
                  improving the performance of your React applications, based on
                  my own experience and research.
                </Paragraph>
                <Link href='/posts/react-performance' className='btn' {...buttonVariants}>
                    Read more
               
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
