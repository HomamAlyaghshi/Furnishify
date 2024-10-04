import React from "react";
const HeaderOfContactUs = () => {
  return (
    <div className="w-full max-w-[1121px] h-auto gap-[20px] md:gap-[30px] grid mx-auto px-4">
      {/* الأزرار (Home -> Contact Us) */}
      <div className="h-[24px] w-auto flex gap-[8px] md:gap-[16px] text-sm md:text-lg">
        <button className="hover:underline">Home &rarr;</button>
        <button className="text-gray-500">Contact Us</button>
      </div>
      {/* العنوان الرئيسي */}
      <div className="text-black font-poppins text-[32px] md:text-[54px] font-medium leading-[36px] md:leading-[58px] tracking-[-1px] text-left">
        We believe in sustainable <br className="hidden md:block" />
        decor. We’re passionate about <br className="hidden md:block" />
        life at home.
      </div>
      {/* الوصف النصي */}
      <p className="font-inter text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[26px] text-left">
        Our features timeless furniture, with natural fabrics, curved lines,
        plenty of mirrors and classic design, which{" "}
        <br className="hidden md:block" />
        can be incorporated into any decor project. The pieces enchant for their
        sobriety, to last for generations, <br className="hidden md:block" />
        faithful to the shapes of each period, with a touch of the present.
      </p>
    </div>
  );
};

export default HeaderOfContactUs;
