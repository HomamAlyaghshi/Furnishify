import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className="relative h-[40px] bg-background_50 flex justify-center items-center gap-[12px] px-4">
        <img alt="v5" src="/images/v5.png" className="w-[20px] h-[18px]" />
        <p className="text-blackButton text-[12px] sm:text-[14px] flex items-center">
          30% off storewide — Limited time!
        </p>
        {/* زر "Shop Now" يظهر فقط على الشاشات الأكبر */}
        <div className="hidden sm:flex items-center">
          <button className="flex items-center text-blue font-semibold border-b-2 border-blue whitespace-nowrap hover:text-darkBlue hover:border-darkBlue">
            Shop Now
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </button>
        </div>

        <button
          className="absolute right-4 top-2 text-blackButton hover:text-red-500"
          onClick={() => setIsVisible(false)}
        >
          ✕
        </button>
      </div>
    )
  );
};

export default NotificationBar;
