import React, { useState, useEffect } from 'react';
import CardProjectHome from '../components/CardProjectHome';
import paquetesData from '../data/paquetes.json'; // Asegúrate de que la ruta sea correcta

export const Inicio = () => {
  const [featuredWorks, setFeaturedWorks] = useState([]);

  useEffect(() => {
    // Filtrar los paquetes destacados
    const filteredWorks = paquetesData.filter(paquete => paquete.featured);
    setFeaturedWorks(filteredWorks);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen">
        <video 
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/6573432-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>

      <div className="relative w-full h-[40vh] bg-white p-5">
        <div className="flex items-center justify-center w-full h-full">
          <img 
            src="logo-golf-wine.png" 
            alt="Logo" 
            className="w-2/5 h-2/5 object-contain" 
          />
        </div>
      </div>




      <div className="s:pt-[0px] md:pt-10 pl-10 pb-10 font-space-grotesk font-bold text-black bg-white w-full text-left text-[10vw] h-[40%]">
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
