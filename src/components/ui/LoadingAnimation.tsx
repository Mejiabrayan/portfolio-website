'use client';

import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <motion.div
        className='w-32 h-32 rounded-full bg-gray-900 flex justify-center items-center'
        animate={{ rotateZ: 360}}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
      >
       
      </motion.div>
    </div>
  );
};

export default LoadingAnimation;
