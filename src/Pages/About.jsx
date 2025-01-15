import React from "react";

const About = () => {
  return (
    <div >
      <div className="flex justify-between gap-8 p-8">
        <div className="w-80 bg-gradient-to-r from-gray-100 to-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-800">Card 1</h3>
          <p className="text-gray-600 mt-2">
            Description for card 1 goes here.
          </p>
        </div>

        <div className="w-80 bg-gradient-to-r from-gray-100 to-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-800">Card 2</h3>
          <p className="text-gray-600 mt-2">
            Description for card 2 goes here.
          </p>
        </div>

        <div className="w-80 bg-gradient-to-r from-gray-100 to-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-800">Card 3</h3>
          <p className="text-gray-600 mt-2">
            Description for card 3 goes here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
