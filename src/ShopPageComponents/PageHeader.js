import React from "react";
import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const PageHeader = () => {
  const [buttonTexts] = useState(["Home", "Shop"]);

  return (
    <div className="relative w-[1440px] h-[392px] px-[160px] ">
      <img
        alt="Header"
        src="/images/page-header.png"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[413px] h-[162px]  grid items-start justify-center ">
          {/* شريط التنقل */}
          <div className="h-[24px] w-auto flex gap-[16px]  justify-center">
            {buttonTexts.map((text, index) => (
              <div key={index} className="flex items-center">
                <button className="h-[24px] w-auto flex items-center text-blackButton_50 hover:text-blackButton">
                  <span className="whitespace-nowrap">{text}</span>
                </button>
                {index < buttonTexts.length - 1 && (
                  <ChevronRightIcon className="w-[12px] h-[12px] ml-[4px]" />
                )}
              </div>
            ))}
          </div>
          <h1 className="font-poppins text-[54px] font-medium leading-[58px] tracking-[-1px] text-center">
            Shop Page
          </h1>
          <h2 className="w-[413px] font-inter text-[20px] font-normal leading-[32px] text-center">
            Let’s design the place you always imagined.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
