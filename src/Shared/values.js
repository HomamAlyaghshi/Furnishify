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
    <div
      data-aos="fade-down"
      className="w-full max-w-[1440px] py-[48px] px-[16px] flex flex-wrap items-center justify-center gap-[48px]"
    >
      {valueItems.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-[262px] h-auto p-[24px] flex flex-col items-center bg-background_50 text-center"
        >
          <img
            alt={item.title}
            src={item.image}
            className="w-[40px] h-[36px] mb-[16px]"
          />
          <div className="w-full">
            <p className="font-poppins text-[20px] font-medium leading-[28px] text-blackButton">
              {item.title}
            </p>
            <p className="font-poppins text-[14px] font-normal leading-[24px] text-blackButton_50">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Values;
