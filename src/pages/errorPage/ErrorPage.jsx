import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold mb-4">404</h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="btn btn-primary px-6 py-2 rounded-full font-semibold transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn px-6 py-2 rounded-full hover:bg-white hover:text-indigo-600 transition"
          >
            Go Back
          </button>
        </div>

        {/* Extra */}
        <p className="mt-6 text-sm text-gray-600">
          Need help? Contact support.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;