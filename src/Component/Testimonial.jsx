import React from 'react';  
import { FaUserTie, FaBullhorn, FaLightbulb } from 'react-icons/fa'; // Business, Marketing, and Innovation icons  
 import image from "../assets/personal.jpg"
const developerImageUrl = image ;
const testimonials = [  
  {  
    id: 1,  
    name: 'Shezad Ahmed',  
    role: 'CEO, Ahmed Enterprises',  
    text: 'Our collaboration with ViseTech has significantly enhanced our business operations. Their commitment to excellence and strategic insights have transformed our approach to market challenges.',  
    icon: <FaUserTie className="text-[#f97316] w-16 h-16" />, // Consistent with brand color  
  },  
  {  
    id: 2,  
    name: 'Sarah Ahmed',  
    role: 'Marketing Specialist, Ahmed Ventures',  
    text: 'ViseTech delivered innovative strategies that revitalized our marketing efforts. Their creative solutions and responsiveness have made a noticeable impact on our brand visibility.',  
    icon: <FaBullhorn className="text-[#f97316] w-16 h-16" />, // Marketing-related icon  
  },  
  {  
    id: 3,  
    name: 'Ali Raza',  
    role: 'Product Development Manager, Ahmed Technologies',  
    text: 'The professionalism and dedication of the ViseTech team are commendable. Their ability to adapt to our needs has driven remarkable results in product development and implementation.',  
    icon: <FaLightbulb className="text-[#f97316] w-16 h-16" />, // Innovation-focused icon  
  },  
];  

const Testimonial = () => {  
  return (  
    <>  
      <div className="flex flex-col md:flex-row bg-black text-white py-16 px-6 md:px-16">  
        {/* Left Side - Text Content */}  
        <div className="flex-1 mb-8 md:mb-0">  
          <h1 className="text-5xl font-bold mb-4">Let's Build Something Amazing Together!</h1>  
          <h2 className="text-3xl font-semibold mb-4">Your Go-To Developer for Web & Mobile Solutions</h2>  
          <p className="text-lg mb-6">  
            Welcome to my portfolio! I specialize in delivering top-tier web and mobile development, UI/UX design, and custom digital solutions tailored to help businesses thrive in the ever-evolving digital landscape. Let's create something great together.  
          </p>  
          <a href="#portfolio" className="inline-block bg-[#f97316] text-white py-2 px-6 rounded-lg hover:bg-[#e76b00] transition duration-300">  
            View My Work  
          </a>  
        </div>  

        {/* Right Side - Image Content */}  
        <div className="flex-1">  
          <img src={developerImageUrl} alt="Developer" className="w-full h-auto rounded-lg shadow-lg" />  
        </div>  
      </div>   
      
      <div className="py-12">  
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
    </>  
  );  
};  

export default Testimonial;