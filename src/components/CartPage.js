import React, { useState } from "react";
import NavBar from "../card/NavBar";
import Footer from "../card/Footer";

import ShoppingCart from "../CartPageComponents/ShoppingCart";
import HeaderOfAllCart from "../CartPageComponents/HeaderOfAllCart";

const CartPage = () => {
  return (
    <div className=" h-[1406px]">
      <NavBar />
      {/**Cart Section */}
      <div className=" h-[1097px] px-[160px] py-[80px]  grid place-items-center">
        <HeaderOfAllCart />
        <ShoppingCart />
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
