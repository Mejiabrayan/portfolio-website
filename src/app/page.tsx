import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { svgIcons } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { name, title, heading } from '@/lib/info';

import Subheading from '@/components/ui/SubHeading';
import Balancer from 'react-wrap-balancer';
import { PageWrapper } from '@/components/animations/PageWrapper';
import BlogPost from '@/components/sections/Blog-Post';
import { getBlogs, getProjects } from '../../sanity/schemas/sanity-utils';
import GradientBlur from '@/components/GradientBlur';
import Card from '@/components/Card';
import { Cloud, Code, GitBranch, Terminal, TextCursor } from 'lucide-react';
import { GitBranchIcon } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Brayan Mejia Cuenca | Full-Stack Software Engineer',
  description: 'Portfolio of Brayan Mejia Cuenca',
  creator: 'Brayan Mejia Cuenca',
};

const Home = async () => {
  // Define an array of card data with titles, content, and links
  const cardData = [
    {
      title: 'Backend Software Development',
      content:
        'I specialize in crafting the backend of your applications, setting the foundation for long-term stability, performance, and scalability. With a keen eye for architecture and robust server-side development, I ensure your systems run efficiently and securely.',
      link: '/backend-development', // Link to the page for Backend Development
      icon: Terminal,
    },
    {
      title: 'Frontend Software Development',
      content:
        'I excel in creating visually appealing, functional, and user-friendly web applications. My expertise lies in crafting seamless user experiences, responsive designs, and optimized frontend code. I bring your ideas to life with intuitive and accessible interfaces.',
      link: '/frontend-development', // Link to the page for Frontend Development
      icon: Code,
    },
    {
      title: 'API Development',
      content:
        "I specialize in building APIs that are fast, scalable, and user-friendly. Whether it's RESTful or GraphQL, I ensure seamless integration for your applications, enabling efficient data communication and interaction.",
      link: '/api-development', // Link to the page for API Development
      icon: Cloud,
    },
    {
      title: 'Software Architecture',
      content:
        'I design and construct software with a focus on maintainability and extensibility. My architectural decisions aim for long-term viability, making future enhancements and updates a smooth process. I build systems that stand the test of time.',
      link: '/software-architecture', // Link to the page for Software Architecture
      icon: GitBranchIcon,
    },
    // Add more card data as needed
  ];

  const blog = await getBlogs();
  const projects = await getProjects();
  return (
    <PageWrapper>
      <section className='relative flex flex-col items-center justify-center max-w-screen'>
        <div className='container'>
          <GradientBlur />
          <div className='flex flex-col items-center lg:items-start gap-3 text-lg'>
            <p className='text-center tracking-tight text-gray-300 pt-3 leading-tight font-medium'>
              Hi, my name is Brayan.
            </p>
            <h1 className='font-heading xxs:text-2xl md:text-4xl xl:text-4xl text-center lg:text-left xl:text-left text-slate-50 font-bold '>
              <Balancer>
                I&apos;m a full-stack software engineer <br /> based in the Bay
                Area.
              </Balancer>
            </h1>

            <div className='text-center lg:text-left flex flex-col gap-4 pt-4'>
              <p
                className={cn(
                  'tracking-tighter max-w-md lg:max-w-xl text-center lg:text-left mb-6 xxs:text-xs md:text-base text-gray-400'
                )}
              >
                Crafting digital wonders on the web. Creative problem solver
                with a passion for technology and an eye for design.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col space-y-8 py-10'>
        <div className='container'>
          <hr className='border-neutral-800 w-1/2 py-3' />
          <h2 className='text-lg mb-3 leading-tight tracking-tight'>
            HERE IS WHAT I DO
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
            {cardData.map((card) => (
              <Card
                icon={<card.icon />}
                key={card.title}
                title={card.title}
                content={card.content}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </section>
      <section className='flex flex-col space-y-8 py-10'>
        <div className='container text-center md:text-left'>
          <hr className='border-neutral-800 w-1/2 mx-auto md:mx-0 py-3' />
          <h2 className='text-lg md:text-3xl mb-3 leading-tight tracking-tight'>
            HERE IS WHAT I&apos;M WORKING ON
          </h2>
        </div>
        <div className='container flex flex-col md:flex-row items-center space-y-4 md:space-y-0 gap-6'>
          <div className='md:w-1/2'>
            <h3 className='text-xl md:text-2xl font-bold mb-2'>RapidDrafts</h3>
            <p className='font-mono text-gray-500 text-sm md:text-sm'>
              RapidDrafts is a web application that generates high-quality
              content for your business. It uses the OpenAI GPT-3 API to
              generate content based on your input. I built the application
              using Next.js, Tailwind CSS, and the OpenAI API. I&apos;m
              currently working on adding more features to the application,
              including a user dashboard, a blog, and a payment system.
            </p>
            <p className='text-gray-400 md:mt-4'>
              I&apos;ve made significant progress, including the implementation
              of the Stripe API for smoother payment processing. Recently, I
              successfully resolved a bug where user sentences were getting cut
              off prematurely. I addressed this by enhancing the completion
              process to avoid forcing content under 500 words, achieving better
              results. To handle unfinished completions, I now check the
              finish_reason in the response and, when necessary, call the
              endpoint again, chaining messages for a seamless user experience.
              My ongoing focus remains on enhancing the customer experience with
              RapidDrafts.
            </p>
          </div>
          <div className='md:w-1/2'>
            {/* Image */}
            <Image
              src='/RapidDrafts.png'
              alt='Project'
              className='rounded-lg shadow-md'
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section className='flex flex-col space-y-8 py-10'>
        <div className='container'>
          <hr className='border-neutral-800 w-1/2 py-3' />
          <h2 className='text-lg mb-3 leading-tight tracking-tight'>BLOG</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
            {blog.map((post) => (
              <BlogPost
                key={post.title}
                title={post.title}
                content={post.content}
                link={`/blog/${post.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
