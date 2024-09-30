import React from "react";
const HeaderOfContactUs = () => {
  return (
    <div className="w-[1121px] h-[340px] gap-[30px] grid  whitespace-nowrap">
      <div className="h-[24px] w-[147px] flex gap-[16px]">
        <button>Home &rarr;</button>
        <button>Contact Us</button>
      </div>
      <div className="flex text-blackButton font-poppins text-[54px] font-medium leading-[58px] tracking-[-1px] text-left">
        We believe in sustainable <br />
        decor. We’re passionate about <br />
        life at home.
      </div>
      <p className="flex font-inter text-[16px] font-normal leading-[26px] text-left">
        Our features timeless furniture, with natural fabrics, curved lines,
        plenty of mirrors and classic design, which <br /> can be incorporated
        into any decor project. The pieces enchant for their sobriety, to last
        for generations,
        <br /> faithful to the shapes of each period, with a touch of the
        present
      </p>
    </div>
  );
};

export default HeaderOfContactUs;
