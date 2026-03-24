import { useState } from "react"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { RegisterSection } from "@/components/RegisterSection"
import { PricingSection } from "@/components/PricingSection"

export default function Index() {
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>()

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <PricingSection onSelectPlan={setSelectedPlan} />
      <RegisterSection selectedPlan={selectedPlan} />
      <footer className="py-8 text-center text-sm text-gray-400">
        От умных стратегий до автоматической аналитики —{" "}
        <span className="font-medium text-white">ваш капитал под надёжным управлением.</span>
      </footer>
    </main>
  )
}
