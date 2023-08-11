import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  handleClick?: () => void;
}

export const Button = ({ children, handleClick }: ButtonProps) => {
  return (
    <button className="a-button" onClick={handleClick}>
      {children}
    </button>
  );
};
