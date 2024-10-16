import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blackButton h-[665px] md:h-full sm:h-[360px] py-[80px] md:px-[16px] sm:px-[160px] pb-[32px] grid gap-[49px]">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center sm:flex-row sm:w-[544px] justify-between">
          <p className="w-[105px] font-poppins text-[24px] font-[500] leading-[24px] text-center text-white">
            3legant.
          </p>
          <div className="w-[1px] h-[24px] bg-gray-500 hidden sm:block"></div>
          <p className="w-full sm:w-[350px] font-inter text-[14px] font-[400] leading-[22px] text-center sm:text-left text-white">
            Gift & Decoration Store
          </p>
        </div>
        <div className="flex flex-col sm:flex-row text-white w-full sm:w-[392px] justify-between mt-10 gap-6 sm:mt-0 font-inter text-[14px] font-[400] leading-[22px] text-center sm:text-left  sm:gap-0 ">
          <Link to={"/homepage"}>
            <button className="mb-2 sm:mb-0">Home</button>
          </Link>
          <Link to={"/shoppage"}>
            <button className="mb-2 sm:mb-0">Shop</button>
          </Link>
          <Link to={"/productpage"}>
            <button className="mb-2 sm:mb-0">Product</button>
          </Link>
          <Link to={"/blogpage"}>
            <button className="mb-2 sm:mb-0">Blog</button>
          </Link>
          <Link to={"/contactuspage"}>
            <button className="mb-2 sm:mb-0">Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="w-full border-t-[1px] border-b-blackButton_50 text-white">
        <div className="flex flex-col items-center w-full mt-[28px] sm:flex-row sm:justify-between">
          <div className="font-poppins text-[12px] font-[400] leading-[20px] text-center sm:text-left">
            Copyright © 2023 3legant. All rights reserved
          </div>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <div className="font-poppins text-[12px] font-[600] leading-[20px] text-center sm:text-left">
              Privacy Policy
            </div>
            <div className="font-poppins text-[12px] font-[600] leading-[20px] text-center sm:text-left">
              Terms of Use
            </div>
          </div>
          <div className="font-poppins text-[12px] font-[600] leading-[20px] text-center sm:text-left mt-2 sm:mt-0 flex justify-around gap-[24px]">
            <button>
              <img
                alt="instagram"
                src="/images/instagram.png"
                className="h-[24px] w-[24px]  "
              />
            </button>
            <button className="bg-blackButton">
              <img
                alt="facebook"
                src="/images/facebook.png"
                className="h-[24px] w-[24px] "
              />
            </button>
            <button>
              <img
                alt="youtube"
                src="/images/youtube.png"
                className="h-[24px] w-[24px]  "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
