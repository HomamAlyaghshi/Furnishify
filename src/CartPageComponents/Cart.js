import React, { useState } from "react";
import CartProduct from "./CartProduct";

const Cart = () => {
  // إنشاء حالة لتخزين العناصر في السلة
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "/images/cart1.png",
      productName: "Tray Table",
      color: "Black",
      price: 19.0,
    },
    {
      id: 2,
      image: "/images/cart2.png",
      productName: "Tray Table",
      color: "Red",
      price: 19.0,
    },
    {
      id: 3,
      image: "/images/product2.png",
      productName: "Table Lamp",
      color: "Gold",
      price: 39.0,
    },
  ]);

  // دالة لحذف العنصر
  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="w-[643px] h-[482px]">
      {/**Table Header */}
      <header className="w-[643px] h-auto pb-6 gap-0 border-b border-b-blackButton_50 flex justify-between font-inter text-[16px] font-semibold leading-[26px] text-left">
        <div>
          <p>Product</p>
        </div>
        <div className="w-[322px] h-auto flex justify-between">
          <p>Quantity</p>
          <p>Price</p>
          <p>Subtotal</p>
        </div>
      </header>
      {/* عرض العناصر في السلة */}
      {cartItems.map((item) => (
        <CartProduct
          key={item.id}
          image={item.image}
          productName={item.productName}
          color={item.color}
          price={item.price}
          onRemove={() => handleRemove(item.id)} // تمرير دالة الحذف
        />
      ))}
    </div>
  );
};

export default Cart;
