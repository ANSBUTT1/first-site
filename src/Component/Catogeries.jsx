import React from 'react';
import Business from '../assets/personal.jpg'

const Categories = () => {
  
  return (
    <>
    
    <div id='down' className="flex flex-wrap justify-center space-x-6 bg-gray-100 p-6 rounded-lg shadow-md max-w-screen-xl mx-auto">  

{/* Variation 1: Code and Calm */}  
<div className="flex flex-col items-center bg-white p-4 rounded-lg shadow w-80">  
    <img   
        src={Business}  
        alt="Coding Serenity"   
        className="rounded-lg shadow-md h-48 w-full object-cover mb-4"   
    />  
    <h1 className="text-2xl font-bold text-center text-[#f97316] mb-2">  
        Code and Calm  
    </h1>  
    <p className="text-md text-gray-700 text-center mb-4">  
        Just as coding requires focus, moments of tranquility remind us to recharge our minds. Finding peace enhances our creativity and problem-solving abilities.  
    </p>  
</div>  

{/* Variation 2: Nature and Innovation */}  
<div className="flex flex-col items-center bg-white p-4 rounded-lg shadow w-80">  
    <img   
        src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600"   
        alt="Developer at Work"   
        className="rounded-lg shadow-md h-48 w-full object-cover mb-4"   
    />  
    <h1 className="text-2xl font-bold text-center text-[#f97316] mb-2">  
        Nature and Innovation  
    </h1>  
    <p className="text-md text-gray-700 text-center mb-4">  
        Embracing nature's tranquility can spark innovative ideas in coding. Step away from the screen and let nature's rhythm inspire your next project.  
    </p>  
</div>  

{/* Variation 3: Peaks of Potential */}  
<div className="flex flex-col items-center bg-white p-4 rounded-lg shadow w-80">  
    <img   
        src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"   
        alt="Coding Mountains"   
        className="rounded-lg shadow-md h-48 w-full object-cover mb-4"   
    />  
    <h1 className="text-2xl font-bold text-center text-[#f97316] mb-2">  
        Peaks of Potential  
    </h1>  
    <p className="text-md text-gray-700 text-center mb-4">  
        Just as mountains stand tall and strong, let your skills as a developer reach new heights. Every challenge is an opportunity to grow and excel.  
    </p>  
</div>  

</div>
    </>
  );
};

export default Categories;
