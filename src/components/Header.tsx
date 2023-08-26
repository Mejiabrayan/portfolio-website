'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FC, useState } from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import Image from 'next/image';
import { Logo } from '@/lib/info';
import MobileMenu from './MobileMenu';
import Hover from './animations/Hover';

interface HeaderProps {
  className?: string;
  navItems?: Record<string, { name: string }>;
}

const navItems = {
  '/': {
    name: 'Home',
  },
  // '/about': {
  //   name: 'About',
  // },
  '/projects': {
    name: 'Projects',
  },
  '/blogs': {
    name: 'Blogs',
  },
};

const Header: FC<HeaderProps> = ({}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu open/close

  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <header className='flex flex-col lg:flex-row md:flex-row items-center justify-start'>
      <div className='flex justify-start items-center px-4 md:px-8 md:py-8'>
        <motion.a
          className='text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 hover:text-gray-300 cursor-pointer'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href='/'
        >
          <Image
            src={Logo}
            alt='Picture of the logo'
            width={50}
            height={50}
            placeholder='blur'
            className='rounded-full filter grayscale hidden md:block'
            priority
          />
        </motion.a>
      </div>
      <LayoutGroup>
        <nav className='hidden md:flex md:flex-row md:items-center md:justify-center md:px-8 py-4 md:py-6 w-full md:w-auto justify-center cursor-pointer'>
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link
                key={path}
                href={path}
                className={clsx(
                  'transition-all hover:text-neutral-200 flex align-middle',
                  {
                    'text-zinc-500': !isActive,
                    'font-bold': isActive,
                    ' rounded-md shadow-white': isActive,
                  }
                )}
              >
                <span className='relative py-[5px] px-[10px]'>
                  <Hover>{name}</Hover>
                  {path === pathname ? (
                    <motion.div
                      className='absolute inset-0 rounded-full text-black z-[-1]'
                      layoutId='active-nav-item'
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
        <div className='ml-auto p-4'></div>
        <div className='ml-auto pt-4 pr-4 md:hidden'>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className='text-sm text-gray-400 focus:outline-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-400 hover:text-gray-600 focus:outline-none'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>
        <MobileMenu
          navItems={navItems}
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </LayoutGroup>
    </header>
  );
};

export default Header;
