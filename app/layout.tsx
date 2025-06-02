import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aura Habits - Your AI Co-Pilot for Habit Mastery',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
