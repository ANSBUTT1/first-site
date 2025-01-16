import React from "react";
import HeroSection from "../Component/HeroSection";
import Catogeries from "../Component/Catogeries";
import Testimonial from "../Component/Testimonial";
import Slider from "../Component/Slider";
import Contact from "../Component/Contact";

const Home = () => {
  return (
    <div>
      {/* Slider Component */}
    
      {/* Hero Section */}
      <HeroSection />
      
      {/* Categories Section */}
      <Catogeries />
      
      {/* Testimonial Section */}
      <Testimonial />
      <Slider />
      <Contact/>
      
    </div>
  );
};

export default Home;
