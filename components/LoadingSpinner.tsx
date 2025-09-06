"use client"

import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
  text?: string
}

export function LoadingSpinner({ size = "md", className, text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div className={cn("flex flex-col items-center justify-center space-y-2", className)}>
      <div className="relative">
        <div className={cn("animate-spin rounded-full border-2 border-muted", sizeClasses[size])}>
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[var(--gov-blue)] animate-spin"></div>
        </div>
        <div
          className={cn(
            "absolute inset-0 rounded-full border-2 border-transparent border-r-[var(--gov-saffron)] animate-spin",
            "animation-delay-150",
          )}
        ></div>
      </div>
      {text && <p className="text-sm text-muted-foreground animate-pulse">{text}</p>}
    </div>
  )
}
