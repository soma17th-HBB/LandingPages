export function MockCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-border bg-white p-6 shadow-[0_8px_48px_rgba(67,97,238,0.14),0_2px_8px_rgba(0,0,0,0.04)]">
      <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[var(--blue)] via-[var(--purple)] to-[var(--accent)]" />
      
      <div className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--ink-light)]">
        면접 질문
      </div>
      <div className="mb-3.5 rounded-r-lg border-l-[3px] border-[var(--blue)] bg-[var(--blue)]/5 px-3.5 py-3 text-sm font-medium text-foreground">
        {"\"팀 프로젝트에서 문제를 해결한 경험을 말씀해주세요.\""}
      </div>
      
      <div className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--ink-light)]">
        내 답변
      </div>
      <div className="mb-3.5 rounded-lg bg-background px-3.5 py-3 text-[13px] leading-relaxed text-[var(--ink-mid)]">
        {"\"API 명세가 안 맞아서 프론트랑 백엔드가 충돌했는데 회의하고 문서화해서 해결했습니다.\""}
      </div>
      
      <div className="mb-2 text-xs font-bold text-[var(--accent)]">
        AI 피드백
      </div>
      <div className="space-y-1.5">
        <FeedbackItem text="결론이 첫 문장에 부족해요" />
        <FeedbackItem text="본인의 역할이 더 드러나야 해요" />
        <FeedbackItem text="결과가 구체적이면 더 좋아요" />
      </div>
      
      <div className="mt-3.5 rounded-xl border-[1.5px] border-[var(--green)]/30 bg-gradient-to-br from-[var(--green)]/8 to-[var(--blue)]/5 p-3.5">
        <div className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--green)]">
          다시 말하기 미션
        </div>
        <div className="text-[13px] font-medium leading-relaxed text-foreground">
          이번에는 첫 문장에 결론을 먼저 말하고, 마지막에 결과를 포함해 다시 답변해보세요.
        </div>
      </div>
      
      <div className="mt-4 flex gap-3">
        <ScoreChip value="64" label="구조화 점수" />
        <ScoreChip value="+18" label="이번 개선폭" />
        <ScoreChip value="3회" label="훈련 횟수" />
      </div>
    </div>
  )
}

function FeedbackItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-[13px] text-[var(--ink-mid)]">
      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
      {text}
    </div>
  )
}

function ScoreChip({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1 rounded-lg bg-background p-2 text-center">
      <div className="bg-gradient-to-br from-[var(--blue)] to-[var(--purple)] bg-clip-text text-xl font-extrabold text-transparent">
        {value}
      </div>
      <div className="mt-0.5 text-[10px] font-medium text-[var(--ink-light)]">
        {label}
      </div>
    </div>
  )
}
