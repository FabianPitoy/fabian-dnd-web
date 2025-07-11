import React from 'react';

interface MenuOverlayProps {
  onSelect: (view: string) => void;
}

export function MenuOverlay({ onSelect }: MenuOverlayProps) {
  return (
    <div className="absolute right-0 top-0 bg-black bg-opacity-80 p-6 z-50">
      <button onClick={() => onSelect('chat')} className="block text-white mb-2">🧠 Main dengan AI DM</button>
      <button onClick={() => onSelect('modul')} className="block text-white">📦 Modul</button>
    </div>
  );
}
