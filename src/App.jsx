import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Upload } from './pages/Upload';
import { FilesView } from './pages/FilesView';
import { FilePreview } from './pages/FilePreview';
import { Settings } from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-gray-900">Dropbox-14</h1>
              <nav className="flex space-x-4">
                <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
                <a href="/upload" className="text-gray-600 hover:text-gray-900">Upload</a>
                <a href="/files" className="text-gray-600 hover:text-gray-900">Files</a>
                <a href="/settings" className="text-gray-600 hover:text-gray-900">Settings</a>
              </nav>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/files" element={<FilesView />} />
            <Route path="/files/:fileId" element={<FilePreview />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>

        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Dropbox-14. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;