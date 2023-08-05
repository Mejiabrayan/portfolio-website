'use client';
import { motion } from 'framer-motion';

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }} // Initial animation state
      animate={{ opacity: 1 }} // Animation on page load
      exit={{ opacity: 0 }} // Animation on page exit
      className='max-w-6xl mx-auto py-20 px-4'
    >
      {children}
    </motion.section>
  );
};
