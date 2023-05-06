'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FC, useState } from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import Image from 'next/image';

interface HeaderProps {}

const navItems = {
  '/': {
    name: 'Home',
  },
  '/projects': {
    name: 'Projects',
  },
  '/blogs': {
    name: 'Blogs',
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
    <header className='flex flex-col md:flex-row bg-gray-900 shadow-md items-center justify-start md:hidden sm:hidden  '>
      <div className='flex justify-between items-center px-4 md:px-8  md:py-6 md:border-r border-gray-800'>
        <motion.a
          className='text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 hover:text-gray-300 cursor-pointer'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href='/'
        >
          <Image
            src='/B.png'
            alt='Picture of the logo'
            width={50}
            height={50}
          />
        </motion.a>

        <button
          className='md:hidden text-3xl text-gray-600 dark:text-gray-400 focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
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

            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className={isOpen ? 'block' : 'hidden'}
            >
              <line x1='18' x2='6' y1='6' y2='18'></line>
              <line x1='6' x2='18' y1='6' y2='18'></line>
            </svg>
          </svg>
        </button>
      </div>
      <LayoutGroup>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:flex-row md:items-center md:justify-end md:px-8 py-4 md:py-6 w-full md:w-auto bg-gray-900 cursor-pointer`}
        >
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link
                key={path}
                href={path}
                className={clsx(
                  'transition-all hover:text-neutral-200 flex align-middle',
                  {
                    'text-neutral-400': !isActive,
                    'font-bold': isActive,
                  }
                )}
              >
                <span className='relative py-[5px] px-[10px]'>
                  {name}
                  {path === pathname ? (
                    <motion.div
                      className='absolute inset-0 bg-neutral-100 bg-neutral-800 rounded-md z-[-1]'
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
