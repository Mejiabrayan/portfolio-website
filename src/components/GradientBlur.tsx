'use client';
import React from 'react';

export default function GradientBlur(): JSX.Element {
  return (
    <div className='relative flex justify-center'>
      <div className='absolute top-1/3 left-1/4 transform -translate-x-1/4 -translate-y-36 -z-10'>
      <div className='w-[700px] h-[300px] bg-gradient-to-br from-blue-900 via-blue-800 to-transparent blur-[100px] transform -skew-y-12 rounded-full' />
      </div>
    </div>
  );
}


