import Link from 'next/link'
import { FaWrench, FaCar, FaTools, FaTire, FaCheckCircle, FaPhone, FaCalendarAlt } from 'react-icons/fa'
import TestimonialCard from '@/components/TestimonialCard'

export default function Home() {
  const services = [
    {
      icon: <FaWrench />,
      title: 'Mecânica Geral',
      description: 'Reparações completas para o seu veículo',
    },
    {
      icon: <FaCar />,
      title: 'Diagnóstico Automóvel',
      description: 'Identificação precisa de problemas',
    },
    {
      icon: <FaTools />,
      title: 'Manutenção Preventiva',
      description: 'Cuidado regular para prolongar a vida do seu veículo',
    },
    {
      icon: <FaTire />,
      title: 'Pneus & Rodas',
      description: 'Venda e montagem de pneus profissionais',
    },
  ]

  const whyChoose = [
    {
      icon: <FaCheckCircle />,
      title: 'Experiência Local',
      text: 'Anos de experiência servindo a comunidade da Praia',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Transparência',
      text: 'Orçamentos claros e sem surpresas',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Qualidade',
      text: 'Trabalho profissional com garantia',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Atendimento Próximo',
      text: 'Empresa familiar com atenção personalizada',
    },
  ]

  const testimonials = [
    {
      name: 'João Silva',
      text: 'Excelente serviço! Repararam o meu carro rapidamente e com transparência total. Recomendo!',
      rating: 5,
    },
    {
      name: 'Maria Santos',
      text: 'Atendimento profissional e preços justos. A CVAutoStyle é a minha oficina de confiança.',
      rating: 5,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">CVAutoStyle</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            A sua oficina automóvel de confiança na Praia
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

      {/* Serviços em Destaque */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-dark">
            Os Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center"
              >
                <div className="text-4xl text-secondary mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-dark">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/servicos"
              className="text-secondary hover:text-secondary-light font-semibold text-lg"
            >
              Ver todos os serviços →
            </Link>
          </div>
        </div>
      </section>

      {/* Por que escolher a CVAutoStyle */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-dark">
            Por que escolher a CVAutoStyle?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl text-secondary mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-dark">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testemunhos Resumidos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-dark">
            O que dizem os nossos clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/testemunhos"
              className="text-secondary hover:text-secondary-light font-semibold text-lg"
            >
              Ver mais testemunhos →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para cuidar do seu veículo?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Entre em contacto connosco hoje mesmo
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

