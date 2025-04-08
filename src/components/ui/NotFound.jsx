import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center h-full text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <Link to="/" className="text-blue-400 underline hover:text-blue-600 ">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
