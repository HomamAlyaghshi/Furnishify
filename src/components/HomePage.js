import React from "react";
import NavBar from "../card/NavBar";
import Slider from "../card/Slider";
import BannerGrid from "../card/BannerGrid";
import ProductCarousel from "../card/ProductCarousel";
import Values from "../card/values";
import Banner from "../card/Banner";
import BlogSectaion from "../card/BlogSectaion";
import Newsletter from "../card/Newsletter";
import Footer from "../card/Footer";
const HomePage = () => {
  return (
    <div className="w-[1440px] h-[4307px]">
      <div className="h-[40px] bg-slate-400"></div>
      <NavBar />
      <Slider />
      <BannerGrid />
      <ProductCarousel />
      <Values />
      <Banner />
      <BlogSectaion />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
