import Link from 'next/link';
import LargeHeading from '@/components/ui/LargeHeading';
import { Metadata } from 'next';
import Subheading from '@/components/ui/SubHeading';

import { getBlogs } from '../../../sanity/schemas/sanity-utils';
import { PageWrapper } from '@/components/animations/PageWrapper';
import GradientBlur from '@/components/GradientBlur';

export const metadata: Metadata = {
  title: 'Blog | Brayan Mejia Cuenca',
  description: 'Blog of Brayan Mejia Cuenca',
  creator: 'Brayan Mejia Cuenca',
};

export default async function Blog() {
  const blog = await getBlogs();

  return (
    <PageWrapper>
      <div className='relative py-10 px-4 lg:px-0 flex justify-center items-center'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col'>
            <LargeHeading size='default' className='mb-4 text-left'>
              Blog
            </LargeHeading>
            <div className='flex flex-col gap-6'>
              <p className='text-2xl text-left text-neutral-200'>
                Latest posts
              </p>
              
              <hr className='w-12 h-1 bg-gray-200 self-start' />

              <ul className='flex flex-col gap-4'>
                {blog.map((blog) => (
                  <li key={blog._id} className='cursor-pointer'>
                    <Link href={`/blogs/${blog.slug}`}>
                      <Subheading size='sm' className='hover:underline'>
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
    </PageWrapper>
  );
}
