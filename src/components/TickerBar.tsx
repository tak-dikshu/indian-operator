export function TickerBar() {
  const items = [
    { name: "SENSEX", price: "74,119.39", change: "+0.32%", isBull: true },
    { name: "NIFTY 50", price: "22,493.55", change: "+0.28%", isBull: true },
    { name: "BANK NIFTY", price: "47,835.80", change: "-0.15%", isBull: false },
    { name: "NIFTY IT", price: "37,640.20", change: "+1.2%", isBull: true },
    { name: "INDIA VIX", price: "14.30", change: "-2.4%", isBull: false },
  ];

  const content = (
    <div className="flex items-center space-x-12 px-6 whitespace-nowrap">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-bear animate-pulse-ring" />
          <span className="text-[var(--text-mute)]">{item.name}</span>
          <span>{item.price}</span>
          <span className={`flex items-center ${item.isBull ? "text-bull" : "text-bear"}`}>
            {item.isBull ? "▲" : "▼"} {item.change}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="sticky top-0 z-50 w-full h-10 bg-[var(--bg-elevated)] border-b border-[var(--card-border)] flex items-center overflow-hidden font-mono text-sm shadow-sm backdrop-blur-md bg-opacity-90">
      <div className="flex animate-marquee">
        {content}
        {content}
      </div>
    </div>
  );
}
