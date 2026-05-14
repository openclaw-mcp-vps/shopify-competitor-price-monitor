import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Competitor Price Monitor — Track Pricing Changes Automatically',
  description: 'Monitor competitor product prices across multiple platforms, get instant alerts on price drops, and optimize your Shopify pricing strategy automatically.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2bfd8322-1be8-46bb-a753-51965633c928"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
