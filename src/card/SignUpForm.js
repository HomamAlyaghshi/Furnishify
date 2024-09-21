import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <form className="text-black ">
      <div className="h-[94px] gap-[32px] mb-[32px]">
        {/*Title  */}
        <h1 className="font-poppins  text-[40px] font-medium leading-[44px] tracking-[-0.4px] text-left mb-[32px]">
          Sign up
        </h1>
        <div className="flex items-center mb-[32px]">
          <p className="font-inter text-base font-normal leading-6 text-left text-text_neutral ">
            Already have an account?
          </p>
          <Link to="/">
            <button className="font-inter text-kiwi text-base font-semibold leading-6 text-left ml-1 ">
              Sign in
            </button>
          </Link>
        </div>
      </div>

      <div className="h-[314px] mb-[32px] text-text_neutral">
        <p>Your name</p>
        <input className=" mb-[24px] w-full border-b border-hr" />
        <p>Username</p>
        <input className="mb-[24px] w-full border-b border-hr" />
        <p>Email address</p>
        <input className="mb-[24px] w-full border-b border-hr" />
        <div className="mb-[24px]">
          <div className=" flex items-center justify-between">
            <p className="mr-2">Password</p>
            <EyeIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>
          <input className="w-full border-b border-hr" type="password" />
        </div>
        <div className="flex items-center  ">
          <input
            type="checkbox"
            id="checkbox"
            className="w-[24px] h-[24px] gap-[10px] mr-[12px] rounded-tl-[4px] border-t border-l border-r border-b text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <p className="font-inter text-base font-normal leading-6 text-left ">
            I agree with <strong className="text-black">Privacy Policy</strong>{" "}
            and <strong className="text-black">Terms</strong> of Use
          </p>
        </div>
      </div>
      <Link to="/homepage">
        <button className="w-full h-[48px] mt-[12px] text-white bg-blackButton px-[10px] rounded-[8px] flex items-center justify-center">
          {" "}
          Sign Up
        </button>
      </Link>
    </form>
  );
};

export default SignUpForm;
