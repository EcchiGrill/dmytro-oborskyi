import type { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'

const intlMiddleware = createMiddleware({
  locales: ['uk', 'en'],
  defaultLocale: 'en',
})

export function middleware(request: NextRequest) {
  const response = intlMiddleware(request)

  response.headers.set('x-next-pathname', request.nextUrl.pathname)
  return response
}

export const config = {
  matcher: ['/', '/(en|uk)/:path*'],
}
