import React from 'react'

export default function Slider() {
  return (
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
        {/* Contenedor para los textos */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <p className="text-4xl font-['CinzelBold'] mb-4">
            Golf & Wine Trips
          </p>
          <p className="text-xl font-['CinzelRegular']">
            Viví Mendoza y el golf como nunca antes lo habías imaginado.
          </p>
        </div>
      </div>
  )
}
