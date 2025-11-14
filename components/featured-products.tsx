"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Instagram } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"

export default function FeaturedProducts() {
  const { t } = useLanguage()

  const products = [
    {
      titleKey: "products.petloo.title",
      priceKey: "products.petloo.price",
      descriptionKey: "products.petloo.description",
      buttonKey: "products.buyNow",
      link: "https://petloo.com.br/",
      image: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Anor%20Commerce/ct3_6a1c34cd-80fc-47e9-a933-65143d71d562%20%283%29.webp",
      instagram: "https://www.instagram.com/petloobrasil/",
      instagramHandle: "@petloobrasil",
    },
    {
      titleKey: "products.katuchef.title",
      priceKey: "products.katuchef.price",
      descriptionKey: "products.katuchef.description",
      buttonKey: "products.buyNow",
      link: "https://oferta.katucheftitanio.com/",
      image: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/Anor%20Commerce/20250826_2034_Tabuas%20de%20Corte%20Elegantes_remix_01k3mbmn9meysrfewqn994zs3b%20%281%29.png",
      instagram: "https://www.instagram.com/katuchef/",
      instagramHandle: "@katuchef",
    },
  ]

  return (
    <section id="products" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">{t("products.title")}</h2>
          <p className="text-lg text-[#334155] max-w-2xl mx-auto">{t("products.subtitle")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {products.map((product) => (
            <Card key={product.titleKey} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={t(product.titleKey)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-[#0A192F]">{t(product.titleKey)}</CardTitle>
                <div className="text-3xl font-bold text-[#2563EB] mt-2">{t(product.priceKey)}</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-[#334155] leading-relaxed">
                  {t(product.descriptionKey)}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button
                  size="lg"
                  className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white"
                  asChild
                >
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    {t(product.buttonKey)}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <a
                  href={product.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-[#334155] hover:text-[#2563EB] transition-colors text-sm"
                >
                  <Instagram className="h-4 w-4" />
                  <span>{product.instagramHandle}</span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
