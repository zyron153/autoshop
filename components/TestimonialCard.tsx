import { FaStar, FaCheckCircle } from 'react-icons/fa'

interface TestimonialCardProps {
  name: string
  text: string
  rating: number
  verified?: boolean
}

export default function TestimonialCard({ name, text, rating, verified = false }: TestimonialCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:border-secondary/50 transition">
      <div className="flex gap-1 mb-4 text-secondary">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className="text-gray-300 mb-4 italic leading-relaxed">&quot;{text}&quot;</p>
      <div className="flex items-center justify-between">
        <p className="font-semibold text-white">— {name}</p>
        {verified && (
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <FaCheckCircle className="text-secondary" />
            Cliente Verificado
          </span>
        )}
      </div>
    </div>
  )
}

