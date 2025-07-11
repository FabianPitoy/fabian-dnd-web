import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`p-4 bg-gray-800 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
}
