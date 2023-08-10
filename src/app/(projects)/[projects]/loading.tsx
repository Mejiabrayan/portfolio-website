import React, { FC } from 'react';

const LoadingSkeleton: FC = () => {
  const skeletonItems = Array.from({ length: 3 }).map((_, index) => (
    <div
      key={index}
      className='rounded p-4 mb-6 bg-transparent animate-pulse shadow-md flex'
    >
      <div className='relative h-40 w-40  rounded-lg'></div>
      <div className='flex flex-col ml-4'>
        <div className='w-40 h-4 bg-gray-400 mb-2'></div>
        <div className='w-full h-16 bg-gray-400'></div>
      </div>
    </div>
  ));

  return (
    <section className='max-w-6xl mx-auto space-y-12 px-4'>
      <div className='text-left mb-6'>
        <h1 className='font-heading text-5xl bg-gray-300 w-3/4 h-12 mb-4'></h1>
      </div>
      <div className='flex flex-col mt-8'>{skeletonItems}</div>
      <div className='flex justify-center'>
        <div className='w-24 h-8 bg-gray-300 mr-2'></div>
        <div className='w-24 h-8 bg-gray-300'></div>
      </div>
    </section>
  );
};

export default LoadingSkeleton;
