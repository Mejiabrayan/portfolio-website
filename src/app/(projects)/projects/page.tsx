import { getProjects } from '../../../../sanity/schemas/sanity-utils';
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import { Project } from '../../../../types/project';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

const page = async () => {
  const projects: Project[] = await getProjects();
  return (
    <>
      <section className=' flex flex-col max-2xl: py-16 text-center'>
        <div className='mx-auto '>
          <LargeHeading
            size='sm'
            className='text-center text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl'
          >
            Featured Projects
          </LargeHeading>
          <Paragraph className='mt-4 text-lg text-gray-700 dark:text-gray-200'>
            Here are some of our favorite projects that we have worked on.
          </Paragraph>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {projects.map((project) => (
              <div
                key={project._id}
                className='bg-white shadow-md rounded-lg p-6'
              >
                <div  className='h-20 w-20 bg-gray-200 rounded-md mb-4'>
                {/* <Image src={project?.image} alt={project.name} width={30} height={30}/> */}
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
