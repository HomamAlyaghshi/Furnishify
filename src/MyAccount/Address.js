import React from "react";
import NavBar from "../card/NavBar";
import HeaderOfAllAccount from "./HeaderOfAllAccount";
import Footer from "../card/Footer";
import SideBar from "./SideBar";
const Address = () => {
  return (
    <div className="h-[1435px]   ">
      <NavBar />
      <div className="flex justify-center items-center">
        <HeaderOfAllAccount />
      </div>
      <div className="grid justify-center items-center">
        <div className="w-[1120px] h-[828px]  flex justify-between mb-16  ">
          <SideBar />
          {/**Address Section */}
          <div className="w-[851px] h-[191px] p-[0px_72px] gap-[19px] grid ">
            <p className="font-inter text-[20px] font-semibold leading-[32px] text-left">
              Address
            </p>
            <div className="flex gap-[23px] ">
              <div className="w-[342px] h-[140px] p-[16px] gap-[8px] rounded-[8px] border-[1px] ">
                <h2 className="font-bold text-blackButton mb-3">
                  Billing Address
                </h2>
                <p>
                  Sofia Havertz <br /> (+1) 234 567 890
                  <br /> 345 Long Island, NewYork, United States
                </p>
              </div>
              <div className="w-[342px] h-[140px] p-[16px] gap-[8px] rounded-[8px] border-[1px] ">
                <h2 className="font-bold text-blackButton mb-3">
                  Billing Address
                </h2>
                <p>
                  Sofia Havertz <br /> (+1) 234 567 890
                  <br /> 345 Long Island, NewYork, United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Address;
