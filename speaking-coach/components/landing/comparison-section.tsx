const comparisons = [
  { feature: "질문 생성", others: true, ours: true },
  { feature: "답변 평가", others: true, ours: true },
  { feature: "꼬리질문 제공", others: true, ours: false },
  { feature: "답변 구조 진단", others: false, ours: true },
  { feature: "다시 말하기 미션", others: false, ours: true },
  { feature: "반복 훈련 시스템", others: false, ours: true },
  { feature: "면접관 유형별 표현 변환", others: false, ours: true },
  { feature: "개인별 약점 추적", others: false, ours: true },
]

export function ComparisonSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--blue)]">
          차별점
        </div>
        <h2 className="mb-4 text-[clamp(24px,3.5vw,40px)] font-extrabold leading-tight tracking-tight text-foreground">
          AI 면접관이 아니라,<br />AI 말하기 코치입니다.
        </h2>
        
        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-100 px-5 py-4 text-left text-sm font-bold text-[var(--ink-mid)]">
                  기능
                </th>
                <th className="bg-gray-100 px-5 py-4 text-left text-sm font-bold text-[var(--ink-mid)]">
                  기존 AI 면접 서비스
                </th>
                <th className="bg-gradient-to-br from-[var(--blue)] to-[var(--indigo)] px-5 py-4 text-left text-sm font-bold text-white">
                  말하기 코치
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr key={index} className="transition-colors hover:bg-[var(--blue)]/[0.02]">
                  <td className="border-t border-border px-5 py-3.5 text-sm font-medium text-foreground">
                    {item.feature}
                  </td>
                  <td className="border-t border-border px-5 py-3.5 text-center text-lg font-bold">
                    {item.others ? (
                      <span className="text-emerald-600">✓</span>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                  <td className="border-t border-border bg-[var(--blue)]/[0.03] px-5 py-3.5 text-center text-lg font-bold">
                    {item.ours ? (
                      <span className="text-emerald-600">✓</span>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
