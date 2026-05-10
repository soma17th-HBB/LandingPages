"use client"

import { Button } from "@/components/ui/button"
import { MockCard } from "./mock-card"

export function Hero() {
  return (
    <section className="px-6 py-20 md:py-16">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--blue)]/20 bg-gradient-to-br from-[var(--blue)]/10 to-[var(--purple)]/8 px-3.5 py-1.5 text-[13px] font-semibold text-[var(--blue)]">
              <span className="inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[var(--accent)]" />
              AI 말하기 코치 &bull; 베타 모집 중
            </div>
            <h1 className="mb-5 text-[clamp(28px,4vw,48px)] font-extrabold leading-[1.2] tracking-tight text-foreground">
              면접 답변,<br />
              외우지 말고<br />
              <span className="bg-gradient-to-br from-[var(--blue)] to-[var(--purple)] bg-clip-text text-transparent">
                구조화해서 말하세요.
              </span>
            </h1>
            <p className="mb-9 text-base leading-relaxed text-[var(--ink-mid)]">
              AI가 답변을 대신 써주는 것이 아니라,<br />
              당신이 직접 결론부터 말하고 역할과 성과를 전달하도록<br />
              반복 훈련시킵니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-xl bg-gradient-to-br from-[var(--blue)] to-[var(--indigo)] px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_20px_rgba(67,97,238,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(67,97,238,0.4)]">
                무료로 시작하기
              </Button>
              <Button 
                variant="outline"
                className="rounded-xl border-[1.5px] border-[var(--blue)] bg-white px-6 py-3.5 text-[15px] font-semibold text-[var(--blue)] transition-all hover:-translate-y-0.5 hover:bg-[var(--blue)]/5"
              >
                내 답변 진단해보기
              </Button>
            </div>
          </div>

          <MockCard />
        </div>
      </div>
    </section>
  )
}
