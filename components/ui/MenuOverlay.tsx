// components/ui/MenuOverlay.tsx
import React from 'react';

interface MenuOverlayProps {
  onSelect: (view: string) => void;
}

export function MenuOverlay({ onSelect }: MenuOverlayProps) {
  return (
    <div className="absolute top-4 left-4 z-50 space-x-2">
      <button
        onClick={() => onSelect('chat')}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Chat
      </button>
      <button
        onClick={() => onSelect('modul')}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Modul
      </button>
    </div>
  );
}
