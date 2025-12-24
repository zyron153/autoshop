import Link from 'next/link'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaClock,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-bold mb-3">CVAutoStyle</h3>
            <p className="text-gray-400 mb-2">Seus Especialistas de Confiança em Pneus</p>
            <p className="text-gray-400 text-sm mb-4">
              Vendas de pneus premium e serviços de instalação profissional. Servindo a comunidade
              com produtos de qualidade e serviço excecional desde 2010.
            </p>
            <div className="flex gap-2">
              <span className="bg-secondary/20 text-secondary px-3 py-1 rounded text-xs font-semibold">
                Certificado
              </span>
              <span className="bg-secondary/20 text-secondary px-3 py-1 rounded text-xs font-semibold">
                Segurado
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos#pneus" className="text-gray-400 hover:text-secondary transition">
                  Pneus Todas as Estações
                </Link>
              </li>
              <li>
                <Link href="/servicos#pneus" className="text-gray-400 hover:text-secondary transition">
                  Pneus de Desempenho
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-secondary transition">
                  Instalação de Pneus
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-secondary transition">
                  Alinhamento de Rodas
                </Link>
              </li>
              <li>
                <Link href="/sobre-nos" className="text-gray-400 hover:text-secondary transition">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacte-nos</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <FaPhone className="text-secondary" />
                <a href="tel:+238999999999" className="hover:text-secondary transition">
                  +238 999 999 999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-secondary" />
                <a href="mailto:info@cvautostyle.cv" className="hover:text-secondary transition">
                  info@cvautostyle.cv
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-secondary mt-1" />
                <span>Achada Santo António Praia, Cabo Verde</span>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <FaClock className="text-secondary" />
                <span>Segunda - Sexta: 8h - 18h</span>
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="text-secondary" />
                <span>Sábado: 9h - 17h</span>
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="text-secondary" />
                <span>Domingo: Fechado</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Subscreva a Nossa Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Receba ofertas exclusivas, dicas de cuidados com pneus e promoções especiais
              diretamente na sua caixa de entrada
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Digite o seu endereço de email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-secondary"
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary-light px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap"
              >
                Subscrever
              </button>
            </form>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} CVAutoStyle. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-secondary transition">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-secondary transition">
                Termos de Serviço
              </Link>
              <Link href="#" className="hover:text-secondary transition">
                Informações de Garantia
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
