import { FC } from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const headingVariants = cva(
  'font-heading text-gray-100 font-extrabold',
  {
    variants: {
      size: {
        default: 'text-4xl md:text-5xl lg:text-6xl',
        lg: 'text-5xl md:text-6xl lg:text-7xl',
        sm: 'text-2xl md:text-3xl lg:text-4xl',
        md: 'text-3xl md:text-3xl lg:text-4xl',
      },
      textColor: {
        default: 'text-gray-100',
      },
      align: {
        default: 'text-center',
        center: 'text-center',
      },
      lineHeight: {
        'normal': 'leading-normal',
        'tight': 'leading-tight',
        'loose': 'leading-loose',
        'extra-loose': 'leading-loose', // Add a new line height variant
      },
    },
    defaultVariants: {
      size: 'default',
      textColor: 'default',
      align: 'default',
      lineHeight: 'normal',
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
