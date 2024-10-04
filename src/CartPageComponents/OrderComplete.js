import React from "react";
import NavBar from "../card/NavBar";
import HeaderOfAllCart from "./HeaderOfAllCart";
import Footer from "../card/Footer";

const OrderComplete = () => {
  return (
    <div className="h-full md:h-full">
      <NavBar />
      {/**Cart Section */}
      <div className="py-8 px-4 md:px-16 lg:px-32 grid place-items-center">
        <HeaderOfAllCart />
        <div className="w-full max-w-lg h-full max-h-[748px]  md:max-h-[730px] md:max-w-2xl p-8 grid gap-8 shadow-2xl rounded-lg text-center bg-white">
          <div>
            <p className="text-blackButton_50 text-2xl">Thank you! 🎉</p>
            <p className="text-blackButton text-3xl">
              Your order has been received
            </p>
          </div>
          <div className="flex gap-8 justify-center mt-6">
            <div className="grid text-blackButton_50 gap-2 text-left">
              <span>Order Code:</span>
              <span>Date:</span>
              <span>Total:</span>
              <span>Payment Method:</span>
            </div>
            <div className="grid text-blackButton gap-2 text-left">
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
