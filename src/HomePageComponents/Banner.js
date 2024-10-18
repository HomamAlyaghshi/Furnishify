import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Banner = () => {
  return (
    <div className="h-[532px] w-full justify-center overflow-x-hidden items-center flex flex-col md:flex-row md:mr-5">
      <img
        className="bg-slate-500 w-full md:w-1/2 h-full"
        alt="Banner"
        src="/images/Banner.png"
      />
      <div className=" md:w-[720px] h-auto md:h-[532px] md:left-[720px] pr-[16px] md:pr-[160px] pl-[16px] md:pl-[72px] flex justify-center items-center bg-background_50 ">
        {/**العمود الثاني */}
        <div className=" md:w-[452px] h-auto md:h-[200px] grid gap-[16px]">
          <p className="text-blue font-inter text-[12px] md:text-[16px] font-bold leading-[16px] text-left">
            SALE UP TO 35% OFF
          </p>
          <p className="font-poppins text-[24px] md:text-[40px] font-medium leading-[28px] md:leading-[44px] tracking-[-0.4px] text-left text-blackButton">
            HUNDREDS of New lower prices!
          </p>
          <p className="text-blackButton font-inter text-[16px] md:text-[20px] font-normal leading-[24px] md:leading-[32px] text-left">
            It’s more affordable than ever to give every <br /> room in your
            home a stylish makeover
          </p>
          <div className="flex border-b-2 border-blackButton w-[100px] ">
            <button className="w-[100px] h-auto mt-2 flex items-center whitespace-nowrap">
              Shop Now
              <ArrowRightIcon className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
