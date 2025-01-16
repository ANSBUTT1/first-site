import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jpg";  // Make sure the path is correct

const Navbar = () => {
  return (
    <div className="bg-black p-4 shadow-md  w-full z-50">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo || 'fallback-image-url.jpg'} // Add fallback image if necessary
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 cursor-pointer  transition-all duration-700 border-white hover:scale-125 " />
          <Link
            to="/"
            className="text-white text-3xl font-bold hover:text-gray-400 transition-all duration-300"
          >
            {/* ViseTech Title */}
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 text-white text-lg font-medium">
          <li>
            <Link
              to="/"
              className="relative group text-white  transition-all duration-300"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[4px] rounded-lg bg-primaryColor transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative group text-white  transition-all duration-300"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[4px] rounded-lg bg-primaryColor  transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/Projact"
              className="relative group text-white  transition-all duration-300"
            >
              Projact
              <span className="absolute left-0 bottom-0 w-0 h-[4px] rounded-lg bg-primaryColor transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative group text-white  transition-all duration-300"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[4px] rounded-lg bg-primaryColor transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Input and Buttons */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block px-4 py-2 rounded-full bg-white text-xs text-primaryColor placeholder-primaryColor focus:outline-none "
          />

          {/* Sign In Button */}
          <Link
            to="/login"
            className="px-5 py-2 hover:bg-primaryColor   bg-white text-primaryColor hover:text-white rounded-full text-sm font-medium hover:bg-[#F97316]/90 transition-all duration-300"
          >
            Login
          </Link>

          {/* Sign Up Button */}
          <Link
            to="/signup"
            className="px-4 py-2 bg-primaryColor   hover:bg-white hover:text-primaryColor text-white rounded-full text-sm font-medium hover:bg-[#F97316]/90 transition-all duration-300"
          >
            SignUp
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
