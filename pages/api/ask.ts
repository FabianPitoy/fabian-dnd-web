// pages/api/ask.ts
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;
  console.log('📨 Prompt diterima dari frontend:', prompt); // cek input masuk

  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

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
  console.log('✅ Respons dari OpenAI:', data); // lihat isi respons

  if (!data.choices || !data.choices.length) {
    return res.status(500).json({ result: 'Tidak ada jawaban dari AI.' });
  }

  res.status(200).json({ result: data.choices[0].message.content });
}
