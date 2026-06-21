import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const variants = {
      primary: "bg-[var(--color-saffron)] text-black hover:bg-[var(--color-saffron-dark)] font-bold",
      secondary: "bg-[var(--color-card)] text-white hover:bg-[var(--color-card-border)]",
      outline: "border-2 border-[var(--color-saffron)] text-[var(--color-saffron)] hover:bg-[var(--color-saffron)] hover:text-black",
      danger: "bg-[var(--color-bearish)] text-white hover:bg-red-700",
    }
    const sizes = {
      default: "h-12 px-6 py-3 text-base",
      sm: "h-9 px-4 text-sm",
      lg: "h-14 px-8 text-lg uppercase tracking-wide",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-none transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
