import React from "react";
import NavBar from "../card/NavBar";
import HeaderOfAllCart from "./HeaderOfAllCart";
import Footer from "../card/Footer";
const OrderComplete = () => {
  return (
    <div className=" h-[1406px]">
      <NavBar />
      {/**Cart Section */}
      <div className=" h-[1097px] px-[160px] py-[80px]  grid place-items-center">
        <HeaderOfAllCart />
        <div className="w-[738px] h-[730px] p-[80px_95px] grid gap-[40px] shadow-2xl rounded-[8px] text-center">
          <div>
            <p className="text-blackButton_50 text-[28px]">Thank you! 🎉</p>
            <p className="text-blackButton text-[40px]">
              Your order has been received
            </p>
          </div>
          <div className="flex gap-[32px] justify-center  ">
            <div className="grid text-blackButton_50 gap-[12px] text-left">
              <span>order code:</span>
              <span>Date:</span>
              <span>Total:</span>
              <span>Payment method:</span>
            </div>
            <div className="grid text-blackButton gap-[12px] text-left">
              <span>#0123_45678</span>
              <span>October 19, 2023</span>
              <span>$1,345.00</span>
              <span>Credit Card</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderComplete;
