'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function ParallaxLayout({ children }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className='flex flex-col items-center justify-center max-w-[1800px]'>
      <motion.div
        ref={ref}
        style={{ y }}
        className='absolute inset-0 w-full -z-10 max-h-[1800px] sm:max-h-[800px] scroll-smooth'
      >
        <div className='bg-gradient-to-bl from-gray-910 via-gray-910 to-yellow-50 h-full w-full px-4 py-16 sm:px-8 sm:py-32 lg:py-48' />
      </motion.div>

      <div>{children}</div>
    </div>
  );
}
