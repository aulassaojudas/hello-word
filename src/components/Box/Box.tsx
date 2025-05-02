// Box.tsx
import React, { ElementType } from 'react';

export type BoxProps<T extends ElementType = 'div'> = {
  component?: T;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export const Box = <T extends ElementType = 'div'>({
  component,
  className,
  children,
  ...rest
}: BoxProps<T>) => {
  const Component = component ?? 'div';
  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
};

