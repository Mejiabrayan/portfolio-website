'use client';
import Tiptap from '@/components/TipTap';
import LargeHeading from '@/components/ui/LargeHeading';
import { FC, useState } from 'react';

interface PageProps {}

const Page: FC<PageProps> = () => {
  return (
    <section className='px-8 py-20 mt-5 mb-2 rounded-lg relative'>
      <div className='max-w-7xl mx-auto relative'>
        <div className='text-center'>
          <p className='mt-8 pb-2 text-4xl font-medium tracking-tighter text-white'>
            AI Powered Text Editor with React and Tiptap
          </p>
          <p className='max-w-xl mx-auto mt-4 text-lg tracking-tight text-white'>
            This is a demo of a text editor that uses AI.
          </p>
        </div>

        <section className='relative flex items-center w-full'>
            
            <Tiptap />
        </section>
      </div>
    </section>
  );
};

export default Page;
