import React from 'react';
import CardProjectWork from './CardProjectWork';

const GridProjectWork = ({ trabajos }) => {
  return (
    <div className="container mx-auto p-5">
      {/* Grid para 1 card por fila en pantallas pequeñas y 2 en pantallas medianas */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {trabajos.map((trabajo) => (
          <CardProjectWork key={trabajo.id} trabajo={trabajo} />
        ))}
      </div>
    </div>
  );
};

export default GridProjectWork;
