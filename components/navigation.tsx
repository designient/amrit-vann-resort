"use client"

import { useState, useEffect } from "react"
import { EnhancedButton } from "@/components/enhanced-button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const links = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Rooms" },
    { href: "/experiences", label: "Experiences" },
    { href: "/dining", label: "Dining" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-stone-200/50"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
            scrolled ? "text-stone-800 hover:text-emerald-700" : "text-white hover:text-emerald-300"
          }`}
        >
          Amrit Vann
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors font-medium text-base relative ${
                scrolled
                  ? isActive(link.href)
                    ? "text-emerald-700"
                    : "text-stone-600 hover:text-emerald-700"
                  : isActive(link.href)
                    ? "text-emerald-300"
                    : "text-white/90 hover:text-emerald-300"
              } ${
                isActive(link.href)
                  ? "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-current after:rounded-full"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <EnhancedButton size="md" className="hidden lg:inline-flex" href="/booking">
            Book Now
          </EnhancedButton>

          <button
            className={`lg:hidden p-2 ${scrolled ? "text-stone-800" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Full screen overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center px-6 py-4 border-b border-stone-200">
            <Link href="/" className="text-2xl font-bold text-stone-800">
              Amrit Vann
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-stone-800"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-8 space-y-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-emerald-700"
                    : "text-stone-600 hover:text-emerald-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <EnhancedButton size="lg" className="w-full" href="/booking">
                Book Your Stay
              </EnhancedButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
