import React, { useState } from "react";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";
import { StarIcon as SolidStar } from "@heroicons/react/24/solid";

const StarsDisplay = () => {
  const [selectedStars, setSelectedStars] = useState(5);

  const handleStarClick = (index) => {
    setSelectedStars(index + 1);
  };

  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        <div
          className="mt-[4px]"
          key={index}
          onClick={() => handleStarClick(index)}
        >
          {index < selectedStars ? (
            <SolidStar className="w-[16px] h-[16px] text-blackButton" />
          ) : (
            <OutlineStar className="w-[16px] h-[16px] text-blackButton_50" />
          )}
        </div>
      ))}
    </div>
  );
};

export default StarsDisplay;
