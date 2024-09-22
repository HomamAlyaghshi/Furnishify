import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import FlyoutCart from "../Expand/FlyoutCart";

const BannerGrid = () => {
  const [isCartVisible, setCartVisible] = useState(false); // حالة للتحكم في ظهور FlyoutCart

  const handleShopNowClick = () => {
    setCartVisible(true); // تعيين الحالة لتظهر FlyoutCart
  };

  return (
    <div className="h-auto w-full bg-white flex flex-col md:flex-row gap-[16px] md:gap-[24px] justify-center items-center relative">
      {/* العمود الأيسر */}
      <div className="relative h-[300px] md:h-[664px] w-full md:w-[548px]">
        <img
          alt="banner1"
          src="/images/banner1.png"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-[24px] md:top-[48px] left-[24px] md:left-[48px] w-[240px] md:w-[360px] h-auto md:h-[78px] flex flex-col items-start justify-center gap-[12px]">
          <p className="font-poppins text-[24px] md:text-[34px] font-medium leading-[28px] md:leading-[38px] tracking-[-0.4px] md:tracking-[-0.6px] text-left">
            Living Room
          </p>
          <div className="flex border-b-2 border-blackButton">
            <button
              onClick={handleShopNowClick}
              className="w-[80px] md:w-[100px] h-auto mt-2 flex items-center whitespace-nowrap"
            >
              Shop Now
              <ArrowRightIcon className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* العمود الأيمن */}
      <div className="h-auto w-full md:w-[548px] flex flex-col gap-[16px] md:gap-[24px]">
        {/* العنصر العلوي */}
        <div className="relative h-[300px] md:h-1/2">
          <img
            alt="banner2"
            src="/images/banner2.png"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-[150px] md:top-[201px] left-[16px] md:left-[32px] w-[280px] md:w-[420px] h-auto md:h-[78px] flex flex-col-reverse items-start justify-center gap-[12px]">
            <div className="flex border-b-2 border-blackButton">
              <button
                onClick={handleShopNowClick}
                className="w-[80px] md:w-[100px] h-auto mt-2 flex items-center whitespace-nowrap"
              >
                Shop Now
                <ArrowRightIcon className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
            <p className="font-poppins text-[24px] md:text-[34px] font-medium leading-[28px] md:leading-[38px] tracking-[-0.4px] md:tracking-[-0.6px] text-left">
              Bedroom
            </p>
          </div>
        </div>

        {/* العنصر السفلي */}
        <div className="relative h-[300px] md:h-1/2">
          <img
            alt="banner3"
            src="/images/banner3.png"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-[150px] md:top-[201px] left-[16px] md:left-[32px] w-[280px] md:w-[420px] h-auto md:h-[78px] flex flex-col-reverse items-start justify-center gap-[12px]">
            <div className="flex border-b-2 border-blackButton">
              <button
                onClick={handleShopNowClick}
                className="w-[80px] md:w-[100px] h-auto mt-2 flex items-center whitespace-nowrap"
              >
                Shop Now
                <ArrowRightIcon className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
            <p className="font-poppins text-[24px] md:text-[34px] font-medium leading-[28px] md:leading-[38px] tracking-[-0.4px] md:tracking-[-0.6px] text-left">
              Kitchen
            </p>
          </div>
        </div>
      </div>

      {/* عرض FlyoutCart إذا كانت الحالة True */}
      {isCartVisible && <FlyoutCart onClose={() => setCartVisible(false)} />}
    </div>
  );
};

export default BannerGrid;
