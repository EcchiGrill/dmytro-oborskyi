import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { text, targetLang } = await req.json()

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 })
    }

    const response = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `DeepL-Auth-Key ${process.env.NEXT_PUBLIC_DEEPL_API}`,
      },
      body: new URLSearchParams({ text, target_lang: targetLang || 'UK' }),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'DeepL API error' },
        { status: response.status },
      )
    }

    const data = await response.json()
    return NextResponse.json(data.translations?.[0] || { text })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
