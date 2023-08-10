import React from 'react';

interface CalendarProps {
  children?: React.ReactNode;
}

export const Calendar = ({ children }: CalendarProps) => {
  return (
    <div className="a-calendar">
      {children}
    </div>
  );
};