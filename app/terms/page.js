import React from 'react'

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-24">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4059AC] mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Please read these terms and conditions carefully before using our services.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Acceptance Section */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            By accessing and using TaxSlick's services, you acknowledge that you have read,
            understood, and agree to be bound by these Terms and Conditions.
          </p>
        </section>

        {/* Services Section */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            2. Services
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            TaxSlick provides GST registration and related services. We reserve the right
            to modify, suspend, or discontinue any part of our services at any time.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>GST Registration Services</li>
            <li>Documentation Support</li>
            <li>Professional Consultation</li>
            <li>Compliance Assistance</li>
          </ul>
        </section>

        {/* User Obligations */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            3. User Obligations
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Users must provide accurate and complete information for GST registration
            and related services. False or misleading information may result in service
            termination.
          </p>
        </section>

        {/* Privacy & Data */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            4. Privacy & Data Protection
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your privacy is important to us. We handle your data in accordance with our
            Privacy Policy and applicable data protection laws.
          </p>
        </section>

        {/* Contact Info */}
        <section className="bg-[#4059AC]/5 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-[#4059AC] mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms & Conditions, please contact us:
          </p>
          <div className="flex items-center gap-2 text-[#4059AC]">
            <span>Email:</span>
            <a href="mailto:sales@taxslick.com" className="hover:underline">
              sales@taxslick.com
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Terms