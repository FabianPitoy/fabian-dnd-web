import { useState } from 'react';
import { generateAIResponse } from '@/lib/ai';

export function ChatBox({ role }: { role: string }) {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  async function sendMessage() {
    const playerMessage = \`Player (\${role}): \${input}\`;
    const aiReply = await generateAIResponse(input);
    setMessages(prev => [...prev, playerMessage, \`DM: \${aiReply}\`]);
    setInput('');
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, i) => <p key={i}>{msg}</p>)}
      </div>
      <div className="flex p-2 bg-gray-800">
        <input
          className="flex-1 bg-gray-700 p-2 rounded"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ketik perintahmu di sini..."
        />
        <button onClick={sendMessage} className="ml-2 bg-blue-600 px-4 py-2 rounded">Kirim</button>
      </div>
    </div>
  );
}