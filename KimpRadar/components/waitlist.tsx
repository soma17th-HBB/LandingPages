import { ArrowUpRight } from "lucide-react"

export function Waitlist() {
  return (
    <section id="waitlist" className="bg-foreground text-card">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}
        <div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-none tracking-tight mb-5">
            이런 서비스가
            <br />
            <em className="italic text-accent">필요하셨나요?</em>
          </h2>
          <p className="text-[15px] leading-relaxed text-white/55 font-light">
            아직 개발 중인 서비스입니다. 관심이 있으시다면 얼리 액세스 신청을 남겨주세요. 가장 먼저 알려드리겠습니다.
          </p>
        </div>

        {/* Right - CTA */}
        <div className="flex flex-col items-start lg:items-end gap-6">
          <a
            href="https://forms.google.com/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-accent text-foreground px-8 py-5 text-lg font-semibold rounded-sm tracking-wide transition-all hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-lg"
          >
            얼리 액세스 신청하기
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <p className="text-xs text-white/40 font-light">
            구글 폼으로 연결됩니다
          </p>
        </div>
      </div>
    </section>
  )
}
