import React, { useState } from "react";
import QuantityButtonSmall from "./QuantityButtonSmall";

const FlyoutCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="fixed top-0 right-0 w-[413px] h-[1024px] bg-white py-[40px] px-[25px] flex flex-col justify-between z-30">
      <div className="w-[365px] max-h-[530px] flex flex-col">
        <div className="grid gap-[16px]">
          <div className="h-[34px] font-poppins text-[28px] font-medium leading-[34px] tracking-[-0.6px] text-left">
            Cart
          </div>
          <div className="overflow-y-auto overflow-x-hidden h-[480px] grid gap-[24px]">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white h-[144px] border-b-[1px] border-b-blackButton_50 flex items-center gap-[16px] p-2" // إضافة padding هنا
              >
                <div className="flex gap-[10px] items-center w-full">
                  <img
                    alt={item.name}
                    src={item.image}
                    className="h-full w-[80px] object-contain"
                  />
                  <div className="flex flex-col justify-between h-full flex-grow">
                    {" "}
                    {/* إضافة flex-grow لتوسيع المساحة */}
                    <p className="font-inter text-[14px] font-semibold leading-[22px] text-left text-blackButton">
                      {item.name}
                    </p>
                    <p className="font-inter text-[12px] font-normal leading-[20px] text-left text-blackButton_50">
                      Color: {item.color}
                    </p>
                    <QuantityButtonSmall />
                  </div>
                  <div className="flex flex-col items-end h-full justify-between">
                    {" "}
                    {/* جعل السعر وزر الإغلاق في النهاية */}
                    <p className="font-inter text-[14px] font-semibold leading-[22px] text-right">
                      ${item.price.toFixed(2)}
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
        </div>
        <div className="bg-slate-500 h-[210px] grid">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <div>
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </div>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Total</p>
            <div>
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </div>
          </div>
          <button className="mt-4 bg-blackButton text-white py-2 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlyoutCart;
