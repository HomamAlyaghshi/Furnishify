import React from "react";
import NotificationBar from "./../card/NotificationBar";
import NavBar from "../card/NavBar";
import ProductLoop from "../ProductPageComponents/ProductLoop";
import Taps from "../ProductPageComponents/Taps";
import Newsletter from "../card/Newsletter";
import Footer from "../card/Footer";
const ProductPage = () => {
  return (
    <div className="w-full  overflow-x-hidden overflow-y-hidden">
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
