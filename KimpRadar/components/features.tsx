"use client"

const features = [
  {
    tag: "Core Differentiator",
    title: "도착 후에도 수익일 가능성이 있는 거래만 찾습니다",
    desc: "표면 김프율이 아니라, 환율·수수료·출금비·슬리피지·온체인 전송 지연·호가 유동성·가격 변동성을 모두 반영한 실제 실행 가능 순익을 계산합니다. 이 숫자가 조건을 통과할 때만 거래합니다.",
    featured: true,
  },
  {
    tag: "Risk Control",
    title: "사용자 리스크 정책 설정",
    desc: "최소 순익률, 최대 전송 시간, 슬리피지 허용 범위, 1회 최대 거래 금액을 직접 설정합니다. 서비스가 아니라 사용자가 기준을 정합니다.",
    featured: false,
  },
  {
    tag: "Auto Stop",
    title: "위험 상황 자동 중단",
    desc: "국내 가격 급락, 입출금 지연, 호가 유동성 급감, 손실 전환 가능성 발생 시 거래를 자동으로 멈추고 알림을 보냅니다.",
    featured: false,
  },
  {
    tag: "Backtest",
    title: "모의거래 & 백테스팅",
    desc: "실제 자금 투입 전에 전략을 검증합니다. 과거 데이터 기반으로 내 설정이 실제로 유효했는지 확인하고, 손실 원인을 분석합니다.",
    featured: false,
  },
]

export function Features() {
  return (
    <section className="px-6 md:px-12 py-24 max-w-[1200px] mx-auto">
      <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase mb-5">
        핵심 기능
      </p>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-4 text-balance">
        기존 서비스와 무엇이
        <br />
        다른가요?
      </h2>
      <p className="text-base leading-relaxed text-ink2 max-w-[560px] font-light mb-14">
        단순 김프 확인도 아니고, 묻지마 자동매매도 아닙니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`rounded-sm p-8 ${
              feature.featured
                ? "bg-foreground text-card col-span-1 md:col-span-2"
                : "bg-card border border-border"
            }`}
          >
            <span
              className={`inline-block font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-sm mb-4 ${
                feature.featured
                  ? "border border-white/20 text-white/50"
                  : "border border-border text-muted-foreground"
              }`}
            >
              {feature.tag}
            </span>
            <div
              className={`text-lg font-semibold mb-2.5 tracking-tight ${
                feature.featured ? "text-white" : ""
              }`}
            >
              {feature.title}
            </div>
            <div
              className={`text-sm leading-relaxed font-light ${
                feature.featured ? "text-white/65" : "text-ink2"
              }`}
            >
              {feature.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
