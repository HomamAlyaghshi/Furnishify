import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <form className="p-6 sm:p-8 space-y-6">
      {" "}
      {/* Adjusted padding and added spacing */}
      <h1 className="font-poppins text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
        {" "}
        {/* Larger, bolder title */}
        Sign In
      </h1>
      <div className="flex items-center text-sm text-gray-600 mb-6">
        {" "}
        {/* Adjusted text size and color */}
        <p>Don’t have an account yet?</p>
        <Link to="/signup">
          <button
            type="button" // Use type="button" for non-submit buttons
            className="text-kiwi font-bold ml-1 hover:underline focus:outline-none focus:ring-2 focus:ring-kiwi focus:ring-opacity-50 transition-all duration-200" // Added hover and focus states
          >
            Sign Up
          </button>
        </Link>
      </div>
      <div className="space-y-6">
        {" "}
        {/* Grouping form fields with consistent spacing */}
        {/* Username/Email Field */}
        <div>
          <label
            htmlFor="username-email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {" "}
            {/* Improved label styling */}
            Your username or email address
          </label>
          <input
            id="username-email"
            type="text" // Explicitly define type
            className="w-full border-b-2 border-gray-300 focus:border-kiwi outline-none p-2 text-sm transition-all duration-200 placeholder-gray-400" // Improved input styles, focus effect
            placeholder="e.g., yourname@example.com" // Added placeholder
          />
        </div>
        {/* Password Field */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              {" "}
              {/* Improved label styling */}
              Password
            </label>
            <EyeIcon className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200" />{" "}
            {/* Added hover effect */}
          </div>
          <input
            id="password"
            type="password"
            className="w-full border-b-2 border-gray-300 focus:border-kiwi outline-none p-2 text-sm transition-all duration-200" // Improved input styles, focus effect
            placeholder="••••••••" // Added placeholder
          />
        </div>
        {/* Remember Me & Forget Password */}
        <div className="flex items-center justify-between mt-4">
          {" "}
          {/* Adjusted margin-top */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me" // Changed id for clarity
              className="w-5 h-5 text-kiwi border-gray-300 rounded focus:ring-kiwi cursor-pointer" // Styled checkbox
            />
            <label
              htmlFor="remember-me"
              className="ml-2 text-sm text-gray-700 cursor-pointer"
            >
              Remember me
            </label>{" "}
            {/* Associated label with input */}
          </div>
          <button
            type="button"
            className="text-kiwi font-bold text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-kiwi focus:ring-opacity-50 transition-all duration-200" // Styled button, hover/focus states
          >
            Forget password?
          </button>
        </div>
      </div>
      {/* Sign In Button */}
      <Link to="/homepage">
        <button
          type="submit" // Correct type for a submit button
          className="w-full h-12 mt-8 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg flex items-center justify-center
                     transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50" // Enhanced button styling
        >
          Sign In
        </button>
      </Link>
    </form>
  );
};

export default SignInForm;
