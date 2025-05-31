import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { FeaturesSection } from "@/components/features-section"
import { SecondaryCtaSection } from "@/components/secondary-cta-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cloud-white">
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <SecondaryCtaSection />
      <Footer />
    </div>
  )
}
