import { Zap, Users, Globe } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Performance Marketing",
    description: "Data-driven strategies to acquire and retain customers across LATAM.",
  },
  {
    icon: Users,
    title: "Dedicated Customer Experience",
    description: "Best-in-class support ensuring high customer satisfaction and compliance.",
  },
  {
    icon: Globe,
    title: "US-LATAM Logistics & Compliance",
    description: "Seamless integration of US-based operations with Latin American payment and logistics.",
  },
]

export default function BusinessModel() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">A Hub for Scalable Operations</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
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
