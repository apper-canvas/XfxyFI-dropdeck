import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import { FileContextProvider } from './context/FileContext';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <FileContextProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={toggleSidebar}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <h1 className="text-xl font-bold text-gray-800">Dropbox-13</h1>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                  Upload
                </button>
                <div className="relative">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User profile"
                  />
                </div>
              </div>
            </div>
          </header>

          {/* Sidebar and Main Content */}
          <div className="container mx-auto px-4 py-8 flex">
            {/* Sidebar */}
            <aside className={`w-64 bg-white shadow-md rounded-lg p-4 mr-8 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static top-0 left-0 h-full lg:h-auto z-10`}>
              <nav className="mt-4">
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                      Files
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      Shared
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                      Trash
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 ${isSidebarOpen ? 'lg:ml-0' : ''}`}>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
          </div>
          
          {/* Footer */}
          <footer className="bg-white border-t mt-8 py-4">
            <div className="container mx-auto px-4">
              <p className="text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Dropbox-13. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </FileContextProvider>
  );
}

export default App;