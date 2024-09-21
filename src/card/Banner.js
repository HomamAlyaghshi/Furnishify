import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Banner = () => {
  return (
    <div className="h-[532px] w-[1440px] flex">
      <img
        className="bg-slate-500 w-1/2 h-full"
        alt="Banner"
        src="/images/Banner.png"
      />
      <div className="w-[720px] h-[532px] left-[720px] pr-[160px] pl-[72px]   flex justify-center items-center bg-background_50 ">
        {/**العمود الثاني */}
        <div className="w-[452px] h-[200px] grid gap-[16px]  ">
          <p className="text-blue font-inter text-[16px] font-bold leading-[16px] text-left">
            SALE UP TO 35% OFF
          </p>
          <p className="font-poppins text-[40px] font-medium leading-[44px] tracking-[-0.4px] text-left text-blackButton">
            HUNDREDS of New lower prices!
          </p>
          <p className="text-blackButton font-inter text-[20px] font-normal leading-[32px] text-left">
            It’s more affordable than ever to give every <br /> room in your
            home a stylish makeover
          </p>
          <div className="flex border-b-2 border-blackButton w-[100px]  ">
            <button className="w-[100px] h-auto mt-2 flex items-center whitespace-nowrap  ">
              Shop Now
              <ArrowRightIcon className="ml-2 w-5 h-5" />{" "}
              {/* تأكد من إضافة حجم للسهم */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
