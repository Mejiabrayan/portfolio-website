'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FC, useState } from 'react';
import { LayoutGroup, motion } from 'framer-motion';

interface HeaderProps {}

const navItems = {
  '/': {
    name: 'Home',
  },
  '/projects': {
    name: 'Projects',
    
  },
  '/blog': {
    name: 'Blog',
  },
};

const Header: FC<HeaderProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  // here we're basically saying that if the pathName is undefined, then we'll use the '/' path
  let pathname = usePathname() || '/';
  // if the pathname includes '/blog/' then we'll set the pathName to '/blog'
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <header className='flex flex-col md:flex-row bg-white dark:bg-gray-900 shadow-md items-center justify-start'>
      <div className='flex justify-between items-center px-4 md:px-8 py-4 md:py-6 md:border-r border-gray-200 dark:border-gray-800'>
        <motion.a
          className='text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Brayan
        </motion.a>

        <button
          className='md:hidden text-3xl text-gray-600 dark:text-gray-400 focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className='sr-only'>Open menu</span>
          <svg
            className='w-8 h-8 fill-current'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
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
      <LayoutGroup>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:flex-row md:items-center md:justify-end md:px-8 py-4 md:py-6 w-full md:w-auto dark:bg-gray-900`}
        >
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link
                key={path}
                href={path}
                className={clsx(
                  'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                  {
                    'text-neutral-500': !isActive,
                    'font-bold': isActive,
                  }
                )}
              >
                <span className='relative py-[5px] px-[10px]'>
                  {name}
                  {path === pathname ? (
                    <motion.div
                      className='absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]'
                      layoutId='sidebar'
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  ) : null}
                </span>
              </Link>
            );
          })}
        </nav>
      </LayoutGroup>
    </header>
  );
};

export default Header;
