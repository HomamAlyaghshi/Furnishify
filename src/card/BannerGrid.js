import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const BannerGrid = () => {
  return (
    <div className="h-full md:max-h-[664px] px-1 bg-white flex flex-col md:flex-row gap-[24px] justify-center items-center relative">
      {/* العمود الأيسر */}
      <div className="relative h-[664px] md:h-[664px] w-full md:w-[548px]">
        <img
          alt="banner1"
          src="/images/banner1.png"
          className="h-full w-full object-cover"
        />

        {/* العناصر فوق الصورة */}
        <div className="absolute top-[48px] left-[48px] w-[360px] h-[78px] flex flex-col items-start justify-center gap-[12px]">
          <p className="font-poppins text-[34px] font-medium leading-[38px] tracking-[-0.6px] text-left">
            Living Room
          </p>
          <div className="flex border-b-2 border-blackButton">
            <button className="w-[100px] h-auto mt-2 flex items-center whitespace-nowrap">
              Shop Now
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* العمود الأيمن */}
      <div className="h-[664px] md:h-[664px] w-full md:w-[548px] flex flex-col gap-[24px]">
        {/* العنصر العلوي */}
        <div className="relative h-[50%]">
          <img
            alt="banner2"
            src="/images/banner2.png"
            className="w-full h-full object-cover"
          />
          {/* العناصر فوق الصورة */}
          <div className="absolute top-[50%] left-[32px] w-[420px] h-[78px] flex flex-col-reverse items-start justify-center gap-[12px] transform -translate-y-1/2">
            <div className="flex border-b-2 border-blackButton">
              <button className="w-[100px] h-auto mt-2 flex items-center whitespace-nowrap">
                Shop Now
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </button>
            </div>
            <p className="font-poppins text-[34px] font-medium leading-[38px] tracking-[-0.6px] text-left">
              Bedroom
            </p>
          </div>
        </div>

        {/* العنصر السفلي */}
        <div className="relative h-[50%]">
          <img
            alt="banner3"
            src="/images/banner3.png"
            className="w-full h-full object-cover"
          />
          {/* العناصر فوق الصورة */}
          <div className="absolute top-[50%] left-[32px] w-[420px] h-[78px] flex flex-col-reverse items-start justify-center gap-[12px] transform -translate-y-1/2">
            <div className="flex border-b-2 border-blackButton">
              <button className="w-[100px] h-auto mt-2 flex items-center whitespace-nowrap">
                Shop Now
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </button>
            </div>
            <p className="font-poppins text-[34px] font-medium leading-[38px] tracking-[-0.6px] text-left">
              Kitchen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerGrid;
