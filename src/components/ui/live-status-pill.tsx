import { cn } from "./button"

export function LiveStatusPill({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center space-x-2 bg-red-950/40 border border-red-900 px-3 py-1.5", className)}>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
      </span>
      <span className="text-red-500 text-sm font-bold uppercase tracking-widest">Live Now</span>
    </div>
  )
}
