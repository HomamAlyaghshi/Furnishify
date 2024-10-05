import React, { useState } from "react";
import BlogList from "./BlogList";
import BlogNav from "./BlogNav";

const BlogSection = () => {
  const [layout, setLayout] = useState("3x3"); // تحديد التخطيط الافتراضي
  const blogData = [
    {
      img: "/images/BlogPost1.png",
      label: "7 ways to decor your home like a professional",
      publishDate: "October 16, 2023",
    },
    {
      img: "/images/BlogPost2.png",
      label: "8 ways to improve your living space",
      publishDate: "October 20, 2023",
    },
    {
      img: "/images/BlogPost3.png",
      label: "10 tips for organizing your home",
      publishDate: "November 5, 2023",
    },
    {
      img: "/images/BlogPost4.png",
      label: "7 ways to decor your home like a professional",
      publishDate: "October 16, 2023",
    },
    {
      img: "/images/BlogPost5.png",
      label: "8 ways to improve your living space",
      publishDate: "October 20, 2023",
    },
    {
      img: "/images/BlogPost6.png",
      label: "10 tips for organizing your home",
      publishDate: "November 5, 2023",
    },
    {
      img: "/images/BlogPost7.png",
      label: "7 ways to decor your home like a professional",
      publishDate: "October 16, 2023",
    },
    {
      img: "/images/BlogPost8.png",
      label: "8 ways to improve your living space",
      publishDate: "October 20, 2023",
    },
    {
      img: "/images/BlogPost9.png",
      label: "10 tips for organizing your home",
      publishDate: "November 5, 2023",
    },
  ];

  // تحديد عدد الأعمدة بناءً على التخطيط
  const getGridClasses = () => {
    switch (layout) {
      case "3x3":
        return "grid-cols-3"; // ثلاثة أعمدة
      case "2x2":
        return "grid-cols-2"; // عمودين
      case "1x1":
        return "grid-cols-1"; // عمود واحد للموبايل
      default:
        return "grid-cols-3"; // افتراضي
    }
  };

  // تحديد عدد العناصر التي سيتم عرضها بناءً على التخطيط
  const getVisibleItems = () => {
    switch (layout) {
      case "2x2":
        return blogData.slice(0, 4); // عرض 4 عناصر فقط
      case "1x1":
        return blogData.slice(0, 1); // عرض عنصر واحد فقط
      default:
        return blogData; // عرض جميع العناصر
    }
  };

  return (
    <>
      <BlogNav setLayout={setLayout} />
      <div className="h-auto flex justify-center items-start pt-[40px] md:px-[160px] px-4 pb-[80px]">
        <div
          className={`w-full md:w-[1121px] h-auto md:grid grid-cols-1 gap-[40px]  ${getGridClasses()}`}
        >
          {getVisibleItems().map((post, index) => (
            <div key={index} className="flex gap-[25px]">
              <div className="w-full h-full flex ">
                <BlogList blogPosts={[post]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSection;
