// components/MainInterface.tsx

import { useState } from 'react';
import { MenuOverlay } from './ui/MenuOverlay';
import { ChatBox } from './ai/ChatBox';
import { ModuleView } from './modules/ModuleView';

export function MainInterface({ role }: { role: string }) {
  const [view, setView] = useState('chat');

  return (
    <div className="relative w-full h-full">
      <MenuOverlay onSelect={setView} />
      {view === 'chat' && <ChatBox role={role} />}
      {view === 'modul' && <ModuleView />}
    </div>
  );
}
