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
    <div className=' relative min-h-screen max-w-2xl flex items-center overflow-x-hidden'>
      <div className='container pt-30 px-6 min-h-full w-full mx-auto'>
        <div className='h-full gap-5 flex flex-col justify-center items-center lg:items-center'>
          <LargeHeading size='lg' className='text-center lg:text-center mt-3'>
            Blog
          </LargeHeading>

          <Paragraph size='sm' className='text-center lg:text-center'>
            Here, I write about my experiences, thoughts, and learnings as a
            full-stack software engineer.
          </Paragraph>

          <div className='flex flex-col justify-center items-center gap-4'>
            <LargeHeading size='sm' className='text-center lg:text-center mt-6'>
              Latest posts
            </LargeHeading>
            <hr className='w-full border-gray-800 mt-10 mb-10' />

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
