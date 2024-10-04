import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";
const FeatureSection = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row mx-auto overflow-hidden">
      {/* القسم الخاص بالصورة */}
      <div className="w-full h-full md:h-full md:w-1/2 bg-slate-100">
        <img
          src="/images/Banner.png"
          alt="Banner"
          className="h-full w-full object-cover"
        />
      </div>
      {/* القسم الخاص بالنصوص */}
      <div className="w-full h-full md:h-full md:w-1/2 bg-slate-100   grid justify-center items-center p-6 md:p-[72px]">
        <div className="w-auto h-auto grid gap-[55px]">
          <h1 className="font-poppins text-[32px] md:text-[40px] font-medium leading-[36px] md:leading-[44px] tracking-[-0.4px] text-left">
            About Us
          </h1>
          <p className="font-inter text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[26px] text-left">
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019. Our customer service is always prepared to support you
            24/7
          </p>
          <button className="w-[120px] h-auto mt-2 flex items-center whitespace-nowrap border-b-[1px] border-b-blackButton">
            Shop Now
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
