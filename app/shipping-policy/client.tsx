"use client"

import { useLanguage } from "@/contexts/language-context"

export default function ShippingPolicyClient() {
  const { t } = useLanguage()

  return (
    <main className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-8 text-balance">{t("shipping.title")}</h1>

        <div className="space-y-8 text-[#334155] leading-relaxed">
          <p className="text-sm text-gray-500">{t("shipping.lastUpdated")}</p>
          <p className="mb-4">{t("shipping.intro")}</p>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("shipping.digital.title")}</h2>
            <p className="mb-4">{t("shipping.digital.text")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("shipping.physical.title")}</h2>
            
            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("shipping.processing")}</h3>
            <p className="mb-4">{t("shipping.processing.text")}</p>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("shipping.rates")}</h3>
            <p className="mb-4">{t("shipping.rates.text")}</p>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("shipping.international")}</h3>
            <p className="mb-4">{t("shipping.international.text")}</p>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("shipping.tracking")}</h3>
            <p className="mb-4">{t("shipping.tracking.text")}</p>
          </section>
        </div>
      </div>
    </main>
  )
}
