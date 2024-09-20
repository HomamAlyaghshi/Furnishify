import React from "react";
import SignInForm from "../card/SignInForm";
const SignIn = () => {
  return (
    <div class=" mx-auto h-[1080px] ">
      <div class="flex h-full">
        <div class="w-1/2 flex items-center justify-center">
          <img
            src="/images/Left.png"
            alt="Left"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="w-1/2  flex items-center justify-center gap-[32px] ">
          <div className=" w-[456px] h-[376px] space-y-8    ">
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
