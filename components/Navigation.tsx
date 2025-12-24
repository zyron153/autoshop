'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary-dark text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            CVAutoStyle
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-secondary transition">
              Home
            </Link>
            <Link href="/sobre-nos" className="hover:text-secondary transition">
              Sobre Nós
            </Link>
            <Link href="/servicos" className="hover:text-secondary transition">
              Serviços
            </Link>
            <Link href="/testemunhos" className="hover:text-secondary transition">
              Testemunhos
            </Link>
            <Link
              href="/contactos"
              className="bg-secondary hover:bg-secondary-light px-4 py-2 rounded-lg transition flex items-center gap-2"
            >
              <FaPhone />
              Contactos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="hover:text-secondary transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/sobre-nos"
                className="hover:text-secondary transition"
                onClick={() => setIsOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                href="/servicos"
                className="hover:text-secondary transition"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="/testemunhos"
                className="hover:text-secondary transition"
                onClick={() => setIsOpen(false)}
              >
                Testemunhos
              </Link>
              <Link
                href="/contactos"
                className="bg-secondary hover:bg-secondary-light px-4 py-2 rounded-lg transition flex items-center gap-2 w-fit"
                onClick={() => setIsOpen(false)}
              >
                <FaPhone />
                Contactos
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

