// components/LoginScreen.tsx
import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function LoginScreen({ onSelectRole }: { onSelectRole: (r: any) => void }) {
  useEffect(() => {
    document.body.style.background = "url('/maps/kabut-valley.jpg') center/cover no-repeat";
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="animate-fade-in-down shadow-xl rounded-xl bg-gray-900/80 p-10 space-y-5 max-w-sm w-full text-center">
        <h1 className="text-3xl font-bold text-white drop-shadow">Pilih Peranmu</h1>
        <div className="space-y-3">
          <Button onClick={() => onSelectRole('player')} className="w-full">🎮 Player</Button>
          <Button onClick={() => onSelectRole('dm')} className="w-full">🧙 Dungeon Master</Button>
          <Button onClick={() => onSelectRole('observer')} className="w-full">👁️ Observer</Button>
        </div>
      </div>
    </div>
  );
}
