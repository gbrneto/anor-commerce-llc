import { Building2, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer id="compliance" className="bg-[#0A192F] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-[#2563EB]" />
              <span className="text-lg font-bold">Anor Commerce LLC</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Powering high-performance digital brands for Brazil and the LATAM region with excellence and compliance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="/terms-of-service" className="text-gray-300 hover:text-[#2563EB] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#2563EB] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#2563EB] transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <a
              href="mailto:info@anorcommerce.com"
              className="flex items-center gap-2 text-gray-300 hover:text-[#2563EB] transition-colors"
            >
              <Mail className="h-5 w-5" />
              info@anorcommerce.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-sm text-gray-400 space-y-2">
            <p>© 2025 Anor Commerce LLC. All rights reserved.</p>
            <p>EIN: 30-1462603</p>
            <p>Registered Address: 1209 MOUNTAIN ROAD PL NE STE R, ALBUQUERQUE NM 87110</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
