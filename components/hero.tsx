import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/abstract-global-network-lines-technology-modern-mi.jpg')] bg-cover bg-center opacity-5"></div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A192F] mb-6 text-balance leading-tight">
            Bridging Global Commerce & Digital Innovation to LATAM
          </h1>
          <p className="text-lg md:text-xl text-[#334155] mb-8 leading-relaxed">
            Anor Commerce is a US-based strategic sales hub for premium e-commerce brands and high-ticket info products,
            serving Brazil and the LATAM region.
          </p>
          <Button size="lg" className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-base px-8 py-6" asChild>
            <a href="#business-model" className="flex items-center gap-2">
              Explore Our Model
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
