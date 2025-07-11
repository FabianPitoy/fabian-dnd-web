import React from 'react';

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: '1px solid #444', padding: '1rem', borderRadius: '8px', backgroundColor: '#222' }}>
      {children}
    </div>
  );
}