import { useState } from "react";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const BlogHeader = () => {
  const [buttonTexts] = useState(["Home", "Blog"]);

  return (
    <div className="relative mb-5 h-[392px] md:px-[160px] px-4">
      <img
        alt="Header"
        src="/images/blogheader.png"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="md:w-[413px] w-full h-auto grid items-start justify-center">
          {/* شريط التنقل */}
          <div className="h-[24px] w-auto flex gap-[16px] justify-center">
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
          <h1 className="font-poppins md:text-[54px] text-[32px] font-medium leading-tight tracking-[-1px] text-center">
            Our Blog
          </h1>
          <h2 className="md:w-[413px] w-full font-inter md:text-[20px] text-[16px] font-normal leading-relaxed text-center">
            Home ideas and design inspiration
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
