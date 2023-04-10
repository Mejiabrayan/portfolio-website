'use client';
import React from 'react';
import * as Separator from '@radix-ui/react-separator';

const SeparatorDemo = () => (
  <div className='flex items-center justify-center h-full'>
    <Separator.Root
      className='SeparatorRoot mx-4 border-r border-gray-500 h-20'
      orientation='vertical'
    />
  </div>
);

export default SeparatorDemo;
