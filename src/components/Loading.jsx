import React from "react";

const LoadingDots = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900">
      <div className="flex space-x-4">
        <span className="w-6 h-6 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-6 h-6 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-6 h-6 bg-gray-500 rounded-full animate-bounce"></span>
      </div>
      <p className="mt-4 text-red-500 text-lg font-semibold animate-pulse">
        {text}
      </p>
    </div>
  );
};

export default LoadingDots;
