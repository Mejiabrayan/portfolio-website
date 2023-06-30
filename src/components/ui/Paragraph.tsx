import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const paragraphVariants = cva(' fontSatoshi text-center text-slate-100 mb-4 leading-tight', {
  variants: {
    size: {
      default: 'text-base md:text-lg',
      sm: 'text-sm md:text-base',
      lg: 'text-lg md:text-xl',
    },
    align: {
      default: 'text-center',
      center: 'text-center',
    },
    lineHeight: {
      default: 'leading-tight',
      tight: 'leading-tight',
      loose: 'leading-loose',
    },
  },
  defaultVariants: {
    size: 'default',
    align: 'default',
    lineHeight: 'default',
  },
}
);
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
