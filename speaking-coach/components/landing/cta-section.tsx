"use client"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#1a1a4e] to-[#2d1b6e] px-6 py-24 text-center text-white">
      <div className="pointer-events-none absolute left-1/2 top-[-100px] h-[600px] w-[600px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(67,97,238,0.2)_0%,transparent_70%)]" />
      
      <div className="relative z-10 mx-auto max-w-[1120px]">
        <h2 className="mb-4 text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight">
          면접 답변,<br />이제 외우지 말고{" "}
          <span className="bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent">
            훈련하세요.
          </span>
        </h2>
        <p className="mb-10 text-base text-white/70">
          첫 답변을 입력하면 AI가 구조를 진단하고, 다시 말하기 미션을 제공합니다.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="rounded-xl bg-gradient-to-br from-[var(--blue)] to-[var(--blue-light)] px-8 py-4 text-base font-bold text-white shadow-[0_4px_20px_rgba(67,97,238,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(67,97,238,0.5)]">
            무료로 답변 진단하기
          </Button>
          <Button 
            variant="outline"
            className="rounded-xl border-[1.5px] border-white/40 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
          >
            대기자 등록하기
          </Button>
        </div>
      </div>
    </section>
  )
}
