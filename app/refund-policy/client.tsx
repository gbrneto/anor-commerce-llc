"use client"

import { useLanguage } from "@/contexts/language-context"

export default function RefundPolicyClient() {
  const { t } = useLanguage()

  return (
    <main className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-8 text-balance">{t("refund.title")}</h1>

        <div className="space-y-8 text-[#334155] leading-relaxed">
          <p className="text-sm text-gray-500">{t("refund.lastUpdated")}</p>

          <div className="bg-blue-50 border-l-4 border-[#0EA5E9] p-6 rounded-r-lg">
            <p className="font-semibold text-[#0A192F] mb-2">{t("refund.notice.title")}</p>
            <p>{t("refund.notice.content")}</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("refund.section1.title")}</h2>
            <p className="mb-4">{t("refund.section1.p1")}</p>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("refund.section1.subtitle1")}</h3>
            <p className="mb-4">{t("refund.section1.subtitle1.p1")}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("refund.section1.subtitle1.li1")}</li>
              <li>{t("refund.section1.subtitle1.li2")}</li>
              <li>{t("refund.section1.subtitle1.li3")}</li>
              <li>{t("refund.section1.subtitle1.li4")}</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("refund.section1.subtitle2")}</h3>
            <p className="mb-4">{t("refund.section1.subtitle2.p1")}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("refund.section1.subtitle2.li1")}</li>
              <li>{t("refund.section1.subtitle2.li2")}</li>
              <li>{t("refund.section1.subtitle2.li3")}</li>
              <li>{t("refund.section1.subtitle2.li4")}</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("refund.section1.subtitle3")}</h3>
            <p className="mb-4">{t("refund.section1.subtitle3.p1")}</p>
            <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
              <li>{t("refund.section1.subtitle3.li1")}</li>
              <li>{t("refund.section1.subtitle3.li2")}</li>
              <li>{t("refund.section1.subtitle3.li3")}</li>
              <li>{t("refund.section1.subtitle3.li4")}</li>
              <li>{t("refund.section1.subtitle3.li5")}</li>
            </ol>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("refund.section1.subtitle4")}</h3>
            <p className="mb-4">{t("refund.section1.subtitle4.p1")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("refund.section2.title")}</h2>
            <p className="mb-4">{t("refund.section2.p1")}</p>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("refund.section2.subtitle1")}</h3>
            <p className="mb-4">{t("refund.section2.subtitle1.p1")}</p>
            <p className="mb-4">{t("refund.section2.subtitle1.p2")}</p>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("refund.section2.subtitle2")}</h3>
            <p className="mb-4">{t("refund.section2.subtitle2.p1")}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("refund.section2.subtitle2.li1")}</li>
              <li>{t("refund.section2.subtitle2.li2")}</li>
              <li>{t("refund.section2.subtitle2.li3")}</li>
              <li>{t("refund.section2.subtitle2.li4")}</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("refund.section2.subtitle3")}</h3>
            <p className="mb-4">{t("refund.section2.subtitle3.p1")}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("refund.section2.subtitle3.li1")}</li>
              <li>{t("refund.section2.subtitle3.li2")}</li>
            </ul>
            <p className="mb-4">{t("refund.section2.subtitle3.p2")}</p>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("refund.section2.subtitle4")}</h3>
            <p className="mb-4">{t("refund.section2.subtitle4.p1")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("refund.section3.title")}</h2>
            <p className="mb-4">{t("refund.section3.p1")}</p>
            <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
              <li>{t("refund.section3.li1")}</li>
              <li>{t("refund.section3.li2")}</li>
              <ul className="list-disc list-inside space-y-1 ml-8 mt-2 mb-2">
                <li>{t("refund.section3.li2.sub1")}</li>
                <li>{t("refund.section3.li2.sub2")}</li>
                <li>{t("refund.section3.li2.sub3")}</li>
                <li>{t("refund.section3.li2.sub4")}</li>
                <li>{t("refund.section3.li2.sub5")}</li>
              </ul>
              <li>{t("refund.section3.li3")}</li>
              <li>{t("refund.section3.li4")}</li>
            </ol>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
              <p className="font-semibold text-[#0A192F] mb-2">{t("refund.section3.contact.title")}</p>
              <p className="mb-1">{t("refund.section3.contact.email")}</p>
              <p className="mb-1">{t("refund.section3.contact.company")}</p>
              <p className="mb-1">{t("refund.section3.contact.address")}</p>
              <p>{t("refund.section3.contact.ein")}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0A192F] mb-4">{t("refund.section4.title")}</h2>
            <p className="mb-4">{t("refund.section4.p1")}</p>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("refund.section4.subtitle1")}</h3>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("refund.section4.subtitle1.li1")}</li>
              <li>{t("refund.section4.subtitle1.li2")}</li>
              <li>{t("refund.section4.subtitle1.li3")}</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("refund.section4.subtitle2")}</h3>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>{t("refund.section4.subtitle2.li1")}</li>
              <li>{t("refund.section4.subtitle2.li2")}</li>
              <li>{t("refund.section4.subtitle2.li3")}</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("refund.section4.subtitle3")}</h3>
            <p className="mb-4">{t("refund.section4.subtitle3.p1")}</p>
            <p className="mb-4">{t("refund.section4.subtitle3.p2")}</p>

            <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">{t("refund.section4.subtitle4")}</h3>
            <p className="mb-4">{t("refund.section4.subtitle4.p1")}</p>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 italic">{t("refund.footer")}</p>
          </section>
        </div>
      </div>
    </main>
  )
}
