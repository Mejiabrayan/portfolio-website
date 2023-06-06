'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import  Featured from '@/components/Featured';
import { features, projectDescription, projectImageAlt, projectImageSrc, projectTitle } from '@/lib/technologies';



const ProjectPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex">
      <div className="w-1/4 h-screen bg-gray-200 fixed left-0 top-0">
      <Featured 
         features={features}
         projectTitle={projectTitle}
         projectDescription={projectDescription}
         projectImageSrc={projectImageSrc}
         projectImageAlt={projectImageAlt}
      />
      </div>
      <div className="flex-grow h-screen overflow-y-scroll pl-1/4">
        <div className="relative">
          <h1 className="text-4xl font-bold mb-8">{`Project #${scrollY}`}</h1>
          <Image
            src="/path/to/your/image.jpg"
            alt="Project Image"
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
