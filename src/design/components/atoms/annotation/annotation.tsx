import React from 'react';

interface AnnotationProps {
  children?: React.ReactNode;
}

export const Annotation = ({ children }: AnnotationProps) => {
  return (
    <div className="a-annotation">
      {children}
    </div>
  );
};