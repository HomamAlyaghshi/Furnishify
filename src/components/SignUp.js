import React from "react";
import SignUpForm from "../card/SignUpForm";
const SignUp = () => {
  return (
    <div class=" mx-auto h-[1080px]">
      <div class="flex h-full">
        <div class="w-1/2 flex items-center justify-center">
          <img
            src="/images/Left.png"
            alt="Left"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="w-1/2  flex items-center justify-center ">
          <div className=" w-[456px] h-[520px] space-y-8 bg-neutral1   ">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
