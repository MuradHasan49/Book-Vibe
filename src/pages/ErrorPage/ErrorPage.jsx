import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white overflow-hidden relative">
   
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="text-center z-10 px-6">
  
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20 
          }}
          className="text-[12rem] font-black leading-none tracking-tighter"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-600 drop-shadow-sm">
            404
          </span>
        </motion.h1>

     
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <h2 className="mt-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Lost in the Library?
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-500 max-w-md mx-auto text-lg"
        >
          The page you're looking for has been moved to a restricted section or 
          never existed in our archives.
        </motion.p>

  
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="group relative px-8 py-4 font-bold text-white transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-green-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-2 border-gray-900"></span>
            <span className="relative">Back to Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 font-bold text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300"
          >
            Previous Page
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;