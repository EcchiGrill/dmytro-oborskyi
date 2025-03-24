import type { Metadata } from 'next'
import './globals.css'
import { primaryFont } from '@/assets/fonts'
import { ApolloProvider } from '@dmytro-oborskyi/network/src/config/apollo'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL as string),
  title: 'Dmytro Oborskyi',
  description: 'Dmytro Oborskyi CV website',
  creator: 'Dmytro Oborskyi',
  category: 'CV',
  keywords: [
    'dmytro oborskyi',
    'dmitry oborsky',
    'portfolio',
    'cv',
    'resume',
    'fullstack',
    'frontend',
    'fullstack developer',
    'frontend developer',
  ],
  robots: { index: true, follow: true, nocache: true },
  openGraph: {
    title: 'Dmytro Oborskyi',
    description: 'Dmytro Oborskyi CV website',
    type: 'website',
    url: process.env.NEXT_PUBLIC_URL,
  },
  icons: {
    icon: '../favicon.ico',
  },
}

interface RootLayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <ApolloProvider>
        <body
          className={`${primaryFont.className} ${primaryFont.className} antialiased`}
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </ApolloProvider>
    </html>
  )
}
