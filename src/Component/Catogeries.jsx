import React, { useState } from 'react';


const Categories = () => {


  return (
    <>
    
<div className="bg-white py-16">
  {/* Hero Section */}
  <div className="bg-white shadow-lg rounded-lg mx-auto max-w-7xl p-8">
    <h1 className="text-4xl font-bold text-center text-black">
      About Us
    </h1>
    <p className="text-lg text-center text-gray-600 mt-4">
      Welcome to [Your Company Name], where innovation meets excellence. We are dedicated to delivering top-notch services and solutions tailored to your needs.
    </p>
  </div>

  {/* Mission and Vision */}
  <div className="mt-16 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* Mission */}
    <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-300">
      <h2 className="text-3xl font-bold text-black">Our Mission</h2>
      <p className="text-gray-600 mt-4">
        <i className="fas fa-bullseye text-[#f97316] mr-2"></i> Our mission is to empower individuals and businesses by providing reliable, innovative, and cost-effective solutions. We aim to be a trusted partner, helping our clients achieve their goals through exceptional service and unmatched expertise.
      </p>
    </div>

    {/* Vision */}
    <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-300">
      <h2 className="text-3xl font-bold text-black">Our Vision</h2>
      <p className="text-gray-600 mt-4">
        <i className="fas fa-eye text-[#f97316] mr-2"></i> To become a global leader in our industry, renowned for our commitment to quality, innovation, and customer satisfaction. We envision a future where our solutions drive growth, create value, and make a positive impact.
      </p>
    </div>
  </div>

  {/* Team Section */}
  <div className="mt-16 max-w-7xl mx-auto px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-black text-center">
      Meet Our Team
    </h2>
    <p className="text-lg text-gray-600 text-center mt-4">
      Our talented team is the backbone of our success. Here are some of the amazing people who make it all happen.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {/* Team Member */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
        <img
          src="https://via.placeholder.com/150"
          alt="Team Member"
          className="w-32 h-32 mx-auto rounded-full"
        />
        <h3 className="text-xl font-semibold text-black mt-4">
          John Doe
        </h3>
        <p className="text-gray-600">CEO & Founder</p>
        <i className="fas fa-briefcase text-[#f97316] mt-2"></i>
      </div>

      {/* Repeat for more team members */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
        <img
          src="https://via.placeholder.com/150"
          alt="Team Member"
          className="w-32 h-32 mx-auto rounded-full"
        />
        <h3 className="text-xl font-semibold text-black mt-4">
          Jane Smith
        </h3>
        <p className="text-gray-600">Head of Operations</p>
        <i className="fas fa-cogs text-[#f97316] mt-2"></i>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
        <img
          src="https://via.placeholder.com/150"
          alt="Team Member"
          className="w-32 h-32 mx-auto rounded-full"
        />
        <h3 className="text-xl font-semibold text-black mt-4">
          Alex Johnson
        </h3>
        <p className="text-gray-600">Lead Developer</p>
        <i className="fas fa-code text-[#f97316] mt-2"></i>
      </div>
    </div>
  </div>

  {/* Values Section */}
  <div className="mt-16 max-w-7xl mx-auto px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-black text-center">
      Our Core Values
    </h2>
    <p className="text-lg text-gray-600 text-center mt-4">
      These principles guide us in everything we do.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
        <i className="fas fa-handshake text-[#f97316] text-3xl mb-4"></i>
        <h3 className="text-xl font-semibold text-black">Integrity</h3>
        <p className="text-gray-600 mt-2">
          We uphold the highest standards of honesty and accountability.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
        <i className="fas fa-lightbulb text-[#f97316] text-3xl mb-4"></i>
        <h3 className="text-xl font-semibold text-black">Innovation</h3>
        <p className="text-gray-600 mt-2">
          We strive to stay ahead by fostering creativity and embracing change.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
        <i className="fas fa-users text-[#f97316] text-3xl mb-4"></i>
        <h3 className="text-xl font-semibold text-black">Customer Focus</h3>
        <p className="text-gray-600 mt-2">
          Our clients are at the heart of everything we do.
        </p>
      </div>
    </div>
  </div>

  {/* Testimonials Section */}
  <div className="mt-16 max-w-7xl mx-auto px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-black text-center">
      What Our Clients Say
    </h2>
    <p className="text-lg text-gray-600 text-center mt-4">
      Don’t just take our word for it—here’s what our clients have to say!
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
        <p className="text-gray-600">
          "This company exceeded our expectations. The team was professional, knowledgeable, and always ready to help."
        </p>
        <h3 className="text-lg font-semibold text-black mt-4">
          - Client Name
        </h3>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
        <p className="text-gray-600">
          "Their solutions have helped us grow our business tremendously. Highly recommended!"
        </p>
        <h3 className="text-lg font-semibold text-black mt-4">
          - Client Name
        </h3>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
        <p className="text-gray-600">
          "A reliable partner that consistently delivers excellent results."
        </p>
        <h3 className="text-lg font-semibold text-black mt-4">
          - Client Name
        </h3>
      </div>
    </div>
  </div>

  {/* Call to Action */}
  <div className="mt-16 bg-[#f97316] text-white py-12">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold">
        Ready to Work With Us?
      </h2>
      <p className="text-lg mt-4">
        Join us on our journey to excellence. Let’s create something amazing together.
      </p>
      <button className="mt-6 bg-white text-[#f97316] py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300">
        Contact Us
      </button>
    </div>
  </div>
</div>

  </>
  );
};

export default Categories;
