import React from "react";
import image from "../assets/heroSection.png";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-16 bg-black text-white h-screen">
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Empower Your Business with Our Expertise
        </h1>
        <p className="text-xl mb-6 max-w-lg">
          At  Vise Tech , we specialize in providing innovative solutions to help your business thrive in the digital world. From custom web development to expert digital marketing strategies, our team is dedicated to your success.
        </p>
        <button className="py-3 px-8 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition duration-300">
          Get Started
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt="Hero"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
