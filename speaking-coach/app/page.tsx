import { Nav } from "@/components/landing/nav"
import { Hero } from "@/components/landing/hero"
import { ProblemSection } from "@/components/landing/problem-section"
import { StepsSection } from "@/components/landing/steps-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { BeforeAfterSection } from "@/components/landing/before-after-section"
import { ComparisonSection } from "@/components/landing/comparison-section"
import { TargetSection } from "@/components/landing/target-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProblemSection />
      <StepsSection />
      <FeaturesSection />
      <BeforeAfterSection />
      <ComparisonSection />
      <TargetSection />
      <CTASection />
      <Footer />
    </main>
  )
}
