import React from "react";
import NavBar from "../card/NavBar";
import Footer from "../card/Footer";
import Values from "../card/values";
import HeaderOfContactUs from "../ContactUsComponents/HeaderOfContactUs";
import FeatureSection from "../ContactUsComponents/FeatureSection";
import ContactSection from "../ContactUsComponents/ContactSection";
const ContactUs = () => {
  return (
    <div className="h-full w-full    ">
      <NavBar />
      <div className="md:max-h-[1629px] w-full md:pt-[16px] md:pr-[160px] md:pb-[80px] md:pl-[160px] gap-[48px] grid justify-center items-center">
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
