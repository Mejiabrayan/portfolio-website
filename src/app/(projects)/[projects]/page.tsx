import { getProjects } from '../../../../sanity/schemas/sanity-utils';
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

const page = async () => {
  const projects = await getProjects();
  return (
    <>
      <section className='flex flex-col max-2xl py-16'>
        <div className='mx-auto px-10 py-auto'>
          <LargeHeading
            size='sm'
            className='text-center text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl'
          >
            Featured Projects
          </LargeHeading>
          <Paragraph className='mt-4 text-lg text-gray-700 dark:text-gray-200 text-center'>
            Here are projects I am activily working on.
            <br />
           Feel free to check out my other projects on my <Link  href='https://github.com/Mejiabrayan'>Github </Link>
          </Paragraph>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {projects.map((project) => (
              <div
                key={project._id}
                className='bg-white shadow-md rounded-lg p-6'
              >
                <div className='relative h-20 w-20 mb-4'>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={750}
                      height={300}
                    />
                  )}
                </div>

                <h3 className='text-lg font-bold mb-2 text-gray-910'>
                  {project.name}{' '}
                </h3>
                <div className='text-gray-500 text-sm'>
                  {' '}
                  <PortableText value={project.content} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
