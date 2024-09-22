import React from "react";
import CardProduct from "./CardProduct";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ProductCarousel = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto py-[48px] pl-[16px] sm:pl-[32px] md:pl-[160px] grid gap-[48px]">
      <div className="w-full max-w-[1120px] h-[88px] flex justify-between">
        <div className="w-[149px] h-[88px] font-poppins text-[32px] sm:text-[40px] font-medium leading-[44px] tracking-[-0.4px] text-left">
          New Arrivals
        </div>
        <div className="flex border-b-[1px] border-blackButton items-end">
          <button className="flex items-center whitespace-nowrap pb-1 text-sm sm:text-base">
            More Products
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      {/** الصور */}
      <div className="flex overflow-x-auto no-scrollbar">
        <CardProduct />
      </div>

      {/** السلايدر - يمكن استخدام مكتبة سلايدر مثل Swiper هنا */}
      <div></div>
    </div>
  );
};

export default ProductCarousel;
