import React from 'react';

export function Button({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#4A90E2',
        color: '#fff',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
}