"use client"

const steps = [
  {
    num: "01",
    icon: "📡",
    title: "실시간 김프 감시",
    desc: "국내외 거래소 호가 데이터를 실시간으로 수집해 실제 체결 가능한 가격을 계산합니다.",
  },
  {
    num: "02",
    icon: "🧮",
    title: "순익 정밀 계산",
    desc: "수수료·출금비·슬리피지·환율·전송 리스크를 반영해 실제 예상 순익을 계산합니다.",
  },
  {
    num: "03",
    icon: "✅",
    title: "조건 통과 검증",
    desc: "입출금 상태, 호가 유동성, 변동성, 사용자 리스크 정책을 확인합니다. 조건 미충족 시 실행하지 않습니다.",
  },
  {
    num: "04",
    icon: "🔄",
    title: "전송 중 리스크 감시",
    desc: "해외 거래소 매수부터 국내 거래소 입금까지, 전 과정에서 손실 전환 가능성을 실시간 추적합니다.",
  },
  {
    num: "05",
    icon: "🛑",
    title: "위험 시 자동 중단",
    desc: "국내 가격 급락, 입출금 지연, 호가 유동성 급감 시 거래를 자동으로 중단하거나 사용자에게 알립니다.",
  },
  {
    num: "06",
    icon: "📊",
    title: "거래 후 원인 리포트",
    desc: "모든 거래에 대해 진입 근거, 실제 결과, 예상과의 차이, 개선 제안을 리포트로 제공합니다.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="px-6 md:px-12 py-24 max-w-[1200px] mx-auto">
      <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase mb-5">
        작동 방식
      </p>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-4 text-balance">
        조건을 통과한 거래만
        <br />
        실행합니다
      </h2>
      <p className="text-base leading-relaxed text-ink2 max-w-[560px] font-light mb-14">
        단순히 김프율이 높다는 이유로 진입하지 않습니다. 도착 후에도 수익이 남을 가능성이 높은 거래만 실행합니다.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-px bg-border border border-border rounded-sm overflow-hidden">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-card p-7">
            <div className="font-mono text-[11px] text-muted-foreground tracking-widest mb-5">
              {step.num}
            </div>
            <span className="text-2xl mb-3.5 block">{step.icon}</span>
            <div className="text-[15px] font-semibold mb-2 tracking-tight">{step.title}</div>
            <p className="text-[13px] leading-relaxed text-ink2 font-light">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
