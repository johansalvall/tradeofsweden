import type { Metadata } from 'next'
import './globals.css'
import ThemeRegistry from '@/components/ThemeRegistry'

export const metadata: Metadata = {
  title: 'Trade Of Sweden - Gräv & Markentreprenad',
  description: 'Trade Of Sweden - Professionell gräv- och markarbetsfirma. Vi erbjuder avlopp, infiltration, dränering, poolgrävning, husgrund och trädäck.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
