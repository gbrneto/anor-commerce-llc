"use client"

import { Zap, Building2, Shield, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function BusinessModel() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Building2,
      titleKey: "business.hybridSales.title",
      descriptionKey: "business.hybridSales.description",
    },
    {
      icon: Zap,
      titleKey: "business.crossBorder.title",
      descriptionKey: "business.crossBorder.description",
    },
    {
      icon: Shield,
      titleKey: "business.compliance.title",
      descriptionKey: "business.compliance.description",
    },
    {
      icon: TrendingUp,
      titleKey: "business.growth.title",
      descriptionKey: "business.growth.description",
    },
  ]

  return (
    <section id="business-model" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">{t("business.title")}</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.titleKey} className="text-center">
                <div className="mb-6 mx-auto h-16 w-16 rounded-full bg-[#2563EB] flex items-center justify-center">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] mb-3">{t(feature.titleKey)}</h3>
                <p className="text-base text-[#334155] leading-relaxed">{t(feature.descriptionKey)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
