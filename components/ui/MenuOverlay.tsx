export function MenuOverlay({ onSelect }: { onSelect: (v: string) => void }) {
  return (
    <div className="absolute top-0 right-0 m-4 space-x-2 z-40">
      <button onClick={() => onSelect('chat')} className="bg-gray-800 px-3 py-1 rounded text-white">🧠 AI DM</button>
      <button onClick={() => onSelect('modul')} className="bg-gray-800 px-3 py-1 rounded text-white">📦 Modul</button>
    </div>
  );
}