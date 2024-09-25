import React from "react";
import NavBar from "../card/NavBar";
import HeaderOfAllCart from "./HeaderOfAllCart";
import Footer from "../card/Footer";
const OrderComplete = () => {
  return (
    <div className="w-[1440px] h-[1406px]">
      <NavBar />
      {/**Cart Section */}
      <div className="w-[1440px] h-[1097px] px-[160px] py-[80px]  grid place-items-center">
        <HeaderOfAllCart />
      </div>

      <Footer />
    </div>
  );
};

export default OrderComplete;
