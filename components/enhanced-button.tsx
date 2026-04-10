"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EnhancedButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  href?: string
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export function EnhancedButton({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onClick,
  disabled = false,
  type = "button",
}: EnhancedButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg relative overflow-hidden group"

  const variants = {
    primary:
      "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl border-0",
    secondary:
      "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl border-0",
    outline:
      "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-xl bg-transparent hover:border-emerald-700",
    ghost: "text-emerald-600 hover:bg-emerald-50 rounded-xl border-0 shadow-none hover:shadow-sm",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm h-9",
    md: "px-6 py-3 text-base h-11",
    lg: "px-8 py-4 text-lg h-13",
    xl: "px-10 py-5 text-xl h-16",
  }

  const combinedClassName = cn(baseClasses, variants[variant], sizes[size], className)

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    )
  }

  return (
    <Button
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {content}
    </Button>
  )
}
