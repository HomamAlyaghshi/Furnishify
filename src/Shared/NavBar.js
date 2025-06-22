import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";
import {
  UserCircleIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon, // Added for close button in mobile menu
} from "@heroicons/react/24/outline";
import FlyoutCart from "./../Expand/FlyoutCart";
import Search from "../Expand/SearchPage"; // Assuming Search is a component

const NavBar = () => {
  const { cartItems, isCartOpen, toggleCart } = useCartStore(); // Destructure for cleaner code

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Renamed for clarity
  const mobileMenuRef = useRef(null); // Renamed for clarity

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        event.target.closest(".menu-button") === null // Prevent closing when clicking the menu button itself
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [window.location.pathname]); // Close on route change

  const navLinks = [
    { name: "Home", path: "/homepage" },
    { name: "Shop", path: "/shoppage" },
    { name: "Product", path: "/productpage" },
    { name: "Contact Us", path: "/contactuspage" },
  ];

  return (
    <nav className="h-[70px] w-full py-4 px-4 md:px-8 flex justify-between items-center bg-white shadow-md relative z-50">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="menu-button p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6 text-gray-700" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Logo */}
      <Link to={"/homepage"}>
        <span className="font-poppins text-2xl font-extrabold text-indigo-700 hover:text-indigo-900 transition-all duration-300 transform hover:scale-105">
          Furnishify.
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex flex-grow justify-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-gray-600 font-medium text-lg hover:text-indigo-700 hover:underline underline-offset-4 transition-all duration-300 relative group"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-[70px] left-0 w-full bg-white shadow-lg p-4 md:hidden animate-slide-down border-t border-gray-200"
        >
          <div className="flex flex-col items-start space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="py-2 text-gray-700 font-medium text-lg w-full text-left hover:bg-gray-50 rounded-md px-2 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/accountpage"
              className="py-2 text-gray-700 font-medium text-lg w-full text-left hover:bg-gray-50 rounded-md px-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              My Profile
            </Link>
          </div>
        </div>
      )}

      {/* Right Section - Icons */}
      <div className="flex items-center gap-6">
        {/* Mobile Cart Icon */}
        <div className="flex md:hidden items-center">
          <button
            onClick={toggleCart}
            className="relative p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            <ShoppingBagIcon className="w-6 h-6 text-gray-700" />
            {totalQuantity > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce-in">
                {totalQuantity}
              </span>
            )}
          </button>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5">
          <Search />
          <Link to={"/accountpage"}>
            <button className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
              <UserCircleIcon className="w-6 h-6 text-gray-700 hover:text-indigo-700 transition-colors duration-200" />
            </button>
          </Link>
          <button
            onClick={toggleCart}
            className="relative p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            <ShoppingBagIcon className="w-6 h-6 text-gray-700 hover:text-indigo-700 transition-colors duration-200" />
            {totalQuantity > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce-in">
                {totalQuantity}
              </span>
            )}
          </button>
        </div>
      </div>

      {isCartOpen && <FlyoutCart />}
    </nav>
  );
};

export default NavBar;
