export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-slate-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Terms of Use</h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Terms and conditions for using our website and services
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              These terms of use govern your access to and use of Arthur Companies' website and services.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing or using our website, you agree to be bound by these terms of use and all applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily access the materials on Arthur Companies' website for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              The materials on Arthur Companies' website are provided on an 'as is' basis. Arthur Companies makes no warranties, expressed or implied.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600">
              For questions about these terms, please contact us at legal@arthurcompanies.com or (701) 967-8200.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
