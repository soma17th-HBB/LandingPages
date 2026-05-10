"use client"

import { Button } from "@/components/ui/button"

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-md">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="flex items-center justify-between py-4">
          <div className="bg-gradient-to-br from-[var(--blue)] to-[var(--purple)] bg-clip-text text-lg font-extrabold tracking-tight text-transparent">
            말하기 코치
          </div>
          <Button 
            className="rounded-lg bg-[var(--blue)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--indigo)]"
          >
            무료로 시작하기
          </Button>
        </div>
      </div>
    </nav>
  )
}
