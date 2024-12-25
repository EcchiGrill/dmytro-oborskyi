import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }

  let locale = req.cookies.get('NEXT_LOCALE')?.value
  const response = NextResponse.next()

  if (!locale) {
    locale = req.headers.get('accept-language')!

    response.cookies.set({
      name: 'NEXT_LOCALE',
      value: locale,
    })
  }

  if (!req.nextUrl.pathname.slice(1) && locale.includes('uk-UA'))
    return NextResponse.redirect(
      new URL(`/ua${req.nextUrl.pathname}${req.nextUrl.search}`, req.url),
    )

  return response
}
