// components/ProjectItem.js
import React from 'react';
import Link from 'next/link';
import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';
interface ProjectItemProps {
  title: string;
  description: PortableTextBlock[];
  link: string;
}

const ProjectPost = ({ title, description, link }: ProjectItemProps) => {
  return (
    <div className='text-left flex flex-col gap-4 pt-4'>
      <h2 className='text-xl font-semibold mb-2'>{title}</h2>
      <p className='body -tracking-tighter leading-tighter font-medium text-zinc-300'>
     <PortableText value={description} />
      </p>
      <Link href={link}>
        <span className='underline cursor-pointer'>Learn more</span>
      </Link>
    </div>
  );
};

export default ProjectPost;
