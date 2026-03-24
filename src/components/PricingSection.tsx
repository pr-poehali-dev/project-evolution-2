import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PricingSectionProps {
  onSelectPlan: (plan: string) => void
}

const plans = [
  {
    name: "Старт",
    description: "Для тех, кто только начинает",
    price: "от 10 000 ₽",
    yield: "до 12% год.",
    features: [
      "Консервативный портфель",
      "Ежемесячные отчёты",
      "Вывод средств за 3 дня",
      "Поддержка по email",
    ],
    highlighted: false,
    cta: "Начать",
  },
  {
    name: "Профи",
    description: "Оптимальный баланс риска и дохода",
    price: "от 100 000 ₽",
    yield: "до 22% год.",
    features: [
      "Сбалансированный портфель",
      "Еженедельная аналитика",
      "Вывод средств за 24 часа",
      "Персональный менеджер",
      "Автоматическая ребалансировка",
    ],
    highlighted: true,
    cta: "Выбрать Профи",
  },
  {
    name: "Премиум",
    description: "Максимальная доходность для серьёзных инвесторов",
    price: "от 1 000 000 ₽",
    yield: "до 34% год.",
    features: [
      "Агрессивный портфель роста",
      "Ежедневная аналитика",
      "Мгновенный вывод средств",
      "VIP-менеджер 24/7",
      "Индивидуальная стратегия",
      "Приоритетные IPO и сделки",
    ],
    highlighted: false,
    cta: "Связаться с нами",
  },
]

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section className="px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block mb-4 rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-400">
            ТАРИФЫ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Выберите свой уровень
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Прозрачные условия без скрытых комиссий. Начните с любой суммы и увеличивайте капитал.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col border transition-all ${
                plan.highlighted
                  ? "bg-violet-600/10 border-violet-500/50 shadow-[0_0_40px_rgba(139,92,246,0.15)]"
                  : "bg-[#141414] border-[#262626]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-violet-600 px-4 py-1 text-xs font-semibold text-white">
                    Популярный
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="text-2xl font-bold text-white">{plan.price}</div>
                <div className="text-violet-400 font-semibold text-sm mt-1">{plan.yield}</div>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.highlighted ? "bg-violet-500/20" : "bg-[#1f1f1f]"}`}>
                      <Check className="h-3 w-3 text-violet-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full rounded-xl ${
                  plan.highlighted
                    ? "bg-violet-600 hover:bg-violet-700 text-white"
                    : "bg-[#1f1f1f] hover:bg-[#2a2a2a] text-gray-300 hover:text-white"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}