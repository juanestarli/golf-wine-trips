import React from 'react';

// Definir el componente CardProject
const CardProject = ({ imageSrc, imageAlt, onClick, title, description }) => {
  return (
    <div style={styles.cardContainer}>
      {/* Imagen clickeable */}
      <div onClick={onClick} style={styles.imageContainer}>
        <img src={imageSrc} alt={imageAlt} style={styles.image} />
      </div>
      {/* Texto debajo de la imagen */}
      <div style={styles.textContainer}>
        <p style={styles.title}>{title}</p>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};

// Estilos en línea para el componente
const styles = {
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    width: '100%',  // Ajusta el ancho según sea necesario
    padding: '30px',
    cursor: 'pointer',
    backgroundcolor: "black",
  },
  imageContainer: {
    width: '100%',
    height: 'auto'
  },
  image: {
    width: '100%',
  },
  textContainer: {
    marginTop: '10px',
  },
  description: {
    fontSize: '16px',
    color: 'white',
    textAlign: 'left',
    fontFamily: 'SpaceGroteskLight, sans-serif', 
  },
  title: {
    fontFamily: 'SpaceGroteskBold, sans-serif', 
    color: "white",
    fontSize: "42px",
    textAlign: 'left',
  }
};

export default CardProject;
