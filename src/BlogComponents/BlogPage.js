import React from "react";
import NavBar from "../Shared/NavBar";
import Footer from "./../Shared/Footer";
import Newsletter from "../Shared/Newsletter";
import BlogHeader from "./BlogHeader";
import BlogSection from "./BlogSection";

const BlogPage = () => {
  return (
    <div className="h-full overflow-hidden  ">
      <NavBar />
      <BlogHeader />
      <BlogSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default BlogPage;
