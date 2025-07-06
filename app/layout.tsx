import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AIGames.Work - Under Construction',
  description: 'Coming soon...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 