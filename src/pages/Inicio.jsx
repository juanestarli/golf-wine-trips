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
      <div className="pt-[70px] pl-10 pr-[20px] font-['SpaceGroteskBold'] text-white bg-black text-left text-[20px] md:w-1/2 left-[10%]">
        <p>
          Hi, I´m Juan Estarli. I am a passionate web developer with a background in
          Computer Engineering. Currently, I work as a web developer at Teatro Colón.
        </p>
      </div>
      <div className="pt-[100px] pb-[400px] font-['SpaceGroteskBold'] text-[#FF9A00] bg-black w-full text-center align-middle text-[14vw] md:h-screen s:max-h-[100px]">
        <h1>JUAN ESTARLI</h1>
      </div>
      <div className="s:pt-[0px] md:pt-0 pl-10 pb-10 font-space-grotesk font-bold text-white bg-black w-full text-left text-[10vw] h-[40%]">
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
