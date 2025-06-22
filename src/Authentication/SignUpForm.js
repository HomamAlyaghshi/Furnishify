import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <form className="p-6 sm:p-8 space-y-6 bg-white rounded-xl shadow-2xl border border-gray-100">
      {" "}
      {/* Enhanced container styling */}
      <div className="mb-6">
        {" "}
        {/* Adjusted margin-bottom for better flow */}
        {/* Title */}
        <h1 className="font-poppins text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center">
          {" "}
          {/* Larger, bolder, centered title */}
          Sign up
        </h1>
        <div className="flex flex-wrap items-center justify-center text-sm text-gray-600">
          {" "}
          {/* Centered text, flexible wrapping */}
          <p className="mr-1">Already have an account?</p>{" "}
          {/* Added margin-right for spacing */}
          <Link to="/">
            <button
              type="button" // Use type="button" for non-submit buttons
              className="text-kiwi font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-kiwi focus:ring-offset-2 focus:ring-opacity-70 transition-all duration-200" // Added hover and focus states
            >
              Sign in
            </button>
          </Link>
        </div>
      </div>
      <div className="space-y-6">
        {" "}
        {/* Consistent spacing for form fields */}
        {/* Your Name Field */}
        <div>
          <label
            htmlFor="full-name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your name
          </label>
          <input
            id="full-name"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-kiwi focus:border-transparent text-sm placeholder-gray-400 transition-all duration-200"
            placeholder="e.g., John Doe"
            aria-label="Enter your full name"
          />
        </div>
        {/* Username Field */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-kiwi focus:border-transparent text-sm placeholder-gray-400 transition-all duration-200"
            placeholder="e.g., johndoe_123"
            aria-label="Create a username"
          />
        </div>
        {/* Email Address Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email address
          </label>
          <input
            id="email"
            type="email" // Use type="email" for email inputs
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-kiwi focus:border-transparent text-sm placeholder-gray-400 transition-all duration-200"
            placeholder="e.g., you@example.com"
            aria-label="Enter your email address"
          />
        </div>
        {/* Password Field */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <EyeIcon
              className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200"
              aria-label="Toggle password visibility"
            />
          </div>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-kiwi focus:border-transparent text-sm placeholder-gray-400 transition-all duration-200"
            placeholder="••••••••"
            aria-label="Create a password"
          />
        </div>
        {/* Terms and Conditions Checkbox */}
        <div className="flex items-start mt-4">
          {" "}
          {/* Use items-start for better alignment with longer text */}
          <input
            type="checkbox"
            id="terms-checkbox" // Unique and descriptive ID
            className="h-4 w-4 text-kiwi border-gray-300 rounded focus:ring-kiwi focus:ring-offset-0 cursor-pointer flex-shrink-0 mt-1" // Added flex-shrink-0 and mt-1 for alignment
            aria-label="Agree to Privacy Policy and Terms of Use"
          />
          <label
            htmlFor="terms-checkbox"
            className="ml-2 text-sm text-gray-700 cursor-pointer select-none"
          >
            I agree with{" "}
            <strong className="text-black hover:underline cursor-pointer">
              Privacy Policy
            </strong>{" "}
            and{" "}
            <strong className="text-black hover:underline cursor-pointer">
              Terms
            </strong>{" "}
            of Use
          </label>
        </div>
      </div>
      {/* Sign Up Button */}
      <Link to="/homepage" className="block mt-8">
        {" "}
        {/* Changed to block for full width Link, adjusted mt */}
        <button
          type="submit" // Correct type for a submit button
          className="w-full h-12 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg flex items-center justify-center
                     transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-opacity-70"
        >
          Sign Up
        </button>
      </Link>
    </form>
  );
};

export default SignUpForm;
