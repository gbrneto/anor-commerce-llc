"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const { t } = useLanguage()

  const scrollToProducts = () => {
    const element = document.getElementById("products")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/abstract-global-network-lines-technology-modern-mi.jpg')] bg-cover bg-center opacity-5"></div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A192F] mb-6 text-balance leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-[#334155] mb-8 leading-relaxed">{t("hero.description")}</p>
          <Button
            size="lg"
            className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-base px-8 py-6"
            onClick={scrollToProducts}
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            {t("hero.shopButton")}
          </Button>
        </div>
      </div>
    </section>
  )
}
