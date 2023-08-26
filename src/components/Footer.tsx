import Link from 'next/link';
import React, { FC } from 'react';
import Hover from './animations/Hover';

const Footer: FC = () => {
  return (
    <footer className='w-full bg-transparent'>
      <h2 id='footer-heading' className='sr-only text-white'>
        @mejiabrayan
      </h2>
      <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16'>
        <div className='flex flex-col items-baseline space-y-6'>
          <div className='mx-auto'>
            <a
              href='/'
              className='mx-auto text-lg text-center text-white transition duration-500 ease-in-out transform tracking-relaxed'
            >
              {/* Your SVG icon */}
            </a>
          </div>
          <div className='mx-auto'>
            <span className='mx-auto mt-2 text-sm text-zinc-300'>
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
      </div>
    </footer>
  );
};

export default Footer;
