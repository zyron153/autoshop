import Link from 'next/link'
import {
  FaPhone,
  FaCalendarAlt,
  FaClock,
  FaTag,
  FaUsers,
  FaCog,
  FaWrench,
  FaShieldAlt,
  FaCheckCircle,
  FaTruck,
  FaCreditCard,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa'
import TestimonialCard from '@/components/TestimonialCard'

export default function Home() {
  const statistics = [
    {
      icon: <FaUsers />,
      title: '15+ Anos de Experiência',
      description: 'Servindo a comunidade de Praia com dedicação familiar',
    },
    {
      icon: <FaCog />,
      title: '100% Mecânicos Certificados',
      description: 'Equipa qualificada com garantia em todas as peças',
    },
    {
      icon: <FaWrench />,
      title: '500+ Serviços por Mês',
      description: 'Clientes satisfeitos confiam em nós mensalmente',
    },
  ]

  const tireProducts = [
    {
      tag: 'MAIS VENDIDO',
      title: 'Desempenho Todas as Estações',
      description: 'Aderência superior em todas as condições meteorológicas. Perfeito para condução durante todo o ano.',
      features: [
        'Vida útil prolongada',
        'Design eficiente em combustível',
        'Condução silenciosa e suave',
      ],
      originalPrice: 149,
      currentPrice: 99,
    },
    {
      tag: '★ PREMIUM',
      title: 'Alto Desempenho',
      description: 'Manuseamento e precisão máximos para carros desportivos e veículos de luxo.',
      features: [
        'Aderência máxima em curvas',
        'Estabilidade em alta velocidade',
        'Materiais premium',
      ],
      originalPrice: 249,
      currentPrice: 179,
    },
    {
      tag: 'PRONTO INVERNO',
      title: 'Todo-o-Terreno e Inverno',
      description: 'Conquiste qualquer condição de estrada com as nossas opções robustas todo-o-terreno.',
      features: [
        'Capacidade fora de estrada',
        'Tração em neve e gelo',
        'Construção durável',
      ],
      originalPrice: 199,
      currentPrice: 139,
    },
  ]

  const tireBenefits = [
    {
      icon: <FaShieldAlt />,
      title: 'Garantia',
      description: 'Até 130.000 km',
    },
    {
      icon: <FaWrench />,
      title: 'Instalação Grátis',
      description: 'Montagem especializada',
    },
    {
      icon: <FaTag />,
      title: 'Melhor Preço',
      description: 'Garantia de melhor preço',
    },
    {
      icon: <FaCalendarAlt />,
      title: 'No Mesmo Dia',
      description: 'Serviço disponível',
    },
  ]

  const testimonials = [
    {
      name: 'João Costa',
      text: 'Venho aqui há anos. Têm sempre os pneus que preciso em stock e a instalação é impecável. A cobertura da garantia dá-me paz de espírito. Serviço A+!',
      rating: 5,
      verified: true,
    },
    {
      name: 'Ana Rodrigues',
      text: 'Excelente experiência do início ao fim! Ajudaram-me a escolher os pneus perfeitos para o meu SUV. Profissionais, experientes e preços justos. Voltarei com certeza!',
      rating: 5,
      verified: true,
    },
    {
      name: 'Pedro Santos',
      text: 'Serviço extraordinário! Os meus pneus de inverno foram instalados rápida e profissionalmente. A equipa explicou tudo claramente e os preços superam todos os concorrentes. Cinco estrelas!',
      rating: 5,
      verified: true,
    },
  ]

  return (
    <div className="bg-primary-dark text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-dark via-gray-dark to-primary-dark">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 to-primary-dark/80"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Content */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Mantenha o Seu Carro{' '}
                <span className="text-secondary">Seguro e Confiável</span> Sem Surpresas
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Oficina auto familiar em Praia com mecânicos certificados, preços transparentes e
                atendimento rápido. Diagnóstico, reparação, manutenção e vendas de pneus – tudo num
                só lugar.
              </p>

              {/* Key Selling Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-lg">
                    <FaClock className="text-secondary text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Serviço Rápido</h3>
                    <p className="text-gray-400">Atendimento no mesmo dia disponível</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-lg">
                    <FaTag className="text-secondary text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Preços Honestos</h3>
                    <p className="text-gray-400">Orçamento gratuito sem compromisso</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  href="/contactos"
                  className="bg-secondary hover:bg-secondary-light px-8 py-4 rounded-lg text-lg font-semibold transition flex items-center justify-center gap-2"
                >
                  <FaCalendarAlt />
                  Marque o Seu Serviço
                </Link>
                <a
                  href="tel:+238999999999"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-lg text-lg font-semibold transition flex items-center justify-center gap-2"
                >
                  <FaPhone />
                  Ligue Agora
                </a>
              </div>

              <p className="text-sm text-gray-400">
                Sem compromisso • Orçamento gratuito • Atendimento imediato
              </p>
            </div>

            {/* Right Side - Statistics Cards */}
            <div className="space-y-4">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <div className="text-secondary text-2xl">{stat.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{stat.title}</h3>
                      <p className="text-gray-400">{stat.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tire Promotion Section */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              PROMOÇÃO DE PNEUS PREMIUM
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Os Pneus Perfeitos para o Seu Veículo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seleção imbatível de pneus de alta qualidade das principais marcas. Instalação
              especializada incluída.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tireProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-secondary/50 transition"
              >
                <div className="bg-gray-800 h-48 flex items-center justify-center">
                  <FaWrench className="text-6xl text-gray-600" />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-secondary text-white px-3 py-1 rounded text-xs font-semibold mb-3">
                    {product.tag}
                  </span>
                  <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <FaCheckCircle className="text-secondary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 mb-6">
                    <div>
                      <span className="text-gray-400 line-through text-lg">
                        ${product.originalPrice}
                      </span>
                      <span className="text-3xl font-bold ml-2">${product.currentPrice}</span>
                    </div>
                  </div>
                  <Link
                    href="/contactos"
                    className="block w-full bg-secondary hover:bg-secondary-light text-center py-3 rounded-lg font-semibold transition"
                  >
                    Saber Mais
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Tires */}
      <section className="py-20 bg-gray-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Por Que Escolher os Nossos Pneus?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tireBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:border-secondary/50 transition"
              >
                <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-secondary text-2xl">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Update Section */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Pronto para Atualizar?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Obtenha recomendações especializadas de pneus e preços exclusivos. Os nossos
            especialistas estão prontos para ajudá-lo a encontrar a escolha perfeita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+238999999999"
              className="bg-secondary hover:bg-secondary-light px-8 py-4 rounded-lg text-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <FaPhone />
              Ligue para Orçamento
            </a>
            <Link
              href="/contactos"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-lg text-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <FaCalendarAlt />
              Agendar Serviço
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <FaTruck />
              <span>Entrega Rápida Disponível</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCreditCard />
              <span>Opções de Financiamento Flexíveis</span>
            </div>
            <div className="flex items-center gap-2">
              <FaStar />
              <span>Seleção das Melhores Marcas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              ★ AVALIAÇÕES DOS CLIENTES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O Que Dizem os Nossos Clientes
            </h2>
            <p className="text-xl text-gray-300">
              Não confie apenas na nossa palavra – ouça os clientes satisfeitos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mb-8">
            <button className="p-2 hover:bg-white/10 rounded-lg transition">
              <FaChevronLeft />
            </button>
            <span className="text-gray-400">2 / 5</span>
            <button className="p-2 hover:bg-white/10 rounded-lg transition">
              <FaChevronRight />
            </button>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-secondary" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.9/5</span>
              <span className="text-gray-400">Avaliação Média</span>
            </div>
            <p className="text-gray-400 mt-2">De Mais de 500 Clientes Satisfeitos</p>
          </div>
        </div>
      </section>
    </div>
  )
}
