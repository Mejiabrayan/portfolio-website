import { Button, buttonVariants } from '@/components/ui/Button';
import { getProjects } from '../../../../sanity/schemas/sanity-utils';
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 60; // revalidate this page every 60 seconds
const page = async () => {
  const projects = await getProjects();
  return (
    <>
      <section className='max-w-6xl mx-auto py-16'>
        <div className='text-center'>
          <LargeHeading size='lg'>Featured Projects</LargeHeading>
          <div className='mt-4 text-center'>
            <Paragraph>
              Here are projects I am actively working on. Feel free to check out
              my other projects on my{' '}
              <Link
                href='https://github.com/Mejiabrayan'
                className={buttonVariants({ variant: 'outline', size: 'sm' })}
              >
                Github
              </Link>
            </Paragraph>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/projects/${project.slug}`}
              className='group'
            >
              <div className='bg-white shadow-md rounded-lg p-6 group-hover:bg-gray-50 transition-colors flex flex-col'>
                <div className='relative h-40 w-full mb-4'>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.name}
                      layout='fill'
                      objectFit='cover'
                    />
                  )}
                </div>
                <h3 className='text-lg font-bold mb-2 text-gray-910 group-hover:text-gray-900 transition-colors'>
                  {project.name}
                </h3>
                <div className='text-gray-500 text-sm'>
                  <PortableText value={project.content}  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
