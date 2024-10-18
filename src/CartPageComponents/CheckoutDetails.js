import React from "react";
import NavBar from "../Shared/NavBar";
import HeaderOfAllCart from "./HeaderOfAllCart";
import Footer from "./../Shared/Footer";
import AddCart from "../Expand/AddCart";
import Select from "../card/Select";
import Radios from "../card/Radios";
import { EyeIcon } from "@heroicons/react/16/solid";
import CartProductItem from "../Expand/CartProductItem";
import useCartStore from "../store/cartStore";
import { Link } from "react-router-dom";
import InputForm from "../card/InputForm";

const CheckoutDetails = ({ id }) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const { clearCart } = useCartStore();
  const handleClear = () => {
    clearCart();
  };

  const handleIncrease = (id) => {
    increaseQuantity(id);
  };
  const handleDecrease = (id) => {
    decreaseQuantity(id);
  };
  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="h-full w-full">
      <NavBar />
      <div className="flex justify-center items-center w-full">
        <HeaderOfAllCart />
      </div>
      <div className="px-4 py-8 sm:px-16 lg:px-32">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
            {/**Form Section */}
            <div className="bg-white border border-blackButton_50 rounded-md p-6 mb-6">
              <p className="text-black text-xl">Contact Information</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <InputForm
                  labelText={"FIRST NAME"}
                  placeholder={"First name"}
                />
                <InputForm labelText={"LAST NAME"} placeholder={"Last name"} />
              </div>
              <InputForm
                labelText={"PHONE NUMBER"}
                placeholder={"Phone number"}
              />
              <InputForm
                labelText={"EMAIL ADDRESS"}
                placeholder={"Your Email"}
              />
            </div>

            {/**Shipping Address Section */}
            <div className="bg-white border border-blackButton_50 rounded-md p-6 mb-6">
              <p className="font-poppins text-xl font-medium">
                Shipping Address
              </p>
              <InputForm
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
              <InputForm
                labelText={"TOWN / CITY *"}
                placeholder={"Town / City"}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <InputForm labelText={"STATE"} placeholder={"State"} />
                <InputForm labelText={"ZIP CODE"} placeholder={"Zip code"} />
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" className="w-6 h-6 mr-2" />
                <p className="text-blackButton_50">
                  Use a different billing address (optional)
                </p>
              </div>
            </div>

            {/**Payment Method Section */}
            <div className="bg-white border border-blackButton_50 rounded-md p-6">
              <h1 className="text-xl text-blackButton">Payment method</h1>
              <div className="space-y-4">
                <div className="flex items-center border border-blackButton rounded-md p-2">
                  <Radios />
                  <p>Pay By Credit Card</p>
                  <EyeIcon className="ml-auto w-6 h-6" />
                </div>
                <div className="flex items-center border border-blackButton rounded-md p-2">
                  <Radios />
                  <p>Paypal</p>
                  <EyeIcon className="ml-auto w-6 h-6" />
                </div>
                <InputForm
                  placeholder={"1234 1234 1234"}
                  labelText={"CARD NUMBER"}
                />
                <div className="flex gap-2">
                  <InputForm placeholder={"MM/YY"} labelText={"DATE"} />
                  <InputForm placeholder={"CVC"} labelText={"CVC Code"} />
                </div>
              </div>
            </div>
            <Link to={"/order-complete"}>
              <AddCart
                label={"Place Order"}
                width={"100%"}
                height={"52px"}
                onClick={handleClear}
              />
            </Link>
          </div>

          {/*Order Summary */}
          <div className="bg-white border border-blackButton_50 rounded-md p-6 w-full lg:w-1/3">
            <p className="text-2xl text-blackButton">Order summary</p>
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
            <div className="space-y-4 mt-4">
              <div className="flex justify-between items-center border-b border-blackButton_50">
                <p className="font-inter text-lg text-blackButton">JenkateMW</p>
                <div className="text-kiwi font-inter font-semibold">
                  -$25.00 <button>[Remove]</button>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-blackButton_50">
                <p>Shipping</p>
                <p className="font-bold">Free</p>
              </div>
              <div className="flex justify-between items-center border-b border-blackButton_50">
                <p>Subtotal</p>
                <p className="font-bold">$99.99</p>
              </div>
              <div className="flex justify-between font-poppins text-lg font-medium">
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
