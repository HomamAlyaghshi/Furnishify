import React from "react";
import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const PageHeader = () => {
  const [buttonTexts] = useState(["Home", "Shop"]);

  return (
    <div
      data-aos="fade-up"
      className="relative h-[392px] px-[16px] md:px-[160px]"
    >
      <img
        alt="Header"
        src="/images/page-header.png"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-[413px] h-auto grid items-start justify-center text-center">
          {/* شريط التنقل */}
          <div className="h-[24px] w-auto flex gap-[8px] justify-center mb-4">
            {" "}
            {/* إضافة تباعد عمودي */}
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
          <h1 className="font-poppins text-[32px] md:text-[54px] font-medium leading-[38px] md:leading-[58px] mb-2">
            Shop Page
          </h1>
          <h2 className="w-full font-inter text-[16px] md:text-[20px] font-normal leading-[24px] md:leading-[32px]">
            Let’s design the place you always imagined.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
