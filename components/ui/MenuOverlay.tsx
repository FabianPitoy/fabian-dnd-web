import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position: 'left' | 'right';
}

export const MenuOverlay: React.FC<Props> = ({ isOpen, onClose, children, position }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      [position]: 0,
      height: '100vh',
      width: '250px',
      backgroundColor: '#111',
      color: '#fff',
      padding: '1rem',
      zIndex: 1000
    }}>
      <button onClick={onClose} style={{ marginBottom: '1rem' }}>Tutup</button>
      {children}
    </div>
  );
};