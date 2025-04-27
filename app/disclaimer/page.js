import React from 'react'

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Disclaimer
        </h1>
        
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Website Disclaimer
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The information provided on this website is for general informational purposes only. 
              While we strive to keep the information up to date and accurate, we make no 
              representations or warranties of any kind about the completeness, accuracy, 
              reliability, suitability, or availability of the information contained on the website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              External Links
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to external websites. We have no control over 
              the content and nature of these external websites. The inclusion of any links 
              does not necessarily imply a recommendation or endorsement of the views expressed within them.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Use At Your Own Risk
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your use of any information or materials on this website is entirely at your own risk, 
              for which we shall not be liable. It shall be your own responsibility to ensure that any 
              products, services, or information available through this website meet your specific requirements.
            </p>
          </section>
        </div>

        <p className="text-sm text-gray-500 text-center mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}

export default Disclaimer