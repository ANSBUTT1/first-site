import React, { useState } from 'react';
import Two from '../Component/imgtwo.jpg';
import Three from '../Component/imgthree.jpg';
import Four from '../Component/imgfour.jpg';
import Five from '../Component/imgfive.jpg';
import Six from '../Component/imgsix.jpg';
import Seven from '../Component/imgseven.jpg';
import Eight from '../Component/imgeight.jpg';
import Nine from '../Component/imgnine.jpg';

const images = [Two, Three, Four, Five, Six, Seven, Eight, Nine];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.floor((images.length - 1) / itemsPerPage) * itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= images.length ? 0 : prevIndex + itemsPerPage
    );
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden bg-gray-100 py-10">
      {/* Slider Images */}
      <div
        className="flex    transition-transform duration-700"
        style={{ transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)` }}
      >
        {Array.from({ length: Math.ceil(images.length / itemsPerPage) }).map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="flex flex-shrink-0 w-full justify-center items-center space-x-6 px-6"
          >
            {images
              .slice(groupIndex * itemsPerPage, groupIndex * itemsPerPage + itemsPerPage)
              .map((image, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:shadow-black"
                  style={{ width: '250px' }}
                >
                  <img
                    src={image}
                    alt={`Image ${groupIndex * itemsPerPage + index + 1}`}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Image {groupIndex * itemsPerPage + index + 1}</h3>
                    <p className="text-gray-600">This is a description for image {groupIndex * itemsPerPage + index + 1}.</p>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-80 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition duration-300"
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-80 text-white p-3 rounded-full hover:bg-gray-900 transition duration-300"
      >
        &#8594;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {Array.from({ length: Math.ceil(images.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerPage)}
            className={`w-4 h-4 rounded-full ${currentIndex / itemsPerPage === index ? 'bg-gray-800' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
