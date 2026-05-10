const steps = [
  {
    num: 1,
    title: "답변하기",
    description: "면접 질문에 자신의 경험을 자유롭게 말합니다. 잘 못해도 괜찮습니다.",
  },
  {
    num: 2,
    title: "구조 진단",
    description: "AI가 결론·상황·역할·행동·결과를 기준으로 답변을 분석합니다.",
  },
  {
    num: 3,
    title: "다시 말하기",
    description: "부족한 부분을 구체적으로 알려주고, 다시 말하기 미션을 제공합니다.",
  },
]

export function StepsSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--blue)]">
          작동 방식
        </div>
        <h2 className="mb-4 text-[clamp(24px,3.5vw,40px)] font-extrabold leading-tight tracking-tight text-foreground">
          답변을 대신 써주지 않습니다.<br />잘 말하는 방식을 훈련합니다.
        </h2>
        
        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          {/* Connector line */}
          <div className="absolute left-[calc(16.7%+12px)] right-[calc(16.7%+12px)] top-9 hidden h-0.5 bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] md:block" />
          
          {steps.map((step) => (
            <div 
              key={step.num}
              className="relative rounded-[20px] border border-border bg-white p-7 text-center transition-all hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(67,97,238,0.16)]"
            >
              <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--blue)] to-[var(--indigo)] text-lg font-extrabold text-white shadow-[0_4px_16px_rgba(67,97,238,0.35)]">
                {step.num}
              </div>
              <div className="mb-2 text-base font-bold text-foreground">{step.title}</div>
              <div className="text-[13px] leading-relaxed text-[var(--ink-mid)]">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
