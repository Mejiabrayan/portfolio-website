import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const paragraphVariants = cva(' text-slate-100 mb-4 leading-relaxed', {
  variants: {
    size: {
      default: ' text-center sm:text-lg ',
      sm: 'text-sm sm:text-base',
      lg: 'text-xl sm:text-2xl',
    },
    align: {
      default: 'text-center',
      center: 'text-center',
    },
  },
  defaultVariants: {
    size: 'default',
    align: 'default',
  },
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, align, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, className, align, ...props }))}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
