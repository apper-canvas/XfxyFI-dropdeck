import { useState } from 'react'
import { Folder, File, MoreVertical, Download, Trash, Share, Edit } from 'lucide-react'

export function FileExplorer() {
  const [view, setView] = useState('grid')
  const [sortBy, setSortBy] = useState('name')
  
  // Sample data for file explorer
  const items = [
    { id: 1, type: 'folder', name: 'Documents', items: 15, modified: '2023-06-10' },
    { id: 2, type: 'folder', name: 'Images', items: 32, modified: '2023-06-15' },
    { id: 3, type: 'folder', name: 'Videos', items: 8, modified: '2023-06-20' },
    { id: 4, type: 'file', name: 'Project Proposal.pdf', size: '2.4 MB', modified: '2023-06-22' },
    { id: 5, type: 'file', name: 'Budget.xlsx', size: '1.8 MB', modified: '2023-06-24' },
    { id: 6, type: 'file', name: 'Presentation.pptx', size: '5.2 MB', modified: '2023-06-25' },
    { id: 7, type: 'file', name: 'Report.docx', size: '3.1 MB', modified: '2023-06-26' },
    { id: 8, type: 'file', name: 'Meeting Notes.txt', size: '12 KB', modified: '2023-06-28' },
  ]
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Files</h1>
        <div className="flex space-x-4">
          <div className="hidden md:flex items-center">
            <label htmlFor="sort" className="mr-2">Sort by:</label>
            <select 
              id="sort" 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Name</option>
              <option value="modified">Last Modified</option>
              <option value="size">Size</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => setView('list')}
              className={`p-2 rounded ${view === 'list' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
              aria-label="List view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button 
              onClick={() => setView('grid')}
              className={`p-2 rounded ${view === 'grid' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
              aria-label="Grid view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            </button>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Upload
          </button>
        </div>
      </div>
      
      {view === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition relative group">
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-gray-500 hover:text-gray-700">
                  <MoreVertical size={16} />
                </button>
              </div>
              <div className="flex justify-center mb-4">
                {item.type === 'folder' ? (
                  <Folder size={48} className="text-blue-500" />
                ) : (
                  <File size={48} className="text-gray-500" />
                )}
              </div>
              <h3 className="text-sm font-medium text-center truncate">{item.name}</h3>
              <p className="text-xs text-gray-500 text-center mt-1">
                {item.type === 'folder' ? `${item.items} items` : item.size}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modified</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {sortBy === 'size' ? 'Size' : 'Items/Size'}
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {item.type === 'folder' ? (
                        <Folder size={20} className="text-blue-500 mr-3" />
                      ) : (
                        <File size={20} className="text-gray-500 mr-3" />
                      )}
                      <span className="text-sm font-medium text-gray-900">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.modified}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.type === 'folder' ? `${item.items} items` : item.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-gray-500 hover:text-gray-700" aria-label="Share">
                        <Share size={16} />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700" aria-label={item.type === 'folder' ? "Open" : "Download"}>
                        {item.type === 'folder' ? <Edit size={16} /> : <Download size={16} />}
                      </button>
                      <button className="text-gray-500 hover:text-red-500" aria-label="Delete">
                        <Trash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}