'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, ReactNode } from 'react';
// import GlowTop from '../../public/images/glowtop.svg';
interface Props {
  children: ReactNode;
}

export default function ParallaxProvider({ children }: Props): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0% 0%', '0% 100%'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="relative overflow-hidden w-full">
      
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-910 via-gray-910 to-slate-400">
        <motion.div ref={ref} style={{ y }} className="h-full w-full" />
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

