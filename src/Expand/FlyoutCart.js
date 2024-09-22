import React, { useEffect, useState } from "react";
import "./Flyout-scrollbar.css";

import QuantityButtonSmall from "./QuantityButtonSmall";

const FlyoutCart = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Tray Table",
      color: "Black",
      price: 19.23,
      image: "/images/cart1.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Chair",
      color: "Red",
      price: 29.99,
      image: "/images/cart1.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Sofa",
      color: "Blue",
      price: 99.99,
      image: "/images/cart1.png",
      quantity: 1,
    },
  ]);

  // تابع لحذف عنصر من العربة
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // زيادة الكمية
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // تقليل الكمية
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // إغلاق الكارت عند الضغط على Esc
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 right-0 w-[413px] h-[1024px] bg-white py-[40px] px-[25px] flex flex-col justify-between z-30">
      <div className="w-[365px] flex flex-col justify-between flex-grow">
        <div className="grid gap-[8px] ">
          <div className="h-auto font-poppins text-[28px] font-medium leading-[34px] tracking-[-0.6px] text-left">
            Cart
          </div>

          {/* تحقق إذا كانت العربة تحتوي على عناصر */}
          {cartItems.length === 0 ? (
            <div className="text-center text-blackButton_50 text-[14px]">
              The cart is empty.
            </div>
          ) : (
            <div
              id="custom-slider"
              className="overflow-y-auto overflow-x-hidden h-[480px] grid gap-[24px] pb-[160px]"
            >
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white h-[144px] border-b-[1px] border-b-blackButton_50 flex items-center gap-[16px] p-2"
                >
                  <div className="flex gap-[10px] items-center w-full">
                    <img
                      alt={item.name}
                      src={item.image}
                      className="h-full w-[80px] object-contain"
                    />
                    <div className="flex flex-col justify-between h-full flex-grow">
                      <p className="font-inter text-[14px] font-semibold leading-[22px] text-left text-blackButton">
                        {item.name}
                      </p>
                      <p className="font-inter text-[12px] font-normal leading-[20px] text-left text-blackButton_50">
                        Color: {item.color}
                      </p>
                      <QuantityButtonSmall
                        quantity={item.quantity}
                        onIncrease={() => increaseQuantity(item.id)}
                        onDecrease={() => decreaseQuantity(item.id)}
                      />
                    </div>
                    <div className="flex flex-col items-end h-full justify-between">
                      <p className="font-inter text-[14px] font-semibold leading-[22px] text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        className="text-blackButton_50 text-right"
                        onClick={() => removeItem(item.id)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* القسم السفلي المحتوي على المجموع وزر Checkout */}
        {cartItems.length > 0 && (
          <div className="p-4 sticky bottom-0 bg-white">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <div>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </div>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <p>Total</p>
              <div>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </div>
            </div>
            <button className="mt-4 bg-blackButton text-white py-2 rounded w-full">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlyoutCart;
