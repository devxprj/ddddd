import React from "react"
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import './globals.css'

const _geist = GeistSans
const _geistMono = GeistMono

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
