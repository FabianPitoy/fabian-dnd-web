import React from 'react';

interface Module {
  title: string;
  description: string;
}

export function ModuleView({ module }: { module: Module }) {
  return (
    <div style={{ padding: '1rem', backgroundColor: '#333', borderRadius: '8px', color: '#fff' }}>
      <h2>{module.title}</h2>
      <p>{module.description}</p>
    </div>
  );
}
