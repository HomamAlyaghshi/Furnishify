import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Newsletter = () => {
  return (
    <div className="relative w-[1440px] h-[360px]">
      <img
        alt="Newsletter"
        src="/images/Newsletter.png"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 grid items-center justify-center gap-[32px] h-[166px] top-[101px] ">
        <div className="grid gap-[8px]">
          <h1 className=" font-poppins text-[40px] font-medium leading-[44px] tracking-[-0.4px] text-center">
            Join Our Newsletter
          </h1>
          <h2 className="font-inter text-[18px] font-normal leading-[30px] text-center">
            Sign up for deals, new products and promotions
          </h2>
        </div>
        <div className="flex w-[488px] border-b-[1px] border-b-blackButton_50 border-spacing-4 ">
          <EnvelopeIcon className="w-6 h-6 text-black mr-[8px]" />
          <input
            className="font-inter w-full text-[16px] font-medium leading-[28px] tracking-[-0.4px] text-left text-blackButton_50 bg-transparent"
            placeholder="Email address"
            type="email" // استخدم type="email" بدلاً من email
          />
          <button className="text-blackButton_50">Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
