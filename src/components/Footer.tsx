import Link from 'next/link';
import React, { FC } from 'react';
import Hover from './animations/Hover';

const Footer: FC = () => {
  return (
    <footer className='w-full bg-transparent'>
      <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16'>
        <div className='flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0'>
          <p className='text-base text-center text-zinc-300 transition duration-500 ease-in-out transform tracking-relaxed'>
            Let&apos;s connect
          </p>
          <span className='mt-2 text-sm text-zinc-300'>
            <Link
              href='https://www.linkedin.com/in/brayan-mejia/'
              className='mx-2 text-zinc-500 hover:text-zinc-300'
              rel='noopener noreferrer'
            >
              <Hover>@mejiabrayan</Hover>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
