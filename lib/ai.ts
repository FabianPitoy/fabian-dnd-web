// lib/ai.ts
export async function askGPT(prompt: string): Promise<string> {
  console.log('📤 Prompt dikirim ke /api/ask:', prompt); // log kirim

  const res = await fetch('/api/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  console.log('📥 Response dari /api/ask:', data); // log terima

  return data.result || 'Tidak ada respon.';
}
