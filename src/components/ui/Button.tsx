import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import * as React from 'react';

const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center  text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-gray-800 text-white hover:bg-gray-700',
        destructive: 'text-white bg-red-600 hover:bg-red-700',
        outline:
          'bg-gray-800 text-white hover:bg-gray-700 border border-gray-200',
        outlineGhost: 'text-white hover:bg-gray-700 border border-gray-200',
        subtle: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        ghost:
          'bg-transparent hover:bg-gray-100 data-[state=open]:bg-transparent',
        link: 'bg-transparent underline-offset-4 hover:underline text-gray-900 hover:bg-transparent',
        brand: 'bg-mustard-100 text-gray-800 hover:bg-mustard-200',
      },
      size: {
        default: 'h-10 py-2 px-4 ',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
