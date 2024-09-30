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

  // تحديد عدد الأعمدة وعدد العناصر بناءً على التخطيط
  const getGridClasses = () => {
    switch (layout) {
      case "3x3":
        return "grid-cols-3"; // ثلاثة أعمدة
      case "2x2":
        return "grid-cols-2"; // عمودين
      case "1x1":
        return "grid-cols-2"; // عمودين، لكن نعرض فقط عنصرين
      default:
        return "grid-cols-3";
    }
  };

  // تحديد عدد العناصر التي سيتم عرضها بناءً على التخطيط
  const getVisibleItems = () => {
    switch (layout) {
      case "2x2":
        return blogData.slice(0, 4); // عرض 4 عناصر فقط
      case "1x1":
        return blogData.slice(0, 2); // عرض عنصرين فقط
      default:
        return blogData; // عرض جميع العناصر
    }
  };

  return (
    <>
      <BlogNav setLayout={setLayout} />
      <div className="h-[1619px] flex justify-center items-start pt-[40px] px-[160px] pb-[80px] ">
        <div
          className={`w-[1121px] h-auto grid gap-[40px] ${getGridClasses()}`}
        >
          {getVisibleItems().map((post, index) => (
            <div key={index} className="flex gap-[25px]">
              <div className="w-full h-full flex">
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
