import React from "react";
import { FaLaptop, FaChartLine, FaCogs, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-8">
        <div className="max-w-screen-lg mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Professional Portfolio</h1>
          <p className="text-lg mb-6">
            Delivering high-quality web and mobile development, UI/UX design, and custom solutions to help businesses succeed.
          </p>
          <button className="bg-[#f97316] hover:bg-orange-600 text-white px-6 py-3 rounded-md">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-black">My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaLaptop className="text-[#f97316] text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Web Development</h3>
              <p className="text-gray-300">
                Specializing in building fast, responsive, and user-friendly websites using modern technologies like React and Node.js.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaChartLine className="text-[#f97316] text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Analytics & Performance</h3>
              <p className="text-gray-300">
                Providing data-driven insights and performance optimization strategies to enhance user experience and business growth.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaCogs className="text-[#f97316] text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Custom Solutions</h3>
              <p className="text-gray-300">
                Crafting tailored software solutions to meet your specific business needs, whether it's for web, mobile, or complex systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-black">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-white">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaStar className="text-[#f97316] text-4xl mb-4 mx-auto" />
              <p className="text-gray-700 italic">
                "Working with Shezad was an amazing experience! He helped us build a powerful website with an intuitive interface."
              </p>
              <h4 className="text-lg font-semibold text-black mt-4">- John Doe, CEO</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaStar className="text-[#f97316] text-4xl mb-4 mx-auto" />
              <p className="text-gray-700 italic">
                "Shezad's app development expertise helped us launch our mobile app smoothly with robust features."
              </p>
              <h4 className="text-lg font-semibold text-black mt-4">- Jane Smith, Product Manager</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaStar className="text-[#f97316] text-4xl mb-4 mx-auto" />
              <p className="text-gray-700 italic">
                "I highly recommend Shezad for UI/UX design. His attention to detail and design sensibility are unparalleled."
              </p>
              <h4 className="text-lg font-semibold text-black mt-4">- Michael Johnson, Director of Design</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-black">Contact Me</h2>
          <form className="space-y-6 w-full">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-black mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-black mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message"
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#f97316] text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-screen-lg mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Shezad Ahmed. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
