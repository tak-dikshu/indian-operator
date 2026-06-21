"use client";
import { useEffect, useRef } from 'react';

export function TradingViewTicker() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || container.current.querySelector("script")) return;
    
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
      "symbols": [
        {
          "proName": "BSE:SENSEX",
          "title": "Sensex"
        },
        {
          "proName": "NSE:NIFTY",
          "title": "Nifty 50"
        },
        {
          "proName": "NSE:BANKNIFTY",
          "title": "Bank Nifty"
        }
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "displayMode": "adaptive",
      "colorTheme": "dark",
      "locale": "en"
    }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container border-b border-[var(--color-card-border)] bg-[#0A0A0A]" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}
