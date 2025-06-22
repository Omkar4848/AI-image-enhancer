import React from "react";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex flex-col items-center justify-center px-4 py-12">
      {/* Header Section */}
      <div className="max-w-3xl w-full text-center mb-12 px-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4 tracking-tight">
          AI Image Enhancer
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 font-medium">
          Upload your image and let AI enhance it in seconds — crisp, clear, and
          fast.
        </p>
      </div>

      {/* Upload Component */}
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8">
        <Home />
      </div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-500">
        🚀 Powered by AI • Built with React & Picwish❤️
      </footer>
    </div>
  );
};

export default App;
