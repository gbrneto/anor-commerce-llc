"use client"

import { Button } from "@/components/ui/button"
import { Building2 } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-7 w-7 text-[#2563EB]" />
            <span className="text-xl font-bold text-[#0A192F]">Anor Commerce</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#brands" className="text-sm font-medium text-[#334155] hover:text-[#2563EB] transition-colors">
              Our Brands
            </a>
            <a href="#about" className="text-sm font-medium text-[#334155] hover:text-[#2563EB] transition-colors">
              About Us
            </a>
            <a href="#compliance" className="text-sm font-medium text-[#334155] hover:text-[#2563EB] transition-colors">
              Compliance
            </a>
          </nav>

          <Button asChild className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white">
            <a href="mailto:info@anorcommerce.com">Contact Sales</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
