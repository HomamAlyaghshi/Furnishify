import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { src: "/images/slider1.png", alt: "Slide 1" },
    { src: "/images/slider1.png", alt: "Slide 2" },
    { src: "/images/slider1.png", alt: "Slide 3" },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-[1440px] h-[760px] px-[160px] pb-[40px] mx-auto">
      {/* Slider Wrapper */}
      <div className="relative w-[1120px] h-[536px] overflow-hidden">
        {/* Slides */}
        <div
          className="flex w-full h-full transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="w-[52px] h-[52px] absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-blackButton_50 hover:text-blackButton p-2 rounded-full"
        >
          <ArrowLeftIcon className="absolute w-[32px] h-[32px] top-[10px] left-[10px]" />
        </button>
        <button
          onClick={nextSlide}
          className="w-[52px] h-[52px] absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-blackButton_50 hover:text-blackButton p-2 rounded-full"
        >
          <ArrowRightIcon className="absolute w-[32px] h-[32px] top-[10px] left-[10px]" />
        </button>

        {/* Indicators */}
        <div className="absolute w-[78px] h-[8px] flex gap-[16px] bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`${
                  index === activeIndex
                    ? "w-[30px] h-[8px]"
                    : "w-[8px] h--[8px]"
                } rounded-full bg-white`}
              />
            ))}
          </div>
        </div>
      </div>

      {/**النص يلي تحت الصور */}
      <div className="w-[1120px] h-[152px] flex justify-center items-center my-[24px]">
        <div className="flex-1 bg-white  w-[643px] h-[152] font-poppins text-[72px] font-medium leading-[76px] tracking[-2px] text-left">
          {/* محتوى العمود الأول */}
          Simply Unique/ Simply Better.
        </div>
        <div className="flex-1 bg-white text-blackButton_50 w-[453px] h-[52px] gap-[16px] font-inter text-[16px] font-normal leading-[26px] text-left ">
          {/* محتوى العمود الثاني */}
          <strong className="text-blackButton">3legant</strong> is a gift &
          decorations store based in HCMC,
          <br />
          Vietnam. Est since 2019.
        </div>
      </div>
    </div>
  );
};

export default Slider;
