import type { Metadata } from 'next'
import './globals.css'
import { primaryFont } from '@/assets/fonts'
import { ApolloProvider } from '@dmytro-oborskyi/network/src/config/apollo'

export const metadata: Metadata = {
  title: 'Dmytro Oborskyi',
  description: 'Dmytro Oborskyi portfolio website',
  creator: 'Dmytro Oborskyi',
  category: 'Portfolio',
  keywords: ['portfolio', 'cv', 'resume', 'fullstack', 'fullstack developer'],
  robots: { index: true, follow: true, nocache: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ApolloProvider>
        <body
          className={`${primaryFont.className} ${primaryFont.className} antialiased`}
        >
          {children}
        </body>
      </ApolloProvider>
    </html>
  )
}
