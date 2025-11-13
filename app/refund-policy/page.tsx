import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import RefundPolicyClient from "./client"

export const metadata: Metadata = {
  title: "Refund Policy - Anor Commerce LLC",
  description: "Refund Policy for Anor Commerce LLC - Physical goods and digital products",
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <RefundPolicyClient />
      <Footer />
    </div>
  )
}
