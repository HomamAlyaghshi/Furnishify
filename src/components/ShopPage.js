import React from "react";
import NotificationBar from "../card/NotificationBar";
import NavBar from "../card/NavBar";
import PageHeader from "../ShopPageComponents/PageHeader";
import Products from "./../ShopPageComponents/Products";
import Newsletter from "../card/Newsletter";
import Footer from "../card/Footer";
const ShopPage = () => {
  return (
    <div className="w-[1440px] h-[2808px] ">
      <NotificationBar />
      <NavBar />
      <PageHeader />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ShopPage;
