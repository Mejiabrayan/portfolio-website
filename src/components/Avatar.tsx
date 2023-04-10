'use client';
import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

const AvatarDemo = () => (
  <Avatar.Root className='AvatarRoot w-16 h-16'>
    <Avatar.Image
      className='rounded-full w-full h-full filter grayscale'
      src='https://raw.githubusercontent.com/Mejiabrayan/portfolio_2.0/main/public/avatar.jpg'
      alt='Porfolio shot of Brayan Mejia'
    />
    <Avatar.Fallback className='AvatarFallback' delayMs={600}>
      Porfolio shot of Brayan Mejia
    </Avatar.Fallback>
  </Avatar.Root>
);

export default AvatarDemo;
