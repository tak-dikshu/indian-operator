import { AlertTriangle } from "lucide-react"

export function DisclaimerBanner({ className }: { className?: string }) {
  return (
    <div className={`flex items-start space-x-3 p-4 border-l-4 border-[var(--color-saffron)] bg-[var(--color-card)] ${className}`}>
      <AlertTriangle className="w-6 h-6 text-[var(--color-saffron)] shrink-0 mt-0.5" />
      <div>
        <h4 className="font-bold text-[var(--color-saffron)] uppercase tracking-wide text-sm mb-1">Disclaimer</h4>
        <p className="text-sm text-gray-300">
          Not SEBI Registered. All content provided is for educational purposes only. I am not responsible for your profit or loss. Please consult your financial advisor before trading.
        </p>
      </div>
    </div>
  )
}
