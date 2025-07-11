import { modulesDB } from '@/data/modules';

export function ModuleView() {
  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-xl font-bold mb-2">Modul Tersedia</h2>
      {modulesDB.map((modul) => (
        <div key={modul.id} className="border p-4 mb-4 rounded bg-gray-800">
          <h3 className="text-lg font-semibold">{modul.title}</h3>
          <p>NPC: {modul.npc.join(', ')}</p>
          <p>Struktur: {modul.struktur.join(' → ')}</p>
          <img src={modul.map} alt="Map" className="mt-2 rounded" />
        </div>
      ))}
    </div>
  );
}