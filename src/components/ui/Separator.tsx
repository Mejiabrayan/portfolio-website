'use client';
import React from 'react';
import * as Separator from '@radix-ui/react-separator';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
}

const SeparatorDemo: React.FC<SeparatorProps> = ({ orientation = 'vertical' }) => (
  <div className='flex items-center justify-center h-full'>
    <Separator.Root
      className='SeparatorRoot mx-4 border-r border-gray-500 h-20'
      orientation={orientation}
    />
  </div>
);

export default SeparatorDemo;
