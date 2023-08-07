'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';

interface MobileMenuProps {
  navItems: Record<string, { name: string }>;
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  navItems,
  isOpen,
  onClose,
}) => {
  const menuVariants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.2, // Adjust this delay to match your desired animation
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const linkVariants = {
    initial: { y: '30vh' },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <AnimatePresence >
      {isOpen && (
        <motion.div
          className='fixed top-0 left-0 w-full origin-top h-full z-20 bg-[#131313]'
          variants={menuVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* Rest of your content */}
          <nav className='flex flex-col items-center justify-center h-full'>
            <motion.div
              variants={containerVariants}
              initial='initial'
              animate='open'
              exit='initial'
            >
              {Object.entries(navItems).map(([path, { name }]) => (
                <motion.div
                  key={path}
                  variants={linkVariants}
                  className='text-5xl font-bold a-tracking-tight py-4'
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link href={path} onClick={onClose}>
                      {name}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
