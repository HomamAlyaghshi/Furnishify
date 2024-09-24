import React, { useState } from "react";
import NavBar from "../card/NavBar";
import Footer from "../card/Footer";

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
        <div className="w-[1120px] h-[771px] bg-1212"></div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
