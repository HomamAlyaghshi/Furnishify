import React from "react";
import NavBar from "../card/NavBar";
import Slider from "../card/Slider";
const HomePage = () => {
  return (
    <div className="w-[1440px] h-[4307px]">
      <div className="h-[40px] bg-slate-400"></div>
      <NavBar />
      <Slider />
    </div>
  );
};

export default HomePage;
