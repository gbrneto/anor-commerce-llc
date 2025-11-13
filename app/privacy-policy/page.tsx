import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PrivacyPolicyClient from "./client"

export const metadata: Metadata = {
  title: "Privacy Policy - Anor Commerce LLC",
  description: "Privacy Policy for Anor Commerce LLC - Protecting your data and privacy",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <PrivacyPolicyClient />
      <Footer />
    </div>
  )
}
