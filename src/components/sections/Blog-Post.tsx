import { PortableTextBlock } from 'sanity';
import React from 'react';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import Balancer from 'react-wrap-balancer';
import { name } from '@/lib/info';

interface BlogPostProps {
  title: string;
  content: PortableTextBlock[];
  link: string;
}

const BlogPost = ({ title, content, link }: BlogPostProps) => {
  const truncatedContent = content.slice(0, 2);

  return (
    <div className='shadow-md rounded-lg mb-4 pt-4'>
      <Link href={link} className='group hover:unique'>
        <h2 className='font-heading xxs:text-lg text-center md:text-2xl lg:text-2xl lg:text-left mb-6 group hover:gradient-text'>
          <Balancer>{title}</Balancer>
        </h2>
      </Link>
      <div className='flex xxs:justify-center sm:justify-center md:justify-start items-center gap-2 text-gray-500 mb-2'>
        <span className='text-sm'>{name}</span>
        <span className='text-sm'>•</span>
        <span className='text-sm'>2 min read</span>
      </div>
      <div className='mt-2 text-gray-300 text-center md:text-base lg:text-left mb-6 xxs:text-xs tracking-tighter'>
        <Balancer>
          <PortableText value={truncatedContent} />
        </Balancer>
      </div>
      <div className='flex xxs:justify-center sm:justify-center md:justify-start items-center gap-2 text-gray-500 mb-2'>
        <Link href={link}>
          <span className='underline cursor-pointer hover:text-zinc-300 sm:text-sm xxs:text-xs text-base'>
            Read more
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
