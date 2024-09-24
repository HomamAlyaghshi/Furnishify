import React from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import ProductList from "../card/ProductList";

const Products = () => {
  return (
    <div className="w-[834px] h-[1707px]  flex gap-[24px] pt-[60px] px-[160px] pb-[100px]">
      {/**SideBar */}
      <div className="w-[262px] h-[582px] grid gap-[32px] ">
        <div className="w-full h-[32px] flex ga-[8px] text-1212 text-[20px] font-semibold leading-[32px] text-left">
          {/**TODO : Edit this icon */}
          <AdjustmentsHorizontalIcon />
          Filter
        </div>
        <div className="w-[262px] h-[264px] gap-4 border-b  grid">
          <h1 className="text-1212 text-[16px] font-semibold leading-[26px] text-left ">
            CATEGORIES
          </h1>
          <div className="space-y-2">
            <p>All Rooms</p>
            <p>Living Room</p>
            <p>Bedroom</p>
            <p>Kitchen</p>
            <p>Bathroom</p>
            <p>Dinning</p>
            <p>Outdoor</p>
          </div>
        </div>

        <div className="w-[254px] h-[222px] gap-4 border-b pb-60 ">
          <h1 className="text-1212 text-[16px] font-semibold leading-[26px] text-left mb-4">
            PRICE
          </h1>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p>All Price</p>
              <input
                type="checkbox"
                className="w-6 h-6 appearance-none border border-gray-300 rounded-[4px] checked:bg-blackButton checked:border-black checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:justify-center checked:before:items-center"
              />
            </div>
            <div className="flex justify-between items-center">
              <p>$0.00 - 99.99</p>
              <input
                type="checkbox"
                className="w-6 h-6 appearance-none border border-gray-300 rounded-[4px] checked:bg-blackButton checked:border-black checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:justify-center checked:before:items-center"
              />
            </div>
            <div className="flex justify-between items-center">
              <p>$100.00 - 199.99</p>
              <input
                type="checkbox"
                className="w-6 h-6 appearance-none border border-gray-300 rounded-[4px] checked:bg-blackButton checked:border-black checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:justify-center checked:before:items-center"
              />
            </div>
            <div className="flex justify-between items-center">
              <p>$200.00 - 299.99</p>
              <input
                type="checkbox"
                className="w-6 h-6 appearance-none border border-gray-300 rounded-[4px] checked:bg-blackButton checked:border-black checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:justify-center checked:before:items-center"
              />
            </div>
            <div className="flex justify-between items-center">
              <p>$300.00 - 399.99</p>
              <input
                type="checkbox"
                className="w-6 h-6 appearance-none border border-gray-300 rounded-[4px] checked:bg-blackButton checked:border-black checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:justify-center checked:before:items-center"
              />
            </div>
            <div className="flex justify-between items-center">
              <p>$400.00+</p>
              <input
                type="checkbox"
                className="w-6 h-6 appearance-none border border-gray-300 rounded-[4px] checked:bg-blackButton checked:border-black checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:justify-center checked:before:items-center"
              />
            </div>
          </div>
        </div>
      </div>
      {/**Grid */}
      <div className="w-[834px] h-[1547px] gap-[40px] grid ">
        <div className="flex justify-between w-full h-[40px] gap-[419px] ">
          <div className="w-[119px] h-[32px] text-black font-inter text-lg font-semibold leading-8 text-left">
            Living Room
          </div>
          <div className="w-[296px] h-[40px] flex gap-[32px] ">
            {/**قائمة الاختيارات */}
            <div class="flex items-center space-x-2">
              <select
                id="sort"
                name="sort"
                class="  px-3 py-2 focus:outline-none "
              >
                <option value="default">Sort by</option>
                <option value="3*4">3 X 4</option>
                <option value="2*2">2 X 2</option>
                <option value="1*1-1">1 X 1</option>
                <option value="1*1-2">1 X 1</option>
              </select>
            </div>
            {/**  ايقونات العرض */}
            <div className="flex justify-between w-[184px]">
              <button>
                {" "}
                <img
                  alt="3X3"
                  src="/images/3x3.png"
                  className="bg-white hover:bg-background_50 "
                />{" "}
              </button>
              <button>
                {" "}
                <img
                  alt="2X2"
                  src="/images/2x2.png"
                  className="bg-white hover:bg-background_50"
                />{" "}
              </button>
              <button>
                {" "}
                <img
                  alt="1X1"
                  src="/images/1x1-1.png"
                  className="bg-white hover:bg-background_50"
                />{" "}
              </button>
              <button>
                {" "}
                <img
                  alt="1X1"
                  src="/images/1x1-2.png"
                  className="bg-white hover:bg-background_50"
                />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="grid h-[1467px] gap-[24px] w-[834px]  justify-between ">
          <div className="flex gap-[24px] w-[834px] h-[433px] justify-between    ">
            <ProductList numberOfItems={3} />
          </div>
          <div className="flex gap-[24px] w-[834px] h-[433px] justify-between    ">
            <ProductList numberOfItems={3} />
          </div>
          <div className="flex gap-[24px] w-[834px] h-[433px] justify-between    ">
            <ProductList numberOfItems={3} />
          </div>
          <div className=" flex justify-center items-center font-inter text-base font-medium leading-7 tracking-tight text-center">
            <button className="bg-white flex justify-center items-center rounded-[80px] py-1.5 px-10 border-[1px] border-blackButton">
              show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
