import React from "react";
import NavBar from "../card/NavBar";
import Footer from "../card/Footer";
import Newsletter from "../card/Newsletter";
import BlogHeader from "./BlogHeader";
import BlogSection from "./BlogSection";

const BlogPage = () => {
  return (
    <div className="h-[2744px] overflow-hidden  ">
      <NavBar />
      <BlogHeader />
      <BlogSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default BlogPage;
