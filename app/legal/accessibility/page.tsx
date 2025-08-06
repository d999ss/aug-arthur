export default function AccessibilityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-slate-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Accessibility Statement</h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Our commitment to digital accessibility
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              Arthur Companies is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conformance Status</h2>
            <p className="text-gray-600 mb-6">
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards to ensure our website is accessible to all users.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Features</h2>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>High contrast color schemes</li>
              <li>Descriptive alt text for images</li>
              <li>Clear heading structure</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Feedback</h2>
            <p className="text-gray-600">
              We welcome your feedback on the accessibility of our website. Please contact us at accessibility@arthurcompanies.com or (701) 967-8200 if you encounter any accessibility barriers.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
