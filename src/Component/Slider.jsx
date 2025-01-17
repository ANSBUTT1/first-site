import React, { useState } from 'react';  

const images = [  
  { src: 'https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Collaborative Coding', description: 'Working together to build innovative solutions.' },  
  { src: 'https://images.pexels.com/photos/4458420/pexels-photo-4458420.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Agile Development', description: 'Iterative and incremental development for better results.' },  
  { src: 'https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Code Review Process', description: 'Ensuring code quality through peer reviews.' },  
  { src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Frontend Development', description: 'Creating user-friendly interfaces with modern frameworks.' },  
  { src: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Backend Development', description: 'Building robust server-side applications.' },  
  { src: 'https://images.pexels.com/photos/16129724/pexels-photo-16129724/free-photo-of-man-working-on-computers-coding.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'DevOps Practices', description: 'Integrating development and operations for efficiency.' },  
  { src: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Cloud Solutions', description: 'Leveraging cloud technology for scalable applications.' },  
  { src: 'https://media.istockphoto.com/id/1409790673/photo/programmer-writing-codes-on-computer-at-table.jpg?s=1024x1024&w=is&k=20&c=o_ih8YSPdsMIXYuQ4all1eSoiIwjImP2HhNJD0pSyHg=', title: 'Continuous Integration', description: 'Automating testing and deployment processes.' },  
];  

const Slider = () => {  
  const [currentIndex, setCurrentIndex] = useState(0);  
  const itemsPerPage = 4;  

  const handlePrev = () => {  
    setCurrentIndex(prevIndex => {  
      if (prevIndex === 0) return (images.length - 1) - (images.length - 1) % itemsPerPage;  
      else return prevIndex - itemsPerPage;  
    });  
  };  

  const handleNext = () => {  
    setCurrentIndex(prevIndex => {  
      if (prevIndex + itemsPerPage >= images.length) return 0;  
      return prevIndex + itemsPerPage;  
    });  
  };  

  return (  
    <div className="relative w-full mx-auto overflow-hidden bg-gray-200 py-16">  
      {/* Slider Images */}  
      <div  
        className="flex transition-transform duration-700"  
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
                  className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col items-center transition-all duration-300 hover:shadow-2xl"  
                  style={{ width: '300px' }}  
                >  
                  <img  
                    src={image.src}  
                    alt={image.title}  
                    className="w-full h-52 object-cover rounded-t-lg"  
                  />  
                  <div className="p-4 text-center">  
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{image.title}</h3>  
                    <p className="text-gray-600">{image.description}</p>  
                  </div>  
                </div>  
              ))}  
          </div>  
        ))}  
      </div>  

      {/* Previous Button */}  
      <button  
        onClick={handlePrev}  
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition duration-300"  
      >  
        &#8592; {/* Left Arrow */}  
      </button>  

      {/* Next Button */}  
      <button  
        onClick={handleNext}  
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition duration-300"  
      >  
        &#8594; {/* Right Arrow */}  
      </button>  

      {/* Dots Indicator */}  
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">  
        {Array.from({ length: Math.ceil(images.length / itemsPerPage) }).map((_, index) => (  
          <button  
            key={index}  
            onClick={() => setCurrentIndex(index * itemsPerPage)}  
            className={`w-4 h-4 rounded-full ${currentIndex / itemsPerPage === index ? 'bg-[#f97316]' : 'bg-gray-400'}`}  
          ></button>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Slider;