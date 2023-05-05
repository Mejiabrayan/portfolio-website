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
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
      ref={ref}
      className='flex flex-col items-center justify-center max-w-[1800px]'
    >
      <motion.div
        style={{ y, opacity }}
        className='absolute inset-x-0 w-full h-full -z-10'
      >
        <div className='bg-gradient-to-bl from-gray-910 via-gray-910 to-yellow-50 h-full w-full px-4 py-16 sm:px-8 sm:py-32 lg:py-48' />
      </motion.div>

      <div>{children}</div>
    </div>
  );
}
