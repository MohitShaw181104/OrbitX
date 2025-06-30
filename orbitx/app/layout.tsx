import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'OrbitX',
  description: 'A modern trading platform',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}  