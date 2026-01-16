import SectionFade from '../ui/SectionFade'

export default function EligibilitySection() {
  return (
    <SectionFade>
import { Check } from 'lucide-react'

export default function EligibilitySection() {
  const items = [
    'Household income generally under $67,000',
    'Valid SSN or ITIN',
    'Persons with disabilities',
    'Limited English-speaking taxpayers',
    'Seniors and retirees',
    
  ]

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Who Is Eligible?
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
            >
              <Check className="h-5 w-5 text-emerald-600 mt-1" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

  </SectionFade>
  )
}
