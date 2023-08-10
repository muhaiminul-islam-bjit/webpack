import React from 'react';

interface CheckboxProps {
  children?: React.ReactNode;
}

export const Checkbox = ({ children }: CheckboxProps) => {
  return (
    <div className="a-checkbox">
      {children}
    </div>
  );
};