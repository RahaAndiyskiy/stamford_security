import './globals.css'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { siteConfig } from '@/lib/siteConfig'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-950`}>{children}</body>
    </html>
  )
}
