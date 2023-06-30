'use client'
import { motion, MotionProps, Variants } from 'framer-motion';
import React from 'react';

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
} & MotionProps;

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const AnimatedContainer: React.FC<Props> = ({ children, delay = 0, ...rest }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
