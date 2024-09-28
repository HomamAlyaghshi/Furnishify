import React from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="w-[262px] h-[498px] p-[40px_16px] gap-[40px] rounded-[8px]  grid justify-center items-center">
      <div className="w-[131px] h-[120px] gap-[6px]  grid justify-center items-center ml-[50px]">
        <img
          alt="profile1"
          src="/images/profile1.png"
          className="rounded-full w-[82px] h-[82px] ml-[14px]"
        />
        <p className="text-black text-[20px] font-bolds">Sofia Havertz</p>
      </div>
      <div className="w-[230px] h-[258px] gap-[12px] grid text-center  ">
        <Link to={"/accountpage"}>
          <button className="hover:border-b-[1px]  hover:border-b-blackButton_50 text-blackButton_50 hover:text-blackButton">
            Account
          </button>
        </Link>

        <Link to={"/account-addresspage"}>
          <button className="hover:border-b-[1px]   hover:border-b-blackButton_50 text-blackButton_50 hover:text-blackButton">
            Address
          </button>
        </Link>
        <Link to={"/account-orderpage"}>
          <button className="hover:border-b-[1px]   hover:border-b-blackButton_50 text-blackButton_50 hover:text-blackButton">
            Orders
          </button>
        </Link>
        <Link to={"/address-wishlishpage"}>
          <button className="hover:border-b-[1px]   hover:border-b-blackButton_50 text-blackButton_50 hover:text-blackButton">
            Wishlist
          </button>
        </Link>
        <Link to={"/"}>
          <button className="hover:border-b-[1px]   hover:border-b-blackButton_50 text-blackButton_50 hover:text-blackButton">
            Log Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
