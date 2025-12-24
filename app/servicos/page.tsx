import Link from 'next/link'
import {
  FaWrench,
  FaCar,
  FaTools,
  FaTire,
  FaShieldAlt,
  FaCheckCircle,
  FaPhone,
  FaCalendarAlt,
} from 'react-icons/fa'

export const metadata = {
  title: 'Serviços - CVAutoStyle',
  description: 'Conheça todos os serviços da CVAutoStyle: mecânica geral, diagnóstico, manutenção, travões, suspensão e pneus.',
}

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
  ctaText: string
}

const services: Service[] = [
  {
    icon: <FaWrench />,
    title: 'Mecânica Geral',
    description:
      'Reparações completas e manutenção geral para todos os tipos de veículos ligeiros e comerciais.',
    benefits: [
      'Diagnóstico preciso de problemas',
      'Reparações com peças de qualidade',
      'Garantia em todos os trabalhos',
      'Equipamento moderno e atualizado',
    ],
    ctaText: 'Solicitar Orçamento',
  },
  {
    icon: <FaCar />,
    title: 'Diagnóstico Automóvel',
    description:
      'Identificação precisa de problemas através de equipamento de diagnóstico avançado.',
    benefits: [
      'Equipamento de última geração',
      'Diagnóstico rápido e preciso',
      'Relatórios detalhados',
      'Identificação de problemas antes que se agravem',
    ],
    ctaText: 'Agendar Diagnóstico',
  },
  {
    icon: <FaTools />,
    title: 'Manutenção Preventiva',
    description:
      'Cuidado regular do seu veículo para prolongar a sua vida útil e evitar reparações custosas.',
    benefits: [
      'Aumenta a longevidade do veículo',
      'Previne avarias inesperadas',
      'Mantém o valor do veículo',
      'Economia a longo prazo',
    ],
    ctaText: 'Agendar Manutenção',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Travões & Suspensão',
    description:
      'Reparação e manutenção de sistemas de travagem e suspensão para a sua segurança.',
    benefits: [
      'Maior segurança na estrada',
      'Melhor conforto de condução',
      'Inspeção completa dos sistemas',
      'Substituição de componentes desgastados',
    ],
    ctaText: 'Verificar Travões',
  },
  {
    icon: <FaTire />,
    title: 'Pneus & Rodas',
    description:
      'Venda, montagem, balanceamento e alinhamento de pneus para todos os tipos de veículos.',
    benefits: [
      'Grande variedade de marcas',
      'Montagem profissional',
      'Balanceamento e alinhamento',
      'Verificação de pressão e desgaste',
    ],
    ctaText: 'Ver Pneus',
  },
]

export default function Servicos() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Os Nossos Serviços</h1>
          <p className="text-xl text-gray-100">
            Soluções completas para o seu veículo
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden md:flex"
              >
                <div className="bg-primary-dark text-white p-8 md:p-12 flex items-center justify-center md:w-1/4">
                  <div className="text-6xl">{service.icon}</div>
                </div>
                <div className="p-8 md:p-12 md:w-3/4">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-dark">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-dark mb-3">Benefícios:</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/contactos"
                    className="inline-block bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    {service.ctaText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de ajuda para escolher o serviço certo?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Entre em contacto connosco e teremos todo o prazer em ajudar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contactos"
              className="bg-secondary hover:bg-secondary-light px-8 py-4 rounded-lg text-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <FaCalendarAlt />
              Agendar Serviço
            </Link>
            <a
              href="tel:+238999999999"
              className="bg-white text-primary-dark hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <FaPhone />
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

