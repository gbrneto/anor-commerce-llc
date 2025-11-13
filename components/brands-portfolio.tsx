"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, ChefHat, Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function BrandsPortfolio() {
  const { t } = useLanguage()

  const brands = [
    {
      titleKey: "brands.petloo.title",
      descriptionKey: "brands.petloo.description",
      icon: ShoppingBag,
      logoImage: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Anor%20Commerce/Logo%20Loo%201.png",
      instagram: "@petloobrasil",
      instagramUrl: "https://www.instagram.com/petloobrasil",
    },
    {
      titleKey: "brands.katuchef.title",
      descriptionKey: "brands.katuchef.description",
      icon: ChefHat,
      logoImage: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Anor%20Commerce/image%20816.png",
      instagram: "@katuchef",
      instagramUrl: "https://www.instagram.com/katuchef",
    },
    {
      titleKey: "brands.versiaGarden.title",
      descriptionKey: "brands.versiaGarden.description",
      logoImage:
        "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Anor%20Commerce/logoversiagardemsemfundo%201.png",
      instagram: "@versiagarden",
      instagramUrl: "https://www.instagram.com/versiagarden",
    },
  ]

  return (
    <section id="brands" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">{t("brands.title")}</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {brands.map((brand) => {
            const Icon = brand.icon
            return (
              <Card key={brand.titleKey} className="border-none shadow-md hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  {brand.logoImage ? (
                    <div className="mb-4 h-12 w-12 flex items-center justify-center">
                      <img
                        src={brand.logoImage || "/placeholder.svg"}
                        alt={t(brand.titleKey)}
                        className="h-12 w-auto"
                      />
                    </div>
                  ) : (
                    <div className="mb-4 h-12 w-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#2563EB]" />
                    </div>
                  )}
                  <CardTitle className="text-2xl text-[#0A192F]">{t(brand.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[#334155] leading-relaxed mb-4">
                    {t(brand.descriptionKey)}
                  </CardDescription>
                  <a
                    href={brand.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1d4ed8] transition-colors font-medium"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>{brand.instagram}</span>
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
