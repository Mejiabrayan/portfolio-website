import { FC } from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const subheadingVariants = cva(
  'text-black dark:text-white font-extrabold leading-tight tracking-tighter',
  {
    variants: {
      size: {
        default: 'text-1xl md:text-3xl lg:text-4xl',
        lg: 'text-xl md:text-2xl lg:text-3xl',
        sm: 'text-lg md:text-xl lg:text-2xl',
        new: 'text-xl md:text-xl lg:text-2xl',
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

interface SubheadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof subheadingVariants> {}

const Subheading: FC<SubheadingProps> = ({
  children,
  className,
  size,
  textColor,
  align,
  ...props
}) => {
  return (
    <h2
      {...props}
      className={cn(subheadingVariants({ size, textColor, align, className }))}
    >
      {children}
    </h2>
  );
};

export default Subheading;
