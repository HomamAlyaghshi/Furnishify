import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import FlyoutCart from "./../Expand/FlyoutCart";

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="w-full h-[60px] px-[160px] py-[16px] flex justify-between ">
      <div className="font-poppins text-[24px] leading-[24px] text-center w-[105px] h-[24px] gap-0 font-bold text-blackButton">
        3legant.
      </div>
      <div className="w-[324px] h-[24px] flex gap-[40px] ">
        <Link to="/homepage">
          {" "}
          <button className="grid gap-[2px] text-blackButton_50 font-medium hover:text-blackButton">
            Home
          </button>
        </Link>
        <Link to="/shoppage">
          <button className="grid gap-[2px] text-blackButton_50 font-medium hover:text-blackButton">
            Shop
          </button>
        </Link>

        <Link to="/productpage">
          {" "}
          <button className="grid gap-[2px] text-blackButton_50 font-medium hover:text-blackButton">
            Product
          </button>
        </Link>
        <button className="w-[76px] grid gap-[2px] text-blackButton_50 font-medium whitespace-nowrap hover:text-blackButton">
          Contact Us
        </button>
      </div>
      <div className="w-[130px] h-[28px] flex gap-[16px] ">
        <MagnifyingGlassIcon className="w-6 h-6 text-blackButton" />
        <UserCircleIcon className="w-6 h-6 text-blackButton" />
        <div className="flex gap-[4px] ">
          <button onClick={toggleCart}>
            <ShoppingBagIcon className="w-6 h-6 text-blackButton" />
          </button>
          <div className="w-[20px] h-[20px] mt-1 bg-blackButton rounded-full text-white text-center flex justify-center items-center">
            2
          </div>
        </div>
      </div>
      {isCartOpen && <FlyoutCart onClose={toggleCart} />}{" "}
      {/* عرض الكارت عند الفتح */}
    </div>
  );
};

export default NavBar;
