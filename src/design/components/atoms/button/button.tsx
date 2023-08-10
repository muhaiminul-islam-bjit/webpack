import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  text: string;
}

export const Button = ({ children, text }: ButtonProps) => {
  return (
    <button className="a-button">
      {children} {text}
    </button>
  );
};