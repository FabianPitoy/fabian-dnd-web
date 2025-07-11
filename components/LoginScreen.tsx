import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function LoginScreen({ onSelectRole }: { onSelectRole: (r: any) => void }) {
  useEffect(() => {
    document.body.style.background = 'url(/maps/kabut-valley.jpg) center/cover no-repeat';
    document.body.style.filter = 'blur(5px)';
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 backdrop-blur-md text-white">
      <Card className="bg-black bg-opacity-70 p-10 rounded-xl space-y-4">
        <h1 className="text-2xl font-bold">Pilih Role</h1>
        <Button onClick={() => onSelectRole('player')}>🎮 Player</Button>
        <Button onClick={() => onSelectRole('dm')}>🧙 Dungeon Master</Button>
        <Button onClick={() => onSelectRole('observer')}>👁️ Observer</Button>
      </Card>
    </div>
  );
}