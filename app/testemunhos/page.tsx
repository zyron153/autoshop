import TestimonialCard from '@/components/TestimonialCard'

export const metadata = {
  title: 'Testemunhos - CVAutoStyle',
  description: 'Leia o que os nossos clientes dizem sobre os serviços da CVAutoStyle na Praia, Cabo Verde.',
}

const testimonials = [
  {
    name: 'João Silva',
    text: 'Excelente serviço! Repararam o meu carro rapidamente e com transparência total. O orçamento foi claro desde o início e não houve surpresas. Recomendo vivamente!',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    text: 'Atendimento profissional e preços justos. A CVAutoStyle é a minha oficina de confiança há mais de 3 anos. Sempre tratam do meu veículo com muito cuidado.',
    rating: 5,
  },
  {
    name: 'Carlos Mendes',
    text: 'Fiquei impressionado com a rapidez e qualidade do serviço. Fizeram o diagnóstico do problema e resolveram tudo no mesmo dia. Muito satisfeito!',
    rating: 5,
  },
  {
    name: 'Ana Costa',
    text: 'Empresa familiar com um atendimento muito próximo. Sentem-se genuinamente preocupados com o seu veículo. Já recomendei a vários amigos.',
    rating: 5,
  },
  {
    name: 'Pedro Alves',
    text: 'Comprei pneus na CVAutoStyle e o serviço de montagem foi impecável. Fizeram também o balanceamento e alinhamento. Tudo perfeito!',
    rating: 5,
  },
  {
    name: 'Sofia Rodrigues',
    text: 'Transparência total nos orçamentos e explicações claras sobre o que precisa ser feito. Confio completamente na equipa da CVAutoStyle.',
    rating: 5,
  },
]

export default function Testemunhos() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Testemunhos</h1>
          <p className="text-xl text-gray-100">
            O que dizem os nossos clientes sobre nós
          </p>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-dark">
            Quer fazer parte dos nossos clientes satisfeitos?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Entre em contacto connosco hoje mesmo
          </p>
          <a
            href="/contactos"
            className="inline-block bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
          >
            Contactar Agora
          </a>
        </div>
      </section>
    </div>
  )
}

