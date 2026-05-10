export function BeforeAfterSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--blue)]">
          변화 예시
        </div>
        <h2 className="mb-4 text-[clamp(24px,3.5vw,40px)] font-extrabold leading-tight tracking-tight text-foreground">
          같은 경험, 완전히 다른 전달력
        </h2>
        <p className="max-w-[560px] text-base leading-relaxed text-[var(--ink-mid)]">
          훈련 전후를 비교해보세요. 내용은 같지만, 어떤 답변이 기억에 남을지는 명확합니다.
        </p>
        
        <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
          {/* Before */}
          <div className="rounded-[20px] border-[1.5px] border-red-200 bg-red-50 p-7">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
              훈련 전
            </div>
            <div className="text-sm leading-[1.75] text-foreground">
              {"\"프로젝트에서 성능 문제가 있어서 인덱스를 추가하고 쿼리를 수정했습니다.\""}
            </div>
            <div className="mt-4 text-xs font-semibold text-red-600">
              결론 없음 · 역할 불명확 · 결과 없음 · 비개발자 이해 불가
            </div>
          </div>
          
          {/* After */}
          <div className="rounded-[20px] border-[1.5px] border-[var(--green)]/40 bg-gradient-to-br from-[var(--green)]/5 to-[var(--blue)]/5 p-7">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--green)]/15 px-3 py-1 text-xs font-bold text-emerald-600">
              훈련 후
            </div>
            <div className="text-sm leading-[1.75] text-foreground">
              {"\"프로젝트에서 "}
              <span className="rounded bg-gradient-to-r from-[var(--green)]/20 to-[var(--blue)]/15 px-1 font-semibold">
                통계 화면이 느리게 열리는 문제
              </span>
              {"가 있었습니다. 저는 "}
              <span className="rounded bg-gradient-to-r from-[var(--green)]/20 to-[var(--blue)]/15 px-1 font-semibold">
                사용자가 데이터를 더 빠르게 확인할 수 있도록
              </span>
              {" 데이터 조회 방식을 개선했고, 테스트를 통해 "}
              <span className="rounded bg-gradient-to-r from-[var(--green)]/20 to-[var(--blue)]/15 px-1 font-semibold">
                응답 속도가 크게 개선된 것
              </span>
              {"을 확인했습니다.\""}
            </div>
            <div className="mt-4 rounded-lg bg-[var(--blue)]/5 px-3.5 py-2.5 text-xs font-semibold text-[var(--blue)]">
              비개발 면접관도 이해할 수 있는 표현으로 개선되었습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
