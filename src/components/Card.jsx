import React from 'react';

const Card = ({ title, image, demoLink, codeLink }) => {
  return (
    <div className="bg-blue-950 rounded-md shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="flex justify-between space-x-4">
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
          >
            Demo
          </a>
          <a 
            href={codeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-300"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
