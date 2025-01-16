import React from 'react';
import { FaUserTie, FaBullhorn, FaLightbulb } from 'react-icons/fa'; // Business, Marketing, and Innovation icons

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Company XYZ',
    text: 'Working with ViseTech has been a game-changer for our business. Their expertise and dedication delivered results beyond our expectations.',
    icon: <FaUserTie className="text-[#f97316] w-16 h-16" />, // Consistent with portfolio brand color
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Marketing Director, ABC Corp',
    text: 'The team at ViseTech provided innovative solutions that have transformed our digital presence. We couldn’t be happier with the outcome.',
    icon: <FaBullhorn className="text-[#f97316] w-16 h-16" />, // Marketing-related icon
  },
  {
    id: 3,
    name: 'Michael Johnson',
    role: 'Product Manager, Tech Innovations',
    text: 'The ViseTech team is highly professional, efficient, and reliable. They delivered outstanding results that had a positive impact on our product development.',
    icon: <FaLightbulb className="text-[#f97316] w-16 h-16" />, // Innovation-focused icon
  },
];

const Testimonial = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-black mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
            >
              <div className="flex justify-center mb-6">
                {/* Client Testimonial Icon */}
                {testimonial.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{testimonial.name}</h3>
              <p className="text-gray-500 mb-4">{testimonial.role}</p>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
