import { ArrowRight, Cloud, Lock, Users } from 'lucide-react'

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Store, share, and collaborate with Dropbox-9
            </h1>
            <p className="text-xl mb-8">
              The secure cloud storage solution for all your files, accessible from anywhere.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition">
                Get Started - Free
              </button>
              <button className="bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800 transition">
                View Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why choose Dropbox-9?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Cloud className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Storage</h3>
              <p className="text-gray-600 mb-4">
                Store all your files securely in the cloud and access them from any device, anywhere.
              </p>
              <a href="#" className="text-blue-600 font-medium flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600 mb-4">
                Share files easily and collaborate with teammates in real-time for increased productivity.
              </p>
              <a href="#" className="text-blue-600 font-medium flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Lock className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security</h3>
              <p className="text-gray-600 mb-4">
                Keep your files safe with advanced encryption and secure sharing options.
              </p>
              <a href="#" className="text-blue-600 font-medium flex items-center">
                Learn more <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started with Dropbox-9?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join millions of users who trust Dropbox-9 for their file storage and sharing needs.
          </p>
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Sign Up Now - Free
          </button>
        </div>
      </section>
    </div>
  )
}