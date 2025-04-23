import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, Check, AlertCircle, File, FileText, FileImage, FileAudio, FileVideo, FilePlus } from "lucide-react";

const MainFeature = () => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [uploadStatus, setUploadStatus] = useState({});
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const handleFileInputChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    processFiles(selectedFiles);
  };

  const processFiles = (newFiles) => {
    // Filter out files that are already in the list
    const uniqueNewFiles = newFiles.filter(
      newFile => !files.some(file => 
        file.name === newFile.name && 
        file.size === newFile.size && 
        file.lastModified === newFile.lastModified
      )
    );

    if (uniqueNewFiles.length === 0) return;

    // Add new files to the list
    setFiles(prevFiles => [...prevFiles, ...uniqueNewFiles]);

    // Initialize progress for each new file
    const newProgress = { ...uploadProgress };
    const newStatus = { ...uploadStatus };

    uniqueNewFiles.forEach(file => {
      const fileId = generateFileId(file);
      newProgress[fileId] = 0;
      newStatus[fileId] = 'pending';
      
      // Simulate upload progress
      simulateFileUpload(file, fileId);
    });

    setUploadProgress(newProgress);
    setUploadStatus(newStatus);
  };

  const simulateFileUpload = (file, fileId) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        setUploadStatus(prev => ({
          ...prev,
          [fileId]: 'complete'
        }));
      }
      
      setUploadProgress(prev => ({
        ...prev,
        [fileId]: Math.min(progress, 100)
      }));
    }, 300);
  };

  const generateFileId = (file) => {
    return `${file.name}-${file.size}-${file.lastModified}`;
  };

  const removeFile = (fileToRemove) => {
    const fileId = generateFileId(fileToRemove);
    
    setFiles(prevFiles => prevFiles.filter(file => generateFileId(file) !== fileId));
    
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[fileId];
      return newProgress;
    });
    
    setUploadStatus(prev => {
      const newStatus = { ...prev };
      delete newStatus[fileId];
      return newStatus;
    });
  };

  const getFileIcon = (file) => {
    const type = file.type.split('/')[0];
    
    switch (type) {
      case 'image':
        return <FileImage size={20} className="text-blue-500" />;
      case 'audio':
        return <FileAudio size={20} className="text-purple-500" />;
      case 'video':
        return <FileVideo size={20} className="text-red-500" />;
      case 'text':
        return <FileText size={20} className="text-green-500" />;
      default:
        return <File size={20} className="text-gray-500" />;
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const clearAllFiles = () => {
    setFiles([]);
    setUploadProgress({});
    setUploadStatus({});
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="card mb-6">
        <div 
          className={`p-8 border-2 border-dashed rounded-xl transition-all duration-300 ${
            isDragging 
              ? 'border-primary bg-primary/5 dark:bg-primary/10' 
              : 'border-surface-300 dark:border-surface-700'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="text-center">
            <motion.div 
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center"
              animate={{ 
                scale: isDragging ? 1.1 : 1,
                backgroundColor: isDragging ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'
              }}
            >
              <Upload size={28} className="text-primary" />
            </motion.div>
            
            <h3 className="text-xl font-semibold mb-2">
              {isDragging ? "Drop files here" : "Drag & Drop Files"}
            </h3>
            
            <p className="text-surface-600 dark:text-surface-400 mb-4">
              or click to browse from your device
            </p>
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              className="hidden"
              multiple
            />
            
            <button
              onClick={() => fileInputRef.current.click()}
              className="btn btn-primary"
            >
              Select Files
            </button>
          </div>
        </div>
      </div>

      {files.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="card overflow-hidden"
        >
          <div className="p-4 bg-surface-100 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700 flex items-center justify-between">
            <h3 className="font-semibold">Uploaded Files ({files.length})</h3>
            <button 
              onClick={clearAllFiles}
              className="text-surface-500 hover:text-surface-700 dark:hover:text-surface-300 text-sm font-medium"
            >
              Clear All
            </button>
          </div>
          
          <div className="divide-y divide-surface-200 dark:divide-surface-700 max-h-96 overflow-y-auto scrollbar-hide">
            <AnimatePresence>
              {files.map((file, index) => {
                const fileId = generateFileId(file);
                const progress = uploadProgress[fileId] || 0;
                const status = uploadStatus[fileId] || 'pending';
                
                return (
                  <motion.div
                    key={fileId}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
                      {getFileIcon(file)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium truncate">{file.name}</p>
                        <span className="text-xs text-surface-500 dark:text-surface-400">
                          {formatFileSize(file.size)}
                        </span>
                      </div>
                      
                      <div className="w-full bg-surface-200 dark:bg-surface-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            status === 'complete' 
                              ? 'bg-secondary' 
                              : status === 'error' 
                                ? 'bg-red-500' 
                                : 'bg-primary'
                          }`}
                          initial={{ width: '0%' }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {status === 'complete' ? (
                        <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                          <Check size={14} className="text-secondary" />
                        </span>
                      ) : status === 'error' ? (
                        <span className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                          <AlertCircle size={14} className="text-red-500" />
                        </span>
                      ) : (
                        <span className="text-xs font-medium text-surface-500">
                          {Math.round(progress)}%
                        </span>
                      )}
                      
                      <button
                        onClick={() => removeFile(file)}
                        className="w-6 h-6 rounded-full hover:bg-surface-200 dark:hover:bg-surface-700 flex items-center justify-center"
                      >
                        <X size={14} className="text-surface-500" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          
          <div className="p-4 bg-surface-50 dark:bg-surface-800 border-t border-surface-200 dark:border-surface-700">
            <div className="flex justify-between items-center">
              <div className="text-sm text-surface-600 dark:text-surface-400">
                {Object.values(uploadStatus).filter(status => status === 'complete').length} of {files.length} uploads complete
              </div>
              
              <button 
                className="btn btn-primary flex items-center gap-2"
                onClick={() => fileInputRef.current.click()}
              >
                <FilePlus size={18} />
                <span>Add More</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
      
      {files.length > 0 && (
        <div className="mt-6 text-center">
          <p className="text-sm text-surface-500 dark:text-surface-400 mb-2">
            Need to share these files?
          </p>
          <button className="btn btn-secondary">
            Generate Share Link
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default MainFeature;