import React from "react";
import StarsDisplay from "./StarsDisplay";
import AddCart from "../Expand/AddCart";
import ReviewCart from "../Expand/ReviewCart";
const Taps = () => {
  return (
    <div className="grid gap-[48px]  h-[1662px] py-[40px] px-[160px]">
      {/**Taps / Menu */}
      <div className="w-[1120px] h-[32px] flex gap-[80px] border-b border-b-blackButton_50 text-blackButton_50 ">
        <button className="hover:text-blackButton">Additional Info</button>
        <button className="hover:text-blackButton">Questions</button>
        <button className="hover:text-blackButton">Reviews</button>
      </div>
      {/**Review Section */}
      <div className=" h-[1502px]  w-[1120px] grid gap-[40px]">
        {/**Top Review Section  */}
        <div className=" w-[1120px] h-[214px]">
          <div className=" w-[1120px] h-[112px] grid gap-[24px]">
            <h1 className="font-poppins text-[28px] font-medium leading-[34px] tracking-[-0.6px] text-left w-[1120px] h-[34px]">
              Customer Reviews
            </h1>
            <div className="grid gap-[8px]">
              <div className="flex">
                <StarsDisplay />
                <p>11 Reviews</p>
              </div>
              <p className=" w-[247px] text-right font-inter text-[16px] font-semibold leading-[26px] ">
                Tray Table
              </p>
            </div>
          </div>
          <div className="relative w-[1120px] mt-[30px]">
            <input className="bg-white w-full h-[72px] border border-blackButton_50 rounded-[16px] px-[24px] py-[16px]" />

            <div className="absolute -mt-[70px] right-[30px] bg-blue-500">
              <AddCart label="Write Review" width="176px" height="40px" />
            </div>
          </div>
        </div>
        {/**comment section */}
        <div className=" w-[1120px] h-[1248px] grid gap-[40px]">
          {/** Top section "Review and select button" */}
          <div className=" w-[1120px] h-[48px] gap-[728px]  flex">
            <div className="font-poppins text-[28px] whitespace-nowrap font-medium leading-[34px] tracking-[-0.6px] text-left text-black">
              11 Reviews
            </div>
            <select className="block w-full  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 text-blackButton text-[16px]">
              <option value="newest">Newest</option>
              <option value="all-comment">All Comment</option>
              <option value="top-rated">Top Rated</option>
            </select>
          </div>
          {/**comments */}
          <div className="h-[1160px] w-full  grid gap-[24px]">
            <ReviewCart
              imageSrc="/images/profile1.png"
              name="Sofia Harvetz"
              reviewText="I bought it 3 weeks ago and now come back just to say 'Awesome Product'. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
            />
            <ReviewCart
              imageSrc="/images/profile1.png"
              name="Sofia Harvetz"
              reviewText="I bought it 3 weeks ago and now come back just to say 'Awesome Product'. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
            />
            <ReviewCart
              imageSrc="/images/profile1.png"
              name="Sofia Harvetz"
              reviewText="I bought it 3 weeks ago and now come back just to say 'Awesome Product'. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
            />
            <ReviewCart
              imageSrc="/images/profile1.png"
              name="Sofia Harvetz"
              reviewText="I bought it 3 weeks ago and now come back just to say 'Awesome Product'. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
            />
            <ReviewCart
              imageSrc="/images/profile1.png"
              name="Sofia Harvetz"
              reviewText="I bought it 3 weeks ago and now come back just to say 'Awesome Product'. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
            />
          </div>
        </div>
      </div>
      {/**Button TODO */}
    </div>
  );
};

export default Taps;
