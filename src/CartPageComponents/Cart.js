import React from "react";
import CartProduct from "./CartProduct";
import useCartStore from "../store/cartStore";

const Cart = () => {
  // إنشاء حالة لتخزين العناصر في السلة
  const cartItems = useCartStore((state) => state.cartItems);

  // دالة لحذف العنصر
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="w-[643px] h-[482px]">
      {/** Table Header */}
      <header className="w-full h-auto pb-6 gap-0 border-b border-b-blackButton_50 flex justify-between font-inter text-[16px] font-semibold leading-[26px] text-left">
        <div>
          <p>Product</p>
        </div>
        <div className="w-[322px] h-auto flex justify-between">
          <p>Quantity</p>
          <p>Price</p>
          <p>Subtotal</p>
        </div>
      </header>

      {/* عرض العناصر في السلة مع التمرير بالطول فقط */}
      <div className="w-full max-h-[500px] overflow-y-auto overflow-x-hidden mt-4 ">
        {cartItems.map((item) => (
          <CartProduct
            id={item.id} // تمرير id هنا
            key={item.id}
            image={item.image}
            productName={item.productName}
            color={item.color}
            price={item.price}
            onRemove={() => handleRemove(item.id)} // تمرير دالة الحذف
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
