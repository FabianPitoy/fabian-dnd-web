import { useState } from 'react';
import { LoginScreen } from './LoginScreen';
import { MainInterface } from './MainInterface';

export default function HomePage() {
  const [role, setRole] = useState<'player' | 'dm' | 'observer' | null>(null);

  if (!role) {
    return <LoginScreen onSelectRole={setRole} />;
  }

  return <MainInterface role={role} />;
}
