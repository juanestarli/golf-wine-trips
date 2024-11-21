import React from 'react';
import CardProjectWork from './CardProjectWork';

const GridProjectWork = ({ paquetes }) => {
  return (
    <div className="container mx-auto p-5 mt-16">
      {/* Grid para 1 card por fila en pantallas pequeñas y 2 en pantallas medianas */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {paquetes.map((paquete) => (
          <CardProjectWork key={paquete.id} paquete={paquete} />
        ))}
      </div>
    </div>
  );
};

export default GridProjectWork;
