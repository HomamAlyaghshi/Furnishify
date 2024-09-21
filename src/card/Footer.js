import React from "react";

const Footer = () => {
  return (
    <div className="bg-blackButton h-[249px] w-[1440px]  py-[80px] px-[160px] pb-[32px] grid gap-[49px]">
      <div className="flex w-[1120px] h-[32px] justify-between">
        <div className="flex w-[544px]  justify-between ">
          <p className="w-[105px] font-poppins text-[24px] font-[500] leading-[24px] text-center text-white">
            3legant.
          </p>
          <div className="w-[1px] h-[24px] bg-gray-500"></div>
          <p className="w-[350px] font-inter text-[14px] font-[400] leading-[22px] text-left text-white">
            Gift & Decoration Store
          </p>
        </div>
        <div className="flex text-white  w-[392px] justify-around font-inter text-[14px] font-[400] leading-[22px] text-left ">
          <button>Home</button>
          <button>Shop</button>
          <button>Product</button>
          <button>Blog</button>
          <button>Contact Us</button>
        </div>
      </div>{" "}
      <div className="w-[1118px] h-[56px] border-t-[1px] border-b-blackButton_50 text-white">
        <div className="w-[1118px] h-[56px] border-t-[1px] border-b-blackButton_50 text-white">
          <div className="flex justify-between items-center w-[1118px] mt-[28px] ">
            <div className="font-poppins text-[12px] font-[400] leading-[20px] text-left">
              Copyright © 2023 3legant. All rights reserved
            </div>
            <div className="flex space-x-4 ">
              <div className="font-poppins text-[12px] font-[600] leading-[20px] text-left ml-4">
                Privacy Policy
              </div>
              <div className="font-poppins text-[12px] font-[600] leading-[20px] text-left">
                Terms of Use
              </div>
            </div>
            <div className="font-poppins text-[12px] font-[600] leading-[20px] text-left ml-auto flex justify-around gap-[24px]">
              <button>
                {/**TODO : خلفية الازرار مو صح */}
                <img
                  alt="instagram"
                  src="/images/instagram.svg"
                  className="h-[24px] w-[24px] bg-white "
                />
              </button>
              <button className="bg-blackButton">
                <img
                  alt="facebook"
                  src="/images/facebook.svg"
                  className="h-[24px] w-[24px] bg-white"
                />
              </button>{" "}
              <button>
                <img
                  alt="youtube"
                  src="/images/youtube.svg"
                  className="h-[24px] w-[24px] bg-white "
                />
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
