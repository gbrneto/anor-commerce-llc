"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import LanguageSelector from "./language-selector"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

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
            <img
              src="https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Anor%20Commerce/image%20956.png"
              alt="Anor Commerce Logo"
              className="h-7 w-auto"
            />
            <span className="text-xl font-bold text-[#0A192F]">Anor Commerce</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-[#334155] hover:text-[#2563EB] transition-colors">
              {t("header.home")}
            </a>
            <a href="/#products" className="text-sm font-medium text-[#334155] hover:text-[#2563EB] transition-colors">
              {t("header.ourBrands")}
            </a>
            <a href="/#about" className="text-sm font-medium text-[#334155] hover:text-[#2563EB] transition-colors">
              {t("header.aboutUs")}
            </a>
            <a href="/#compliance" className="text-sm font-medium text-[#334155] hover:text-[#2563EB] transition-colors">
              {t("header.compliance")}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  )
}
