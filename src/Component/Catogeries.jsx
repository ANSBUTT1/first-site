import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Web Development',
    description: 'Build modern, responsive websites for all your needs.',
    image: 'https://via.placeholder.com/300x200?text=Web+Development', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Mobile App Development',
    description: 'Create intuitive and feature-rich mobile applications.',
    image: 'https://via.placeholder.com/300x200?text=Mobile+App+Development', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'SEO Optimization',
    description: 'Improve your website’s search engine ranking and visibility.',
    image: 'https://via.placeholder.com/300x200?text=SEO+Optimization', // Replace with actual image URL
  },
  {
    id: 4,
    name: 'Digital Marketing',
    description: 'Expand your reach with targeted and effective online marketing strategies.',
    image: 'https://via.placeholder.com/300x200?text=Digital+Marketing', // Replace with actual image URL
  },
  {
    id: 5,
    name: 'Graphic Design',
    description: 'Create stunning visual content and designs for your brand.',
    image: 'https://via.placeholder.com/300x200?text=Graphic+Design', // Replace with actual image URL
  },
  {
    id: 6,
    name: 'Content Writing',
    description: 'Engage your audience with compelling and informative content.',
    image: 'https://via.placeholder.com/300x200?text=Content+Writing', // Replace with actual image URL
  },
];

const Catogeries = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catogeries;
