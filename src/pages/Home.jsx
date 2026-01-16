import HeroSection from '../components/home/HeroSection'
import BenefitsSection from '../components/home/BenefitsSection'
import EligibilitySection from '../components/home/EligibilitySection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import SignUpSection from '../components/home/SignUpSection'

export default function Home() {
  return (
    <div className="space-y-24">
  <HeroSection />
  <BenefitsSection />
  <EligibilitySection />
  <TestimonialsSection />
  <SignUpSection />
</div>

  )
}
