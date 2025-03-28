export async function translateToUk(text: string) {
  const response = await fetch('/api/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, targetLang: 'UK' }),
  })

  const data = await response.json()
  return data.text || text
}
