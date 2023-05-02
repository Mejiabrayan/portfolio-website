import LargeHeading from '@/components/ui/LargeHeading';
import { getProject } from '../../../../../sanity/schemas/sanity-utils';
import Image from 'next/image';

import { PortableText } from '@portabletext/react';
import AnimatedContainer from '@/components/AnimatedContainer';

type Props = {
  params: {
    project: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return {
    title: project.name,
  };
}



export default async function Page({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <AnimatedContainer className='relative flex flex-col md:flex-row items-center justify-center mt-28 px-10'>
      <div className='md:w-1/2 md:pr-8 mb-8 md:mb-0'>
        <LargeHeading className='text-3xl font-bold mb-4'>
          {project.name}
        </LargeHeading>
        <div className='text-lg leading-8 mt-4'>
          <PortableText value={project.content} />
        </div>
      </div>
      <div className='md:w-1/2'>
        <Image
          src={project.image}
          alt={project.name}
          width={500}
          height={500}
          className='rounded-lg'
        />
      </div>
    </AnimatedContainer>
  );
}


