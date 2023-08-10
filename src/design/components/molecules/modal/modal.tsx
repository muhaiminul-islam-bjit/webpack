import React from 'react';

interface ModalProps {
  children?: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className="m-modal">
      {children}
    </div>
  );
};