import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-20 px-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-semibold text-black mb-8">
          Get in Touch with Me
        </h2>
        <p className="text-lg mb-12 text-gray-600">
          I'm always open to new opportunities and collaborations. Whether you need a website, an app, or help with your next digital project, I’m here to help. Let’s connect and discuss how we can work together to bring your ideas to life.
        </p>
      </div>

      <div className="max-w-screen-lg mx-auto">
        <form className="space-y-6 w-full">
          {/* Name Field */}
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

          {/* Email Field */}
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

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-black mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message"
              rows="6"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#f97316] text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Additional Contact Details */}
      <div className="max-w-screen-lg mx-auto mt-16 text-center">
        <p className="text-xl font-medium text-black mb-4">
          Prefer to Connect Directly? Reach Me Here:
        </p>
        <p className="text-lg text-gray-700">
          <strong>Email:</strong> shezad.ahmed@vise-tech.com
        </p>
        <p className="text-lg text-gray-700">
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p className="text-lg text-gray-700">
          <strong>Location:</strong> Coconut Creek, FL
        </p>
        <div className="mt-8">
          <a
            href="https://www.linkedin.com/in/shezad-ahmed-35406a324/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f97316] font-semibold hover:underline"
          >
            Visit My LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
