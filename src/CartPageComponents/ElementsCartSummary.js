import React, { useState, useEffect } from "react";
import AddCart from "./../Expand/AddCart";
import useCartStore from "../store/cartStore";
import { Link } from "react-router-dom";

const ElementsCartSummary = () => {
  const subtotal = useCartStore((state) => state.subtotal) || 0;
  const updateSubtotal = useCartStore((state) => state.updateSubtotal);
  const cartItems = useCartStore((state) => state.cartItems);

  // تحديث الـ Subtotal عند تغيير العناصر في السلة
  useEffect(() => {
    updateSubtotal();
  }, [cartItems, updateSubtotal]);

  // حالات الشحن
  const [shippingOptions, setShippingOptions] = useState([
    {
      id: 1,
      selected: true,
      price: 0.0,
      text: "Free Shipping",
      displaySymbol: "$",
    },
    {
      id: 2,
      selected: false,
      price: 15.0,
      text: "Express Shipping",
      displaySymbol: "+$",
    },
    {
      id: 3,
      selected: false,
      price: 21.0,
      text: "Pick Up",
      displaySymbol: "%",
    },
  ]);

  const handleSelectionChange = (id) => {
    setShippingOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id
          ? { ...option, selected: true }
          : { ...option, selected: false }
      )
    );
  };

  // حساب الشحن المحدد
  const selectedShippingOption = shippingOptions.find(
    (option) => option.selected
  );
  const shippingCost = selectedShippingOption
    ? selectedShippingOption.price
    : 0;

  // حساب الـ Total
  const total = subtotal + shippingCost;

  return (
    <div className="w-full md:w-[413px] h-auto grid gap-4 rounded-[6px] p-[24px] border-[1px] border-blackButton_50">
      <h1 className="font-poppins text-[20px] font-medium leading-[28px] text-left">
        Cart Summary
      </h1>

      <div className="w-full h-auto">
        {/* خيارات الشحن */}
        <div className="grid w-full h-auto pb-4 gap-3">
          {shippingOptions.map((option) => (
            <div
              key={option.id}
              className={`w-full p-[13px] px-[16px] flex justify-between border-t border-0 rounded-tl-[4px] rounded-tr-[4px] ${
                option.selected ? "bg-gray-100" : ""
              }`}
            >
              <div className="flex items-center gap-[12px]">
                <input
                  type="radio"
                  name="shippingOption"
                  defaultChecked={option.selected}
                  onChange={() => handleSelectionChange(option.id)}
                />
                <span>{option.text}</span>
              </div>
              <p>
                {option.displaySymbol}
                {option.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Subtotal */}
        <div className="w-full p-[13px] border-b border-0 flex justify-between">
          <p className="font-inter text-[16px] font-normal text-blackButton">
            Subtotal
          </p>
          <div className="font-inter text-[16px] font-semibold text-blackButton">
            ${subtotal.toFixed(2)}
          </div>
        </div>

        {/* Total */}
        <div className="w-full p-[13px] border-b border-0 flex justify-between font-inter font-semibold text-right">
          <p>Total</p>
          <div>${total.toFixed(2)}</div>
        </div>

        {/* زر Checkout */}
        <Link to="/checkout-details">
          <AddCart label="Checkout" width="100%" height="52px" />
        </Link>
      </div>
    </div>
  );
};

export default ElementsCartSummary;
