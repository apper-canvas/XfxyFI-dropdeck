import { createContext, useState } from 'react';

export const FileContext = createContext();

export const FileContextProvider = ({ children }) => {
  const [files, setFiles] = useState([
    {
      id: 1,
      name: 'Project Proposal.docx',
      type: 'document',
      size: '2.4 MB',
      modifiedDate: 'Aug 15, 2023'
    },
    {
      id: 2,
      name: 'Presentation.pptx',
      type: 'document',
      size: '5.7 MB',
      modifiedDate: 'Aug 12, 2023'
    },
    {
      id: 3,
      name: 'Budget.xlsx',
      type: 'document',
      size: '1.2 MB',
      modifiedDate: 'Aug 10, 2023'
    },
    {
      id: 4,
      name: 'Team Photo.jpg',
      type: 'image',
      size: '3.5 MB',
      modifiedDate: 'Aug 5, 2023'
    },
    {
      id: 5,
      name: 'Client Meeting Notes.pdf',
      type: 'document',
      size: '0.8 MB',
      modifiedDate: 'Jul 28, 2023'
    }
  ]);

  const addFile = (file) => {
    setFiles([...files, file]);
  };

  const deleteFile = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };

  return (
    <FileContext.Provider value={{ files, addFile, deleteFile }}>
      {children}
    </FileContext.Provider>
  );
};