import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import TermsOfServiceClient from "./client"

export const metadata: Metadata = {
  title: "Terms of Service - Anor Commerce LLC",
  description: "Terms of Service for Anor Commerce LLC - US-based e-commerce holding company",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <TermsOfServiceClient />
      <Footer />
    </div>
  )
}
