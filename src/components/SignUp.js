import React from "react";
import SignUpForm from "../card/SignUpForm";

const SignUp = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* صورة للهواتف */}
        <div className="w-full md:w-1/2 h-[430px] md:h-auto">
          <img
            src="/images/Left.png"
            alt="Left"
            className="w-full h-full object-cover"
          />
        </div>

        {/* نموذج التسجيل */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div className="w-full max-w-[456px] h-auto space-y-8 bg-neutral1">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;