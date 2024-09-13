import React, { useEffect, useState } from 'react';
import GridProjectWork from '../components/GridProjectWork';
import trabajosData from '../data/trabajos.json'; // Asegúrate de poner la ruta correcta

const Work = () => {
  const [trabajos, setTrabajos] = useState([]);

  useEffect(() => {
    // Cargar los trabajos del archivo JSON
    setTrabajos(trabajosData);
  }, []);

  return <GridProjectWork trabajos={trabajos} />;
};

export default Work;
