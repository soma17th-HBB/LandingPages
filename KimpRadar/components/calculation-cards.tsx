"use client"

interface CalcRow {
  label: string
  value: string
  type: "pos" | "neg" | "neutral"
}

interface CalcCard {
  coin: string
  route: string
  verdict: "pass" | "caution" | "fail"
  verdictText: string
  rows: CalcRow[]
  totalLabel: string
  totalValue: string
  totalType: "pos" | "neg" | "amber"
  riskLevel: "low" | "med" | "high"
  riskLabel: string
  riskPercent: number
}

const calcCards: CalcCard[] = [
  {
    coin: "XRP",
    route: "Binance → Upbit · XRP 네트워크",
    verdict: "pass",
    verdictText: "진입 가능",
    rows: [
      { label: "표면 김프율", value: "+2.43%", type: "pos" },
      { label: "수수료 (매수+매도)", value: "−0.28%", type: "neg" },
      { label: "출금·네트워크 비용", value: "−0.19%", type: "neg" },
      { label: "슬리피지 추정", value: "−0.31%", type: "neg" },
      { label: "전송 리스크 (예상 3분)", value: "−0.42%", type: "neg" },
    ],
    totalLabel: "예상 순익",
    totalValue: "+1.23%",
    totalType: "pos",
    riskLevel: "low",
    riskLabel: "낮음",
    riskPercent: 28,
  },
  {
    coin: "SOL",
    route: "Binance → Bithumb · Solana 네트워크",
    verdict: "caution",
    verdictText: "소액만 가능",
    rows: [
      { label: "표면 김프율", value: "+1.87%", type: "pos" },
      { label: "수수료 (매수+매도)", value: "−0.26%", type: "neg" },
      { label: "출금·네트워크 비용", value: "−0.09%", type: "neg" },
      { label: "슬리피지 추정", value: "−0.58%", type: "neg" },
      { label: "전송 리스크 (예상 8분)", value: "−0.71%", type: "neg" },
    ],
    totalLabel: "예상 순익",
    totalValue: "+0.23%",
    totalType: "amber",
    riskLevel: "med",
    riskLabel: "보통",
    riskPercent: 62,
  },
  {
    coin: "ETH",
    route: "OKX → Upbit · ERC-20",
    verdict: "fail",
    verdictText: "진입 비추천",
    rows: [
      { label: "표면 김프율", value: "+2.11%", type: "pos" },
      { label: "수수료 (매수+매도)", value: "−0.30%", type: "neg" },
      { label: "출금·네트워크 비용", value: "−0.47%", type: "neg" },
      { label: "슬리피지 추정", value: "−0.44%", type: "neg" },
      { label: "전송 리스크 (예상 18분)", value: "−1.24%", type: "neg" },
    ],
    totalLabel: "예상 순익",
    totalValue: "−0.34%",
    totalType: "neg",
    riskLevel: "high",
    riskLabel: "높음",
    riskPercent: 88,
  },
]

const verdictStyles = {
  pass: "bg-green-light text-green",
  caution: "bg-[#fff8e6] text-amber",
  fail: "bg-red-light text-red",
}

const valueStyles = {
  pos: "text-green",
  neg: "text-red",
  neutral: "text-ink3",
  amber: "text-amber",
}

const riskStyles = {
  low: "bg-green",
  med: "bg-amber",
  high: "bg-red",
}

export function CalculationCards() {
  return (
    <section className="px-6 md:px-12 py-24 max-w-[1200px] mx-auto">
      <div className="flex items-center gap-3 mb-5">
        <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
          실제 순익 계산
        </p>
        <span className="font-mono text-[9px] tracking-wider text-ink3 bg-muted px-2 py-0.5 rounded-sm">
          예시 데이터
        </span>
      </div>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
        김프율 뒤에 숨은 진짜 숫자
      </h2>
      <p className="text-base leading-relaxed text-ink2 max-w-[560px] font-light mb-14">
        표면 김프율은 단순 가격 차이입니다. 실제로 수익이 남으려면 아래 모든 요소를 반영해야 합니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {calcCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-card border border-border rounded-sm p-7 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col gap-0.5">
                <span className="font-mono font-medium text-base tracking-wider">{card.coin}</span>
                <span className="text-[11px] text-muted-foreground tracking-wider">{card.route}</span>
              </div>
              <span
                className={`text-[11px] font-medium px-2.5 py-1 rounded-sm tracking-wider uppercase ${verdictStyles[card.verdict]}`}
              >
                {card.verdictText}
              </span>
            </div>

            {/* Rows */}
            <div className="flex flex-col border-t border-border">
              {card.rows.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className="flex justify-between items-center py-2.5 border-b border-border last:border-b-0 text-[13px]"
                >
                  <span className="text-ink2">{row.label}</span>
                  <span className={`font-mono font-medium ${valueStyles[row.type]}`}>{row.value}</span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="flex justify-between items-center pt-3.5 mt-1">
              <span className="text-[13px] font-semibold tracking-wide">{card.totalLabel}</span>
              <span className={`font-mono text-lg font-medium ${valueStyles[card.totalType]}`}>
                {card.totalValue}
              </span>
            </div>

            {/* Risk Bar */}
            <div className="mt-4 pt-3.5 border-t border-border">
              <div className="flex justify-between text-[11px] text-muted-foreground mb-1.5 tracking-wider">
                <span>리스크</span>
                <span>{card.riskLabel}</span>
              </div>
              <div className="h-1 bg-border rounded-sm overflow-hidden">
                <div
                  className={`h-full rounded-sm transition-all duration-1000 ${riskStyles[card.riskLevel]}`}
                  style={{ width: `${card.riskPercent}%` }}
                />
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-4 text-[10px] text-ink3 leading-relaxed">
              * 시연용 예시 수치입니다. 실제 시세와 다를 수 있습니다.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
