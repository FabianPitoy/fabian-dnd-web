export async function generateAIResponse(input: string): Promise<string> {
  const lower = input.toLowerCase();
  if (lower.includes('halo')) return 'Selamat datang, petualang.';
  if (lower.includes('pergi')) return 'Kau melangkah ke jalanan berkabut...';
  if (lower.includes('mira')) return 'Mira memandangmu dengan tatapan curiga, tapi tidak berkata apa-apa.';
  return 'Aku tak yakin maksudmu. Bisa kau jelaskan lebih lanjut?';
}