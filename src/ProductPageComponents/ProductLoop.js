import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import ProductButton from "../Expand/ProductButton";
import WishlistButton from "../Expand/WishlistButton";
import AddCart from "../Expand/AddCart";
import StarsDisplay from "./StarsDisplay";
import CountDownn from "../card/CountDown";

const ProductLoop = () => {
  // الصور المستخدمة في السلايدر
  const initialImages = [
    { src: "/images/cart-big1.jpg", alt: "cart1-big" },
    { src: "/images/cart2-big.png", alt: "cart2-big" },
    { src: "/images/cart3-big.png", alt: "cart3-big" },
    { src: "/images/cart4-big.png", alt: "cart4-big" },
  ];

  // الحالة التي تتحكم بالصورة الكبيرة والصور الصغيرة
  const [activeImage, setActiveImage] = useState(initialImages[0]);
  const [smallImages, setSmallImages] = useState(initialImages.slice(1)); // استبعاد الصورة الأولى

  const handleImageClick = (index) => {
    // نسخ الصور الصغيرة
    const newSmallImages = [...smallImages];

    // استبدال الصورة الكبيرة مع الصورة التي تم النقر عليها
    const selectedImage = newSmallImages[index];
    newSmallImages[index] = activeImage; // استبدال الصورة الكبيرة بالصورة الصغيرة
    setActiveImage(selectedImage); // جعل الصورة الصغيرة المختارة هي الكبيرة
    setSmallImages(newSmallImages); // تحديث الصور الصغيرة
  };

  return (
    <div className="w-full h-auto md:pt-4 md:px-4  md:h-[1042px]">
      {/* شريط التنقل */}
      <div className="h-6 w-full md:w-[466px] flex md:flex-nowrap gap-4 bg-white justify-start ml-12">
        {["Home", "Shop", "Living Room", "Product"].map((text, index) => (
          <div key={index} className="flex items-center">
            <button className="h-6 w-auto flex items-center text-blackButton_50 hover:text-blackButton">
              <span className="whitespace-nowrap">{text}</span>
            </button>
            {index < 3 && <ChevronRightIcon className="w-3 h-3 ml-1" />}
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col md:flex-row justify-around gap-6 md:gap-24">
        {/* قسم الصور */}
        <div className="w-full md:w-[549px] h-auto md:h-[919px] grid">
          {/* الصورة الكبيرة */}
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="w-full h-full object-cover  border-[2px] border-blackButton"
          />

          {/* الصور الصغيرة أسفل الصورة الكبيرة */}
          <div className="flex justify-between mt-12 ">
            {smallImages.map((image, index) => (
              <img
                key={index}
                alt={image.alt}
                src={image.src}
                className="w-1/4 h-32 flex  object-cover cursor-pointer border-[2px] border-blackButton hover:scale-105 transition-all duration-300 transform"
                onClick={() => handleImageClick(index)} // عند الضغط على الصورة الصغيرة
              />
            ))}
          </div>
        </div>

        {/* قسم التفاصيل */}
        <div className="w-full md:w-[508px] h-auto">
          <div className="h-auto">
            {/* قسم العنوان والمراجعات */}
            <div className="grid gap-4">
              <div className="flex items-center">
                <StarsDisplay />
                <div className="ml-2">11 Reviews</div>
              </div>
              <h1 className="font-poppins text-2xl md:text-4xl font-medium tracking-tight text-blackButton">
                Tray Table
              </h1>
              <p className="font-inter text-base md:text-lg text-blackButton_50">
                Buy one or buy a few and make every space where you sit more
                convenient. Light and easy to move around with removable tray
                top, handy for serving snacks.
              </p>
              <div className="flex items-center gap-3">
                <div className="font-poppins text-xl md:text-2xl font-medium text-blackButton">
                  $199.00
                </div>
                <div className="font-poppins text-lg md:text-xl font-medium text-blackButton_50 line-through">
                  $400.00
                </div>
              </div>
            </div>

            {/* قسم العداد */}
            <div className="mt-4 border-y border-b-blackButton_50 py-2 md:py-4">
              <div className="grid gap-1 md:gap-3">
                <div className="font-inter text-sm md:text-lg text-blackButton_50">
                  Offer expires in:
                </div>
                <div className="flex gap-2 md:gap-4">
                  <CountDownn />
                </div>
              </div>
            </div>

            {/* قسم المقاسات والألوان */}
            <div className="mt-6">
              <div className="grid gap-2">
                <p className="text-blackButton_50 font-inter text-base md:text-lg">
                  Measurements
                </p>
                <p className="text-blackButton font-inter text-base md:text-lg font-semibold">
                  17 1/2x20 5/8 "
                </p>
              </div>
              <div className="mt-10 grid gap-4">
                <div className="grid gap-2">
                  <p className="font-inter text-base md:text-lg text-blackButton_50">
                    Choose Color
                  </p>
                  <p className="font-inter text-lg md:text-xl text-blackButton">
                    Black
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <img
                    alt="color1"
                    src="/images/cart1.png"
                    className="w-18 h-18 object-cover"
                  />
                  <img
                    alt="color2"
                    src="/images/cart2.png"
                    className="w-18 h-18 object-cover"
                  />
                  <img
                    alt="color3"
                    src="/images/cart3.png"
                    className="w-18 h-18 object-cover"
                  />
                  <img
                    alt="color4"
                    src="/images/cart4.png"
                    className="w-18 h-18 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* قسم الأزرار */}
          <div className="mt-6 border-b border-b-background_50 py-4 md:py-8 w-full overflow-x-hidden">
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-between w-full">
              <div className="flex gap-3 md:gap-6 w-full">
                <ProductButton />
                <WishlistButton />
              </div>
            </div>
            <div className="grid w-full">
              <AddCart label="Add to Cart" width="full" height="52px" />
            </div>
          </div>

          {/* قسم التفاصيل الإضافية */}
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-36">
                <p className="text-blackButton_50 text-sm md:text-base">SKU</p>
                <p className="text-blackButton text-sm md:text-base">1117</p>
              </div>
              <div className="w-full md:w-36">
                <p className="text-blackButton_50 text-sm md:text-base">
                  CATEGORY
                </p>
                <p className="text-blackButton text-sm md:text-base whitespace-nowrap">
                  Living Room, Bedroom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLoop;
