'use client'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FC } from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import Image from 'next/image';
import { Logo } from '@/lib/info';

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
            className='rounded-full filter grayscale'
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
                    'text-neutral-400': !isActive,
                    'font-bold': isActive,
                    ' rounded-md shadow-white': isActive
                  }
                )}
              >
                <span className='relative py-[5px] px-[10px]'>
                  {name}
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
        {/* Mobile Menu Goes Here */}
        {/* <div className='ml-auto pr-4 md:hidden'>
          <span className='text-sm text-gray-400'>
            working on this mobile menu thing 😅
          </span>
        </div> */}
      </LayoutGroup>
    </header>
  );
};

export default Header;
