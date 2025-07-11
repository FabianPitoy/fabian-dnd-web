import { useState } from 'react';
import { ChatBox } from '@/components/ChatBox';
import { ModuleView } from '@/components/modules/ModuleView';
import { MenuOverlay } from '@/components/ui/MenuOverlay';
import modules from '@/data/modules';

export function MainInterface({ role }: { role: 'player' | 'dm' | 'observer' }) {
  const [view, setView] = useState<'chat' | 'modul'>('chat');
  const module = modules[0]; // ambil modul pertama

  return (
    <div className="relative w-full h-full">
      <MenuOverlay onSelect={setView} />
      {view === 'chat' && <ChatBox />} {/* ← Panggil ChatBox di sini */}
      {view === 'modul' && <ModuleView module={module} />}
    </div>
  );
}
