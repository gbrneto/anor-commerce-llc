import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - Anor Commerce LLC",
  description: "Privacy Policy for Anor Commerce LLC - Protecting your data and privacy",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-8 text-balance">Privacy Policy</h1>

          <div className="space-y-8 text-[#334155] leading-relaxed">
            <p className="text-sm text-gray-500">Last Updated: January 2025</p>

            <p className="mb-4">
              At Anor Commerce LLC ("Company," "we," "our," or "us"), we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our websites, use our services, or purchase our
              products.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">1.1 Personal Data</h3>
              <p className="mb-4">
                We collect personal information that you voluntarily provide to us when you register on our websites,
                place an order, subscribe to our newsletter, respond to a survey, or otherwise interact with our
                Services. The personal information we collect may include:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (credit card details, billing information)</li>
                <li>Account credentials (username, password)</li>
                <li>Purchase history and preferences</li>
                <li>Communications you send to us</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">1.2 Usage Data</h3>
              <p className="mb-4">
                We automatically collect certain information when you visit, use, or navigate our Services. This
                information does not reveal your specific identity but may include:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Log data (access times, pages viewed, links clicked)</li>
                <li>Location data (derived from IP address)</li>
                <li>Referring website addresses</li>
                <li>Search queries and interactions with our content</li>
                <li>Device identifiers and mobile network information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect or receive for various purposes, including:</p>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">2.1 Order Fulfillment</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Processing and fulfilling your orders for physical goods and digital products</li>
                <li>Managing payments, fees, and charges</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Sending order confirmations, shipping updates, and delivery notifications</li>
                <li>Processing returns, exchanges, and refunds</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">2.2 Marketing and Communications</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Sending promotional emails about new products, special offers, and other information</li>
                <li>Personalizing your experience and delivering targeted advertising</li>
                <li>Conducting market research and analyzing customer trends</li>
                <li>Administering contests, promotions, and surveys</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">2.3 Business Operations</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Maintaining and improving our Services</li>
                <li>Detecting and preventing fraud, security incidents, and illegal activities</li>
                <li>Complying with legal obligations and enforcing our terms</li>
                <li>Analyzing usage patterns and optimizing website performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">3. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies, web beacons, tracking pixels, and similar technologies to collect information about your
                browsing activities and interactions with our Services. Cookies are small data files stored on your
                device that help us improve our Services and your experience.
              </p>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">Types of Cookies We Use:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>
                  <strong>Essential Cookies:</strong> Required for the operation of our website (authentication,
                  security, shopping cart functionality)
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by
                  collecting and reporting information anonymously
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Track your online activity to help deliver more relevant
                  advertising or to limit how many times you see an ad
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Enable our website to remember information that changes the way
                  the website behaves or looks (language, region)
                </li>
              </ul>

              <p className="mb-4">
                You can control cookies through your browser settings. However, disabling cookies may limit your ability
                to use certain features of our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">4. Data Sharing</h2>
              <p className="mb-4">We may share your information with third parties in the following circumstances:</p>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">
                4.1 Third-Party Vendors and Service Providers
              </h3>
              <p className="mb-4">
                We work with trusted third-party service providers to help us operate our business and deliver services
                to you, including:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Shipping and logistics companies for order delivery</li>
                <li>Email service providers for marketing communications</li>
                <li>Cloud storage and hosting providers</li>
                <li>Analytics platforms to understand website usage</li>
                <li>Customer support platforms</li>
                <li>Marketing and advertising partners</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">4.2 Payment Processors</h3>
              <p className="mb-4">
                We use secure third-party payment processors to handle all payment transactions. Your payment
                information is transmitted directly to these processors and is subject to their privacy policies. We do
                not store complete credit card information on our servers. Payment processors we work with include
                industry-standard providers that comply with PCI DSS (Payment Card Industry Data Security Standard).
              </p>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">4.3 Legal Requirements</h3>
              <p className="mb-4">
                We may disclose your information when required by law, regulation, legal process, or governmental
                request, or to protect the rights, property, or safety of Anor Commerce LLC, our customers, or others.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Encryption of sensitive data using SSL/TLS technology</li>
                <li>Secure servers with restricted access</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on data protection and privacy practices</li>
                <li>Multi-factor authentication for administrative access</li>
                <li>Regular backups and disaster recovery procedures</li>
              </ul>
              <p className="mb-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we
                strive to protect your personal information, we cannot guarantee its absolute security. You are
                responsible for maintaining the confidentiality of your account credentials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">
                6. International Data Transfers (especially to Brazil/LATAM)
              </h2>
              <p className="mb-4">
                Anor Commerce LLC is based in the United States and operates e-commerce platforms that serve customers
                in Latin America, including Brazil, Colombia, Mexico, and other LATAM countries. When you use our
                Services, your personal information may be transferred to, stored, and processed in the United States
                and other countries where our service providers operate.
              </p>
              <p className="mb-4">
                These countries may have data protection laws that differ from those in your country of residence. When
                we transfer personal information internationally, we implement appropriate safeguards to ensure your
                data remains protected in accordance with this Privacy Policy and applicable laws, including:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Standard contractual clauses approved by relevant data protection authorities</li>
                <li>Compliance with cross-border data transfer regulations</li>
                <li>Ensuring service providers maintain adequate data protection standards</li>
                <li>Regular assessments of data protection practices in countries where data is processed</li>
              </ul>
              <p className="mb-4">
                For customers in Brazil, we comply with the Lei Geral de Proteção de Dados (LGPD - Brazilian General
                Data Protection Law). For customers in the European Economic Area, we comply with the General Data
                Protection Regulation (GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">
                7. User Rights (GDPR and LGPD Compliance for Brazilian Users)
              </h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information under
                applicable data protection laws, including GDPR (for European users) and LGPD (for Brazilian users).
              </p>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">Your Rights May Include:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>
                  <strong>Right to Access:</strong> Request copies of your personal information and details about how we
                  process it
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal
                  information
                </li>
                <li>
                  <strong>Right to Erasure (Right to be Forgotten):</strong> Request deletion of your personal
                  information under certain circumstances
                </li>
                <li>
                  <strong>Right to Restriction:</strong> Request that we limit the processing of your personal
                  information
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Receive your personal information in a structured,
                  commonly used format
                </li>
                <li>
                  <strong>Right to Object:</strong> Object to our processing of your personal information, particularly
                  for marketing purposes
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Withdraw consent for processing activities that require
                  your consent
                </li>
                <li>
                  <strong>Right to Lodge a Complaint:</strong> File a complaint with your local data protection
                  authority
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">For Brazilian Users (LGPD Compliance):</h3>
              <p className="mb-4">
                If you are a resident of Brazil, you have specific rights under the Lei Geral de Proteção de Dados
                (LGPD), including the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Confirm whether we process your personal data</li>
                <li>Access your personal data</li>
                <li>Correct incomplete, inaccurate, or outdated data</li>
                <li>Request anonymization, blocking, or deletion of unnecessary or excessive data</li>
                <li>Request data portability to another service provider</li>
                <li>Request deletion of personal data processed with your consent</li>
                <li>Obtain information about entities with which we share your data</li>
                <li>Obtain information about the possibility of denying consent and its consequences</li>
                <li>Revoke consent</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0A192F] mb-3 mt-6">How to Exercise Your Rights:</h3>
              <p className="mb-4">
                To exercise any of these rights, please contact us at info@anorcommerce.com with your specific request.
                We will respond to your request within the timeframe required by applicable law (typically 30 days for
                GDPR and 15 days for LGPD). We may need to verify your identity before processing your request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">8. Contact Us</h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="font-semibold text-[#0A192F] mb-2">Anor Commerce LLC</p>
                <p className="mb-1">Privacy Officer</p>
                <p className="mb-1">1209 MOUNTAIN ROAD PL NE STE R</p>
                <p className="mb-1">ALBUQUERQUE, NM 87110</p>
                <p className="mb-1">United States of America</p>
                <p className="mb-1">Email: info@anorcommerce.com</p>
                <p>EIN: 30-1462603</p>
              </div>
              <p className="mt-4">
                For Brazilian users seeking to exercise LGPD rights, please include "LGPD Request" in your email subject
                line. For European users seeking to exercise GDPR rights, please include "GDPR Request" in your email
                subject line.
              </p>
            </section>

            <section className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">
                By using our Services, you acknowledge that you have read and understood this Privacy Policy and consent
                to the collection, use, and disclosure of your information as described herein.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
