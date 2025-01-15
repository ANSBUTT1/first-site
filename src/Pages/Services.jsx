import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Title Section */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Premium Services</h2>
        <p className="text-xl text-gray-600 mb-16">
          Our exclusive services are tailored to meet your needs with attention to detail and personalized solutions.
          Explore the range of services designed to enhance your experience.
        </p>

        {/* Services List - Using Flexbox for 3 Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Service 1 */}
          <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-80 hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Service 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Premium Consultation</h3>
              <p className="text-gray-600 mb-4">
                Receive personalized one-on-one consultation with industry experts, designed to help you achieve your goals.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Exclusive one-on-one sessions</li>
                <li>Strategic insights and actionable advice</li>
                <li>Tailored guidance for personal or business growth</li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-80 hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Service 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Exclusive Event Access</h3>
              <p className="text-gray-600 mb-4">
                Gain access to exclusive VIP events, where you can network with influential leaders and experts in the industry.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Invitations to private, VIP-only events</li>
                <li>Opportunities to meet industry leaders</li>
                <li>Priority access and reserved seating</li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-80 hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Service 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">VIP Membership Benefits</h3>
              <p className="text-gray-600 mb-4">
                As a VIP member, you'll unlock a range of exclusive benefits, including discounts, early access, and special offers.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Special member-only discounts and offers</li>
                <li>Early access to new products and services</li>
                <li>Customized services tailored to your preferences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
