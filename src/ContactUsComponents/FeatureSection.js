import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";
const FeatureSection = () => {
  return (
    <div className="w-[1119px] h-[413px] bg-red-200 flex">
      <div className="h-full w-1/2 bg-slate-100">
        <img src="/images/Banner.png" alt="Banner" className="h-full w-full" />
      </div>
      <div className="h-full w-1/2 bg-slate-200 grid justify-center items-center p-[72px]">
        <div className="w-auto h-auto grid gap-[16px] ">
          <h1 className="font-poppins text-[40px] font-medium leading-[44px] tracking-[-0.4px] text-left">
            About Us
          </h1>
          <p className="font-inter text-[16px] font-normal leading-[26px] text-left">
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019. Our customer service is always prepared to support you
            24/7
          </p>
          <button className="w-[100px] h-auto mt-2 flex items-center whitespace-nowrap border-b-[1px] border-b-blackButton">
            Shop Now
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
