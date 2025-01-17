import React from "react";
import NavBar from "../Shared/NavBar";
import Footer from "./../Shared/Footer";

import ShoppingCart from "../CartPageComponents/ShoppingCart";
import HeaderOfAllCart from "../CartPageComponents/HeaderOfAllCart";

const CartPage = () => {
  return (
    <div className=" h-full ">
      <NavBar />
      {/**Cart Section */}
      <div className=" h-auto md:px-[160px] md:py-[80px]  grid place-items-center">
        <HeaderOfAllCart />
        <ShoppingCart />
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
