import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Dropbox-14</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Store, share, and collaborate on files securely</h2>
        <p className="mb-4">
          Dropbox-14 is a modern file storage solution that lets you safely store your important 
          documents, photos, and videos in the cloud. Share them with others or keep them private.
        </p>
        <div className="flex justify-center">
          <Link 
            to="/upload" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Upload Your First File
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Secure Storage</h3>
          <p>Your files are encrypted and stored securely in our cloud servers.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Easy Sharing</h3>
          <p>Share files with anyone through secure links or collaborate with team members.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Access Anywhere</h3>
          <p>Access your files from any device, anywhere, anytime with our cloud-based solution.</p>
        </div>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Getting Started with Dropbox-14</h2>
        <ol className="list-decimal pl-5">
          <li className="mb-2">Create an account or sign in</li>
          <li className="mb-2">Upload your files through the Upload page</li>
          <li className="mb-2">Organize your files into folders</li>
          <li className="mb-2">Share files with others using secure links</li>
          <li>Access your files from any device</li>
        </ol>
      </div>
    </div>
  );
}