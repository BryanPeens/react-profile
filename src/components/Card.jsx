import React from "react";

const Card = ({ title, image, demoLink, codeLink }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div className="px-6 py-4">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Demo
          </button>
        </a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
