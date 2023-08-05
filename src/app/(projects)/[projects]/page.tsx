'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { getProjects } from '../../../../sanity/schemas/sanity-utils';
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { Project } from '../../../../types/project';
import { PageWrapper } from '@/components/animations/PageWrapper';

export const revalidate = 60; // revalidate this page every 60 seconds

const Page: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const projectsToShow = projects.slice(slideIndex, slideIndex + 3);

  const handleSlideNext = () => {
    const nextIndex = slideIndex + 3;
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

  const imageScale = useMotionValue(1);

  return (
    <PageWrapper>
      <section className='max-w-6xl mx-auto py-20 px-4'>
        {' '}
        <div className='text-left mb-3'>
          <h1 className='font-heading text-5xl'>Featured Projects</h1>
        </div>
        <div className='flex flex-col mt-8'>
          {projectsToShow.map((project) => (
            <Link key={project._id} href={`/projects/${project.slug}`}>
              <motion.div
                className='rounded-lg p-4 mb-6 bg-transparent shadow-md flex'
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // 300ms for hover in
                whileTap={{ scale: 0.95, transition: { duration: 0.5 } }} // 500ms for hover out
              >
                <div className='relative h-40'>
                  {project.image && (
                    <motion.div
                      style={{ scale: imageScale }}
                      initial='hidden'
                      animate='visible'
                    >
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={300}
                        height={300}
                        priority={true}
                        className='rounded-lg'
                      />
                    </motion.div>
                  )}
                </div>
                <div className='flex flex-col ml-4'>
                  {' '}
                  {/* Add this container for project content */}
                  <h3 className='text-lg text-white font-bold mb-2'>
                    {project.name}
                  </h3>
                  <div className='text-sm text-white flex-grow'>
                    <PortableText value={project.content} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className='flex justify-center'>
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
    </PageWrapper>
  );
};

export default Page;
