import React from 'react';

interface LinkProps {
  children?: React.ReactNode;
  href: string;
}

export const Link = ({ children, href }: LinkProps) => {
  return (
    <a className="a-link" href={href}>
      {children}
      <span className="a-link__tooltip">
        Learn all about animating the browser
      </span>
    </a>
  );
};
