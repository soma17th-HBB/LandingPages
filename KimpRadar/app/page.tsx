"use client"

import { Navbar } from "@/components/navbar"
import { Ticker } from "@/components/ticker"
import { Hero } from "@/components/hero"
import { CalculationCards } from "@/components/calculation-cards"
import { HowItWorks } from "@/components/how-it-works"
import { SampleReport } from "@/components/sample-report"
import { Features } from "@/components/features"
import { Waitlist } from "@/components/waitlist"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Ticker />
      <Hero />
      <div className="w-full h-px bg-border" />
      <CalculationCards />
      <div className="w-full h-px bg-border" />
      <HowItWorks />
      <div className="w-full h-px bg-border" />
      <SampleReport />
      <div className="w-full h-px bg-border" />
      <Features />
      <div className="w-full h-px bg-border" />
      <Waitlist />
      <Footer />
    </main>
  )
}
