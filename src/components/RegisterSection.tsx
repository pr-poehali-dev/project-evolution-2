import { useState } from "react"
import { ArrowUpRight, TrendingUp, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  { icon: TrendingUp, text: "До 34% годовых" },
  { icon: Shield, text: "Капитал застрахован" },
  { icon: Zap, text: "Вывод за 24 часа" },
]

export function RegisterSection() {
  const [form, setForm] = useState({ name: "", phone: "", amount: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block mb-4 rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-400">
            НАЧНИТЕ СЕГОДНЯ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Откройте счёт и начните зарабатывать
          </h2>
          <p className="text-gray-400 mb-8">
            Регистрация занимает 2 минуты. Наш менеджер свяжется с вами и подберёт оптимальную стратегию.
          </p>
          <div className="flex flex-col gap-4">
            {benefits.map((b) => (
              <div key={b.text} className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20">
                  <b.icon className="h-4 w-4 text-violet-400" />
                </div>
                <span className="text-sm text-gray-300">{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[#141414] border border-[#262626] p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/20">
                <TrendingUp className="h-8 w-8 text-violet-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Заявка отправлена!</h3>
              <p className="text-gray-400 text-sm">Менеджер свяжется с вами в течение 15 минут</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="mb-2 block text-xs text-gray-400">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl bg-[#0f0f0f] border border-[#262626] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs text-gray-400">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl bg-[#0f0f0f] border border-[#262626] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs text-gray-400">Сумма для инвестирования</label>
                <select
                  required
                  value={form.amount}
                  onChange={(e) => setForm({ ...form, amount: e.target.value })}
                  className="w-full rounded-xl bg-[#0f0f0f] border border-[#262626] px-4 py-3 text-sm text-white outline-none focus:border-violet-500/50 transition-colors appearance-none"
                >
                  <option value="" disabled className="text-gray-600">Выберите сумму</option>
                  <option value="50k">До 50 000 ₽</option>
                  <option value="100k">50 000 — 100 000 ₽</option>
                  <option value="500k">100 000 — 500 000 ₽</option>
                  <option value="1m">500 000 — 1 000 000 ₽</option>
                  <option value="1m+">Более 1 000 000 ₽</option>
                </select>
              </div>
              <Button
                type="submit"
                className="w-full rounded-xl bg-violet-600 hover:bg-violet-700 text-white py-3 mt-2"
              >
                Открыть счёт бесплатно <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-center text-xs text-gray-600">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
