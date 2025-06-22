import React, { useState } from "react";
import MapComponent from "./MapComponent";
import AddCart from "../Expand/AddCart";
import InputForm from "../card/InputForm";

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
    <div
      data-aos="fade-up"
      className="w-full h-auto grid gap-[40px] mx-auto p-4"
    >
      {/**INFO section */}
      <div
        data-aos="fade-up"
        className="font-poppins text-[32px] md:text-[40px] font-medium leading-[44px] text-center w-full"
      >
        Contact Us
      </div>

      {/** Cards section */}
      <div
        data-aos="fade-up"
        className="w-full h-auto gap-[24px] flex flex-col md:flex-row justify-center items-center"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-[357.67px] h-auto p-[16px] grid gap-[16px] text-center justify-center items-center border border-gray-300 rounded-lg"
          >
            <img alt={card.alt} src={card.image} className="mx-auto" />
            <h1 className="font-inter text-[16px] font-semibold leading-[26px] text-blackButton_50">
              {card.label}
            </h1>
            <p className="font-inter text-[16px] font-semibold leading-[26px] text-blackButton">
              {card.text}
            </p>
          </div>
        ))}
      </div>

      {/** Get in touch section */}
      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row justify-between gap-[24px] w-full h-auto"
      >
        <div className="h-full grid gap-[16px] w-full">
          <InputForm labelText={"Full Name"} placeholder={"Your Name"} />
          <InputForm labelText={"Email address"} placeholder={"Your Email"} />
          <InputForm labelText={"Message"} placeholder={"Your Message"} />
          <AddCart label={"Send Message"} width={"189px"} height={"40px"} />
        </div>

        <div className="h-full w-full mt-4 md:mt-0">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
