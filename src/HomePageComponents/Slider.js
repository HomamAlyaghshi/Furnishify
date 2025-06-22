import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { src: "/images/slider1.jpg", alt: "Slide 1" },
    { src: "/images/slider2.jpg", alt: "Slide 2" },
    { src: "/images/slider3.jpg", alt: "Slide 3" },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide feature
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Change to the next slide every 3 seconds
    }, 3000);

    // Cleanup the interval when component unmounts
    return () => clearInterval(interval);
  }, [activeIndex]); // Re-run effect when activeIndex changes

  return (
    <div
      data-aos="fade-down"
      className="w-full max-w-[1440px] h-full px-[16px] md:px-[160px]  "
    >
      {/* Slider Wrapper */}
      <div className="relative w-full h-[536px] overflow-hidden">
        {/* Slides */}
        <div
          className="flex w-full h-full transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
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
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-blackButton_50 hover:text-blackButton p-2 rounded-full"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-blackButton_50 hover:text-blackButton p-2 rounded-full"
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute flex gap-2 bottom-4 left-1/2 transform -translate-x-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full bg-white ${
                index === activeIndex ? "w-8 h-2" : "w-2 h-2"
              }`}
            />
          ))}
        </div>
      </div>

      {/** النص الذي تحت الصور */}
      <div
        data-aos="fade-up"
        className="w-full max-w-[1120px] flex flex-col md:flex-row justify-center items-center mt-[16px] sm:mb-[72px] mb-[32px] "
      >
        <div className="flex-1 bg-white w-full md:w-[643px] h-auto font-poppins text-[32px] md:text-[72px] font-medium leading-[38px] md:leading-[76px] tracking-[-2px] text-left">
          Simply Unique/ <br />
          Simply Better.
        </div>
        <div className="flex-1 bg-white text-blackButton_50 w-full md:w-[453px] h-auto gap-[16px] font-inter text-[12px] md:text-[16px] font-normal leading-[20px] md:leading-[26px] text-left">
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
