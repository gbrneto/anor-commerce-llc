import Header from "@/components/header"
import Hero from "@/components/hero"
import BrandsPortfolio from "@/components/brands-portfolio"
import AboutUs from "@/components/about-us"
import BusinessModel from "@/components/business-model"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BrandsPortfolio />
        <AboutUs />
        <BusinessModel />
      </main>
      <Footer />
    </div>
  )
}
