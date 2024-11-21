import React, { useEffect, useState } from 'react';
import GridProjectWork from '../components/GridProjectWork';
import paquetesData from '../data/paquetes.json'; // Asegúrate de poner la ruta correcta

const Paquetes = () => {
  const [paquetes, setPaquetes] = useState([]);

  useEffect(() => {
    // Cargar los trabajos del archivo JSON
    setPaquetes(paquetesData);
  }, []);

  return <GridProjectWork paquetes={paquetes} />;
};

export default Paquetes;
