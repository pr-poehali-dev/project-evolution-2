import { Building2, ArrowUpRight, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const strategies = [
  { name: "Консервативный портфель", info: "Облигации и депозиты", code: "+12% год", image: "/professional-man-portrait.png" },
  { name: "Сбалансированный", info: "Акции + облигации", code: "+22% год", image: "/professional-woman-portrait.png" },
  { name: "Агрессивный рост", info: "Акции роста и ETF", code: "+34% год", initials: "АР", color: "bg-teal-600" },
  { name: "Дивидендный", info: "Дивидендные акции", code: "+18% год", initials: "ДС", color: "bg-amber-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Building2 className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Выберите стратегию</h3>
      <p className="mb-4 text-sm text-gray-400">Готовые инвестиционные портфели под любой уровень риска и ожидаемую доходность</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {strategies.map((strategy, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                {strategy.image ? (
                  <AvatarImage src={strategy.image || "/placeholder.svg"} alt={strategy.name} />
                ) : null}
                <AvatarFallback className={`${strategy.color || "bg-gray-600"} text-white text-xs`}>
                  {strategy.initials ||
                    strategy.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">{strategy.name}</p>
                <p className="text-xs text-gray-500">{strategy.info}</p>
              </div>
            </div>
            <span className="text-xs text-violet-400 font-semibold">{strategy.code}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Создать портфель
        </Button>
      </div>
    </div>
  )
}