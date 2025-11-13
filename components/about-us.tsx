"use client"

import { useLanguage } from "@/contexts/language-context"

export default function AboutUs() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
              <img
                src="/modern-diverse-business-team-meeting-professional-.jpg"
                alt="Modern business team"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-3">{t("about.badge")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-6 text-balance">{t("about.title")}</h2>
            <p className="text-lg text-[#334155] leading-relaxed">{t("about.description")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
