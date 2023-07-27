import Link from 'next/link';
import LargeHeading from '@/components/ui/LargeHeading';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/Paragraph';
import { buttonVariants } from '@/components/ui/Button';
import Subheading from '@/components/ui/SubHeading';

import { getBlogs } from '../../../sanity/schemas/sanity-utils';

export const metadata: Metadata = {
  title: 'Blog | Brayan Mejia Cuenca',
  description: 'Blog of Brayan Mejia Cuenca',
};

export default async function Blog() {
  const blog = await getBlogs();

  return (
    <div className='flex py-10 items-center overflow-x-hidden'>
      <div className='container px-6 min-h-min mx-auto'>
        <div className='gap-5 flex flex-col justify-center items-center lg:items-center'>
          <LargeHeading
            size='lg'
            className='text-center pb-5 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60'
          >
            Blog
          </LargeHeading>

          <Paragraph size='sm' className='text-center'>
            Here, I write about my experiences, thoughts, and learnings as a
            full-stack software engineer.
          </Paragraph>

          <div className='flex flex-col justify-center items-center gap-4 mt-2 lg:mt-12'>
            <LargeHeading size='sm' className='text-center'>
              Latest posts
            </LargeHeading>
            <hr className='w-full border-slate-100 mt-4 mb-6' />

            <ul className='flex flex-col lg:flex-row justify-center gap-3'>
              {blog.map((blog) => (
                <li key={blog._id} className='w-full lg:w-1/3 cursor-pointer'>
                  <Link href={`/blogs/${blog.slug}`}>
                    <Subheading
                      size='sm'
                      className='my-2 transform transition duration-300 hover:scale-105'
                    >
                      {blog.title}
                    </Subheading>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
