import React, { useState } from "react";
import QuantityButtonSmall from "../Expand/QuantityButtonSmall";

const CartProduct = ({ image, productName, color, price, onRemove }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // حساب total price
  const totalPrice = quantity * price;

  return (
    <div className="w-[643px] h-[144px] py-6 gap-0 border-b flex justify-between">
      {/* Cart Item */}
      <div className="w-[316px] h-auto flex gap-2">
        <img alt={productName} src={image} className="w-[80px] h-[96px]" />
        <div className="w-[220px] h-auto grid gap-4">
          <p className="font-inter text-[14px] font-semibold leading-[22px] text-left text-blackButton">
            {productName}
          </p>
          <p className="font-inter text-[12px] font-normal leading-[20px] text-left text-blackButton_50">
            Color: {color}
          </p>
          <button
            className="font-inter text-[14px] font-semibold leading-[22px] text-left text-blackButton_50"
            onClick={onRemove}
          >
            X Remove
          </button>
        </div>
      </div>
      {/* Quantity and Price Info */}
      <div className="w-[328px] h-auto gap-0 flex items-center justify-between">
        <QuantityButtonSmall
          quantity={quantity}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />
        <p>${price.toFixed(2)}</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartProduct;
