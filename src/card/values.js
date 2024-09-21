import React, { useState } from "react";

const Values = () => {
  const [valueItems] = useState([
    {
      image: "/images/v1.svg",
      title: "Free Shipping",
      subtitle: "Order above $200",
    },
    {
      image: "/images/v2.png",
      title: "Money-back",
      subtitle: "30 days guarantee",
    },
    {
      image: "/images/v3.svg",
      title: "Secure Payments",
      subtitle: "Secured by Stripe",
    },
    {
      image: "/images/v4.svg",
      title: "24/7 Support",
      subtitle: "Phone and Email support",
    },
    // يمكنك إضافة المزيد من العناصر هنا
  ]);

  return (
    <div className="w-[1440px] h-[316px] py-[48px] pl-[160px]   gap-[48px]  flex items-center justify-around">
      {valueItems.map((item, index) => (
        <div
          key={index}
          className="w-[262px] h-[220px] p-[48px] grid gap-[16px] bg-background_50 items-center justify-center"
        >
          <img
            alt={item.title}
            src={item.image}
            className="w-[40px] h-[36px] text-blackButton"
          />
          <div className="w-[198px] h-[60px]">
            <p className="font-poppins text-[20px] font-medium leading-[28px] text-left text-blackButton">
              {item.title}
            </p>
            <p className="font-poppins text-[14px] font-normal leading-[24px] text-left text-blackButton_50">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Values;
