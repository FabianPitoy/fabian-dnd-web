import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function LoginScreen({ onSelectRole }: { onSelectRole: (r: any) => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Mencegah scroll
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 blur-sm brightness-50"
        style={{
          backgroundImage: "url('/maps/kabut-valley.jpg')"
        }}
      />

      {/* Overlay blur separuh */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Card className="bg-black/70 p-10 rounded-xl space-y-4 animate-fade-in-down shadow-lg">
          <h1 className="text-3xl font-bold text-center">🧙‍♂️ Pilih Role</h1>
          <div className="flex flex-col space-y-2">
            <Button onClick={() => onSelectRole('player')}>🎮 Player</Button>
            <Button onClick={() => onSelectRole('dm')}>📜 Dungeon Master</Button>
            <Button onClick={() => onSelectRole('observer')}>👁️ Observer</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
