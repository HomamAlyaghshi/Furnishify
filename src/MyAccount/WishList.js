import React from "react";
import NavBar from "../Shared/NavBar";
import HeaderOfAllAccount from "./HeaderOfAllAccount";
import Footer from "./../Shared/Footer";
import SideBar from "./SideBar";
const WishList = () => {
  return (
    <div className="h-[1435px]   ">
      <NavBar />
      <div className="flex justify-center items-center">
        <HeaderOfAllAccount />
      </div>
      <div className="grid justify-center items-center">
        <div className="w-[1120px] h-[828px]  flex justify-between mb-16  ">
          <SideBar />
          {/**WishLish Section */}
          <div className="w-[851px] h-[191px] p-[0px_72px] gap-[19px] grid ">
            <p className="font-inter text-[20px] font-semibold leading-[32px]  text-left">
              Your Wishlist
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WishList;
