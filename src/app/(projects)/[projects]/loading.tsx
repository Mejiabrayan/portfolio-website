'use client'
import React from 'react';
import { motion } from 'framer-motion';
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';


const Loading = () => {
  return (
    <section className='max-w-6xl mx-auto py-20'>
      <div className='text-center'>
        <LargeHeading
          size='lg'
          className='text-center pb-5 text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60'
        >
          Loading Projects...
        </LargeHeading>
        <div className='mt-4 text-center border-none'>
          <Paragraph size='default' className='tracking-tight text-slate-200'>
            Please wait while we fetch the projects
          </Paragraph>
        </div>
      </div>

      <div className='flex items-center justify-center mt-8'>
        <motion.div className='flex gap-6'>
          {/* Placeholder cards for the loading UI */}
          {Array.from({ length: 3 }).map((_, index) => (
            <motion.div
              key={index}
              className='rounded-lg p-4 sm:p-6 flex flex-col w-80 h-96 bg-gradient-to-tr from-zinc-600 to-zinc-500'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className='h-40 w-full mb-2 sm:mb-4 bg-zinc-400 rounded-lg' />
              <div className='h-4 w-3/4 mt-2 bg-zinc-400 rounded-md' />
              <div className='h-4 mt-2 bg-zinc-400 rounded-md' />
              <div className='h-4 mt-2 bg-zinc-400 rounded-md' />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Loading;
