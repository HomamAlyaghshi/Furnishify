import React from "react";

const TimeDisplay = ({ label, value }) => {
  return (
    <div className="w-[60px] h-[80px] grid">
      <div className="w-[60px] h-[80px] flex justify-center items-center">
        <p className="w-[41px] h-[38px] top-[11px] left-[10px] font-poppins text-[34px] font-medium leading-[38px] tracking-[-0.6px] text-center">
          {value < 10 ? `0${value}` : value}
        </p>
      </div>
      <p className="text-blackButton_50 flex justify-center items-center font-inter text-[12px] font-normal leading-[20px] text-center">
        {label}
      </p>
    </div>
  );
};

export default TimeDisplay;
