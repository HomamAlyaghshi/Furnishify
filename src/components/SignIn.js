import React from "react";
import SignInForm from "../card/SignInForm";

const SignIn = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col md:flex-row h-full">
        {/* صورة للهواتف */}
        <div className="w-full md:w-1/2 h-[430px] md:h-auto">
          <img
            src="/images/Left.png"
            alt="Left"
            className="w-full h-full object-cover"
          />
        </div>

        {/* نموذج تسجيل الدخول */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div className="w-full max-w-[456px] h-auto space-y-8 mt-3">
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
