import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AIGames.Work',
  description: 'Welcome to AIGames.Work! Discover our latest updates and projects.',
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