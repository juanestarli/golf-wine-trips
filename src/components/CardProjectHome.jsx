import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link

const CardProject = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <Link 
      to={`/paquetes/${encodeURIComponent(title)}`} // Usar Link para la navegación
      className="flex flex-col items-start w-full p-8 bg-white text-black no-underline hover:shadow-lg rounded-lg transition-transform duration-200 transform hover:scale-103 "
    >
      {/* Imagen clickeable */}
      <div className="w-full h-auto overflow-hidden rounded-md">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* Texto debajo de la imagen */}
      <div className="mt-4">
        <p className="text-2xl font-bold text-left font-['CinzelBold']">{title}</p>
        <p className="text-lg text-left font-['CinzelRegular'] text-gray-700">{description}</p>
      </div>
    </Link>
  );
};

export default CardProject;
