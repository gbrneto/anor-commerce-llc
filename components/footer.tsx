"use client"

import { Building2, Mail, Phone } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="compliance" className="bg-[#0A192F] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-[#2563EB]" />
              <span className="text-lg font-bold">Anor Commerce LLC</span>
            </div>
            <p className="text-gray-300 leading-relaxed">{t("footer.tagline")}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-3">
              <li>
                <a href="/terms-of-service" className="text-gray-300 hover:text-[#2563EB] transition-colors">
                  {t("footer.termsOfService")}
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-300 hover:text-[#2563EB] transition-colors">
                  {t("footer.privacyPolicy")}
                </a>
              </li>
              <li>
                <a href="/refund-policy" className="text-gray-300 hover:text-[#2563EB] transition-colors">
                  {t("footer.refundPolicy")}
                </a>
              </li>
              <li>
                <a href="/shipping-policy" className="text-gray-300 hover:text-[#2563EB] transition-colors">
                  {t("footer.shippingPolicy")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.contact")}</h3>
            <a
              href="mailto:info@anorcommerce.com"
              className="flex items-center gap-2 text-gray-300 hover:text-[#2563EB] transition-colors mb-3"
            >
              <Mail className="h-5 w-5" />
              info@anorcommerce.com
            </a>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <div>
                  <p className="text-sm font-semibold">US Corporate</p>
                  <p className="text-sm">+1 (505) 472-8904</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <div>
                  <p className="text-sm font-semibold">LATAM Support</p>
                  <p className="text-sm">+55 (27) 99640-2344</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-sm text-gray-400 space-y-2">
            <p>{t("footer.copyright")}</p>
            <p>{t("footer.ein")}</p>
            <p>{t("footer.address")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
