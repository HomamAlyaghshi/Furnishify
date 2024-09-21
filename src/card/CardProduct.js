import React, { useState } from "react";
import "./custom-scrollbar.css";
import {
  StarIcon as OutlineStar,
  HeartIcon as OutlineHeart,
} from "@heroicons/react/24/outline";
import {
  StarIcon as SolidStar,
  HeartIcon as SolidHeart,
} from "@heroicons/react/24/solid";

const CardProduct = ({ image, name, price, oldPrice }) => {
  const [selectedStars, setSelectedStars] = useState(5);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleStarClick = (index) => {
    setSelectedStars(index + 1);
  };

  const handleFavoriteToggle = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="w-[262px] h-[433px] bg-white relative group inline-block mr-4">
      {/** Overlay for title */}
      <div className="absolute top-2 left-2  p-1 w-[71px] h-[56px] rounded-[4px] grid gap-[8px] ">
        <div className="w-[67px] h-[24px] bg-white flex justify-center items-center font-inter text-[16px] font-bold leading-[16px] text-center">
          NEW
        </div>
        <div className="w-[67px] h-[24px] text-white bg-kiwi px-[14px] py-[4px] gap-[8px] rounded-[4px] font-inter text-[16px] font-bold leading-[16px] text-center">
          -50%
        </div>
      </div>

      {/** Heart icon on the top right */}
      <div
        className="absolute top-2 right-2 w-[32px] h-[32px] rounded-full bg-white text-blackButton_50  cursor-pointer hidden group-hover:flex justify-center items-center"
        onClick={handleFavoriteToggle}
      >
        {isFavorite ? (
          <SolidHeart className="w-[20px] h-[20px] text-red-500" />
        ) : (
          <OutlineHeart className="w-[20px] h-[20px] text-blackButton_50" />
        )}
      </div>

      {/** Photo */}
      <img alt={name} src={image} className="bg-emerald-300 h-[349px] w-full" />

      {/** Add button just below the image, hidden by default and shown on hover */}
      <button className="absolute top-[287px] left-1/2 transform -translate-x-1/2 bg-blackButton text-white py-1 px-2 rounded-[8px] w-[230px] h-[46px] hidden group-hover:flex justify-center items-center">
        Add to Cart
      </button>

      {/** Content here */}
      <div className="h-[72px] mt-[12px]">
        <div className="h-[16px] w-[88px] flex gap-[2px]">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} onClick={() => handleStarClick(index)}>
              {index < selectedStars ? (
                <SolidStar className="w-[16px] h-[16px] text-blackButton" />
              ) : (
                <OutlineStar className="w-[16px] h-[16px] text-blackButton_50" />
              )}
            </div>
          ))}
        </div>
        <div>{name}</div>
        <div className="flex">
          <div className="text-blackButton">{price}</div>
          {oldPrice && (
            <div className="text-blackButton_50 line-through ml-[8px]">
              {oldPrice}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
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
  ]);

  return (
    <div
      id="custom-slider"
      className="w-[1280px] h-[433px] overflow-x-scroll whitespace-nowrap  "
    >
      {products.map((product, index) => (
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
