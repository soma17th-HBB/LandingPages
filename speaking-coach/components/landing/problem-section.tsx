const problems = [
  {
    icon: "📢",
    title: "결론보다 배경부터 길게 말함",
    description: "말은 많은데 핵심이 언제 나오나 싶은 답변. 면접관이 집중을 잃습니다.",
  },
  {
    icon: "🌫️",
    title: "본인 역할이 흐려짐",
    description: "\"팀이 함께 해결했습니다\"는 내 역할이 보이지 않습니다. 내가 한 일이 명확해야 합니다.",
  },
  {
    icon: "🤷",
    title: "성과가 \"잘 마무리했습니다\"로 끝남",
    description: "숫자와 구체적인 결과 없이 끝나면 기억에 남지 않는 답변이 됩니다.",
  },
  {
    icon: "💻",
    title: "비개발 면접관이 이해하지 못함",
    description: "개발 용어 가득한 답변은 인사 담당자에게 전혀 전달되지 않습니다.",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--blue)]">
          문제 인식
        </div>
        <h2 className="mb-4 text-[clamp(24px,3.5vw,40px)] font-extrabold leading-tight tracking-tight text-foreground">
          면접에서 어려운 건<br />질문이 아니라, 답변을 정리해서 말하는 일입니다.
        </h2>
        
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(67,97,238,0.16)]"
            >
              <div className="mb-3 text-[28px]">{problem.icon}</div>
              <div className="mb-2 text-[15px] font-bold text-foreground">{problem.title}</div>
              <div className="text-[13px] leading-relaxed text-[var(--ink-mid)]">{problem.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
