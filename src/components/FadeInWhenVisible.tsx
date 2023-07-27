'use client';
import { motion } from 'framer-motion';

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
}

export const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
}) => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      viewport={{ threshold: 0.2 } as any}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};