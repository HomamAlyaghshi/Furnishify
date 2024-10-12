import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      image: "/images/blog1.png",
      title: "7 ways to decor your home",
      readMoreText: "Read More",
    },
    {
      image: "/images/blog2.png",
      title: "10 tips for a cozy living room",
      readMoreText: "Read More",
    },
    {
      image: "/images/blog3.png",
      title: "How to choose the right furniture",
      readMoreText: "Read More",
    },
  ]);

  return (
    <div className=" h-auto py-[24px] md:py-[48px] grid gap-[24px] justify-center items-center text-blackButton">
      <div className=" md:w-[1121px] h-auto md:h-[88px] flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
        <div className="font-poppins text-[28px] md:text-[40px] font-medium leading-[32px] md:leading-[44px] tracking-[-0.4px] text-left">
          Articles
        </div>
        <div className="flex border-b-[1px] border-blackButton items-center mt-4 md:mt-0">
          <Link to={"/blogpage"}>
            <button className="flex items-center whitespace-nowrap pb-1 text-[16px] md:text-[18px]">
              More Articles
              <ArrowRightIcon className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </button>
          </Link>
        </div>
      </div>
      <div className="h-auto w-full md:w-[1121px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px] px-4 md:px-0">
        {blogPosts.map((post, index) => (
          <div key={index} className="flex flex-col gap-[8px]">
            <img
              alt={`blog-image-${index}`}
              src={post.image}
              className="w-full h-[250px] md:w-[357px] md:h-[325px] object-cover"
            />
            <p className="font-poppins text-[18px] md:text-[20px] font-medium leading-[24px] md:leading-[28px] text-left">
              {post.title}
            </p>
            <div className="flex border-b-[1px] w-[103px] border-blackButton items-center">
              <button className="flex items-center whitespace-nowrap w-[103px] h-auto gap-[4px] border-b border-transparent text-[14px] md:text-[16px]">
                {post.readMoreText}
                <ArrowRightIcon className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
