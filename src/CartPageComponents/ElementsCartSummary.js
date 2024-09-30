import React, { useState, useEffect } from "react";
import AddCart from "./../Expand/AddCart";
import useCartStore from "../store/cartStore";
import { Link } from "react-router-dom";

const ElementsCartSummary = () => {
  const subtotal = useCartStore((state) => state.subtotal);
  const updateSubtotal = useCartStore((state) => state.updateSubtotal);

  // إنشاء حالة لتخزين العناصر في السلة
  const cartItems = useCartStore((state) => state.cartItems);

  // تحديث الـ Subtotal عند تغيير العناصر في السلة
  useEffect(() => {
    updateSubtotal();
  }, [cartItems, updateSubtotal]);

  // استخدام useState لتخزين جميع القيم المتعلقة بالشحن في مصفوفة
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
      displaySymbol: "%", // التأكد من أنك تقصد هذا الرمز
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
    <div className="w-[413px] h-auto grid gap-4 rounded-[6px] p-[24px] border-[1px] border-blackButton_50 ">
      <h1 className="font-poppins text-[20px] font-medium leading-[28px] text-left">
        Cart summary
      </h1>
      <div className="w-[365px] h-[384px] ">
        {/** الاختيارات تبع الشحن */}
        <div className="grid w-[365px] h-auto pb-4 gap-3">
          {shippingOptions.map((option) => (
            <div
              key={option.id}
              className="w-[365px] h-auto p-[13px] px-[16px] gap-[395px] rounded-tl-[4px] rounded-tr-[4px] border-t border-0 "
            >
              <div className="flex gap-[12px] justify-between w-[333px] h-[26px]">
                <div className="flex">
                  <input
                    type="radio"
                    name="shippingOption"
                    checked={option.selected}
                    onChange={() => handleSelectionChange(option.id)}
                  />
                  <div className="ml-[4px]">{option.text}</div>
                </div>
                <p>
                  {option.displaySymbol}
                  {option.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/** Sub Total */}
        <div className="w-[365px] h-auto p-[13px] border-b border-0 flex justify-between">
          <p className="font-inter text-[16px] font-normal leading-[26px] text-left text-blackButton">
            Subtotal
          </p>
          <div className="font-inter text-[16px] font-semibold leading-[26px] text-right text-blackButton">
            ${subtotal ? subtotal.toFixed(2) : "0.00"}
          </div>
        </div>

        <div className="w-[365px] h-auto p-[13px] border-b border-0 ">
          {/** Total */}
          <div className="flex justify-between w-auto font-inter font-semibold leading-[32px] text-right">
            <p>Total</p>
            <div>${total.toFixed(2)}</div>
          </div>
        </div>
        <Link to={"/checkout-details"}>
          <AddCart label={"Checkout"} width={"365px"} height={"52px"} />
        </Link>
      </div>
    </div>
  );
};

export default ElementsCartSummary;
