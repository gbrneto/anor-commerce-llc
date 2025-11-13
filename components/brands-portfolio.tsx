import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, ChefHat, Sprout } from "lucide-react"

const brands = [
  {
    title: "Petloo",
    description: "Líder em produtos personalizados para pets.",
    icon: ShoppingBag,
  },
  {
    title: "Katuchef",
    description: "Inovação para sua cozinha.",
    icon: ChefHat,
  },
  {
    title: "Versia Garden",
    description: "Soluções inteligentes para germinação de sementes.",
    icon: Sprout,
  },
]

export default function BrandsPortfolio() {
  return (
    <section id="brands" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">Our E-commerce Ecosystem</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {brands.map((brand) => {
            const Icon = brand.icon
            return (
              <Card key={brand.title} className="border-none shadow-md hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <div className="mb-4 h-12 w-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[#2563EB]" />
                  </div>
                  <CardTitle className="text-2xl text-[#0A192F]">{brand.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[#334155] leading-relaxed">
                    {brand.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
