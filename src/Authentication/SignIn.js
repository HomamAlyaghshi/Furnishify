import React, { useEffect } from "react";
import SignInForm from "./SignInForm";
import AOS from "aos";
import "aos/dist/aos.css";

const SignIn = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="mx-auto h-screen overflow-hidden">
      {" "}
      {/* Added overflow-hidden */}
      <div className="flex flex-col md:flex-row h-full">
        {/* الصورة - تحسينات جمالية وتأثير Hover */}
        <div
          className="w-full md:w-1/2 md:h-auto
                     relative overflow-hidden group" // Added relative, overflow-hidden, group for hover effect
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <img
            src="/images/Left.png"
            alt="Left"
            className="w-full h-full object-cover
                       transition-transform duration-500 ease-in-out
                       group-hover:scale-105" // Scale effect on hover
          />
          {/* طبقة تظليل أو تراكب أنيق */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500
                       flex items-end justify-center p-8 text-white text-center" // Overlay for aesthetic touch
          >
            {/* يمكنك إضافة نص أو شعار هنا إذا أردت */}
            <h2 className="text-3xl font-bold">Welcome Back!</h2>
          </div>
        </div>

        {/* نموذج تسجيل الدخول - تحسينات جمالية */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div
            className="w-full max-w-[456px] h-auto space-y-8 mt-3
                       bg-white rounded-lg shadow-xl p-8" // Added background, rounded corners, shadow, padding
            data-aos="fade-left"
            data-aos-delay="300"
          >
            {/* عنوان جذاب مع تأثير AOS */}
            <h1
              className="text-4xl font-extrabold text-gray-900 text-center mb-6"
              data-aos="fade-up"
              data-aos-delay="500" // Delay for this specific element
            >
              Sign In
            </h1>
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
