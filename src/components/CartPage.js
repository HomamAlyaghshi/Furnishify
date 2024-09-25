import React, { useState } from "react";
import NavBar from "../card/NavBar";
import Footer from "../card/Footer";

import { Link } from "react-router-dom";
import ShoppingCart from "../CartPageComponents/ShoppingCart";
import HeaderOfAllCart from "../CartPageComponents/HeaderOfAllCart";

const CartPage = () => {
  return (
    <div className="w-[1440px] h-[1406px]">
      <NavBar />
      {/**Cart Section */}
      <div className="w-[1440px] h-[1097px] px-[160px] py-[80px]  grid place-items-center">
        <HeaderOfAllCart />
        <ShoppingCart />
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
