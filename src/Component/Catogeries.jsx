import React, { useState } from 'react';
import Business from '../Component/business.png'

const Categories = () => {
  return (
    <>
      <div className="font-sans bg-black text-white">
        {/* Header Section */}
        <header className="bg-gradient-to-r to-[#f97316] text-white text-center py-16  ">
          <h1 className="text-5xl font-bold shadow-lg hover:border w-80 rounded-full mx-auto h-20 pt-3 border-[#f97316] shadow-[#f97316] hover:scale-110 hover:translate-y-1 transition-all duration-500">
            John Doe
          </h1>
          <p className="text-xl mt-4">Frontend Developer | UI/UX Designer | React Enthusiast</p>
        </header>

        {/* About Me Section */}
        <section className="container mx-auto w-full p-8 ">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">About Me</h2>
            <p className="text-lg text-white">
              Hi, I'm John Doe, a passionate Frontend Developer with a focus on creating intuitive, dynamic, and responsive web applications. I specialize in JavaScript, React, HTML5, CSS3, and modern frontend frameworks. I love solving problems and transforming designs into seamless user experiences.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-black py-16    ">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-[#f97316] mb-8">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className=" bg-white p-6 rounded-lg shadow-lg hover:border border-[#f97316] shadow-[#f97316] hover:scale-110 hover:translate-y-1 transition-all duration-500">
                <h3 className="font-semibold text-xl text-black">HTML5 & CSS3</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:border border-[#f97316] shadow-[#f97316] hover:scale-110 hover:translate-y-1 transition-all duration-500">
                <h3 className="font-semibold text-xl text-black">JavaScript</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:border border-[#f97316] shadow-[#f97316] hover:scale-110 hover:translate-y-1 transition-all duration-500">
                <h3 className="font-semibold text-xl text-black">React.js</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:border border-[#f97316] shadow-[#f97316] hover:scale-110 hover:translate-y-1 transition-all duration-500">
                <h3 className="font-semibold text-xl text-black">Tailwind CSS</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:border border-[#f97316] shadow-[#f97316] hover:scale-110 hover:translate-y-1 transition-all duration-500">
                <h3 className="font-semibold text-xl text-black">Version Control (Git)</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:border border-[#f97316] shadow-[#f97316] hover:scale-110 hover:translate-y-1 transition-all duration-500">
                <h3 className="font-semibold text-xl text-black">Web Performance Optimization</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="container mx-auto p-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#f97316] mb-8">Projects</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:border border-[#f97316] shadow-[#f97316] hover:scale-110 hover:translate-y-1 transition-all duration-500">
                <h3 className="text-2xl font-semibold text-black">Project 1 - E-commerce Website</h3>
                <p className="text-gray-600 mt-2">A fully responsive e-commerce website built using React and Redux for state management.</p>
                <a href="#" className="text-[#f97316] mt-4 inline-block">View Project</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:border border-[#f97316] shadow-[#f97316] hover:scale-110 hover:translate-y-1 transition-all duration-500">
                <h3 className="text-2xl font-semibold text-black">Project 2 - Portfolio Website</h3>
                <p className="text-gray-600 mt-2">My personal portfolio built with React and Tailwind CSS, showcasing my frontend development skills.</p>
                <a href="#" className="text-[#f97316] mt-4 inline-block">View Project</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:border border-[#f97316] shadow-[#f97316] hover:scale-110 hover:translate-y-1 transition-all duration-500">
                <h3 className="text-2xl font-semibold text-black">Project 3 - Blog Application</h3>
                <p className="text-gray-600 mt-2">A blog application built with React, where users can create and read posts. Integrated with Firebase for backend.</p>
                <a href="#" className="text-[#f97316] mt-4 inline-block">View Project</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-white mb-8">Contact Me</h2>
            <p className="text-lg text-white mb-4">I’m always open to discussing new opportunities or collaborations.</p>
            <form className="max-w-md mx-auto space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-[#f97316] shadow-lg hover:border border-[#f97316] shadow-[#f97316] transition-all duration-500 text-black"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-[#f97316] shadow-lg hover:border border-[#f97316] shadow-[#f97316] transition-all duration-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-[#f97316] shadow-lg hover:border border-[#f97316] shadow-[#f97316] transition-all duration-500"
                rows="4"
              ></textarea>
              <button type="submit" className="w-full py-3 bg-[#f97316] text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Categories;
