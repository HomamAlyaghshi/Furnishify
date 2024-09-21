import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

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
    <div className="w-[1440px] h-[669px] py-[48px]  grid gap-[24px] justify-center items-center text-blackButton">
      <div className="w-[1121px] h-[88px] flex justify-between items-center">
        <div className="font-poppins text-[40px] font-medium leading-[44px] tracking-[-0.4px] text-left">
          Articles
        </div>
        <div className="flex border-b-[1px] border-blackButton items-center">
          <button className="flex items-center whitespace-nowrap pb-1">
            More Articles
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="h-[413px] w-[1121px] grid grid-cols-3 gap-[24px]">
        {blogPosts.map((post, index) => (
          <div key={index} className="flex flex-col gap-[8px]">
            <img
              alt={`blog-image-${index}`}
              src={post.image}
              className="w-[357px] h-[325px]"
            />
            <p className="font-poppins text-[20px] font-medium leading-[28px] text-left">
              {post.title}
            </p>
            <div className="flex border-b-[1px] w-[103px] border-blackButton items-center">
              <button className="flex items-center whitespace-nowrap w-[103px] h-auto gap-[4px] border-b border-transparent">
                {post.readMoreText}
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
