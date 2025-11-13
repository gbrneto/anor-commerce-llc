import { Zap, Building2, Shield, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Building2,
    title: "Hybrid Sales Hub",
    description: "Managing both DTC brands and scalable info-products with proven systems.",
  },
  {
    icon: Zap,
    title: "Cross-Border Infrastructure",
    description: "US LLC security with LATAM logistics for seamless physical and digital product delivery.",
  },
  {
    icon: Shield,
    title: "Compliance & Banking",
    description: "Strict adherence to regulations for Tier-1 gateways with transparent operations.",
  },
  {
    icon: TrendingUp,
    title: "Growth Ecosystem",
    description: "Centralized marketing & dev teams driving performance across all verticals.",
  },
]

export default function BusinessModel() {
  return (
    <section id="business-model" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">Operational Business Model</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center">
                <div className="mb-6 mx-auto h-16 w-16 rounded-full bg-[#2563EB] flex items-center justify-center">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] mb-3">{feature.title}</h3>
                <p className="text-base text-[#334155] leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
