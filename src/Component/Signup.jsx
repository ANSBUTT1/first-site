import React, { useState } from 'react';
import image from '../Component/signup.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup functionality (e.g., form submission or API call)
    console.log('Signup Data:', formData);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 min-h-screen items-center justify-center p-4">
      {/* Left side with image */}
      <div className=" hidden md:flex w-full lg:w-1/2">
        <img
          src={image}
          alt="Signup Illustration"
          className="w-full h-64 lg:h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right side with form */}
      <div className="bg-white text-black p-6 lg:p-8 rounded-lg shadow-xl border border-black/40 w-full lg:w-1/3">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSignup}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Create a password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 text-lg bg-primaryColor text-white font-semibold rounded-md hover:bg-primaryColor/80 focus:outline-none"
          >
            Sign Up
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-primaryColor font-semibold hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
