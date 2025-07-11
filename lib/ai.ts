// lib/ai.ts
export async function askGPT(prompt: string): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "system", content: "Kamu adalah Dungeon Master. Jawab dengan ringkas dan penuh imajinasi." }, { role: "user", content: prompt }],
      temperature: 0.8,
    }),
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content || "AI tidak merespon.";
}
