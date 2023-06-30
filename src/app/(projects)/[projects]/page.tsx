'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/Button';
import { getProjects } from '../../../../sanity/schemas/sanity-utils';
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { Project } from '../../../../types/project';

export const revalidate = 60; // revalidate this page every 60 seconds

const Page: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const projectsToShow = projects.slice(slideIndex, slideIndex + 3);

  const handleSlideNext = () => {
    // show 3 projects at a time (3 columns)
    const nextIndex = slideIndex + 3;
    // if there are more projects to show, then show them
    if (nextIndex < projects.length) {
      setSlideIndex(nextIndex);
    }
  };

  const handleSlidePrev = () => {
    const prevIndex = slideIndex - 3;
    if (prevIndex >= 0) {
      setSlideIndex(prevIndex);
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
    };

    fetchProjects(); // fetch projects on page load (client-side)
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className='max-w-6xl mx-auto py-auto'>
        <div className='text-center'>
          <LargeHeading
            size='lg'
            className='pb-5 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60'
          >
            Featured Projects
          </LargeHeading>
          <div className='mt-4 text-center border-none'>
            <Paragraph size='default' className='tracking-tight text-slate-200'>
              Personal Work{' '}
            </Paragraph>
          </div>
        </div>

        <div className='flex items-center justify-center mt-8'>
          <motion.div className='flex gap-6'>
            {projectsToShow.map((project) => (
              <Link
                key={project._id}
                href={`/projects/${project.slug}`}
                className='group'
              >
                <motion.div
                  className=' rounded-lg p-4 sm:p-6 flex flex-col w-80 h-96'
                  variants={cardVariants}
                  initial='hidden'
                  animate='visible'
                  transition={{ duration: 0.5 }}
                >
                  <div className='relative h-40 w-full mb-2 sm:mb-4 text-white'>
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={300}
                        height={300}
                        priority={true}
                        className='rounded-lg border-none'
                      />
                    )}
                  </div>
                  <h3 className='text-lg font-bold mb-1 sm:mb-2 text-white '>
                    {project.name}
                  </h3>
                  <div className='text-white text-xs sm:text-sm'>
                    <PortableText value={project.content} />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>

        <div className='flex justify-center mt-4'>
          <Button
            onClick={handleSlidePrev}
            disabled={slideIndex === 0}
            className='mr-2'
          >
            Previous
          </Button>
          <Button
            onClick={handleSlideNext}
            disabled={slideIndex + 3 >= projects.length}
          >
            Next
          </Button>
        </div>
      </section>
    </>
  );
};

export default Page;
