import { useState } from 'react';
import { askGPT } from '@/lib/ai';

export function ChatBox() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  async function send() {
    if (!input.trim()) return;
    const newMessages = [...messages, `Player: ${input}`];
    setMessages(newMessages);
    setInput('');

    const response = await askGPT(input);
    setMessages([...newMessages, `DM: ${response}`]);
  }

  return (
    <div className="p-4 space-y-2 max-w-xl mx-auto">
      <div className="bg-black/30 p-4 rounded h-80 overflow-y-auto text-sm">
        {messages.map((msg, i) => (
          <p key={i} className="whitespace-pre-wrap">{msg}</p>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 px-4 py-2 rounded bg-white/10 text-white outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
        />
        <button className="bg-blue-600 px-4 py-2 rounded" onClick={send}>
          Kirim
        </button>
      </div>
    </div>
  );
}
