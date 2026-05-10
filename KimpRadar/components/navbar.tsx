"use client"

import { Button } from "@/components/ui/button"

export function Navbar() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-background/88 backdrop-blur-md border-b border-border">
      <div className="font-mono font-medium text-sm tracking-widest text-foreground uppercase">
        KIMP<span className="text-green">NET</span>
      </div>
      <Button
        onClick={scrollToWaitlist}
        className="text-xs font-medium tracking-wide bg-foreground text-background hover:bg-green rounded-sm px-5 py-2"
      >
        얼리 액세스 신청
      </Button>
    </nav>
  )
}
