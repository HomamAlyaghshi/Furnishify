import React from "react";
import ElementsCartSummary from "./ElementsCartSummary";
import Cart from "./Cart";

const ShoppingCart = () => {
  return (
    <div className="w-full px-4">
      {/* Cart */}
      <div className="max-w-[1120px] mx-auto">
        <div className="w-full h-auto">
          <div className="flex flex-col lg:flex-row py-6 lg:py-20 gap-4 lg:gap-16 items-center justify-center">
            {/* على الموبايل، تكون العناصر مكدسة عموديًا */}
            <div className="w-full lg:w-2/3">
              <Cart />
            </div>
            <div className="w-full lg:w-1/3">
              <ElementsCartSummary />
            </div>
          </div>
        </div>

        {/* قسم الكوبون */}
        <div className="mb-4">
          <div className="w-full lg:w-[424px] h-auto gap-4 ">
            <h1 className="font-poppins text-[18px] lg:text-[20px] font-medium leading-[28px] text-left">
              Have a coupon?
            </h1>
            <p className="font-inter text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[26px] text-left">
              Add your code for an instant cart discount
            </p>
          </div>

          {/* صندوق إدخال الكوبون */}
          <div className="w-full lg:w-[424px] h-[48px] lg:h-[52px] px-[12px] lg:px-[16px] flex justify-between items-center gap-[8px] border-[1px] mt-[16px] border-blackButton_50">
            <p className="flex gap-[4px] font-inter text-[14px] lg:text-[16px] items-center justify-center font-medium leading-[28px] tracking-[-0.4px] text-left text-blackButton_50">
              <img
                alt="v5"
                src="/images/v5.png"
                className="h-[20px] lg:h-[24px] w-[20px] lg:w-[24px]"
              />
              Coupon Code
            </p>
            <button className="font-inter text-[14px] lg:text-[16px] font-medium leading-[28px] tracking-[-0.4px] text-left text-blackButton">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
