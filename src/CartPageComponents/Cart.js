import React from "react";
import CartProduct from "./CartProduct";
import useCartStore from "../store/cartStore";

const Cart = () => {
  // جلب العناصر من الحالة باستخدام useCartStore
  const cartItems = useCartStore((state) => state.cartItems);

  // دالة لحذف العنصر
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="w-full md:max-w-[643px] h-auto grid justify-center items-center">
      {/* Table Header */}
      <header className="w-full pb-6 border-b border-b-blackButton_50 flex justify-between font-inter text-[14px] md:text-[16px] font-semibold leading-[26px] text-left ">
        <p>Product</p>
        <div className="w-[322px] flex justify-between hidden md:flex">
          <p>Quantity</p>
          <p>Price</p>
          <p>Subtotal</p>
        </div>
      </header>

      {/* عرض العناصر في السلة مع التمرير بالطول فقط */}
      <div className="w-full max-h-[500px] overflow-y-auto overflow-x-hidden mt-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartProduct
              id={item.id} // تمرير id هنا
              key={item.id}
              image={item.image}
              productName={item.productName}
              color={item.color}
              price={item.price}
              onRemove={() => handleRemove(item.id)} // تمرير دالة الحذف
            />
          ))
        ) : (
          <p className="text-center mt-4 text-gray-500 font-inter text-[14px]">
            Your cart is currently empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
