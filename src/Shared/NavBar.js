import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";
import {
  UserCircleIcon,
  ShoppingBagIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import FlyoutCart from "./../Expand/FlyoutCart";
import Search from "../Expand/SearchPage";

const NavBar = () => {
  //ستخدمت من الستور عرض المنتجات ودالة فتح السلة واغلاقها واظهارها
  const cartItems = useCartStore((state) => state.cartItems);
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const toggleCart = useCartStore((state) => state.toggleCart);

  // حساب إجمالي الكمية تبع المنتجات
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // إنشاء مرجع للقائمة

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-[60px] w-full md:px-[160px] md:py-[16px] flex justify-between items-center">
      <div className="md:hidden flex items-center ">
        <button onClick={toggleMenu}>
          <Bars3Icon className="w-6 h-6 text-blackButton" />
        </button>
      </div>
      <Link to={"/homepage"}>
        <button className="font-poppins text-[24px] leading-[24px] text-center w-[105px] h-[24px] hover:text-blue font-bold text-blackButton">
          3legant.
        </button>
      </Link>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-[60px] left-0 w-full bg-white shadow-md z-10"
        >
          <div className="flex flex-col items-center py-2">
            <Link to="/homepage">
              <button className="py-2 text-blackButton_50 font-medium hover:text-blackButton">
                Home
              </button>
            </Link>
            <Link to="/shoppage">
              <button className="py-2 text-blackButton_50 font-medium hover:text-blackButton">
                Shop
              </button>
            </Link>
            <Link to="/productpage">
              <button className="py-2 text-blackButton_50 font-medium hover:text-blackButton">
                Product
              </button>
            </Link>
            <Link to="/contactuspage">
              <button className="py-2 text-blackButton_50 font-medium hover:text-blackButton">
                Contact Us
              </button>
            </Link>
            <Link to="/accountpage">
              <button className="py-2 text-blackButton_50 font-medium hover:text-blackButton">
                My Profile
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className="hidden md:flex w-[324px] h-[24px] gap-[40px] ">
        <Link to="/homepage">
          <button className="grid gap-[2px] text-blackButton_50 font-medium hover:text-blackButton transform transition-all hover:scale-90 ">
            Home
          </button>
        </Link>
        <Link to="/shoppage">
          <button className="grid gap-[2px] text-blackButton_50 font-medium hover:text-blackButton transform transition-all hover:scale-90">
            Shop
          </button>
        </Link>
        <Link to="/productpage">
          <button className="grid gap-[2px] text-blackButton_50 font-medium hover:text-blackButton transform transition-all hover:scale-90">
            Product
          </button>
        </Link>
        <Link to={"/contactuspage"}>
          <button className="w-[76px] grid gap-[2px] text-blackButton_50 font-medium whitespace-nowrap hover:text-blackButton transform transition-all hover:scale-90">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="flex md:hidden items-center ml-auto">
        <div className="flex gap-[4px] ml-6">
          <button onClick={toggleCart}>
            <ShoppingBagIcon className="w-6 h-6 text-blackButton" />
          </button>
          <div className="w-[20px] h-[20px] mt-1 bg-blackButton rounded-full text-white text-center flex justify-center items-center">
            {totalQuantity}
          </div>
        </div>
      </div>
      <div className="hidden md:flex w-[130px] h-[28px] flex gap-[16px]">
        <Search />
        <Link to={"/accountpage"}>
          <button>
            <UserCircleIcon className="w-6 h-6 text-blackButton hover:text-blue" />
          </button>
        </Link>
        <div className="flex gap-[4px] ">
          <button onClick={toggleCart}>
            <ShoppingBagIcon className="w-6 h-6 text-blackButton hover:text-blue" />
          </button>
          <div className="w-[20px] h-[20px] mt-1 bg-blackButton rounded-full text-white text-center flex justify-center items-center ">
            {totalQuantity}
          </div>
        </div>
      </div>
      {isCartOpen && <FlyoutCart />} {/* عرض الكارت عند الفتح */}
    </div>
  );
};

export default NavBar;
