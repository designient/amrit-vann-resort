"use client"

import type React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface StylishButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  href?: string
  onClick?: () => void
}

export function StylishButton({ children, variant = "primary", size = "md", className, href, onClick }: StylishButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"

  const variants = {
    primary:
      "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-xl rounded-full",
    secondary:
      "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl rounded-full",
    outline:
      "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-full shadow-md hover:shadow-lg",
    ghost: "text-emerald-600 hover:bg-emerald-50 rounded-full",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  }

  const combinedClassName = cn(baseClasses, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <Button className={combinedClassName} onClick={onClick}>
      {children}
    </Button>
  )
}
