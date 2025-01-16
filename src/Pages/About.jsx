import React from "react";
import { FaLaptop, FaChartLine, FaCogs, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-8">
        <div className="max-w-screen-lg mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Professional Page</h1>
          <p className="text-lg mb-6">
            Delivering top-notch services and innovative solutions to help your business succeed.
          </p>
          <button className="bg-[#f97316] hover:bg-orange-600 text-white px-6 py-3 rounded-md">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-black">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaLaptop className="text-[#f97316] text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Modern Tools</h3>
              <p className="text-gray-300">
                Equip your business with cutting-edge tools to streamline operations.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaChartLine className="text-[#f97316] text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Analytics</h3>
              <p className="text-gray-300">
                Gain actionable insights with our data-driven analytics tools.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaCogs className="text-[#f97316] text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored solutions designed to meet your unique business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-black">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-white">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaStar className="text-[#f97316] text-4xl mb-4 mx-auto" />
              <p className="text-gray-700 italic">
                "This is the best service I have ever used. Highly recommend!"
              </p>
              <h4 className="text-lg font-semibold text-black mt-4">- John Doe</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaStar className="text-[#f97316] text-4xl mb-4 mx-auto" />
              <p className="text-gray-700 italic">
                "Amazing team and great results. Exceeded our expectations."
              </p>
              <h4 className="text-lg font-semibold text-black mt-4">- Jane Smith</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaStar className="text-[#f97316] text-4xl mb-4 mx-auto" />
              <p className="text-gray-700 italic">
                "Professional, reliable, and efficient service. Highly impressed!"
              </p>
              <h4 className="text-lg font-semibold text-black mt-4">- Michael Johnson</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-black">Contact Us</h2>
          <form className="space-y-6 w-54 ml">
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
            &copy; {new Date().getFullYear()} My Professional Website. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
