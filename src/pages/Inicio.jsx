import React, { useState, useEffect } from 'react';
import CardProjectHome from '../components/CardProjectHome';
import paquetesData from '../data/paquetes.json'; // Asegúrate de que la ruta sea correcta
import Slider from '../components/Slider';

export const Inicio = () => {
  const [featuredWorks, setFeaturedWorks] = useState([]);

  useEffect(() => {
    // Filtrar los paquetes destacados
    const filteredWorks = paquetesData.filter(paquete => paquete.featured);
    setFeaturedWorks(filteredWorks);
  }, []);

  return (
    <>
      <Slider></Slider>

      <div className="relative w-full h-[40vh] bg-white p-5">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img 
            src="logo-golf-wine.png" 
            alt="Logo" 
            className="w-2/5 h-2/5 object-contain" 
          />
          <a 
            href="/nosotros" 
            className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-white hover:text-black transition duration-300 font-['CinzelBold']"
          >
            Conocé más sobre nosotros
          </a>
        </div>
      </div>





      <div className="s:pt-[0px] md:pt-10 pl-10 pb-10 font-['CinzelBold'] text-black bg-white w-full text-left text-[9vw] h-[40%]">
        <h1 className="w-1/2 leading-[0.8]">Paquetes</h1>
      </div>

      {/* Mostrar los paquetes destacados */}
      {featuredWorks.map(paquete => (
        <CardProjectHome
          key={paquete.id}
          imageSrc={paquete.image}
          imageAlt={paquete.title}
          title={paquete.title}
          description={paquete.description}
        />
      ))}
    </>
  );
};
