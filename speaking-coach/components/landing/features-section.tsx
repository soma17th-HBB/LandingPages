const features = [
  {
    icon: "🔬",
    title: "답변 구조 진단",
    description: "결론·상황·역할·행동·결과 기준으로 내 답변의 강점과 약점을 분석합니다.",
  },
  {
    icon: "🎯",
    title: "다시 말하기 미션",
    description: "약점에 맞춰 구체적인 미션을 제공하고, 반복을 통해 습관을 만듭니다.",
  },
  {
    icon: "👥",
    title: "면접관 유형별 훈련",
    description: "개발 면접관, 인사 담당자, 비전공자에게 같은 경험을 다르게 말하는 훈련.",
  },
  {
    icon: "⏱️",
    title: "30초·1분 답변 훈련",
    description: "짧게 핵심만 말하는 훈련부터 2분 상세 답변까지 상황별로 연습합니다.",
  },
  {
    icon: "📊",
    title: "개인별 약점 리포트",
    description: "반복 훈련 데이터를 바탕으로 내가 자주 놓치는 구조 요소를 알려줍니다.",
  },
  {
    icon: "📈",
    title: "개선 점수 추적",
    description: "훈련할수록 구조화 점수와 개선폭이 시각적으로 쌓여 성장을 실감합니다.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--blue)]">
          핵심 기능
        </div>
        <h2 className="mb-4 text-[clamp(24px,3.5vw,40px)] font-extrabold leading-tight tracking-tight text-foreground">
          말하기 습관을 바꾸는<br />6가지 훈련 도구
        </h2>
        
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--blue)]/30 hover:shadow-[0_8px_40px_rgba(67,97,238,0.16)]"
            >
              <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--blue)]/12 to-[var(--purple)]/10 text-xl">
                {feature.icon}
              </div>
              <div className="mb-1.5 text-[15px] font-bold text-foreground">{feature.title}</div>
              <div className="text-[13px] leading-relaxed text-[var(--ink-mid)]">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
