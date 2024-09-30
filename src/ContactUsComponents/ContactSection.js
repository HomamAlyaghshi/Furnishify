import React, { useState } from "react";
import MapComponent from "./MapComponent";
import Input from "../card/Input";
import AddCart from "../Expand/AddCart";

const ContactSection = () => {
  const [cards, setCards] = useState([
    {
      alt: "store1",
      image: "/images/store1.png",
      label: "ADDRESS",
      text: "234 Hai Trieu, Ho Chi Minh City,\n Viet Nam",
    },
    {
      alt: "store2",
      image: "/images/store3.png",
      label: "PHONE",
      text: "+84 123 456 789",
    },
    {
      alt: "store3",
      image: "/images/store2.png",
      label: "EMAIL",
      text: "info@3legant.vn",
    },
  ]);

  return (
    <div className="w-[1120px] h-[684px] grid gap-[40px] ">
      {/**INFO section */}
      <div className="font-poppins text-[40px] font-medium leading-[44px] tracking[-0.4px] text-center w-[1120px] h-[44px] text-1212">
        Contact Us
      </div>
      <div className="w-[1121px] h-auto gap-[24px] flex justify-center items-center">
        {/** Cards here */}
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[357.67px] h-[156px] p-[16px] px-[32px] grid gap-[16px]  text-center justify-center items-center"
          >
            <img
              alt={card.alt}
              src={card.image}
              className="mx-auto" // This centers the image horizontally
            />
            <h1 className="font-inter text-[16px] font-semibold leading-[26px] text-center text-blackButton_50">
              {card.label}
            </h1>
            <p className="font-inter text-[16px] font-semibold leading-[26px] text-center text-blackButton">
              {card.text}
            </p>
          </div>
        ))}
      </div>
      {/**Get in touch section */}
      <div className=" flex justify-between gap-[24px] w-full h-[404px] ">
        <div className="h-full grid gap-[34px]  w-1/2 ">
          <Input labelText={"Full Name"} placeholder={"Your Name"} />
          <Input labelText={"Email address"} placeholder={"Your Email"} />

          <Input labelText={"Message"} placeholder={"Your Message"} />
          <AddCart label={"send message"} width={"189px"} height={"40px"} />
        </div>

        <div className="h-full w-1/2 ">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
