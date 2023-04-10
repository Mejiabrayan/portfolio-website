'use client';

import Link from 'next/link';
import { FC, useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 bottom-0 w-50 bg-gray-910 z-50 border-r border-slate-300 dark:border-slate-700 shadow-sm flex flex-col'>
      <div className='flex items-center justify-between h-20 border-b border-slate-300 dark:border-slate-700 px-4'>
        <Link href='/' className='sm:hidden'>
          ~
        </Link>
        <button
          className='block md:hidden focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className='h-6 w-6 fill-current text-gray-700 dark:text-gray-300'
            viewBox='0 0 24 24'
          >
            <path
              className={isOpen ? 'hidden' : 'block'}
              fillRule='evenodd'
              clipRule='evenodd'
              d='M3 5h18v2H3V5zm0 6h18v2H3v-2zm18 6H3v2h18v-2z'
            />
            <path
              className={isOpen ? 'block' : 'hidden'}
              fillRule='evenodd'
              clipRule='evenodd'
              d='M4 6h16v12H4V6zm1 1v10h14V7H5z'
            />
          </svg>
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block flex-1 flex-col items-center justify-center p-4 mt-5`}
      >
        <motion.a
          whileHover={{ scale: 1.1, backgroundColor: '#4a5568' }}
          href='https://vercel.com/docs'
          className='text-gray-300 hover:text-white py-2 block rounded'
        >
          Docs
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1, backgroundColor: '#4a5568' }}
          href='https://vercel.com/blog'
          className='text-gray-300 hover:text-white py-2 block rounded'
        >
          Blog
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1, backgroundColor: '#4a5568' }}
          href='https://vercel.com/contact'
          className='text-gray-300 hover:text-white py-2 block rounded'
        >
          Contact Us
        </motion.a>
      </motion.div>
    </nav>
  );
};

export default Header;
