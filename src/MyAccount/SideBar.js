import React from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const handleChange = (event) => {
    navigate(event.target.value);
  };
  return (
    <div className="w-full max-w-[262px] md:h-[498px]  h-auto p-4 gap-[40px] rounded-[8px] grid justify-center items-center bg-slate-100">
      <div className="w-full gap-[6px] grid justify-center items-center text-center">
        <img
          alt="profile1"
          src="/images/profile1.png"
          className="rounded-full w-[82px] h-[82px] mx-auto"
        />
        <p className="text-black text-[20px] font-bold">Sofia Havertz</p>
      </div>

      {/* Dropdown for mobile */}
      <select
        onChange={handleChange}
        className="block md:hidden w-full h-[40px] border border-gray-300 rounded"
      >
        <option value="/accountpage">Account</option>
        <option value="/account-addresspage">Address</option>
        <option value="/account-orderpage">Orders</option>
        <option value="/address-wishlistpage">Wishlist</option>
        <option value="/">Log Out</option>
      </select>

      {/* Buttons for larger screens */}
      <div className="hidden md:w-[230px] md:h-[258px] md:gap-[12px] md:grid md:text-center">
        <Link to={"/accountpage"}>
          <button className="hover:border-b-[1px] hover:border-b-blackButton_50 text-blackButton_50 hover:text-blackButton">
            Account
          </button>
        </Link>

        <Link to={"/account-addresspage"}>
          <button className="hover:border-b-[1px] hover:border-b-blackButton_50 text-blackButton_50 hover:text-blackButton">
            Address
          </button>
        </Link>

        <Link to={"/account-orderpage"}>
          <button className="hover:border-b-[1px] hover:border-b-blackButton_50 text-blackButton_50 hover:text-blackButton">
            Orders
          </button>
        </Link>

        <Link to={"/address-wishlistpage"}>
          <button className="hover:border-b-[1px] hover:border-b-blackButton_50 text-blackButton_50 hover:text-blackButton">
            Wishlist
          </button>
        </Link>

        <Link to={"/"}>
          <button className="hover:border-b-[1px] hover:border-b-blackButton_50 text-blackButton_50 hover:text-blackButton">
            Log Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
