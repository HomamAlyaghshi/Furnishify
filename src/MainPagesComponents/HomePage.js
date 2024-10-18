import React from "react";
import NavBar from "../Shared/NavBar";
import Slider from "../HomePageComponents/Slider";
import BannerGrid from "../HomePageComponents/BannerGrid";
import ProductCarousel from "../HomePageComponents/ProductCarousel";
import Values from "../Shared/values";
import Banner from "../HomePageComponents/Banner";
import BlogSectaion from "../HomePageComponents/BlogSectaion";
import Newsletter from "../Shared/Newsletter";
import Footer from "../Shared/Footer";
import NotificationBar from "../Shared/NotificationBar";
const HomePage = () => {
  return (
    <div className="w-full h-full ">
      <NotificationBar />
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
