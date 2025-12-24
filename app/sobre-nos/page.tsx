import { FaHeart, FaEye, FaGem } from 'react-icons/fa'

export const metadata = {
  title: 'Sobre Nós - CVAutoStyle',
  description: 'Conheça a história da CVAutoStyle, uma empresa familiar dedicada a servir a comunidade da Praia com serviços automóveis de qualidade.',
}

export default function SobreNos() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
          <p className="text-xl text-gray-100">
            A sua oficina automóvel de confiança na Praia
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-dark">A Nossa História</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                A CVAutoStyle nasceu da paixão pela mecânica automóvel e do desejo de servir a
                comunidade da Praia com serviços de qualidade e transparência. Fundada como uma
                empresa familiar, temos orgulho em construir relacionamentos duradouros com os
                nossos clientes.
              </p>
              <p>
                Ao longo dos anos, desenvolvemos uma reputação sólida baseada na confiança,
                profissionalismo e atenção aos detalhes. Cada veículo que entra na nossa oficina
                é tratado com o mesmo cuidado que daríamos ao nosso próprio.
              </p>
              <p>
                Estamos comprometidos em manter os veículos dos nossos clientes em perfeitas
                condições, oferecendo desde reparações complexas até manutenções preventivas
                regulares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Missão */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl text-secondary mb-4 flex justify-center">
                <FaHeart />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-dark">Missão</h3>
              <p className="text-gray-600">
                Proporcionar serviços automóveis de excelência, com transparência, qualidade e
                atendimento personalizado, garantindo a satisfação e segurança dos nossos clientes.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl text-secondary mb-4 flex justify-center">
                <FaEye />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-dark">Visão</h3>
              <p className="text-gray-600">
                Ser a oficina automóvel de referência na Praia, reconhecida pela qualidade dos
                serviços, confiança e compromisso com a comunidade local.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl text-secondary mb-4 flex justify-center">
                <FaGem />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-dark">Valores</h3>
              <p className="text-gray-600">
                Transparência, qualidade, profissionalismo, respeito pelo cliente e compromisso
                com a excelência em cada serviço prestado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empresa Local e Familiar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-dark">
              Uma Empresa Local e Familiar
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Na CVAutoStyle, acreditamos que o sucesso vem do relacionamento próximo com os
              nossos clientes. Como empresa familiar, valorizamos cada interação e tratamos
              cada cliente como parte da nossa comunidade.
            </p>
            <p className="text-lg text-gray-600">
              Estamos orgulhosos de fazer parte da comunidade da Praia e de contribuir para
              manter os veículos dos nossos vizinhos em perfeitas condições. A nossa equipa
              está sempre disponível para ajudar e responder a todas as suas questões.
            </p>
          </div>
        </div>
      </section>

      {/* Área para Fotos (Placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-dark">
            A Nossa Oficina
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center text-gray-500"
              >
                Foto {i}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

