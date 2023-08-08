'use client';

import * as React from 'react';
import Link from 'next/link';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/app/lib/utils';

const buttonVariants = cva(
  'btn btn-active text-primary min-h-1 rounded-3xl px-8  hover:bg-primary text-sm font-normal hover:border-primary hover:text-base-100 z-[1] duration-300',
  {
    variants: {
      variant: {
        default: 'btn-secondary  text-base-200',
        primary: 'btn-primary text-base-100',
        secondary:
          'btn-secondary text-base-200 hover:bg-white hover:text-primary hover:border-white',
      },
      size: {
        default: 'h-10 py-2 px-8',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
