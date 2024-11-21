import React from 'react'

export const About = () => {
  return (
    
    <section className="text-black ">
      <div className="relative w-full h-[40vh]">
        <img 
          src="/mendoza golf.jpg" 
          alt="Imagen de fondo" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <h1 className="font-['SpaceGroteskBold'] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
          Nosotros
        </h1>
      </div>

    
      <div className="w-full p-10 md:p-20 ">
        {/* Introducción */}
        <h2 className="font-['SpaceGroteskBold'] text-black text-left text-3xl">Quiénes somos</h2>
        <p className="text-lg leading-relaxed mb-5 font-['SpaceGroteskLight']">
          Una organización que ha creado y desarrollado un nuevo emprendimiento con mucho entusiasmo y una gran pasión.
        </p>

        {/* Misión */}
        <h3 className="text-2xl font-semibold mb-3 font-['SpaceGroteskBold']">Nuestra Misión</h3>
        <p className="text-lg leading-relaxed mb-5 font-['SpaceGroteskLight']">
          Somos una familia en la que tanto viajar, como jugar al golf, son parte esencial de nuestro disfrute. Por otro lado, ser mendocinos de origen y por opción constituye un plus, pues nos permite elegir los mejores sitios sobre la base de una óptima relación precio/calidad para que puedas disfrutar a pleno tu estadía.
        </p>

        {/* Valores */}
        <h3 className="text-2xl font-semibold mb-3 font-['SpaceGroteskBold']">Nuestros Valores</h3>
        <p className="text-lg leading-relaxed mb-5 font-['SpaceGroteskLight']">
          Nuestros valores son: seriedad, expertise y compromiso con el cliente.
        </p>
      </div>
    </section>
  )
}
