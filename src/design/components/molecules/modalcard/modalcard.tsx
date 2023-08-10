import React from 'react';

interface ModalCardProps {
  children?: React.ReactNode;
}

export const ModalCard = ({ children }: ModalCardProps) => {
  return (
    <div className="m-modalCard">
      {children}
    </div>
  );
};