import React from 'react';

interface ApplicationProps {
  children?: React.ReactNode;
}

export const Application = ({ children }: ApplicationProps) => {
  return (
    <div className="m-application">
      {children}
    </div>
  );
};