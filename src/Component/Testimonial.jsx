import React from 'react';
import { FaUserTie, FaBullhorn, FaLightbulb } from 'react-icons/fa'; // Importing relevant icons

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Company XYZ',
    text: 'This is the best service I have ever used. Highly recommend it to anyone looking to grow their business!',
    icon: <FaUserTie className="text-gray-500 w-16 h-16" />, // Business-related icon
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Marketing Director, ABC Corp',
    text: 'Amazing experience! The team is professional, and the results were outstanding.',
    icon: <FaBullhorn className="text-gray-500 w-16 h-16" />, // Marketing-related icon
  },
  {
    id: 3,
    name: 'Michael Johnson',
    role: 'Product Manager, Tech Innovations',
    text: 'The service exceeded our expectations. We saw immediate improvements in our project delivery times.',
    icon: <FaLightbulb className="text-gray-500 w-16 h-16" />, // Innovation-related icon
  },
];

const Testimonial = () => {
  return (
    <div className="py-12 bg-gray-50  ">
      <div className="max-w-screen-xl mx-auto text-center ">
        <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex justify-center mb-4">
                {/* Dynamic icon from the testimonial object */}
                {testimonial.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
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
