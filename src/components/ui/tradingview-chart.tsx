"use client";
import { useEffect, useRef } from 'react';

export function TradingViewChart() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || container.current.querySelector("script")) return;
    
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
      "symbol": "NSE:NIFTY",
      "width": "100%",
      "height": "100%",
      "locale": "en",
      "dateRange": "1M",
      "colorTheme": "dark",
      "isTransparent": true,
      "autosize": true,
      "largeChartUrl": ""
    }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container w-full h-[300px] md:h-[400px]" ref={container}>
      <div className="tradingview-widget-container__widget h-full w-full"></div>
    </div>
  );
}
