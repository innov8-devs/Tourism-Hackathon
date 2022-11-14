import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import { Btn } from './button-styles';

type BtnProps<T extends ElementType> = {
  renderAs?: T;
  small?: boolean;
  join?: boolean;
  smallTwo?: boolean;
  smallest?: boolean;
  back?: boolean;
  backTwo?: boolean;
  upload?: boolean;
  criticalAction?: boolean;
  ActionButton?: boolean;
  DeleteButton?: boolean;
  isLoading?: boolean;
  isCompleted?: boolean;
  disabled?: boolean;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Button = <T extends ElementType = 'button'>({
  renderAs,
  isLoading,
  isCompleted,
  children,
  ...rest
}: BtnProps<T>): JSX.Element => {
  return (
    <Btn as={renderAs} isLoading={isLoading} isCompleted={isCompleted} {...rest}>
      {children}
    </Btn>
  );
};

export default Button;
