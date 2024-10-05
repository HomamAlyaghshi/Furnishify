import React from "react";
import NavBar from "../card/NavBar";
import Footer from "../card/Footer";
import Values from "../card/values";
import HeaderOfContactUs from "../ContactUsComponents/HeaderOfContactUs";
import FeatureSection from "../ContactUsComponents/FeatureSection";
import ContactSection from "../ContactUsComponents/ContactSection";
const ContactUs = () => {
  return (
    <div className="h-full w-full max-h-[2688px] md:h-[2190px]  overflow-x-hidden overflow-y-hidden">
      <NavBar />
      <div className="md:h-[1629px] w-full pt-[16px] pr-[160px] pb-[80px] pl-[160px] gap-[48px] grid justify-center items-center">
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
