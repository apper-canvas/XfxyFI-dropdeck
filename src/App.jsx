import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { FileExplorer } from './pages/FileExplorer'
import { Menu, X, Upload, User } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header */}
        <header className="bg-blue-600 text-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold">Dropbox-9</h1>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <a href="/" className="px-3 py-2 rounded hover:bg-blue-700 transition">Home</a>
              <a href="/files" className="px-3 py-2 rounded hover:bg-blue-700 transition">My Files</a>
              <button className="flex items-center px-3 py-2 bg-blue-700 rounded hover:bg-blue-800 transition">
                <Upload size={18} className="mr-1" />
                Upload
              </button>
              <button className="flex items-center px-3 py-2 bg-blue-500 rounded hover:bg-blue-700 transition">
                <User size={18} className="mr-1" />
                Account
              </button>
            </nav>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-blue-700">
              <nav className="container mx-auto px-4 py-2 flex flex-col">
                <a href="/" className="px-3 py-2 rounded hover:bg-blue-600 transition">Home</a>
                <a href="/files" className="px-3 py-2 rounded hover:bg-blue-600 transition">My Files</a>
                <button className="flex items-center px-3 py-2 my-1 bg-blue-800 rounded hover:bg-blue-900 transition text-left">
                  <Upload size={18} className="mr-2" />
                  Upload
                </button>
                <button className="flex items-center px-3 py-2 my-1 bg-blue-600 rounded hover:bg-blue-800 transition text-left">
                  <User size={18} className="mr-2" />
                  Account
                </button>
              </nav>
            </div>
          )}
        </header>
        
        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/files" element={<FileExplorer />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Dropbox-9</h3>
                <p className="text-gray-400">Store, share, and collaborate on files securely from anywhere.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Features</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">File Storage</a></li>
                  <li><a href="#" className="hover:text-white transition">File Sharing</a></li>
                  <li><a href="#" className="hover:text-white transition">Collaboration</a></li>
                  <li><a href="#" className="hover:text-white transition">Security</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition">Tutorials</a></li>
                  <li><a href="#" className="hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition">Community</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">About</a></li>
                  <li><a href="#" className="hover:text-white transition">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
              <p>© 2023 Dropbox-9. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App