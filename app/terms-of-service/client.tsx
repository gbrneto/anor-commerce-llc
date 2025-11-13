"use client"

import { useLanguage } from "@/contexts/language-context"

export default function TermsOfServiceClient() {
  const { t } = useLanguage()

  return (
    <main className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-8 text-balance">{t("terms.title")}</h1>

        <div className="space-y-8 text-[#334155] leading-relaxed">
          <p className="text-sm text-gray-500">{t("terms.lastUpdated")}</p>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("terms.section1.title")}</h2>
            <p className="mb-4">{t("terms.section1.p1")}</p>
            <p className="mb-4">{t("terms.section1.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("terms.section2.title")}</h2>
            <p className="mb-4">{t("terms.section2.p1")}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("terms.section2.li1")}</li>
              <li>{t("terms.section2.li2")}</li>
              <li>{t("terms.section2.li3")}</li>
              <li>{t("terms.section2.li4")}</li>
              <li>{t("terms.section2.li5")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("terms.section3.title")}</h2>
            <p className="mb-4">{t("terms.section3.p1")}</p>
            <p className="mb-4">{t("terms.section3.p2")}</p>
            <p className="mb-4">{t("terms.section3.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("terms.section4.title")}</h2>
            <p className="mb-4">{t("terms.section4.p1")}</p>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("terms.section4.subtitle1")}</h3>
            <p className="mb-4">{t("terms.section4.subtitle1.p1")}</p>
            <p className="mb-4">{t("terms.section4.subtitle1.p2")}</p>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("terms.section4.subtitle2")}</h3>
            <p className="mb-4">{t("terms.section4.subtitle2.p1")}</p>
            <p className="mb-4">{t("terms.section4.subtitle2.p2")}</p>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("terms.section4.subtitle3")}</h3>
            <p className="mb-4">{t("terms.section4.subtitle3.p1")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("terms.section5.title")}</h2>
            <p className="mb-4">{t("terms.section5.p1")}</p>
            <p className="mb-4">{t("terms.section5.p2")}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("terms.section5.li1")}</li>
              <li>{t("terms.section5.li2")}</li>
              <li>{t("terms.section5.li3")}</li>
              <li>{t("terms.section5.li4")}</li>
            </ul>
            <p className="mb-4">{t("terms.section5.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("terms.section6.title")}</h2>
            <p className="mb-4">{t("terms.section6.p1")}</p>
            <p className="mb-4">{t("terms.section6.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("terms.section7.title")}</h2>
            <p className="mb-4">{t("terms.section7.p1")}</p>
            <p className="mb-4">{t("terms.section7.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("terms.section8.title")}</h2>
            <p className="mb-4">{t("terms.section8.p1")}</p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-[#0A192F] mb-2">{t("terms.section8.company")}</p>
              <p className="mb-1">{t("terms.section8.address1")}</p>
              <p className="mb-1">{t("terms.section8.address2")}</p>
              <p className="mb-1">{t("terms.section8.country")}</p>
              <p className="mb-1">{t("terms.section8.email")}</p>
              <p>{t("terms.section8.ein")}</p>
            </div>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 italic">{t("terms.footer")}</p>
          </section>
        </div>
      </div>
    </main>
  )
}
