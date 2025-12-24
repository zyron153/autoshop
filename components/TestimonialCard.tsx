import { FaStar } from 'react-icons/fa'

interface TestimonialCardProps {
  name: string
  text: string
  rating: number
}

export default function TestimonialCard({ name, text, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex gap-1 mb-4 text-secondary">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className="text-gray-600 mb-4 italic">&quot;{text}&quot;</p>
      <p className="font-semibold text-gray-dark">— {name}</p>
    </div>
  )
}

