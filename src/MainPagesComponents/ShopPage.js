import React from "react";
import NotificationBar from "../Shared/NotificationBar";
import NavBar from "../Shared/NavBar";
import PageHeader from "../ShopPageComponents/PageHeader";
import Products from "./../ShopPageComponents/Products";
import Newsletter from "../Shared/Newsletter";
import Footer from "./../Shared/Footer";

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
