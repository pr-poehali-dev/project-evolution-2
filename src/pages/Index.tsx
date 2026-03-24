import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { RegisterSection } from "@/components/RegisterSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <RegisterSection />
      <footer className="py-8 text-center text-sm text-gray-400">
        От умных стратегий до автоматической аналитики —{" "}
        <span className="font-medium text-white">ваш капитал под надёжным управлением.</span>
      </footer>
    </main>
  )
}