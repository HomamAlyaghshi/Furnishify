import React from "react";
import StarsDisplay from "../ProductPageComponents/StarsDisplay";

const ReviewCart = ({ imageSrc, name, reviewText }) => {
  return (
    <div className="w-[1120px] h-[200px] flex gap-[40px]  border-b border-blackButton_50">
      <img
        alt="profile"
        src={imageSrc}
        className="w-[72px] h-[72px] rounded-full"
      />
      <div className="w-full max-w-[1008px] h-[176px] gap-[24px] grid ">
        <p className="text-blackButton font-inter text-[20px] font-semibold leading-[32px] text-left">
          {name}
        </p>
        <StarsDisplay />
        <p className="text-para font-inter text-[16px] font-normal leading-[26px] text-left mr-[3px]">
          {reviewText}
        </p>
        <div className="flex gap-[24px] ml-[100px] font-inter text-[12px] font-semibold leading-[20px] text-left text-blackButton">
          <button>Like</button>
          <button>Reply</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
