import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";
import { StarIcon as SolidStar } from "@heroicons/react/24/solid";
import TimeDisplay from "./TimeDisplay";
import ProductButton from "../Expand/ProductButton";
import WishlistButton from "../Expand/WishlistButton";
import AddCart from "../Expand/AddCart";

const ProductLoop = () => {
  const [buttonTexts] = useState(["Home", "Shop", "Living Room", "Product"]);
  const [selectedStars, setSelectedStars] = useState(5);
  const [time, setTime] = useState({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 5,
  });

  const handleStarClick = (index) => {
    setSelectedStars(index + 1);
  };

  return (
    <div className="w-full h-[1042px] pt-[16px]">
      {/* شريط التنقل */}
      <div className="h-[24px] w-[466px] flex gap-[16px] bg-white justify-end">
        {buttonTexts.map((text, index) => (
          <div key={index} className="flex items-center">
            <button className="h-[24px] w-auto flex items-center text-blackButton_50 hover:text-blackButton">
              <span className="whitespace-nowrap">{text}</span>
            </button>
            {index < buttonTexts.length - 1 && (
              <ChevronRightIcon className="w-[12px] h-[12px] ml-[4px]" />
            )}
          </div>
        ))}
      </div>

      <div className="h-[986px] mt-[16px] flex justify-around gap-[24px] px[160px]">
        <div className="w-[549px] h-[919px] grid -mr-60">
          <img
            src="/images/cart1-big.png"
            alt="cart1-big"
            className="h-[729px] w-[548px] -mr-60"
          />
          <div className="flex justify-between">
            <img alt="2" src="/images/cart2-big.png" />
            <img alt="3" src="/images/cart3-big.png" />
            <img alt="4" src="/images/cart4-big.png" />
          </div>
        </div>

        <div className="w-[508px] h-[986px]">
          <div className="h-[706px] w-full">
            <div className="h-[248px] grid gap-[16px] items-start justify-start">
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
                <div className="ml-[10px]">11 Reviews</div>
              </div>
              <h1 className="font-poppins text-[40px] font-medium leading-[44px] tracking-[-0.4px] text-left w-[208px] h-[44px] text-blackButton">
                Tray Table
              </h1>
              <p className="font-inter text-[16px] font-normal leading-[26px] text-left w-[508px] h-[78px] text-blackButton_50">
                Buy one or buy a few and make every space where you sit more
                convenient. Light and easy to move around with removable tray
                top, handy for serving snacks.
              </p>
              <div className="flex w-[508px] h-[34px] gap-[12px] justify-start">
                <div className="font-poppins text-[28px] font-medium leading-[34px] tracking-[-0.6px] text-left w-[103px] h-[34px] text-blackButton">
                  $199.00
                </div>
                <div className="mt-[4px] font-poppins text-[20px] font-medium leading-[28px] text-left w-[83px] h-[28px] text-blackButton_50 line-through">
                  $400.00
                </div>
              </div>
            </div>

            <div className="h-[166px] grid items-center border-y-[1px] border-b-blackButton_50">
              <div className="w-[360px] h-[118px] gap-[12px] grid">
                <div className="w-[360px] h-[26px] font-inter text-[16px] font-normal leading-[26px] text-left">
                  Offer expires in:
                </div>

                <div className="w-[288px] h-[80px] gap-[16px] flex">
                  {/**هاد الكومبوننت يلي بيعرض الرقم وتحتو الاسم */}
                  <TimeDisplay label="Days" value={time.days} />
                  <TimeDisplay label="Hours" value={time.hours} />
                  <TimeDisplay label="Minutes" value={time.minutes} />
                  <TimeDisplay label="Seconds" value={time.seconds} />
                </div>
              </div>
            </div>

            <div className="h-[292px] w-[334px] ">
              <div className="w-[144px] h-[66px] gap-2 grid mt-[30px]">
                <p className="text-blackButton_50 font-inter text-[20px] font-normal leading-[32px] text-left">
                  Measurements
                </p>
                <p className="text-blackButton font-inter text-[16px] font-semibold leading-[26px] text-left">
                  17 1/2x20 5/8 "
                </p>
              </div>
              <div className="w-[334px] h-[154px] gap-4 grid mt-[40px] ">
                <div className="w-[134px] h-[66px] gap-[16pxS] grid  ">
                  <p className="font-inter text-[16px] font-semibold leading-[26px] text-left text-blackButton_50">
                    Choose Color
                  </p>
                  <p className="font-inter text-[20px] font-normal leading-[32px] text-left text-blackButton">
                    Black
                  </p>
                </div>
                <div className="w-[334px] h-[72px] gap-4 flex">
                  <img
                    alt=""
                    src="/images/cart1.png"
                    className="w-[72px] h-[72px] gap-0  border-gray-300"
                  />
                  <img
                    alt=""
                    src="/images/cart1.png"
                    className="w-[72px] h-[72px] gap-0  border-gray-300"
                  />
                  <img
                    alt=""
                    src="/images/cart1.png"
                    className="w-[72px] h-[72px] gap-0  border-gray-300"
                  />
                  <img
                    alt=""
                    src="/images/cart1.png"
                    className="w-[72px] h-[72px] gap-0  border-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[184px] w-full grid gap-[16px] py-[32px] border-b-[1px] border-b-background_50">
            <div className="h-[52px] flex gap-[24px] justify-between">
              <ProductButton />
              <WishlistButton />
            </div>
            <AddCart label="Add to Cart" width="508px" height="52px" />
          </div>
          <div className="h-[96px] w-full grid justify-start items-center ">
            <div className="w-[147px] flex gap-[98px] font-inter text-[12px] font-normal leading-[20px] text-left grid-cols-1">
              <p className="text-blackButton_50">SKU</p>
              <p className="text-blackButton">1117</p>
            </div>
            <div className="w-[147px] flex gap-[98px] font-inter text-[12px] font-normal leading-[20px] text-left grid-cols-2 mb-[25px]">
              <p className="text-blackButton_50">CATEGORY</p>
              <p className="text-blackButton whitespace-nowrap -ml-[35px]  ">
                Living Room, Bedroom
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLoop;
