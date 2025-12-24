'use client'

import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa'

export default function Contactos() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    servico: '',
    mensagem: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui normalmente enviaria os dados para um backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        servico: '',
        mensagem: '',
      })
    }, 3000)
  }

  const services = [
    'Mecânica Geral',
    'Diagnóstico Automóvel',
    'Manutenção Preventiva',
    'Travões & Suspensão',
    'Pneus & Rodas',
    'Outro',
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactos</h1>
          <p className="text-xl text-gray-100">
            Entre em contacto connosco ou agende o seu serviço
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-dark">Envie-nos uma Mensagem</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
                  <p className="text-green-800 font-semibold text-lg">
                    Mensagem enviada com sucesso!
                  </p>
                  <p className="text-green-600 mt-2">
                    Entraremos em contacto em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="O seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-gray-700 font-semibold mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="+238 999 999 999"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="o.seu.email@exemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="servico" className="block text-gray-700 font-semibold mb-2">
                      Serviço de Interesse
                    </label>
                    <select
                      id="servico"
                      name="servico"
                      value={formData.servico}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-gray-700 font-semibold mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={5}
                      value={formData.mensagem}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Descreva o que precisa ou faça a sua pergunta..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary-light text-white px-6 py-4 rounded-lg font-semibold text-lg transition"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>

            {/* Informações de Contacto */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-dark">Informações de Contacto</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-dark text-white p-3 rounded-lg">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-dark mb-1">Telefone</h3>
                    <a
                      href="tel:+238999999999"
                      className="text-secondary hover:text-secondary-light transition text-lg"
                    >
                      +238 999 999 999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-dark text-white p-3 rounded-lg">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-dark mb-1">Email</h3>
                    <a
                      href="mailto:info@cvautostyle.cv"
                      className="text-secondary hover:text-secondary-light transition text-lg"
                    >
                      info@cvautostyle.cv
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-dark text-white p-3 rounded-lg">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-dark mb-1">Endereço</h3>
                    <p className="text-gray-600">
                      Praia, Ilha de Santiago<br />
                      Cabo Verde
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-dark text-white p-3 rounded-lg">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-dark mb-1">Horários</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda - Sexta: 08:00 - 18:00</p>
                      <p>Sábado: 08:00 - 13:00</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Click-to-Call Button */}
              <a
                href="tel:+238999999999"
                className="block w-full bg-secondary hover:bg-secondary-light text-white px-6 py-4 rounded-lg font-semibold text-lg text-center transition mb-6"
              >
                <FaPhone className="inline mr-2" />
                Ligar Agora
              </a>

              {/* Google Maps */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-dark mb-4">Localização</h3>
                <div className="bg-gray-200 aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.1234567890123!2d-23.5133!3d14.9218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDU1JzE4LjUiTiAyM8KwMzAnNDcuOSJX!5e0!3m2!1spt-PT!2scv!4v1234567890123!5m2!1spt-PT!2scv"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da CVAutoStyle"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

