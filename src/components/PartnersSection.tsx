import { Sparkles, Sun, Diamond, Bird, Activity, Zap, Circle } from "lucide-react"

const partners = [
  { name: "Альфа-Капитал", icon: Diamond },
  { name: "ВТБ Инвест", icon: Activity },
  { name: "Тинькофф", icon: Zap },
  { name: "Сбер Инвестиции", icon: Sun },
  { name: "Открытие", icon: Sparkles },
  { name: "БКС Брокер", icon: Bird },
  { name: "Финам", icon: Circle },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {partners.map((partner) => (
        <div key={partner.name} className="flex items-center gap-2 text-gray-500">
          <partner.icon className="h-4 w-4" />
          <span className="text-sm font-medium">{partner.name}™</span>
        </div>
      ))}
    </section>
  )
}