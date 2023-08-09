---
to: src/design/components/<%= atomic %>/<%= lowerName %>/<%= lowerName %>.tsx
---

import React from 'react';

interface <%= pascalName %>Props {
  children?: React.ReactNode;
}

export const <%= pascalName %> = ({ children }: <%= pascalName %>Props) => {
  return (
    <div className="<%= basicClassName %>">
      {children}
    </div>
  );
};