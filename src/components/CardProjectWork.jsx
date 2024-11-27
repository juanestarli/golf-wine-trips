import React from 'react';
import { Link } from 'react-router-dom';

const CardProjectWork = ({ paquete }) => {
  return (
    <Link
      to={paquete.link}
      key={paquete.id}
      className="bg-white-800 text-black rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full hover:bg-black hover:text-white"
    >
      {/* Imagen del proyecto */}
      <img
        src={paquete.image}
        alt={paquete.title}
        className="w-full h-[70%] object-cover rounded-t-lg"
      />

      {/* Contenido de la card */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 font-['CinzelBold']">{paquete.title}</h2>
        <p className="text-sm font-['CinzelRegular']">{paquete.description}</p>
      </div>
    </Link>
  );
};

export default CardProjectWork;
