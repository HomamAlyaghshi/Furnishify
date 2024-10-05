import React from "react";
import NotificationBar from "../card/NotificationBar";
import NavBar from "../card/NavBar";
import PageHeader from "../ShopPageComponents/PageHeader";
import Products from "./../ShopPageComponents/Products";
import Newsletter from "../card/Newsletter";
import Footer from "../card/Footer";

const ShopPage = () => {
  return (
    <div className="w-auto h-full min-h-screen flex flex-col  overflow-x-hidden overflow-y-hidden">
      <NotificationBar />
      <NavBar />
      <PageHeader />
      <div className="flex-grow">
        <Products />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ShopPage;
