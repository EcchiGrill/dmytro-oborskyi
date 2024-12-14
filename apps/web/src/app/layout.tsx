import type { Metadata } from 'next'
import { Alata } from 'next/font/google'
import './globals.css'

const alata = Alata({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Frontend',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${alata.className} ${alata.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
