import React, { useEffect, useState } from "react";
import "./Flyout-scrollbar.css";
import AddCart from "./AddCart";
import { Link } from "react-router-dom";
import CartProductItem from "./CartProductItem"; // استيراد المكون الجديد

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

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

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
                <CartProductItem
                  key={item.id}
                  item={item}
                  onIncrease={() => increaseQuantity(item.id)}
                  onDecrease={() => decreaseQuantity(item.id)}
                  onRemove={() => removeItem(item.id)}
                />
              ))}
            </div>
          )}
        </div>

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
            <Link to="/cartpage">
              <AddCart label="Checkout" width="365px" height="52px" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlyoutCart;
