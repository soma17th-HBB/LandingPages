const targets = [
  { emoji: "👨‍💻", text: "신입 개발자\n취업 준비생" },
  { emoji: "🎓", text: "부트캠프 수료 후\n면접 준비생" },
  { emoji: "🗣️", text: "경험을 말로\n정리하기 어려운 분" },
  { emoji: "🤝", text: "기술 경험을 비전공자에게\n쉽게 설명해야 하는 분" },
  { emoji: "⏰", text: "면접에서 말이\n길어진다는 피드백을 받은 분" },
]

export function TargetSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--blue)]">
          대상 사용자
        </div>
        <h2 className="mb-4 text-[clamp(24px,3.5vw,40px)] font-extrabold leading-tight tracking-tight text-foreground">
          이런 분에게 필요합니다.
        </h2>
        
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {targets.map((target, index) => (
            <div 
              key={index}
              className="rounded-2xl border border-border bg-white p-6 text-center transition-all hover:-translate-y-0.5 hover:border-[var(--blue)]/30 hover:shadow-[0_8px_40px_rgba(67,97,238,0.16)]"
            >
              <div className="mb-3 text-[32px]">{target.emoji}</div>
              <div className="whitespace-pre-line text-[13px] font-semibold leading-relaxed text-foreground">
                {target.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
