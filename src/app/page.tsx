import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { svgIcons } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { aboutMe, name, title, role, avatar } from '@/lib/info';

import Subheading from '@/components/ui/SubHeading';
import Balancer from 'react-wrap-balancer';

export const metadata: Metadata = {
  title: 'Brayan Mejia Cuenca | Full-Stack Software Engineer',
  description: 'Portfolio of Brayan Mejia Cuenca',
  creator: 'Brayan Mejia Cuenca',
};

const Home = () => {
  return (
    <section className='relative pt-40 flex flex-col items-center justify-center max-w-screen'>
      <div className='container px-4 w-full'>
        <div className='flex flex-col items-center lg:items-start'>
          <h1 className='font-heading text-4xl font-extrabold text-left lg:text-left  '>
            <Balancer>{title()}</Balancer>
          </h1>
          <Subheading
            size='sm'
            className='text-left lg:text-left -tracking-tighter text-zinc-900 dark:text-neutral-100 pt-3'
          >
            {role()}
          </Subheading>
          <h3 className='text-left lg:text-left tracking-tight text-neutral-400 pt-3 leading-tight'>
            {name}
          </h3>
          <div className='flex gap-4 mt-6 text-zinc-900 dark:text-neutral-300'>
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
          <div className='text-left flex flex-col gap-4 pt-4'>
            <p
              className={cn(
                'body -tracking-tighter leading-tight font-medium max-w-md lg:max-w-xl text-center lg:text-left mb-6 sm:text-base text-zinc-300'
              )}
            >
              Based in the Bay Area, I love to build things on the web. These
              days I&apos;m finding my path as a developer and learning new
              things every day. I&apos;ve come to love building things with
              React, Next.js, and Tailwind CSS. I&apos;m currently building my
              first Saas product,{' '}
              <Link href='https://logoaicreator.com/welcome'>
                <span className='underline body'>LogoAICreator</span>
              </Link>
              , a logo maker that uses AI to generate logos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
