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
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed top-0 left-0 w-full h-full z-20 bg-[#131313]'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className='flex justify-end p-4'>
            <button
              onClick={onClose}
              className='text-gray-400 hover:text-gray-600 focus:outline-none'
            >
              <X size={24} />
            </button>
          </div>
          <nav className='flex flex-col items-center justify-center h-full'>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {Object.entries(navItems).map(([path, { name }]) => (
                <motion.div
                  key={path}
                  variants={linkVariants}
                  className='text-xl font-bold tracking-tight py-4'
                >
                  <Link href={path} onClick={onClose}>
                    {name}
                  </Link>
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
