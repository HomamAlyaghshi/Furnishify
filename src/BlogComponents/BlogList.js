import React from "react";

const BlogList = ({ blogPosts }) => {
  return (
    <div className="grid w-[357px] gap-[24px]">
      {blogPosts.map((post, index) => (
        <div key={index} className="grid gap-[24px]">
          <img
            src={post.img}
            alt={`Post${index + 1}`}
            className="h-[325px] w-full"
          />
          <div className="grid gap-[8px]">
            <h1 className="text-[20px] text-blackButton">{post.label}</h1>
            <p className="text-[12px] text-blackButton_50">
              {post.publishDate}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
