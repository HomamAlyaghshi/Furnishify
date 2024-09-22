import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <form className="p-4">
      <h1 className="font-poppins text-[32px] font-medium mb-4 text-left">
        Sign In
      </h1>
      <div className="flex items-center mb-4">
        <p className="font-inter text-base text-text_neutral text-[12px]">
          Don’t have an account yet?
        </p>
        <Link to="/signup">
          <button className="font-inter text-kiwi text-base font-semibold text-[12px] ml-1">
            Sign Up
          </button>
        </Link>
      </div>

      <div className="mb-4 text-text_neutral">
        <label className="block text-[12px]">
          Your username or email address
        </label>
        <input className="mb-4 w-full border-b border-hr p-1 text-[12px]" />
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <label className="mr-2 text-[12px]">Password</label>
            <EyeIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>
          <input
            className="w-full border-b border-hr p-1 text-[12px]"
            type="password"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="checkbox"
              className="w-[24px] h-[24px] mr-[12px]"
            />
            <p className="font-inter text-base text-[12px]">Remember me</p>
          </div>
          <button className="text-blackButton font-bold text-[12px]">
            Forget password?
          </button>
        </div>
      </div>
      <Link to="/homepage">
        <button className="w-full h-[48px] mt-2 text-white bg-blackButton rounded-[8px] flex items-center justify-center">
          Sign In
        </button>
      </Link>
    </form>
  );
};

export default SignInForm;
