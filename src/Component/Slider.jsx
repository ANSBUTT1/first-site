import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {IoMdArrowDropleftCircle , IoMdArrowDroprightCircle } from "react-icons/io";

const images = [
  { src: 'https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Collaborative Coding', description: 'Working together to build innovative solutions.' },
  { src: 'https://images.pexels.com/photos/4458420/pexels-photo-4458420.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Agile Development', description: 'Iterative and incremental development for better results.' },
  { src: 'https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Code Review Process', description: 'Ensuring code quality through peer reviews.' },
  { src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Frontend Development', description: 'Creating user-friendly interfaces with modern frameworks.' },
  { src: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Backend Development', description: 'Creating user-friendly interfaces with modern frameworks.' },
  { src: 'https://images.pexels.com/photos/16129724/pexels-photo-16129724/free-photo-of-man-working-on-computers-coding.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'DevOps Practices', description: 'Integrating development and operations for efficiency.' },
  { src: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Cloud Solutions', description: 'Leveraging cloud technology for scalable applications.' },
  { src: 'https://media.istockphoto.com/id/1409790673/photo/programmer-writing-codes-on-computer-at-table.jpg?s=1024x1024&w=is&k=20&c=o_ih8YSPdsMIXYuQ4all1eSoiIwjImP2HhNJD0pSyHg=', title: 'Continuous Integration', description: 'Automating testing and deployment processes.' },
];

const Slider = () => {
  return (
    <div className="py-16 px-6 sm:px-16 bg-gray-100 relative">
      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button className="swiper-button-prev flex items-center justify-center w-10 h-10  text-white   transition">
          <IoMdArrowDropleftCircle className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button className="swiper-button-next flex items-center justify-center w-10 h-10  text-white transition">
          <IoMdArrowDroprightCircle className="w-5 h-5" />
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper
  modules={[Navigation, A11y]}  // Removed Pagination from modules
  spaceBetween={30}
  slidesPerView={4}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
  breakpoints={{
    0: { slidesPerView: 1, spaceBetween: 10 },
    640: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 30 },
    1024: { slidesPerView: 4, spaceBetween: 40 },
  }}
>
  {images.map((image, index) => (
    <SwiperSlide key={index}>
      <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col items-center transition-transform duration-300 hover:shadow-2xl hover:scale-105">
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-52 object-cover rounded-t-lg"
        />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{image.title}</h3>
          <p className="text-gray-600 line-clamp-2">
            {image.description}
          </p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  );
};

export default Slider;
