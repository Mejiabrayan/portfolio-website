'use client';

import { motion } from 'framer-motion';
import Logo from '../../app/B.png'

const LoadingAnimation = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <motion.div
        className='w-32 h-32 rounded-full bg-gray-900 flex justify-center items-center'
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
      >
        <motion.img
          src='Logo'
          alt='Logo'
          className='w-24 h-24'
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingAnimation;
