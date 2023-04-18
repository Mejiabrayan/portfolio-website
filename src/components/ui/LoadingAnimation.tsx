'use client';

import { motion } from 'framer-motion';

const LoadingAnimation = () => {
    return (
      <motion.div
        className="grid place-items-center w-full h-full"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 2, loop: Infinity, ease: 'linear' }}
      >
        <motion.div
          className="w-24 h-24 bg-gray-100 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1, loop: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    );
  };
  
  export default LoadingAnimation;