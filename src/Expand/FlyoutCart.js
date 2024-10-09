import React from "react";
import "./Flyout-scrollbar.css";
import AddCart from "./AddCart";
import { Link } from "react-router-dom";
import CartProductItem from "./CartProductItem";
import useCartStore from "../store/cartStore";

const FlyoutCart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    closeCart,
  } = useCartStore();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal;

  return (
    <div className="fixed top-0 right-0 w-[413px] h-full bg-white py-[40px] px-[25px] flex flex-col justify-between z-">
      <button
        onClick={closeCart}
        className="absolute top-4 right-4 text-gray-500 text-xl"
      >
        X
      </button>

      <div className="w-full flex flex-col justify-between flex-grow">
        <div className="grid gap-[8px]">
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
                  onRemove={() => removeFromCart(item.id)}
                />
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-4 sticky bottom-0 bg-white">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <div>${subtotal.toFixed(2)}</div>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <p>Total</p>
              <div>${total.toFixed(2)}</div>
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
