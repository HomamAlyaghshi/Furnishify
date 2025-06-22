import React from "react";
import StarsDisplay from "./StarsDisplay";
import AddCart from "../Expand/AddCart";
import ReviewCart from "../Expand/ReviewCart";

const Taps = () => {
  return (
    <div
      data-aos="fade-up"
      className="grid md:gap-[48px] h-auto md:h-auto py-10 md:py-[40px] px-4 md:px-[60px]  w-full"
    >
      {/**Taps / Menu */}
      <div className="w-full md:w-full h-auto flex flex-col md:flex-row gap-4 md:gap-[80px] border-b border-b-blackButton_50 text-blackButton_50">
        <button className="w-full text-left md:w-auto hover:text-blackButton">
          Additional Info
        </button>
        <button className="w-full text-left md:w-auto hover:text-blackButton">
          Questions
        </button>
        <button className="w-full text-left md:w-auto hover:text-blackButton">
          Reviews
        </button>
      </div>
      {/**Review Section */}
      <div className="h-auto w-full grid gap-[40px]">
        {/**Top Review Section  */}
        <div className="w-full md:w-full h-auto">
          <div className="w-full h-auto grid gap-[24px]">
            <h1 className="font-poppins text-[28px] font-medium leading-[34px] tracking-[-0.6px] text-left w-full h-auto">
              Customer Reviews
            </h1>
            <div className="grid gap-[8px]">
              <div className="flex">
                <StarsDisplay />
                <p>11 Reviews</p>
              </div>
              <p className="text-left font-inter text-[16px] font-semibold leading-[26px]">
                Tray Table
              </p>
            </div>
          </div>
          <div className="relative w-full mt-6 md:mt-[30px]">
            <input
              placeholder="Write Your Comment...."
              className="bg-white w-full md:h-[72px] border border-blackButton_50 rounded-lg md:rounded-[16px] px-4 md:px-[24px] py-3 md:py-[16px]"
            />

            <div className="sm:flex justify-center items-center absolute top-2 right-4 md:top-auto md:right-[30px] md:-mt-[70px] bg-blue-500 hidden md:block">
              <AddCart label="Write Review" width="176px" height="40px" />
            </div>
          </div>
        </div>
        {/**comment section */}
        <div className="w-full  h-auto grid gap-[40px]">
          {/** Top section "Review and select button" */}
          <div className="w-full h-[48px] flex justify-between items-center">
            <div className="font-poppins text-[28px] whitespace-nowrap font-medium leading-[34px] tracking-[-0.6px] text-left text-black">
              11 Reviews
            </div>
            <select className="block w-full md:w-auto border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 text-blackButton text-[16px]">
              <option value="newest">Newest</option>
              <option value="all-comment">All Comment</option>
              <option value="top-rated">Top Rated</option>
            </select>
          </div>
          {/**comments */}
          <div className="h-auto w-full grid gap-6">
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
      <div className=" flex justify-center items-center font-inter text-base font-medium leading-7 tracking-tight text-center">
        <button className="mt-4 bg-white flex justify-center items-center rounded-[80px] py-1.5 px-10 border-[1px] border-blackButton hover:bg-1212 hover:text-white transition-all duration-300 transform hover:scale-110">
          show more
        </button>
      </div>
    </div>
  );
};

export default Taps;
