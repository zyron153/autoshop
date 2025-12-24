import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contactos - CVAutoStyle | Agende o seu Serviço',
  description: 'Entre em contacto com a CVAutoStyle na Praia, Cabo Verde. Agende o seu serviço automóvel ou faça uma pergunta. Estamos aqui para ajudar.',
  keywords: 'contacto oficina Praia, agendar serviço automóvel Praia, CVAutoStyle contacto',
}

export default function ContactosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

