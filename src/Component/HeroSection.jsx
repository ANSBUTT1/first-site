import React from "react";
import image from "../assets/heroSection.png";  // Ensure the image path is correct
import { ReactTyped } from "react-typed";


const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-16 bg-black text-white h-screen">
      <div className="flex flex-col justify-center">
      <h1 className="text-5xl font-extrabold mb-4 leading-tight">
  <ReactTyped
    strings={[
      "Hey, I am Shezad Ahmed.",
      "Welcome to my portfolio!",
      "Let's build something amazing together!"
    ]}
    typeSpeed={40}
    backSpeed={50}
    loop
  />
 
</h1>

        <p className="text-xl mb-6 max-w-lg">
          Welcome to my portfolio! I specialize in delivering top-tier web and mobile development, UI/UX design, and custom digital solutions tailored to help businesses thrive in the ever-evolving digital landscape. Let's create something great together.
        </p>
        <button className="py-3 px-8 bg-white text-black font-semibold rounded-lg hover:bg-[#f97316] transition duration-300">
          View My Work
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt="Professional Portfolio"
          className="max-w-full h-auto rounded-lg shadow-lg shadow-lg  border-[#f97316] shadow-[#f97316] "
        />
      </div>
    </div>
  );
};

export default HeroSection;
