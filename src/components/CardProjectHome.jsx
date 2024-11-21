import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link

const CardProject = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <Link 
      to={`/paquetes/${encodeURIComponent(title)}`} // Usar Link para la navegación
      style={styles.cardContainer} 
      className="card" // Añadir clase si necesitas estilos adicionales
    >
      {/* Imagen clickeable */}
      <div style={styles.imageContainer}>
        <img src={imageSrc} alt={imageAlt} style={styles.image} />
      </div>
      {/* Texto debajo de la imagen */}
      <div style={styles.textContainer}>
        <p style={styles.title}>{title}</p>
        <p style={styles.description}>{description}</p>
      </div>
    </Link>
  );
};

// Estilos en línea para el componente
const styles = {
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Cambiado de 'left' a 'flex-start'
    width: '100%',  // Ajusta el ancho según sea necesario
    padding: '50px',
    cursor: 'pointer',
    backgroundColor: 'white', // Corregido el error de 'backgroundcolor'
    textDecoration: 'none', // Evitar subrayado en el Link
    hover: "round-full",
  },
  imageContainer: {
    width: '100%',
    height: 'auto',
    hover: "round-full",
  },
  image: {
    width: '100%',
  },
  textContainer: {
    marginTop: '10px',
  },
  description: {
    fontSize: '16px',
    color: 'black',
    textAlign: 'left',
    fontFamily: 'SpaceGroteskLight, sans-serif',
  },
  title: {
    fontFamily: 'SpaceGroteskBold, sans-serif',
    color: 'black',
    fontSize: '42px',
    textAlign: 'left',
  },
};

export default CardProject;
