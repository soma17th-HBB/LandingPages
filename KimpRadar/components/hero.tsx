"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToHow = () => {
    document.getElementById("how")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-20 pt-32 max-w-[1200px] mx-auto">
      <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase mb-7 opacity-0 animate-fade-up">
        김치프리미엄 차익거래 플랫폼
      </p>
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-8 opacity-0 animate-fade-up-delay-1">
        김프 +3%,
        <br />
        <em className="italic text-green">진짜</em> 수익일까요?
      </h1>
      <p className="max-w-[520px] text-base md:text-lg leading-relaxed text-ink2 mb-14 font-light opacity-0 animate-fade-up-delay-2">
        해외에서 싸게 사도, 국내 거래소에 도착했을 때 수익이 남는지는 다릅니다.
        <br />
        수수료·출금비·슬리피지·전송 지연까지 반영해 실제로 남는 수익을 계산하고, 조건을 통과한 거래만 실행하는 서비스를 만들고 있습니다.
      </p>
      <div className="flex gap-4 items-center opacity-0 animate-fade-up-delay-3">
        <Button
          onClick={scrollToWaitlist}
          className="bg-green text-white hover:bg-green/90 rounded-sm px-8 py-3.5 text-[15px] font-medium tracking-wide"
        >
          관심 있어요 →
        </Button>
        <Button
          onClick={scrollToHow}
          variant="outline"
          className="bg-transparent text-ink2 border-border hover:border-foreground hover:text-foreground rounded-sm px-7 py-3.5 text-[15px] tracking-wide"
        >
          어떻게 다른가요?
        </Button>
      </div>
    </section>
  )
}
