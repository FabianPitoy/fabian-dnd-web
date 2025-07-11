// lib/ai.ts
export async function askGPT(prompt: string): Promise<string> {
  console.log('🟨 prompt dikirim ke /api/ask:', prompt);
  const res = await fetch('/api/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
   console.log('🟩 respons dari /api/ask:', data);
  return data.result || 'Tidak ada respon.';
}
