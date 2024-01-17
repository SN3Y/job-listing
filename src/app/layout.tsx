import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { League_Spartan } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const league = League_Spartan({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"text-xs md:text-base  "+ league.className}>{children}</body>
    </html>
  )
}
