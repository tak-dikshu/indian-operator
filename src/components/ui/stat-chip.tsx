import { cn } from "./button"
import { TrendingUp, Users, Video } from "lucide-react"

interface StatChipProps {
  label: string;
  value: string;
  icon: "users" | "views" | "video";
  className?: string;
}

export function StatChip({ label, value, icon, className }: StatChipProps) {
  const icons = {
    users: <Users className="w-4 h-4 text-[var(--color-saffron)]" />,
    views: <TrendingUp className="w-4 h-4 text-[var(--color-bullish)]" />,
    video: <Video className="w-4 h-4 text-gray-400" />
  }

  return (
    <div className={cn("flex items-center space-x-3 bg-[var(--color-card)] border border-[var(--color-card-border)] px-4 py-2", className)}>
      <div className="flex-shrink-0">
        {icons[icon]}
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-display font-bold leading-none">{value}</span>
        <span className="text-xs text-gray-400 uppercase tracking-wider">{label}</span>
      </div>
    </div>
  )
}
