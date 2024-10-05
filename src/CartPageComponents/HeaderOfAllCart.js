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
    <div className="w-full max-w-[832px] h-full gap-[20px] grid justify-center items-center p-4 mt-8 md:mt-16">
      <h1 className="font-poppins text-[32px] md:text-[54px] font-medium leading-[38px] md:leading-[58px] tracking-[-1px] text-center">
        {getTitle()}
      </h1>

      {/** Proccess */}
      <div className="w-full max-w-[832px] flex flex-col md:flex-row gap-[16px] md:gap-[32px] justify-center items-center">
        {processItems.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[256px] h-auto flex pb-[26px] gap-[12px] md:gap-[24px] items-center hover:border-b-[2px] text-blackButton_50 hover:border-blackButton"
          >
            <div className="w-[42px] h-[42px] flex justify-center items-center rounded-full text-white bg-blackButton">
              {item.number}
            </div>
            <Link to={item.link}>
              <button className="font-inter text-[14px] md:text-[16px] font-semibold leading-[20px] md:leading-[26px] text-left">
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
