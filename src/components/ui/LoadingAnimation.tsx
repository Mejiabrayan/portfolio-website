'use client';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <div className='flex justify-center items-center h-screen '>
      <motion.div
        className='w-32 h-32 rounded-full bg-slate-50 flex justify-center items-center relative'
        animate={{ rotateZ: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
      >
        {[...Array(6)].map((_, index) => (
          <motion.span
            key={index}
            className='w-6 h-6  rounded-full absolute'
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${index * 60}deg)`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0], rotate: [0, 360, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: index * 0.1,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LoadingAnimation;
