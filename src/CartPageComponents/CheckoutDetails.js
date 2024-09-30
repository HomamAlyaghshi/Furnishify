import React from "react";
import NavBar from "../card/NavBar";
import HeaderOfAllCart from "./HeaderOfAllCart";
import Footer from "../card/Footer";
import AddCart from "../Expand/AddCart";
import Input from "../card/Input";
import Select from "../card/Select";
import Radios from "../card/Radios";
import { EyeIcon } from "@heroicons/react/16/solid";
import CartProductItem from "../Expand/CartProductItem";
import useCartStore from "../store/cartStore";

const CheckoutDetails = ({ id }) => {
  const cartItems = useCartStore((state) => state.cartItems); // سحب عناصر السلة
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const calculateSubtotal = useCartStore((state) => state.calculateSubtotal);
  const handleIncrease = (id) => {
    increaseQuantity(id); // تمرير id هنا
  };
  const handleDecrease = (id) => {
    decreaseQuantity(id);
  };
  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="h-[1406px]">
      <NavBar />
      {/**Cart Section */}
      <div className="h-[1958px] px-[160px] py-[80px] grid place-items-center justify-center">
        <HeaderOfAllCart />
        <div className="w-[1120px] h-[1634px] flex justify-between">
          <div className="h-[1474px] w-[643px] grid gap-[24px]">
            {/**Form */}
            <div className="w-full h-[372px] py-[40px] px-[24px] border-[1px] border-blackButton_50 grid gap-[24px] rounded-[4px]">
              <p className="text-black text-[20px]">Contact Information</p>
              <div className="w-[595px] h-[64px] justify-between flex gap-[12px]">
                <Input labelText={"FIRST NAME"} placeholder={"First name"} />
                <Input labelText={"LAST NAME"} placeholder={"Last name"} />
              </div>
              <Input labelText={"PHONE NUMBER"} placeholder={"Phone number"} />
              <Input labelText={"EMAIL ADDRESS"} placeholder={"Your Email"} />
            </div>
            {/**Form 2 */}
            <div className="w-full h-[545px] py-[40px] px-[24px] border-[1px] border-blackButton_50 grid gap-[24px] rounded-[4px]">
              <p className="font-poppins text-[20px] font-medium leading-[28px] text-left">
                Shipping Address
              </p>
              <Input
                labelText={"STREET ADDRESS *"}
                placeholder={"Street address"}
              />
              <Select
                labelText={"COUNTRY"}
                firstOption={"Country"}
                secoundOption={"Syria"}
                thiedOption={"KSA"}
                fifthOption={"Egypt"}
                fourthOption={"Lebanon"}
              />
              <Input labelText={"TOWN / CITY *"} placeholder={"Town / City"} />
              <div className="flex justify-between gap-[12px]">
                <Input labelText={"STATE"} placeholder={"State"} />
                <Input labelText={"ZIP CODE"} placeholder={"Zip code"} />
              </div>
              <div className="flex gap-[12px] mb-[12px]">
                <input
                  type="checkbox"
                  className="w-[24px] h-[24px] rounded-[1.5px]"
                />
                <p className="text-blackButton_50">
                  Use a different billing address (optional)
                </p>
              </div>
            </div>
            {/**Form 3 */}
            <div className="w-full h-[468px] py-[40px] px-[24px] grid gap-[24px] border-[1px] border-blackButton_50 rounded-[4px]">
              <h1 className="text-[20px] text-blackButton">Payment method</h1>
              <div className="w-[595px] h-[336px] gap-[24px] grid">
                <div className="grid w-full">
                  <div className="w-[595px] h-[52px] border-[1px] border-blackButton rounded-[4px] flex items-center justify-between bg-white gap-[12px]">
                    <div className="flex gap-4 ml-4">
                      <Radios />
                      <p>Pay By Credit Card</p>
                    </div>
                    <div className="w-8 h-8 mr-4">
                      <EyeIcon />
                    </div>
                  </div>
                  <div className="w-[595px] h-[52px] border-[1px] border-blackButton rounded-[4px] flex items-center justify-between bg-white gap-[12px]">
                    <div className="flex gap-4 ml-4">
                      <Radios />
                      <p>Paypal</p>
                    </div>
                    <div className="w-8 h-8 mr-4">
                      <EyeIcon />
                    </div>
                  </div>
                </div>
                <Input
                  placeholder={"1234 1234 1234"}
                  labelText={"CARD NUMBER"}
                />
                <div className="flex gap-2">
                  <Input placeholder={"MM/YY"} labelText={"DATE"} />
                  <Input placeholder={"CVC"} labelText={"CVC Code"} />
                </div>
              </div>
            </div>
            <AddCart label={"Place Order"} width={"643px"} height={"52px"} />
          </div>
          {/*Order Summary */}
          <div className="w-[413px] h-[862px] p-[16px_24px] grid gap-[16px] rounded-[6px] border-blackButton_50 border-[1px]">
            <p className="text-[28px] text-blackButton">Order summary</p>
            <div>
              {cartItems.map((item) => (
                <CartProductItem
                  key={item.id}
                  item={item}
                  onIncrease={() => handleIncrease(item.id)}
                  onDecrease={() => handleDecrease(item.id)}
                  onRemove={() => handleRemove(item.id)}
                />
              ))}
            </div>
            <div className="grid w-[365px] h-[208px]">
              <div className="flex justify-between items-center border-b-[1px] border-blackButton_50">
                <p className="font-inter text-[16px] font-normal leading-[26px] text-left text-blackButton">
                  JenkateMW
                </p>
                <div className="text-kiwi font-inter text-[16px] font-semibold leading-[26px] text-right">
                  -$25.00 <button>[Remove]</button>
                </div>
              </div>
              <div className="flex justify-between items-center border-b-[1px] border-blackButton_50">
                <p>Shipping</p>
                <p className="font-bold">Free</p>
              </div>
              <div className="flex justify-between items-center border-b-[1px] border-blackButton_50">
                <p>Subtotal</p>
                <p className="font-bold">$99.99</p>
              </div>
              <div className="flex justify-between items-center font-poppins text-[20px] font-medium leading-[28px] text-left">
                <p>Total</p>
                <p>$132.23</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutDetails;
