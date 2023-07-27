'use client';
import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

interface AnimatedHeadingProps {
  size?: 'lg' | 'xl';
  className?: string;
  children: React.ReactNode;
}

import { useTheme } from 'next-themes';

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  size,
  className,
  children,
}) => {
  const { theme } = useTheme();
  const headingSize = size === 'lg' ? 'text-4xl' : 'text-5xl';

  const lightGradientColors = 'from-yellow-200 via-orange-200 to-pink-200';
  const darkGradientColors = 'from-zinc-200/60 via-zinc-200 to-zinc-200/60';

  const gradientColors =
    theme === 'light' ? lightGradientColors : darkGradientColors;

  return (
    <motion.h1
      className={`font-heading pb-5 text-left ${headingSize} ${className} text-transparent bg-clip-text bg-gradient-to-r ${gradientColors}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Balancer>{children}</Balancer>
    </motion.h1>
  );
};
