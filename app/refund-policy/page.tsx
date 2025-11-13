import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Refund Policy - Anor Commerce LLC",
  description: "Refund Policy for Anor Commerce LLC - Physical goods and digital products",
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-8 text-balance">Refund Policy</h1>

          <div className="space-y-8 text-[#334155] leading-relaxed">
            <p className="text-sm text-gray-500">Last Updated: January 2025</p>

            <div className="bg-blue-50 border-l-4 border-[#0EA5E9] p-6 rounded-r-lg">
              <p className="font-semibold text-[#0A192F] mb-2">Important Notice</p>
              <p>
                Anor Commerce LLC operates multiple brands offering both physical goods and digital information
                products. Our refund policies differ based on the type of product purchased. Please review the
                applicable section below.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">1. Refunds for Physical Goods</h2>
              <p className="mb-4">
                This section applies to physical products sold through our brands including but not limited to Petloo
                (pet supplies), Katuchef (kitchen and culinary products), and other consumer goods.
              </p>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">1.1 Return Eligibility</h3>
              <p className="mb-4">
                We want you to be completely satisfied with your purchase. If you are not satisfied with a physical
                product, you may request a return within <strong>30 days</strong> of the delivery date, provided the
                product meets the following conditions:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>The product is unused, unworn, and in the same condition that you received it</li>
                <li>The product is in its original packaging with all tags and labels attached</li>
                <li>The product has not been damaged, altered, or modified in any way</li>
                <li>You provide proof of purchase (order number or receipt)</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">1.2 Non-Returnable Items</h3>
              <p className="mb-4">Certain types of physical goods are not eligible for return, including:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Perishable goods (such as food items or pet treats)</li>
                <li>Personal care items or hygiene products that have been opened</li>
                <li>Products marked as "final sale" or "non-returnable" at the time of purchase</li>
                <li>Gift cards or promotional items</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">1.3 Return Process for Physical Goods</h3>
              <p className="mb-4">To initiate a return for a physical product:</p>
              <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
                <li>
                  Contact us at <strong>info@anorcommerce.com</strong> with your order number and reason for return
                </li>
                <li>Our customer service team will review your request within 2 business days</li>
                <li>If approved, you will receive return shipping instructions and a return authorization number</li>
                <li>
                  Ship the product back to us using a trackable shipping method (you may be responsible for return
                  shipping costs unless the product arrived damaged or defective)
                </li>
                <li>Once we receive and inspect the returned item, we will process your refund</li>
              </ol>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">1.4 Damaged or Defective Products</h3>
              <p className="mb-4">
                If you receive a damaged or defective physical product, please contact us immediately at{" "}
                <strong>info@anorcommerce.com</strong> with photos of the damage or defect. We will provide a prepaid
                return label and issue a full refund or replacement at no additional cost to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">
                2. Refunds for Digital Products & Info-Products
              </h2>
              <p className="mb-4">
                This section applies to all digital information products ("Info-Products"), including but not limited to
                online courses, training programs, e-books, digital downloads, webinars, coaching programs, and other
                digital content.
              </p>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">2.1 General Policy</h3>
              <p className="mb-4">
                Due to the instant nature of digital product delivery and to protect our intellectual property,{" "}
                <strong>all sales of digital products and info-products are final</strong>. Once you have been granted
                access to the digital content, you cannot request a refund.
              </p>
              <p className="mb-4">
                By purchasing a digital product, you acknowledge that you have read and understood the product
                description, features, and any preview materials provided, and that you waive your right to cancel or
                request a refund.
              </p>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">2.2 Exceptions</h3>
              <p className="mb-4">
                We may, at our sole discretion, provide refunds for digital products in the following exceptional
                circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>
                  <strong>Non-Delivery:</strong> If you did not receive access to the digital product within 48 hours of
                  purchase and we are unable to provide access after you contact us
                </li>
                <li>
                  <strong>Technical Issues:</strong> If the digital product is fundamentally broken or inaccessible due
                  to technical errors on our platform, and we are unable to resolve the issue within a reasonable
                  timeframe
                </li>
                <li>
                  <strong>Duplicate Purchase:</strong> If you accidentally purchased the same digital product multiple
                  times and contact us within 48 hours
                </li>
                <li>
                  <strong>Unauthorized Transaction:</strong> If your payment method was used without your authorization
                  (subject to verification)
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">
                2.3 Legal Warranty Period (Brazilian Customers)
              </h3>
              <p className="mb-4">
                For customers located in Brazil, in accordance with the Brazilian Consumer Defense Code (Código de
                Defesa do Consumidor - CDC), you have the right to cancel your purchase of digital products within{" "}
                <strong>7 days</strong> from the date of purchase or from the date you received access to the digital
                content, whichever is later, provided that:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>You have not accessed or downloaded more than 20% of the digital content</li>
                <li>You submit your cancellation request via email to info@anorcommerce.com</li>
              </ul>
              <p className="mb-4">
                This right of withdrawal is a consumer protection measure under Brazilian law and applies only to
                customers with a billing address in Brazil. Refunds for Brazilian customers will be processed in
                accordance with local regulations.
              </p>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">2.4 No Refunds After Content Access</h3>
              <p className="mb-4">
                Once you have accessed, viewed, downloaded, or consumed any portion of the digital product beyond the
                preview materials, you are not eligible for a refund except as required by applicable law or as outlined
                in Section 2.3 above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">3. How to Request a Refund</h2>
              <p className="mb-4">
                To request a refund for either physical goods or digital products (where eligible), please follow these
                steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
                <li>
                  Send an email to <strong>info@anorcommerce.com</strong> with the subject line "Refund Request"
                </li>
                <li>Include the following information in your email:</li>
                <ul className="list-disc list-inside space-y-1 ml-8 mt-2 mb-2">
                  <li>Your full name and email address used for the purchase</li>
                  <li>Order number or transaction ID</li>
                  <li>Product name and type (physical or digital)</li>
                  <li>Reason for requesting a refund</li>
                  <li>For physical goods: Photos if the product is damaged or defective</li>
                </ul>
                <li>Our customer service team will review your request and respond within 2-3 business days</li>
                <li>If your refund is approved, we will provide further instructions</li>
              </ol>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
                <p className="font-semibold text-[#0A192F] mb-2">Contact Information:</p>
                <p className="mb-1">Email: info@anorcommerce.com</p>
                <p className="mb-1">Company: Anor Commerce LLC</p>
                <p className="mb-1">Address: 1209 MOUNTAIN ROAD PL NE STE R, ALBUQUERQUE, NM 87110</p>
                <p>EIN: 30-1462603</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">4. Processing Time</h2>
              <p className="mb-4">
                Once your refund request has been approved, we will process the refund according to the following
                timeline:
              </p>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">4.1 Physical Goods</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>
                  <strong>Inspection Period:</strong> 3-5 business days after we receive the returned product
                </li>
                <li>
                  <strong>Refund Processing:</strong> 5-10 business days after inspection is complete
                </li>
                <li>
                  <strong>Total Time:</strong> You can expect to see the refund in your account within 8-15 business
                  days from when we receive the returned item
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">
                4.2 Digital Products (Eligible Cases Only)
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>
                  <strong>Review Period:</strong> 2-3 business days to verify eligibility
                </li>
                <li>
                  <strong>Refund Processing:</strong> 5-7 business days after approval
                </li>
                <li>
                  <strong>Total Time:</strong> You can expect to see the refund in your account within 7-10 business
                  days from your initial request
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">4.3 Payment Method</h3>
              <p className="mb-4">
                Refunds will be issued to the original payment method used for the purchase. If the original payment
                method is no longer valid or available, please contact us at <strong>info@anorcommerce.com</strong> to
                arrange an alternative refund method.
              </p>
              <p className="mb-4">
                Please note that depending on your bank or credit card company, it may take an additional 2-5 business
                days for the refund to appear in your account after we process it.
              </p>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">4.4 International Customers</h3>
              <p className="mb-4">
                For international customers, especially those in Brazil and other LATAM countries, please be aware that
                currency conversion rates and international transaction fees may affect the final refund amount. We
                process refunds in the original transaction currency whenever possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">5. Exchanges</h2>
              <p className="mb-4">
                We currently do not offer direct exchanges. If you wish to exchange a physical product for a different
                size, color, or model, you must:
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
                <li>Request a refund for the original product following our standard return process</li>
                <li>Place a new order for the desired product once the refund has been approved</li>
              </ol>
              <p className="mb-4">
                Please note that we cannot guarantee availability of the replacement product at the time of your new
                order.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">6. Partial Refunds</h2>
              <p className="mb-4">
                In certain situations, partial refunds may be granted at our discretion, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>
                  Physical products that show obvious signs of use or damage not caused by our company or shipping
                  carrier
                </li>
                <li>Physical products returned more than 30 days after delivery</li>
                <li>
                  Physical products that are missing parts or accessories that were included in the original package
                </li>
                <li>Bundle purchases where only certain items are eligible for return</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">7. Questions and Support</h2>
              <p className="mb-4">
                If you have any questions about our Refund Policy or need assistance with a return or refund request,
                our customer service team is here to help. Please contact us at:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#0EA5E9]">
                <p className="font-semibold text-[#0A192F] mb-3">Anor Commerce LLC Customer Service</p>
                <p className="mb-2">
                  <strong>Email:</strong> info@anorcommerce.com
                </p>
                <p className="mb-2">
                  <strong>Address:</strong> 1209 MOUNTAIN ROAD PL NE STE R, ALBUQUERQUE, NM 87110, United States
                </p>
                <p className="mb-2">
                  <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM (Mountain Time)
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  We typically respond to all refund inquiries within 2-3 business days.
                </p>
              </div>
            </section>

            <section className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">
                This Refund Policy is part of our Terms of Service. By making a purchase from Anor Commerce LLC or any
                of our brands, you acknowledge that you have read, understood, and agree to this Refund Policy.
              </p>
              <p className="text-sm text-gray-600 italic mt-4">
                We reserve the right to update or modify this Refund Policy at any time. Any changes will be effective
                immediately upon posting on our website.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
