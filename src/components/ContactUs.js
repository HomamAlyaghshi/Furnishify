import React from "react";
import NavBar from "../card/NavBar";
import Footer from "../card/Footer";
import Values from "../card/values";
import HeaderOfContactUs from "../ContactUsComponents/HeaderOfContactUs";
import FeatureSection from "../ContactUsComponents/FeatureSection";
import ContactSection from "../ContactUsComponents/ContactSection";
const ContactUs = () => {
  return (
    <div className="h-[2190px]">
      <NavBar />
      <div className="h-[1629px] pt-[16px] pr-[160px] pb-[80px] pl-[160px] gap-[48px] grid justify-center items-center">
        <HeaderOfContactUs />
        <FeatureSection />
        <ContactSection />
      </div>
      <Values />
      <Footer />
    </div>
  );
};

export default ContactUs;
