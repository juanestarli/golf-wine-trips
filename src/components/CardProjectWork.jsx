import React from 'react';
import { Link } from 'react-router-dom';

const CardProjectWork = ({ trabajo }) => {
  return (
    <Link
      to={trabajo.link}
      key={trabajo.id}
      className="bg-black-800 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full"
    >
      {/* Imagen del proyecto */}
      <img
        src={trabajo.image}
        alt={trabajo.title}
        className="w-full h-[70%] object-cover rounded-t-lg"
      />

      {/* Contenido de la card */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{trabajo.title}</h2>
        <p className="text-sm">{trabajo.description}</p>
      </div>
    </Link>
  );
};

export default CardProjectWork;
