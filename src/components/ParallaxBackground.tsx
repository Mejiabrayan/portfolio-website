'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const ParallaxBackground = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}): JSX.Element => {
  const variants = {
    animate: {
      backgroundPosition: ['-50% 0%', '50% 0%'],
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: 'linear',
      },
    },
  };

  return (
    <motion.div
      className={cn(
        'fixed top-0 left-0 z-0 w-screen h-screen bg-gradient-to-bl from-gray-910 via-gray-910 to-yellow-50',
        className
      )}
      variants={variants}
      animate='animate'
    >
      {children}
    </motion.div>
  );
};

export default ParallaxBackground;
