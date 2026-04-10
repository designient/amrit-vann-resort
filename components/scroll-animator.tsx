"use client"

import { useEffect } from "react"

export function ScrollAnimator() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => {
      el.classList.add("opacity-0")
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
