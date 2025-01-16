import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaWrench, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Additional icons for links

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4">My Website</h2>
            <p className="text-gray-400 mb-2">
              Providing premium services to empower businesses in the digital era.
            </p>
            <p className="text-gray-400">Get in touch with us to start a conversation today.</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="list-none space-y-2">
              <li className="flex items-center">
                <FaHome className="text-orange-500 mr-2" />
                <Link to="/" className="hover:text-gray-100 transition-all duration-300">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <FaInfoCircle className="text-orange-500 mr-2" />
                <Link to="/about" className="hover:text-gray-100 transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li className="flex items-center">
                <FaWrench className="text-orange-500 mr-2" />
                <Link to="/services" className="hover:text-gray-100 transition-all duration-300">
                  Services
                </Link>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-orange-500 mr-2" />
                <Link to="/contact" className="hover:text-gray-100 transition-all duration-300">
                  Contact
                </Link>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-orange-500 mr-2" />
                <Link to="/support" className="hover:text-gray-100 transition-all duration-300">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-orange-500 hover:text-orange-600">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="https://twitter.com" className="text-orange-500 hover:text-orange-600">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://linkedin.com" className="text-orange-500 hover:text-orange-600">
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a href="https://instagram.com" className="text-orange-500 hover:text-orange-600">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Subscribe More Info</h2>
            <form>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
