import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { svgIcons } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { name, title, role } from '@/lib/info';

import Subheading from '@/components/ui/SubHeading';
import Balancer from 'react-wrap-balancer';
import { PageWrapper } from '@/components/animations/PageWrapper';
import BlogPost from '@/components/sections/Blog-Post';
import { getBlogs, getProjects } from '../../sanity/schemas/sanity-utils';
import GradientBlur from '@/components/GradientBlur';

export const metadata: Metadata = {
  title: 'Brayan Mejia Cuenca | Full-Stack Software Engineer',
  description: 'Portfolio of Brayan Mejia Cuenca',
  creator: 'Brayan Mejia Cuenca',
};

const Home = async () => {
  const blog = await getBlogs();
  const projects = await getProjects();
  return (
    <PageWrapper>
      <GradientBlur />
      <section className='relative  flex flex-col items-center justify-center max-w-screen'>
        <div className='container'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='font-heading xxs:text-2xl text-4xl md:text-left lg:text-left '>
              <Balancer>
                <span className='xxs:text-center xxs:inline-block text-2xl lg:text-4xl xl:text-4xl'>
                  {title()}
                </span>
              </Balancer>
            </h1>

            <Subheading
              size='sm'
              className='xxs:text-base md:text-left lg:text-left -tracking-tighter text-neutral-100 pt-3 '
            >
              {role()}
            </Subheading>

            <h3 className='text-left lg:text-left tracking-tight text-gray-300 pt-3 leading-tight'>
              {name}
            </h3>

            <div className='flex gap-4 mt-6 text-neutral-300'>
              <Link
                href='https://github.com/Mejiabrayan'
                target='_blank'
                rel='noopener noreferrer'
                className='w-6 h-6  text-gray-500 hover:text-white transition-colors duration-300 ease-in-out'
              >
                {svgIcons.github}
              </Link>
              <Link
                href='https://www.linkedin.com/in/brayan-mejia/'
                target='_blank'
                rel='noopener noreferrer'
                className='w-6 h-6 text-gray-500 hover:text-white transition-colors duration-300 ease-in-out'
              >
                {svgIcons.linkedin}
              </Link>
              <Link
                href='https://twitter.com/CyperpunkDev'
                target='_blank'
                rel='noopener noreferrer'
                className='w-6 h-6 text-gray-500 hover:text-white transition-colors duration-300 ease-in-out'
              >
                {svgIcons.twitter}
              </Link>
            </div>
            <div className='text-left flex flex-col gap-4 pt-4'>
              <p
                className={cn(
                  'tracking-tighter max-w-md lg:max-w-xl text-center lg:text-left mb-6 xxs:text-xs md:text-base text-zinc-300'
                )}
              >
                Based in the Bay Area, I love to build things on the web. These
                days I&apos;m finding my path as a developer and learning new
                things every day. I&apos;ve come to love building things with
                React, Next.js, and Tailwind CSS. I&apos;m currently building my
                first Saas product,{' '}
                <Link href='https://logoaicreator.com/welcome'>
                  <span className='underline'>LogoAICreator</span>
                </Link>
                , a logo maker that uses AI to generate logos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className='border-neutral-800' />
      <section className='flex flex-col space-y-8 '>
        <div className='container'>
          {blog.map((post) => (
            <BlogPost
              key={post._id}
              title={post.title}
              content={post.content}
              link={`/blogs/${post.slug}`}
            />
          ))}
        </div>
      </section>

      <hr className='border-neutral-800' />
    </PageWrapper>
  );
};

export default Home;
