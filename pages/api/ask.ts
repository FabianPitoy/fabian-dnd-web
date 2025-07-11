// pages/api/ask.ts
console.log('📥 prompt diterima:', prompt);
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metode tidak diizinkan' });
  }

  const { prompt } = req.body;

  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Prompt tidak valid' });
  }

  try {
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content:
              'Kamu adalah Dungeon Master dalam dunia Dungeons & Dragons. Buat cerita petualangan yang seru dan imajinatif. Berikan tanggapan menarik kepada pemain yang menuliskan aksinya.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.9,
      }),
    });

    const data = await openaiRes.json();

    const result = data?.choices?.[0]?.message?.content || 'AI tidak merespon.';

    res.status(200).json({ result });
  } catch (err) {
    console.error('Error dari OpenAI:', err);
    res.status(500).json({ error: 'Gagal menghubungi AI' });
  }
}
