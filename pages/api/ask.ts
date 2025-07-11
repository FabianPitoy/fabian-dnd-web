// pages/api/ask.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { prompt } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: "Kamu adalah Dungeon Master. Jawab dengan ringkas dan penuh imajinasi." },
          { role: "user", content: prompt }
        ],
        temperature: 0.8,
      }),
    });

    const data = await response.json();
    return res.status(200).json({ result: data.choices?.[0]?.message?.content || "Tidak ada respon." });
  } catch (error) {
    return res.status(500).json({ error: 'Gagal memanggil API OpenAI' });
  }
}
