'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, ReactNode } from 'react';
// import GlowTop from '../../public/images/glowtop.svg';
interface Props {
  children: ReactNode;
}

export default function ParallaxLayout({ children }: Props): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className='relative overflow-hidden'>
      <div className='absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 -z-10'>
          <motion.div
            ref={ref}
            style={{ y }}
            className='max-w-none'
          >
            {/* <Image
              src={GlowTop}
              width={1404}
              height={658}
              alt='Features Illustration'
            /> */}
          </motion.div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mx-auto'>
        <motion.div
          ref={ref}
          style={{ y }}
          className='absolute inset-0 w-full -z-10 max-h-[1800px] sm:max-h-[1800px] scroll-smooth'
        >
          <div className='bg-gradient-to-bl from-gray-910 via-gray-910 to-yellow-50 h-full w-full px-4 py-16 sm:px-8 sm:py-32 lg:py-48' />
        </motion.div>
        <div>{children}</div>
      </div>
    </div>
  );
}
