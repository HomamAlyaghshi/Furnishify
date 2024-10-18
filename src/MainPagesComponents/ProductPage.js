import React from "react";
import NotificationBar from "../Shared/NotificationBar";
import NavBar from "../Shared/NavBar";
import ProductLoop from "../ProductPageComponents/ProductLoop";
import Taps from "../ProductPageComponents/Taps";
import Newsletter from "../Shared/Newsletter";
import Footer from "./../Shared/Footer";
const ProductPage = () => {
  return (
    <div className="w-full h-full ">
      <NotificationBar />
      <div className="border-b-[1px]  text-blackButton_50">
        <NavBar />
      </div>
      <ProductLoop />
      <Taps />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;
