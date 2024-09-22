import React, { useState } from "react";

const QuantityButtonSmall = () => {
  const [count, setCount] = useState(0); // حالة لتتبع العداد

  const increment = () => {
    setCount(count + 1); // زيادة العداد
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1); // تقليل العداد إذا كان أكبر من 0
    }
  };

  return (
    <div className="flex items-center gap-[10px] border-[1px] border-blackButton_50 w-[80px] rounded-[4px] px-[8px]">
      <button
        className="w-[30px] h-[30px] flex items-center justify-center"
        onClick={decrement}
      >
        -
      </button>
      <div className="font-inter text-[12px] font-semibold leading-[20px] text-center">
        {count}
      </div>
      <button
        className="w-[30px] h-[30px] flex items-center justify-center"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButtonSmall;
