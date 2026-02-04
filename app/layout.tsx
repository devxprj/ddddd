import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'geist/font/sans'

import './globals.css'

const _geist = Geist
const _geistMono = Geist_Mono

export const metadata: Metadata = {
  title: 'Short Coin - The Short of a Lifetime',
  description: 'Short this coin. Hedge the market.',
  generator: 'v0.app',
  icons: {
    icon: '/images/image.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_geist.variable} ${_geistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
