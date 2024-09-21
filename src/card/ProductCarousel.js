import React from "react";
import CardProduct from "./CardProduct";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ProductCarousel = () => {
  return (
    <div className="w-[1440px] h-[669px] py-[48px] pl-[160px]  grid gap-[48px]">
      <div className="w-[1120px] h-[88px]  flex justify-between ">
        <div className="w-[149px] h-[88px] font-poppins text-[40px] font-medium leading-[44px] tracking-[-0.4px] text-left">
          New Arrivals
        </div>
        <div className="flex border-b-[1px] border-blackButton items-end">
          <button className="w-[132px] h-[28px] flex items-center whitespace-nowrap pb-1">
            More Products
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      {/**الصور */}
      <div>
        <CardProduct />
      </div>
      {/**السلايدر */}
      <div></div>
    </div>
  );
};

export default ProductCarousel;
