import React, { useState } from "react";
import NavBar from "../card/NavBar";
import Footer from "../card/Footer";
import Cart from "../CartPageComponents/Cart";
import ElementsCartSummary from "../CartPageComponents/ElementsCartSummary";

const CartPage = () => {
  // إنشاء حالة للتحكم في الرقم واسم الزر
  const [processItems, setProcessItems] = useState([
    { number: 1, buttonText: "Shopping cart" },
    { number: 2, buttonText: "Checkout details" },
    { number: 3, buttonText: "Order complete" },
  ]);

  return (
    <div className="w-[1440px] h-[1406px]">
      <NavBar />
      {/**Cart Section */}
      <div className="w-[1440px] h-[1097px] px-[160px] py-[80px]  grid place-items-center">
        {/**Title */}
        <div className="w-[832px] h-[166px] gap-[40px]  grid justify-center items-center">
          <h1 className="font-poppins text-[54px] font-medium leading-[58px] tracking-[-1px] text-center h-[58px]">
            Cart
          </h1>
          {/**Proccess */}
          <div className="w-[832px] h-[68px] gap-[32px]  flex justify-center items-center ">
            {processItems.map((item, index) => (
              <div
                key={index}
                className="w-[256px] h-[68px] flex pb-[26px] gap-[24px] hover:border-b-[2px] text-blackButton_50 hover:border-1212 "
              >
                <div className="w-[42px] h-[42px] p-[8px] px-[17px] gap-[10px] rounded-full  text-white bg-blackButton">
                  {item.number}
                </div>
                <button className="font-inter text-[16px] font-semibold leading-[26px] text-left">
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/**Cart */}
        <div className="w-[1120px] h-[771px] ">
          <div className="w-[1120px] h-[642px]  ">
            <div className="flex py-20 gap-16">
              <Cart />
              <ElementsCartSummary />
            </div>
          </div>
          <div className="w-[424px] h-auto gap-4  ">
            <h1 className="font-poppins text-[20px] font-medium leading-[28px] text-left">
              Have a coupon?
            </h1>
            <p className="font-inter text-[16px] font-normal leading-[26px] text-left">
              Add your code for an instant cart discount
            </p>
          </div>
          <div className="w-[424px] h-[52px] px-[16px] flex justify-between items-center gap-[8px]  border-[1px] mt-[16px] border-blackButton_50">
            <p className="flex gap-[4px] font-inter text-[16px] items-center justify-center font-medium leading-[28px] tracking-[-0.4px] text-left text-blackButton_50">
              {" "}
              <img
                alt="v5"
                src="/images/v5.png"
                className="h-[24px] w-[24px]"
              />{" "}
              Coupon Code
            </p>
            <button className="font-inter text-[16px] font-medium leading-[28px] tracking-[-0.4px] text-left text-blackButton">
              Apply
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
