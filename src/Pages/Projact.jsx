import React from 'react';
import { FaSuitcase, FaArrowUp, FaMoneyBillWave } from 'react-icons/fa'; // React Icons
import { GoArrowUpRight } from "react-icons/go"; // React Icons

const PortfolioCard = ({ title, description, skills, buttonText, icon }) => {
  return (
    <div className="flex flex-col items-center justify-between border border-[#f97316] rounded-lg p-6 bg-orange-50 shadow-lg max-w-sm w-full h-[400px]">
      <div className="flex items-center justify-between mb-4 w-full">
        <span className="bg-[#f97316] text-white text-sm px-3 py-1 rounded-full">{title}</span>
        <div className="text-[#f97316]">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{description}</h3>
      <hr className="border-t border-[#f97316] mb-4" />
      <ul className="space-y-2 text-gray-600 text-sm">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="text-[#f97316] mr-2">➜</span>{skill}
          </li>
        ))}
      </ul>
      <button className="bg-[#f97316] text-white font-medium w-full py-3 rounded-lg shadow-md hover:bg-orange-600 mt-4">
        {buttonText}
      </button>
    </div>
  );
};

const Portfolio = () => {
  return (
    <>
      <div className="text-center mt-10 ">
        <h3 className="border rounded-xl w-24 flex ml-[47%] text-center pl-5 font-bold">
          <GoArrowUpRight className="text-[#f97316] h-6 w-6"  /> Portfolio
        </h3>
        <h1 className="text-4xl mb-4 font-sans font-[80px]">My Portfolio</h1>
        <p className="text-lg">A collection of projects I've worked on, showcasing my skills and expertise.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 mt-20 hover:shadow-[#f97316] ">
        <PortfolioCard
          title="Web Development"
          description="Building user-friendly and scalable websites."
          skills={[
            "HTML, CSS, JavaScript",
            "React, Node.js",
            "Responsive Design",
            "SEO Optimization"
          ]}
          buttonText="View Project"
          icon={<FaSuitcase className="h-6 w-6 text-[#f97316]" />}
        />

        <PortfolioCard
          title="App Development"
          description="Developing intuitive mobile applications."
          skills={[
            "React Native",
            "Swift, Kotlin",
            "APIs Integration",
            "Cross-Platform Development"
          ]}
          buttonText="View Project"
          icon={<FaArrowUp className="h-6 w-6 text-[#f97316]" />}
        />

        <PortfolioCard
          title="UI/UX Design"
          description="Designing visually appealing and user-centric interfaces."
          skills={[
            "Figma, Sketch, Adobe XD",
            "Wireframes & Prototypes",
            "User Research",
            "Interaction Design"
          ]}
          buttonText="View Project"
          icon={<FaMoneyBillWave className="h-6 w-6 text-[#f97316]" />}
        />
      </div>

      <div className="text-center mt-20">
        <h1 className="text-4xl mb-4 font-sans font-[80px]">Professional Experience</h1>
        <p className="text-lg">Here are some of the key projects and experiences I've had in my professional journey.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-20 ">
        {/* Project 1 */}
        <div className="bg-gray-100 rounded-lg p-6 text-center hover:shadow-lg hover:shadow-[#f97316] transition-all border hover:border-[#f97316] ">
          <h3 className="text-xl font-semibold mb-2 text-[#333]">E-commerce Website</h3>
          <p className="text-base text-gray-600">Built a full-stack e-commerce platform for a local business, optimizing user experience and performance.</p>
          <ul className="space-y-2 text-gray-600 text-sm mt-4 ">
            <li>React, Node.js</li>
            <li>Payment Integration</li>
            <li>Mobile Responsiveness</li>
            <li>SEO Optimization</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-100 rounded-lg p-6 text-center border hover:border-[#f97316] hover:shadow-lg hover:shadow-[#f97316] transition-all">
          <h3 className="text-xl font-semibold mb-2 text-[#333]">Mobile App Development</h3>
          <p className="text-base text-gray-600">Developed a cross-platform mobile application for an event management company.</p>
          <ul className="space-y-2 text-gray-600 text-sm mt-4">
            <li>React Native</li>
            <li>API Integrations</li>
            <li>Push Notifications</li>
            <li>Real-time Updates</li>
          </ul>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-100 rounded-lg p-6 text-center border hover:border-[#f97316] hover:shadow-lg hover:shadow-[#f97316] transition-all">
          <h3 className="text-xl font-semibold mb-2 text-[#333]">Portfolio Website</h3>
          <p className="text-base text-gray-600">Created a personal portfolio website showcasing my work and skills to potential clients.</p>
          <ul className="space-y-2 text-gray-600 text-sm mt-4">
            <li>HTML, CSS, JavaScript</li>
            <li>Custom Designs</li>
            <li>SEO-Friendly</li>
            <li>Interactive Features</li>
          </ul>
        </div>

        {/* Project 4 */}
        <div className="bg-gray-100 rounded-lg p-6 text-center border hover:border-[#f97316] hover:shadow-lg hover:shadow-[#f97316] transition-all">
          <h3 className="text-xl font-semibold mb-2 text-[#333]">Real Estate App</h3>
          <p className="text-base text-gray-600">Developed an app for a real estate firm to manage listings, client communications, and appointments.</p>
          <ul className="space-y-2 text-gray-600 text-sm mt-4">
            <li>React Native</li>
            <li>Firebase Integration</li>
            <li>Real-time Data</li>
            <li>Interactive Maps</li>
          </ul>
        </div>

        {/* Project 5 */}
        <div className="bg-gray-100 rounded-lg p-6 text-center border hover:border-[#f97316] hover:shadow-lg hover:shadow-[#f97316] transition-all">
          <h3 className="text-xl font-semibold mb-2 text-[#333]">Social Media Dashboard</h3>
          <p className="text-base text-gray-600">Created a comprehensive dashboard for social media analytics, showing real-time performance data.</p>
          <ul className="space-y-2 text-gray-600 text-sm mt-4">
            <li>React, Redux</li>
            <li>API Integrations</li>
            <li>Real-Time Data Visualization</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        {/* Project 6 */}
        <div className="bg-gray-100 rounded-lg p-6 text-center border hover:border-[#f97316] hover:shadow-lg hover:shadow-[#f97316] transition-all">
          <h3 className="text-xl font-semibold mb-2 text-[#333]">Analytics Dashboard</h3>
          <p className="text-base text-gray-600">Developed a dashboard for viewing key analytics in real-time, aiding in better business decisions.</p>
          <ul className="space-y-2 text-gray-600 text-sm mt-4">
            <li>React, Chart.js</li>
            <li>Real-time Data</li>
            <li>Advanced Filtering</li>
            <li>Custom Dashboards</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
