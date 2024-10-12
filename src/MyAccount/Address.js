import React from "react";
import NavBar from "../Shared/NavBar";
import HeaderOfAllAccount from "./HeaderOfAllAccount";
import Footer from "./../Shared/Footer";
import SideBar from "./SideBar";

const Address = () => {
  return (
    <div className="h-auto">
      <NavBar />
      <div className="flex justify-center items-center">
        <HeaderOfAllAccount />
      </div>
      <div className="grid justify-center items-center">
        <div className="w-full max-w-[1120px] h-auto flex flex-col md:flex-row justify-between mb-16">
          <SideBar />
          {/**Address Section */}
          <div className="w-full max-w-[851px] md:h-full h-auto items-center p-4 md:p-[0px_72px] gap-[19px] grid">
            <p className="font-inter text-[20px] font-semibold leading-[32px] text-left">
              Address
            </p>
            <div className="flex flex-col md:flex-row gap-[23px]">
              <div className="w-full md:w-[342px] h-auto p-[16px] gap-[8px] rounded-[8px] border-[1px] ">
                <h2 className="font-bold text-blackButton mb-3">
                  Billing Address
                </h2>
                <p>
                  Sofia Havertz <br /> (+1) 234 567 890
                  <br /> 345 Long Island, New York, United States
                </p>
              </div>
              <div className="w-full md:w-[342px] h-auto p-[16px] gap-[8px] rounded-[8px] border-[1px] ">
                <h2 className="font-bold text-blackButton mb-3">
                  Billing Address
                </h2>
                <p>
                  Sofia Havertz <br /> (+1) 234 567 890
                  <br /> 345 Long Island, New York, United States
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
