import './globals.css'
import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Setra Group | Premier Surgical Instruments & Supplies',
  description: 'Precision-engineered surgical instruments and medical supplies from the heart of Scotland. Serving NHS and private clinics with clinical excellence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-medical-dark text-white antialiased">
        {children}
      </body>
    </html>
  )
}
