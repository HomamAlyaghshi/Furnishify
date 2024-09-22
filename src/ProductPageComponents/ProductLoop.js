import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";
import { StarIcon as SolidStar } from "@heroicons/react/24/solid";

const ProductLoop = () => {
  const [buttonTexts] = useState(["Home", "Shop", "Living Room", "Product"]);
  const [selectedStars, setSelectedStars] = useState(5);
  const handleStarClick = (index) => {
    setSelectedStars(index + 1);
  };

  return (
    <div className=" w-full h-[1042px] pt-[16px]">
      {/* الشريط يلي فوق تبع الازرار بس ع شكل سيت ستيت */}
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

      <div className=" h-[986px] flex justify-around gap-[24px] px[160px]">
        <div className=" w-[549px] h-[919px] grid -mr-60">
          <img
            src="/images/cart1-big.png"
            alt=" cart1-big"
            className="h-[729px] w-[548px] -mr-60"
          />
          <div className="flex justify-between">
            <img alt="2" src="/images/cart2-big.png" />
            <img alt="3" src="/images/cart3-big.png" />
            <img alt="4" src="/images/cart4-big.png" />
          </div>
        </div>
        <div className=" w-[508px] h-[986px]">
          <div className=" h-[706px] w-full">
            <div className="h-[248px]  grid gap-[16px] items-start justify-start">
              <div className="flex  ">
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
                Buy one or buy a few and make every space where you sit more{" "}
                <br />
                convenient. Light and easy to move around with removable tray
                <br />
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

            <div className="h-[166px] bg-orange-600 grid items-center border-y-[1px] border-b-blackButton_50">
              <div className="bg-orange-300 w-[360px] h-[118px] gap-[12px] grid">
                <div className="bg-orange-200 w-[360px] h-[26px] font-inter text-[16px] font-normal leading-[26px] text-left">
                  {" "}
                  Offer expires in:
                </div>
                <div className="bg-yellow-200 w-[288px] h-[80px] gap-[16px] flex">
                  <div className="w-[60px] h-[80px] bg-red-400 grid">
                    <div className="w-[60px] h-[80px] bg-slate-200 flex justify-center items-center">
                      <p className="w-[41px] h-[38px] top-[11px] left-[10px] font-poppins text-[34px] font-medium leading-[38px] tracking-[-0.6px] text-center">
                        02
                      </p>
                    </div>
                    <p className="text-blackButton_50 flex justify-center items-center font-inter text-[12px] font-normal leading-[20px] text-center">
                      {" "}
                      Days
                    </p>
                  </div>
                  <div className="w-[60px] h-[80px] bg-red-400 grid">
                    <div className="w-[60px] h-[80px] bg-slate-200 flex justify-center items-center">
                      <p className="w-[41px] h-[38px] top-[11px] left-[10px] font-poppins text-[34px] font-medium leading-[38px] tracking-[-0.6px] text-center">
                        12
                      </p>
                    </div>
                    <p className="text-blackButton_50 flex justify-center items-center font-inter text-[12px] font-normal leading-[20px] text-center">
                      {" "}
                      Hours
                    </p>
                  </div>
                  <div className="w-[60px] h-[80px] bg-red-400 grid">
                    <div className="w-[60px] h-[80px] bg-slate-200 flex justify-center items-center">
                      <p className="w-[41px] h-[38px] top-[11px] left-[10px] font-poppins text-[34px] font-medium leading-[38px] tracking-[-0.6px] text-center">
                        45
                      </p>
                    </div>
                    <p className="text-blackButton_50 flex justify-center items-center font-inter text-[12px] font-normal leading-[20px] text-center">
                      {" "}
                      Minutes
                    </p>
                  </div>
                  <div className="w-[60px] h-[80px] bg-red-400 grid">
                    <div className="w-[60px] h-[80px] bg-slate-200 flex justify-center items-center">
                      <p className="w-[41px] h-[38px] top-[11px] left-[10px] font-poppins text-[34px] font-medium leading-[38px] tracking-[-0.6px] text-center">
                        05
                      </p>
                    </div>
                    <p className="text-blackButton_50 flex justify-center items-center font-inter text-[12px] font-normal leading-[20px] text-center">
                      {" "}
                      Seconds
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[292px] w-[334px] bg-orange-900"></div>
          </div>
          <div className="bg-yellow-600 h-[184px] w-full grid gap-[16px] py-[32px]">
            <div className="bg-lime-300 h-[52px] flex gap-[24px]"></div>
            <div className="bg-lime-900 h-[52px]">2</div>
          </div>
          <div className="bg-yellow-900 h-[96px] w-full">3</div>
        </div>
      </div>
    </div>
  );
};

export default ProductLoop;
