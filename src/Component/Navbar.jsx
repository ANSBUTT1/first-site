import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jpg"; // Make sure the path is correct

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-black p-4 shadow-md w-full z-50">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo || "fallback-image-url.jpg"} // Add fallback image if necessary
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 cursor-pointer transition-all duration-700 border-white hover:scale-125"
          />
          <Link
            to="/"
            className="text-white text-3xl font-bold hover:text-gray-400 transition-all duration-300"
          >
           
          </Link>
        </div>

        {/* Navigation Links and Mobile Menu Button */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* Mobile Dropdown Menu */}
          <ul
            className={`absolute top-full right-0 mt-2 bg-black p-4 rounded-md shadow-md md:hidden ${
              isDropdownOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <Link
                to="/"
                className="text-white block py-2 hover:text-gray-400"
                onClick={() => setIsDropdownOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white block py-2 hover:text-gray-400"
                onClick={() => setIsDropdownOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Projact"
                className="text-white block py-2 hover:text-gray-400"
                onClick={() => setIsDropdownOpen(false)}
              >
                Projact
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white block py-2 hover:text-gray-400"
                onClick={() => setIsDropdownOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 text-white text-lg font-medium">
          <li>
            <Link
              to="/"
              className="relative group text-white transition-all duration-300"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[4px] rounded-lg bg-[#F97316] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative group text-white transition-all duration-300"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[4px] rounded-lg bg-[#F97316] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/Projact"
              className="relative group text-white transition-all duration-300"
            >
              Projact
              <span className="absolute left-0 bottom-0 w-0 h-[4px] rounded-lg bg-[#F97316] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative group text-white transition-all duration-300"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[4px] rounded-lg bg-[#F97316] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Input and Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-full bg-white text-xs text-black placeholder-black focus:outline-none"
          />

          {/* Sign In Button */}
          <Link
            to="/login"
            className="px-5 py-2 hover:bg-[#F97316] bg-white text-black rounded-full text-sm font-medium hover:text-white transition-all duration-300"
          >
            Login
          </Link>

          {/* Sign Up Button */}
          <Link
            to="/signup"
            className="px-4 py-2 bg-[#F97316] hover:bg-white hover:text-[#F97316] text-white rounded-full text-sm font-medium transition-all duration-300"
          >
            SignUp
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
