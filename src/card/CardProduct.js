import React, { useState } from "react";
import {
  StarIcon as OutlineStar,
  HeartIcon as OutlineHeart,
} from "@heroicons/react/24/outline";
import {
  StarIcon as SolidStar,
  HeartIcon as SolidHeart,
} from "@heroicons/react/24/solid";
import StarsDisplay from "../ProductPageComponents/StarsDisplay";

const CardProduct = ({ image, name, price, oldPrice }) => {
  const [selectedStars, setSelectedStars] = useState(5);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleStarClick = (index) => {
    setSelectedStars(index + 1);
  };

  const handleFavoriteToggle = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="w-[262px] h-[433px] bg-white relative group inline-block mr-4">
      {/* Overlay for title */}
      <div className="absolute top-2 left-2  p-1 w-[71px] h-[56px] rounded-[4px] grid gap-[8px] ">
        <div className="w-[67px] h-[24px] bg-white flex justify-center items-center font-inter text-[16px] font-bold leading-[16px] text-center">
          NEW
        </div>
        <div className="w-[67px] h-[24px] text-white bg-kiwi px-[14px] py-[4px] gap-[8px] rounded-[4px] font-inter text-[16px] font-bold leading-[16px] text-center">
          -50%
        </div>
      </div>

      {/* Heart icon on the top right */}
      <div
        className="absolute top-2 right-2 w-[32px] h-[32px] rounded-full bg-white text-blackButton_50  cursor-pointer hidden group-hover:flex justify-center items-center"
        onClick={handleFavoriteToggle}
      >
        {isFavorite ? (
          <SolidHeart className="w-[20px] h-[20px] text-red-500" />
        ) : (
          <OutlineHeart className="w-[20px] h-[20px] text-blackButton_50" />
        )}
      </div>

      {/* Photo */}
      <img alt={name} src={image} className="bg-emerald-300 h-[349px] w-full" />

      {/* Add button just below the image, hidden by default and shown on hover */}
      <button className="absolute top-[287px] left-1/2 transform -translate-x-1/2 bg-blackButton text-white py-1 px-2 rounded-[8px] w-[230px] h-[46px] hidden group-hover:flex justify-center items-center">
        Add to Cart
      </button>

      {/* Content here */}
      <div className="h-[72px] mt-[12px]">
        <div className="h-[16px] w-[88px] flex gap-[2px]">
          <StarsDisplay />
        </div>
        <div className="mt-[6px]">{name}</div>
        <div className="flex">
          <div className="text-blackButton">{price}</div>
          {oldPrice && (
            <div className="text-blackButton_50 line-through ml-[8px]">
              {oldPrice}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
