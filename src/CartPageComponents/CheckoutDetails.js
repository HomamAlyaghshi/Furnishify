import React from "react";
import NavBar from "../card/NavBar";
import HeaderOfAllCart from "./HeaderOfAllCart";
import Footer from "../card/Footer";
import AddCart from "../Expand/AddCart";
import Input from "../card/Input";
import Select from "../card/Select";
const CheckoutDetails = () => {
  return (
    <div className=" h-[1406px]">
      <NavBar />
      {/**Cart Section */}
      <div className=" h-[1958px] px-[160px] py-[80px]  grid place-items-center justify-center">
        <HeaderOfAllCart />
        <div className="w-[1120px] h-[1634px] flex justify-between bg-red-500">
          <div className="bg-yellow-200 h-[1474px] w-[643px] grid  gap-[24px] ">
            {/**Form */}
            <div className="w-full h-[372px] bg-amber-400 border-[1px] border-blackButton_50 grid gap-[24px] rounded-[4px]">
              <p className="text-black text-[20px]">Contact Infomation</p>
              <div className="w-[595px] h-[64px] justify-between  flex gap-[12px]">
                <Input labelText={"FIRST NAME"} placeholder={"First name"} />
                <Input labelText={"LAST NAME"} placeholder={"Last name"} />
              </div>
              <Input labelText={"PHONE NUMBER"} placeholder={"Phone number"} />
              <Input labelText={"EMAIL ADDRESS"} placeholder={"Your Email"} />
            </div>
            {/**Form 2 */}
            <div className="w-full h-[510px] bg-amber-400 border-[1px] border-blackButton_50 grid gap-[24px] rounded-[4px]">
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
              <div className="flex gap-[12px]">
                <input
                  type="checkbox"
                  className="w-[24px] h-[24px] rounded-[1.5px]"
                />
                <p className="text-blackButton_50">
                  Use a different billing address (optional)
                </p>
              </div>
            </div>
            <div className="w-full h-[468px] bg-amber-200"></div>
            <AddCart label={"Place Order"} width={"643px"} height={"52px"} />
          </div>
          <div className="bg-yellow-600 w-[413px] h-[862px]"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutDetails;
