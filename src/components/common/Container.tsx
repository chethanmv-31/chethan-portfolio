import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

interface ContainerProps {
  className?: string;
}

export function Container({ children, className }: PropsWithChildren<ContainerProps>) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
}