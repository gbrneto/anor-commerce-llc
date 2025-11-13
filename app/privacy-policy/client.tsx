"use client"

import { useLanguage } from "@/contexts/language-context"

export default function PrivacyPolicyClientPage() {
  const { t } = useLanguage()

  return (
    <main className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-8 text-balance">{t("privacy.title")}</h1>

        <div className="space-y-8 text-[#334155] leading-relaxed">
          <p className="text-sm text-gray-500">{t("privacy.lastUpdated")}</p>
          <p className="mb-4">{t("privacy.intro")}</p>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("privacy.section1.title")}</h2>
            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("privacy.section1.subtitle1")}</h3>
            <p className="mb-4">{t("privacy.section1.subtitle1.p1")}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("privacy.section1.subtitle1.li1")}</li>
              <li>{t("privacy.section1.subtitle1.li2")}</li>
              <li>{t("privacy.section1.subtitle1.li3")}</li>
              <li>{t("privacy.section1.subtitle1.li4")}</li>
              <li>{t("privacy.section1.subtitle1.li5")}</li>
              <li>{t("privacy.section1.subtitle1.li6")}</li>
              <li>{t("privacy.section1.subtitle1.li7")}</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("privacy.section1.subtitle2")}</h3>
            <p className="mb-4">{t("privacy.section1.subtitle2.p1")}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("privacy.section1.subtitle2.li1")}</li>
              <li>{t("privacy.section1.subtitle2.li2")}</li>
              <li>{t("privacy.section1.subtitle2.li3")}</li>
              <li>{t("privacy.section1.subtitle2.li4")}</li>
              <li>{t("privacy.section1.subtitle2.li5")}</li>
              <li>{t("privacy.section1.subtitle2.li6")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("privacy.section2.title")}</h2>
            <p className="mb-4">{t("privacy.section2.p1")}</p>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("privacy.section2.subtitle1")}</h3>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("privacy.section2.subtitle1.li1")}</li>
              <li>{t("privacy.section2.subtitle1.li2")}</li>
              <li>{t("privacy.section2.subtitle1.li3")}</li>
              <li>{t("privacy.section2.subtitle1.li4")}</li>
              <li>{t("privacy.section2.subtitle1.li5")}</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("privacy.section2.subtitle2")}</h3>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("privacy.section2.subtitle2.li1")}</li>
              <li>{t("privacy.section2.subtitle2.li2")}</li>
              <li>{t("privacy.section2.subtitle2.li3")}</li>
              <li>{t("privacy.section2.subtitle2.li4")}</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("privacy.section2.subtitle3")}</h3>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("privacy.section2.subtitle3.li1")}</li>
              <li>{t("privacy.section2.subtitle3.li2")}</li>
              <li>{t("privacy.section2.subtitle3.li3")}</li>
              <li>{t("privacy.section2.subtitle3.li4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("privacy.section3.title")}</h2>
            <p className="mb-4">{t("privacy.section3.p1")}</p>
            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("privacy.section3.subtitle1")}</h3>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("privacy.section3.subtitle1.li1")}</li>
              <li>{t("privacy.section3.subtitle1.li2")}</li>
              <li>{t("privacy.section3.subtitle1.li3")}</li>
              <li>{t("privacy.section3.subtitle1.li4")}</li>
            </ul>
            <p className="mb-4">{t("privacy.section3.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("privacy.section4.title")}</h2>
            <p className="mb-4">{t("privacy.section4.p1")}</p>
            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("privacy.section4.subtitle1")}</h3>
            <p className="mb-4">{t("privacy.section4.subtitle1.p1")}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("privacy.section4.subtitle1.li1")}</li>
              <li>{t("privacy.section4.subtitle1.li2")}</li>
              <li>{t("privacy.section4.subtitle1.li3")}</li>
              <li>{t("privacy.section4.subtitle1.li4")}</li>
              <li>{t("privacy.section4.subtitle1.li5")}</li>
              <li>{t("privacy.section4.subtitle1.li6")}</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("privacy.section4.subtitle2")}</h3>
            <p className="mb-4">{t("privacy.section4.subtitle2.p1")}</p>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("privacy.section4.subtitle3")}</h3>
            <p className="mb-4">{t("privacy.section4.subtitle3.p1")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("privacy.section5.title")}</h2>
            <p className="mb-4">{t("privacy.section5.p1")}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("privacy.section5.li1")}</li>
              <li>{t("privacy.section5.li2")}</li>
              <li>{t("privacy.section5.li3")}</li>
              <li>{t("privacy.section5.li4")}</li>
              <li>{t("privacy.section5.li5")}</li>
              <li>{t("privacy.section5.li6")}</li>
            </ul>
            <p className="mb-4">{t("privacy.section5.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("privacy.section6.title")}</h2>
            <p className="mb-4">{t("privacy.section6.p1")}</p>
            <p className="mb-4">{t("privacy.section6.p2")}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("privacy.section6.li1")}</li>
              <li>{t("privacy.section6.li2")}</li>
              <li>{t("privacy.section6.li3")}</li>
              <li>{t("privacy.section6.li4")}</li>
            </ul>
            <p className="mb-4">{t("privacy.section6.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("privacy.section7.title")}</h2>
            <p className="mb-4">{t("privacy.section7.p1")}</p>
            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("privacy.section7.subtitle1")}</h3>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("privacy.section7.subtitle1.li1")}</li>
              <li>{t("privacy.section7.subtitle1.li2")}</li>
              <li>{t("privacy.section7.subtitle1.li3")}</li>
              <li>{t("privacy.section7.subtitle1.li4")}</li>
              <li>{t("privacy.section7.subtitle1.li5")}</li>
              <li>{t("privacy.section7.subtitle1.li6")}</li>
              <li>{t("privacy.section7.subtitle1.li7")}</li>
              <li>{t("privacy.section7.subtitle1.li8")}</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("privacy.section7.subtitle2")}</h3>
            <p className="mb-4">{t("privacy.section7.subtitle2.p1")}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("privacy.section7.subtitle2.li1")}</li>
              <li>{t("privacy.section7.subtitle2.li2")}</li>
              <li>{t("privacy.section7.subtitle2.li3")}</li>
              <li>{t("privacy.section7.subtitle2.li4")}</li>
              <li>{t("privacy.section7.subtitle2.li5")}</li>
              <li>{t("privacy.section7.subtitle2.li6")}</li>
              <li>{t("privacy.section7.subtitle2.li7")}</li>
              <li>{t("privacy.section7.subtitle2.li8")}</li>
              <li>{t("privacy.section7.subtitle2.li9")}</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("privacy.section7.subtitle3")}</h3>
            <p className="mb-4">{t("privacy.section7.subtitle3.p1")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("privacy.section8.title")}</h2>
            <p className="mb-4">{t("privacy.section8.p1")}</p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-[#0A192F] mb-2">{t("privacy.section8.company")}</p>
              <p className="mb-1">{t("privacy.section8.officer")}</p>
              <p className="mb-1">{t("privacy.section8.address1")}</p>
              <p className="mb-1">{t("privacy.section8.address2")}</p>
              <p className="mb-1">{t("privacy.section8.country")}</p>
              <p className="mb-1">{t("privacy.section8.email")}</p>
              <p>{t("privacy.section8.ein")}</p>
            </div>
            <p className="mt-4">{t("privacy.section8.p2")}</p>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 italic">{t("privacy.footer")}</p>
          </section>
        </div>
      </div>
    </main>
  )
}
