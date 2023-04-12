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
            Blog
          </LargeHeading>

          <Paragraph size='sm' className='text-center lg:text-center'>
            Here, I write about my experiences, thoughts, and learnings as a
            full-stack software engineer.
          </Paragraph>

          <div className='flex flex-col md:flex-col md:items-center  items-center justify-center gap-4 mb-5'>
            <Image
              src='/avatar.jpg'
              alt='Picture of the author'
              width={100}
              height={100}
              className='rounded-full filter grayscale'
            />
          </div>
          <div className='flex flex-col justify-center items-center gap-4'>
            <LargeHeading size='sm' className='text-center lg:text-center mt-6'>
              Latest posts
            </LargeHeading>
          <hr className='w-full border-gray-800 mt-10 mb-10' />

            <div className='flex flex-col lg:flex-row justify-center gap-4'>
              <div className='w-full lg:w-1/3'>
                <div className='rounded-lg overflow-hidden'>
                  <Image
                    src='/avatar.jpg'
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

                <Link
                  href='/posts/learning-react'
                  className='btn'
                  {...buttonVariants}
                >
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
                php
                <Subheading size='sm' className='mt-2'>
                  Tips for improving your coding productivity
                </Subheading>
                <Paragraph size='sm' className='mt-2'>
                  In this post, I share some tips and tricks that have helped me
                  improve my coding productivity.
                </Paragraph>
                <Link
                  href='/posts/coding-productivity-tips'
                  className='btn'
                  {...buttonVariants}
                >
                  Read more
                </Link>
              </div>

              <div className='w-full lg:w-1/3'>
                <div className='rounded-lg overflow-hidden'>
                  <Image
                    src='/images/post3.jpg'
                    alt='Picture of a group of people working'
                    width={400}
                    height={250}
                    className='object-cover'
                  />
                </div>

                <Subheading size='sm' className='mt-2'>
                  Lessons learned from working in a remote team
                </Subheading>

                <Paragraph size='sm' className='mt-2'>
                  In this post, I share some of the lessons I learned while
                  working in a remote team.
                </Paragraph>

                <Link
                  href='/posts/remote-team-lessons'
                  className='btn'
                  {...buttonVariants}
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center gap-4'>
            <LargeHeading size='sm' className='text-center lg:text-center mt-6'>
              Recommended posts
            </LargeHeading>

            <div className='flex flex-col lg:flex-row justify-center gap-4'>
              <div className='w-full lg:w-1/3'>
                <div className='rounded-lg overflow-hidden'>
                  <Image
                    src='/images/post4.jpg'
                    alt='Picture of a mountain landscape'
                    width={400}
                    height={250}
                    className='object-cover'
                  />
                </div>

                <Subheading size='sm' className='mt-2'>
                  Hiking in the mountains: a beginners guide
                </Subheading>

                <Paragraph size='sm' className='mt-2'>
                  In this post, I share some tips for beginners who want to
                  start hiking in the mountains.
                </Paragraph>

                <Link
                  href='/posts/mountain-hiking-guide'
                  className='btn'
                  {...buttonVariants}
                >
                  Read more
                </Link>
              </div>

              <div className='w-full lg:w-1/3'>
                <div className='rounded-lg overflow-hidden'>
                  <Image
                    src='/images/post5.jpg'
                    alt='Picture of a person playing guitar'
                    width={400}
                    height={250}
                    className='object-cover'
                  />
                </div>

                <Subheading size='sm' className='mt-2'>
                  Learning to play the guitar: a beginners guide
                </Subheading>

                <Paragraph size='sm' className='mt-2'>
                  In this post, I share some tips for beginners who want to
                  learn to play the guitar.
                </Paragraph>

                <Link
                  href='/posts/guitar-learning-guide'
                  className='btn'
                  {...buttonVariants}
                >
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
