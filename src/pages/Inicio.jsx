import React, { useState, useEffect } from 'react';
import CardProjectHome from '../components/CardProjectHome';
import trabajosData from '../data/trabajos.json'; // Asegúrate de que la ruta sea correcta

export const Inicio = () => {
  const [featuredWorks, setFeaturedWorks] = useState([]);

  useEffect(() => {
    // Filtrar los trabajos destacados
    const filteredWorks = trabajosData.filter(trabajo => trabajo.featured);
    setFeaturedWorks(filteredWorks);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen">
        <img 
          src="/mendoza golf.jpg" 
          alt="Imagen de fondo" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </div>
      <div className="relative w-full h-[40vh] bg-white">
        <img 
          src="logo-golf-wine.png" 
          alt="Logo" 
          className="absolute inset-0 m-auto max-w-full max-h-full object-contain" 
        />
      </div>


      <div className="s:pt-[0px] md:pt-10 pl-10 pb-10 font-space-grotesk font-bold text-white bg-black w-full text-left text-[10vw] h-[40%]">
        <h1 className="w-1/2 leading-[0.8]">Featured work</h1>
      </div>

      {/* Mostrar los trabajos destacados */}
      {featuredWorks.map(trabajo => (
        <CardProjectHome
          key={trabajo.id}
          imageSrc={trabajo.image}
          imageAlt={trabajo.title}
          title={trabajo.title}
          description={trabajo.description}
        />
      ))}
    </>
  );
};
