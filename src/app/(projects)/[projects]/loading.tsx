import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LoadingUI = () => {
  return (
    <section className='max-w-6xl mx-auto space-y-12 px-4'>
      <div className='text-left mb-3'>
        <h1 className='font-heading text-5xl'>Loading...</h1>
      </div>
      <div className='flex flex-col mt-8'>
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className='rounded-lg p-4 mb-6 bg-transparent shadow-md flex'
        
          >
            <div className='animate-pulse relative h-40 w-40 bg-gray-300 rounded'></div>
            <div className='flex flex-col ml-4'>
              <div className='animate-pulse h-4 w-1/2 bg-gray-300 rounded mb-2'></div>
              <div className='animate-pulse h-3 w-full bg-gray-300 rounded'></div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <button
          className='bg-gray-300 text-gray-600 rounded-md py-2 px-4 mr-2'
          disabled
        >
          Previous
        </button>
        <button
          className='bg-gray-300 text-gray-600 rounded-md py-2 px-4'
          disabled
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default LoadingUI;
