import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ShippingPolicyClient from "./client"

export const metadata: Metadata = {
  title: "Shipping Policy - Anor Commerce LLC",
  description: "Shipping Policy for Anor Commerce LLC - Physical and digital product delivery information",
}

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ShippingPolicyClient />
      <Footer />
    </div>
  )
}
