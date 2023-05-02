'use client'
import { motion, MotionProps } from 'framer-motion';
import React from 'react';

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
} & MotionProps;

const AnimatedContainer: React.FC<Props> = ({ children, delay = 0, ...rest }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: delay,
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      variants={container}
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
