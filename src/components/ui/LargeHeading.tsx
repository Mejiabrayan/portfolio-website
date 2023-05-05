import { FC } from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const headingVariants = cva(
  'text-gray-100 font-extrabold leading-tight tracking-tighter',
  {
    variants: {
      size: {
        default: 'text-gray-100',
        lg: 'text-5xl md:text-6xl lg:text-7xl',
        sm: 'text-2xl md:text-3xl lg:text-4xl',
        new: 'text-3xl md:text-3xl lg:text-4xl font-bold',
      },
      textColor: {
        default: 'text-gray-100',
        primary: 'text-indigo-500 dark:text-indigo-400',
        secondary: 'text-green-500 dark:text-green-400',
        accent: 'text-pink-500 dark:text-pink-400',
      },
      align: {
        default: 'text-center',
        center: 'text-center',
      },
      lineHeight: {
        '99': 'leading-99',
      },
    },
    defaultVariants: {
      size: 'default',
      textColor: 'default',
      align: 'default',
      lineHeight: '99',
    },
  }
);

interface LargeHeadingProps extends VariantProps<typeof headingVariants> {
  children: React.ReactNode;
  className?: string;
}

const LargeHeading: FC<LargeHeadingProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1 {...props} className={cn(headingVariants(props), className)}>
      {children}
    </h1>
  );
};

export default LargeHeading;
