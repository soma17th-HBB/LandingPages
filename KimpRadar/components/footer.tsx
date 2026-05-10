export function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-10 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="font-mono text-[13px] tracking-wider text-foreground">
        KIMP<span className="text-green">NET</span>
      </div>
      <p className="text-xs text-muted-foreground max-w-[480px] leading-relaxed">
        이 서비스는 투자 권유가 아닙니다. 가상자산 거래는 원금 손실의 위험이 있으며, 모든 투자 결정은 사용자 본인의 판단과 책임하에 이루어집니다. 본 플랫폼은 정보 제공 및 도구 제공을 목적으로 합니다.
      </p>
    </footer>
  )
}
