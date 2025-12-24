import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CVAutoStyle - Oficina Automóvel na Praia, Cabo Verde',
  description: 'A sua oficina automóvel de confiança na Praia. Reparação automóvel, manutenção, diagnóstico e loja de pneus. Serviços profissionais para veículos ligeiros e comerciais.',
  keywords: 'oficina automóvel na Praia, reparação automóvel Praia, loja de pneus Praia, CVAutoStyle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

