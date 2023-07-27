import { getProject } from '../../../../../sanity/schemas/sanity-utils';
import Image from 'next/image';

import { PortableText } from '@portabletext/react';
import AnimatedContainer from '@/components/AnimatedContainer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowBigRight } from 'lucide-react';

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
const Page = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <AnimatedContainer>
      <section className='relative flex items-center w-full '>
        <div className='relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl'>
          <div className='relative flex-col items-start m-auto align-middle'>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24'>
              <div className='relative items-center gap-12 m-auto lg:inline-flex md:order-first'>
                <div className='max-w-xl text-center lg:text-left'>
                  <div>
                    <p className='font-heading text-2xl font-medium tracking-tight text-slate-100 sm:text-4xl  '>
                      {project.name}
                    </p>

                    <p className='body max-w-xl mt-4 text-base tracking-tight text-zinc-300'>
                      <PortableText value={project.content} />
                    </p>
                  </div>
                  <div className='flex justify-center gap-3 mt-10 lg:justify-start'>
                    <Link
                      className='inline-flex items-center justify-center text-sm font-semibold text-zinc-400 duration-200 hover:text-zinc-600 focus:outline-none focus-visible:outline-gray-600'
                      href={project.url}
                    >
                      <Button className='inline-flex items-center justify-center text-sm font-semibold text-zinc-400 duration-200 hover:text-zinc-400 focus:outline-none focus-visible:outline-gray-600'>
                        Live Site
                        <ArrowBigRight className='w-4 h-4 ml-2  fill-white' />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='order-first block w-full mt-12 aspect-square lg:mt-0'>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={500}
                  className='h-full object-contain object-center'
                />{' '}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedContainer>
  );
}

export default Page;
