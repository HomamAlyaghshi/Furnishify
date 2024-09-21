import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const NotificationBar = () => {
  // حالة للتحكم في إظهار أو إخفاء الدف
  const [isVisible, setIsVisible] = useState(true);

  return (
    // فقط عرض الـ div إذا كانت isVisible تساوي true
    isVisible && (
      <div className="relative h-[40px] bg-background_50 flex justify-center items-center gap-[12px]">
        <img alt="v5" src="/images/v5.png" className="w-[20px] h-[18px]" />
        <p className="text-blackButton flex items-center">
          30% off storewide — Limited time!
        </p>
        <div className="flex items-center">
          <button className="flex items-center text-blue border-b-2 border-blue whitespace-nowrap">
            Shop Now
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* زر X */}
        <button
          className="absolute right-4 top-2 text-blackButton "
          onClick={() => setIsVisible(false)}
        >
          ✕
        </button>
      </div>
    )
  );
};

export default NotificationBar;
