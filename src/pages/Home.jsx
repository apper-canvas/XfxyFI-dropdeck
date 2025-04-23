import { useState } from "react";
import { motion } from "framer-motion";
import MainFeature from "../components/MainFeature";

const Home = () => {
  const [showFeature, setShowFeature] = useState(true);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Share Files</span> with Confidence
          </h1>
          <p className="text-lg text-surface-600 dark:text-surface-300 mb-8">
            Upload, organize, and share your files securely with Dropbox-6's intuitive platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setShowFeature(true)}
              className={`btn ${showFeature ? 'btn-primary' : 'btn-outline'}`}
            >
              Upload Files
            </button>
            <button 
              onClick={() => setShowFeature(false)}
              className={`btn ${!showFeature ? 'btn-primary' : 'btn-outline'}`}
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {showFeature ? (
        <MainFeature />
      ) : (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card p-6 hover:shadow-soft dark:hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-surface-600 dark:text-surface-400">{feature.description}</p>
            </div>
          ))}
        </motion.section>
      )}
    </div>
  );
};

const features = [
  {
    title: "Drag & Drop",
    description: "Simply drag your files into the upload area. Support for multiple files and folders.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3 3m0 0l-3-3m3 3V9" /></svg>
  },
  {
    title: "Secure Sharing",
    description: "Set passwords, expiration dates, and download limits for your shared files.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
  },
  {
    title: "File Organization",
    description: "Create folders, categorize files, and search through your content with ease.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
  }
];

export default Home;