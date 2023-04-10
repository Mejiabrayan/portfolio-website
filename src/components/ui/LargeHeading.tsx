import { FC } from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const headingVariants = cva(
  'text-black dark:text-white font-extrabold leading-tight tracking-tighter',

  {
    variants: {
      size: {
        default: 'text-gray-700 dark:text-gray-200',
        lg: 'text-5xl md:text-6xl lg:text-7xl',
        sm: 'text-2xl md:text-3xl lg:text-4xl',
        new: 'text-3xl md:text-3xl lg:text-4xl',
      },
      textColor: {
        default: 'text-gray-700 dark:text-gray-200',
        primary: 'text-indigo-500 dark:text-indigo-400',
        secondary: 'text-green-500 dark:text-green-400',
        accent: 'text-pink-500 dark:text-pink-400',
      },
      align: {
        default: 'text-center lg:text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    defaultVariants: {
      size: 'default',
      textColor: 'default',
      align: 'default',
    },
  }
);

interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading: FC<LargeHeadingProps> = ({
  children,
  className,
  size,
  textColor,
  align,
  ...props
}) => {
  return (
    <h1
      {...props}
      className={cn(headingVariants({ size, textColor, align, className }))}
    >
      {children}
    </h1>
  );
};

export default LargeHeading;
