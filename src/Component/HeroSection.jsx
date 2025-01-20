import React from "react";
import image from "../assets/heropic.jpg"; // Ensure the image path is correct
import { ReactTyped } from "react-typed"; // Corrected import
import { RiArrowDownDoubleFill } from "react-icons/ri";

const HeroSection = () => {
  const scrollToSection = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const downSection = document.querySelector("#down");
    if (downSection) {
      downSection.scrollIntoView({
        behavior: "smooth", // Smooth scroll animation
        block: "start", // Align section to the top
      });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-6 md:px-16 bg-black text-white min-h-screen">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-start text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
          <ReactTyped
            strings={[
              "Hey, I am Shezad Ahmed.",
              "Welcome to my portfolio!",
              "Let's build something amazing together!",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h1>

        <p className="text-sm sm:text-start md:text-xl mb-6 max-w-lg">
          Welcome to my portfolio! I specialize in delivering top-tier web and
          mobile development, UI/UX design, and custom digital solutions
          tailored to help businesses thrive in the ever-evolving digital
          landscape. Let's create something great together.
        </p>

        <div className="flex justify-center sm:justify-start items-center w-full">
          <button className="py-3 px-8 bg-white text-black font-semibold rounded-lg hover:bg-[#f97316] transition duration-300">
            View My Work
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt="Professional Portfolio"
          className="w-3/4 md:w-full max-w-sm md:max-w-full h-auto rounded-lg shadow-lg border-[#f97316] shadow-[#f97316]"
        />
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2">
        <a href="#down" onClick={scrollToSection}>
          <RiArrowDownDoubleFill
className="text-4xl text-white cursor-pointer hover:text-[#f97316] hover:shadow-lg hover:shadow-[#f97316] transition-all duration-300"
/>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
