import React, { useEffect } from "react";
import SignUpForm from "./SignUpForm";
import AOS from "aos";
import "aos/dist/aos.css";

const SignUp = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="mx-auto h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        <div
          className="w-full md:w-1/2 md:h-auto
                     relative overflow-hidden group"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <img
            src="/images/Left.png"
            alt="Left"
            className="w-full h-full object-cover
                       transition-transform duration-500 ease-in-out
                       group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500
                       flex items-end justify-center p-8 text-white text-center"
          >
            <h2 className="text-3xl font-bold">Join Us Today!</h2>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div
            className="w-full max-w-[456px] h-auto space-y-8 mt-3
                       bg-white rounded-lg shadow-xl p-0"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
