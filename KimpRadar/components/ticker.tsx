"use client"

const tickerData = [
  { coin: "BTC", kimp: "+2.81%", cls: "text-[#5ccf89]" },
  { coin: "ETH", kimp: "+1.43%", cls: "text-[#5ccf89]" },
  { coin: "XRP", kimp: "+3.12%", cls: "text-[#5ccf89]" },
  { coin: "SOL", kimp: "+1.87%", cls: "text-[#5ccf89]" },
  { coin: "DOGE", kimp: "+0.22%", cls: "text-[#ffc96f]" },
  { coin: "ADA", kimp: "-0.31%", cls: "text-[#f08080]" },
  { coin: "MATIC", kimp: "+2.05%", cls: "text-[#5ccf89]" },
  { coin: "AVAX", kimp: "+0.88%", cls: "text-[#5ccf89]" },
]

export function Ticker() {
  const items = [...tickerData, ...tickerData]

  return (
    <div className="bg-foreground text-card py-3 overflow-hidden relative mt-[60px]">
      <div className="flex gap-0 animate-ticker whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2.5 px-8 font-mono text-xs tracking-wider border-r border-white/10"
          >
            <span className="text-white/50">{item.coin}</span>
            김프{" "}
            <span className={item.cls}>{item.kimp}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
