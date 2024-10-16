import React from "react";
import SignUpForm from "./SignUpForm";
const SignUp = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col md:flex-row h-full">
        {/* صورة للهواتف */}
        <div className="w-full md:w-1/2  md:h-auto">
          <img
            src="/images/Left.png"
            alt="Left"
            className="w-full h-full object-cover"
          />
        </div>

        {/* نموذج التسجيل */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div className="w-full max-w-[456px] h-auto space-y-8 bg-neutral1 mt-3">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
