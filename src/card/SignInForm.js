import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <form>
      <h1 className="font-poppins  text-[40px] font-medium leading-[44px] tracking-[-0.4px] text-left mb-[32px]">
        Sign In
      </h1>
      <div className="flex items-center mb-[32px]">
        <p className="font-inter text-base font-normal leading-6 text-left text-text_neutral ">
          Don’t have an accout yet?
        </p>
        <Link to="/signup">
          <button className="font-inter text-kiwi text-base font-semibold leading-6 text-left ml-1 ">
            Sign Up
          </button>
        </Link>
      </div>

      <div className="h-[170px] mb-[32px] text-text_neutral">
        <p>Your username or email address</p>
        <input className=" mb-[24px] w-full border-b border-hr" />
        <div className="mb-[24px]">
          <div className=" flex items-center justify-between">
            <p className="mr-2">Password</p>
            <EyeIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>
          <input className="w-full border-b border-hr" type="password" />
        </div>
        <div className="flex items-center justify-between  ">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="checkbox"
              className="w-[24px] h-[24px] mr-[12px] rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <p className="font-inter text-base font-normal leading-6 text-left">
              Remember me
            </p>
          </div>
          <button className="text-blackButton font-bold">
            Forget password?
          </button>
        </div>
      </div>
      <Link to="/homepage">
        <button className="w-full h-[48px] mt-[12px] text-white bg-blackButton px-[10px] rounded-[8px] flex items-center justify-center">
          {" "}
          Sign In
        </button>
      </Link>
    </form>
  );
};

export default SignInForm;
