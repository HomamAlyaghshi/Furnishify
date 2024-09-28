import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const HeaderOfAllCart = () => {
  const location = useLocation(); // استخدام useLocation للحصول على المسار الحالي

  // إنشاء حالة للتحكم في الرقم واسم الزر
  const [processItems] = useState([
    { number: 1, buttonText: "Shopping cart", link: "/cartpage" },
    { number: 2, buttonText: "Checkout details", link: "/checkout-details" },
    { number: 3, buttonText: "Order complete", link: "/order-complete" },
  ]);

  // تحديد العنوان بناءً على المسار الحالي
  const getTitle = () => {
    switch (location.pathname) {
      case "/checkout-details":
        return "Check Out";
      case "/order-complete":
        return "Complete!";
      default:
        return "Cart";
    }
  };

  return (
    <div className="w-[832px] h-[166px] gap-[40px]  grid justify-center items-center">
      <h1 className="font-poppins text-[54px] font-medium leading-[58px] tracking-[-1px] text-center h-[58px]">
        {getTitle()}
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
            <Link to={item.link}>
              <button className="font-inter text-[16px] font-semibold leading-[26px] text-left">
                {item.buttonText}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderOfAllCart;
