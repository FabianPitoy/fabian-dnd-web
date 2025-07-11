import React, { useState } from 'react';
import { ChatBox } from './ChatBox';
import { ModuleView } from './ModuleView';
import { MenuOverlay } from './modules/MenuOverlay';

interface MainInterfaceProps {
  role: 'player' | 'dm' | 'observer';
}

export function MainInterface({ role }: MainInterfaceProps) {
  const [view, setView] = useState('chat');

  const module = {
    title: 'Petualangan Awal',
    description: 'Selamat datang di dunia D&D ciptaanmu!',
  };

  return (
    <div className="relative w-full h-full">
      <MenuOverlay onSelect={setView} />
      {view === 'chat' && <ChatBox role={role} />}
      {view === 'modul' && <ModuleView module={module} />}
    </div>
  );
export function ModuleView({ module }: { module: Module }) {
  return (
    <div style={{ padding: '1rem', backgroundColor: '#333', borderRadius: '8px', color: '#fff' }}>
      <h2>{module.title}</h2>
      <p>{module.description}</p>
    </div>
  );
}
