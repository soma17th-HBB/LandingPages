"use client"

export function SampleReport() {
  return (
    <section className="px-6 md:px-12 py-24 max-w-[1200px] mx-auto">
      <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase mb-5">
        거래 후 리포트
      </p>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-4 text-balance">
        왜 수익이 났는지,
        <br />
        왜 손실이 났는지 압니다
      </h2>
      <p className="text-base leading-relaxed text-ink2 max-w-[560px] font-light mb-14">
        자동매매 봇의 블랙박스 문제를 없앱니다. 모든 거래의 판단 근거와 결과를 투명하게 기록합니다.
      </p>

      <div className="bg-card border border-border rounded-sm overflow-hidden">
        {/* Header */}
        <div className="bg-foreground text-card px-7 py-5 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <span className="font-mono text-xs tracking-wider uppercase">
            거래 리포트 #0248 — XRP / Binance → Upbit
          </span>
          <span className="font-mono text-[11px] text-white/40">2025-01-15 14:23:07</span>
        </div>

        {/* Body */}
        <div className="p-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Entry Reason */}
          <div>
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              진입 근거
            </div>
            <div className="text-[13px] leading-8 text-ink2">
              김프 <strong className="font-medium text-foreground font-mono text-xs">+2.10%</strong> 확인
              <br />
              수수료·출금비 반영 후 <strong className="font-medium text-foreground font-mono text-xs">+1.47%</strong>
              <br />
              슬리피지 반영 후 <strong className="font-medium text-foreground font-mono text-xs">+1.09%</strong>
              <br />
              전송 리스크 반영 후 <strong className="font-medium text-foreground font-mono text-xs">+0.82%</strong>
              <br />
              국내 호가 유동성 <strong className="font-medium text-foreground font-mono text-xs">충분</strong>
              <br />
              입출금 상태 <strong className="font-medium text-foreground font-mono text-xs">정상</strong>
            </div>
          </div>

          {/* Actual Result */}
          <div>
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              실제 결과
            </div>
            <div className="text-[13px] leading-8 text-ink2">
              실제 매수가 <strong className="font-medium text-foreground font-mono text-xs">$0.4821</strong>
              <br />
              실제 매도가 <strong className="font-medium text-foreground font-mono text-xs">₩774.2</strong>
              <br />
              전송 소요 시간 <strong className="font-medium text-foreground font-mono text-xs">5분 38초</strong>
              <br />
              최종 실현 순익 <strong className="font-medium text-green font-mono text-xs">+0.61%</strong>
            </div>
          </div>

          {/* Insight */}
          <div className="md:col-span-2 bg-green-light border border-green/15 rounded-sm p-5">
            <p className="text-[13px] leading-relaxed text-green font-normal">
              <strong className="font-semibold">오차 원인 분석:</strong> 국내 매도 슬리피지가 예상 0.18%보다 높은 0.31%로 발생했습니다. 해당 시간대 Upbit XRP 매도 호가 깊이가 얕았습니다. 동일 조건에서 거래 금액을 30% 줄이면 슬리피지를 0.12% 수준으로 낮출 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
