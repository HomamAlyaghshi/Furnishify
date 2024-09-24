import React, { useState } from "react";
import CardProduct from "./CardProduct";
import "./custom-scrollbar.css";

const ProductList = ({ numberOfItems }) => {
  const [products] = useState([
    {
      image: "/images/product1.png",
      name: "Loveseat Sofa",
      price: "$199.00",
      oldPrice: "$400.00",
    },
    {
      image: "/images/product2.png",
      name: "Table Lamp",
      price: "$24.99",
    },
    {
      image: "/images/product3.png",
      name: "Beige Table Lamp",
      price: "$24.99",
    },
    {
      image: "/images/product4.png",
      name: "Bamboo basket",
      price: "$24.99",
    },
    {
      image: "/images/product5.png",
      name: "Toasted",
      price: "$244.99",
    },
    {
      image: "/images/product1.png",
      name: "Loveseat Sofa",
      price: "$199.00",
      oldPrice: "$400.00",
    },
    {
      image: "/images/product1.png",
      name: "Loveseat Sofa",
      price: "$199.00",
      oldPrice: "$400.00",
    },
    {
      image: "/images/product2.png",
      name: "Table Lamp",
      price: "$24.99",
    },
    {
      image: "/images/product3.png",
      name: "Beige Table Lamp",
      price: "$24.99",
    },
    {
      image: "/images/product4.png",
      name: "Bamboo basket",
      price: "$24.99",
    },
    {
      image: "/images/product5.png",
      name: "Toasted",
      price: "$244.99",
    },
    {
      image: "/images/product1.png",
      name: "Loveseat Sofa",
      price: "$199.00",
      oldPrice: "$400.00",
    },
  ]);

  // تحديد عدد المنتجات المراد عرضها باستخدام slice
  const displayedProducts = products.slice(0, numberOfItems);

  return (
    <div className="w-[1280px] h-[433px] ">
      {displayedProducts.map((product, index) => (
        <CardProduct
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
          oldPrice={product.oldPrice}
        />
      ))}
    </div>
  );
};

export default ProductList;
