import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-dark text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">CVAutoStyle</h3>
            <p className="text-gray-300">
              A sua oficina automóvel de confiança na Praia. Serviços profissionais com qualidade e transparência.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-secondary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre-nos" className="text-gray-300 hover:text-secondary transition">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-300 hover:text-secondary transition">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contactos" className="text-gray-300 hover:text-secondary transition">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:+238999999999" className="hover:text-secondary transition">
                  +238 999 999 999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:info@cvautostyle.cv" className="hover:text-secondary transition">
                  info@cvautostyle.cv
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>Praia, Ilha de Santiago, Cabo Verde</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-secondary transition" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CVAutoStyle. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

