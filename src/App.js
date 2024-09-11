import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import images from "./data/images";
import CardProject from "./components/CardProject";

const slides = [
  
    "https://www.revistaelabasto.com.ar/wp-content/uploads/2022/12/argentina-campeon.jpg", 
    "https://pbs.twimg.com/media/FkSE245XwAIr6_7.jpg:large",     
    "https://www.infobae.com/new-resizer/Oyc0MUqSQrPsH83eJnSh_iXStv4=/1200x900/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YUTXU4BC3TNJFYAXXWGOYK7LIY.jpg",    
    "https://media.cnn.com/api/v1/images/stellar/prod/cnne-1316125-argentina-campeon-de-qatar-2022.jpg?c=original",
    
];

function App() {

  return (
    <div className="App" style={{backgroundColor: "black", height: "100vh", overflowX: 'hidden'}}>
      <NavBar />
      <div style={{ paddingTop: '70px', paddingLeft: "20px", 
    fontFamily: 'SpaceGroteskBold, sans-serif', color: "white", backgroundColor: "black", textAlign: 'left', fontSize: '20px',width: "50%",left: '10%', }}>
      <p>
        Hi, I´m Juan Estarli. I am a passionate web developer with a background in
        Information Engineering. Currently, I work as a web developer at Teatro Colón.
      </p>
    </div>
    <div style={{ paddingTop: '250px', fontFamily: 'SpaceGroteskBold, sans-serif', color: "#FF9A00", backgroundColor: "black", width: "100%", textAlign: 'center',verticalAlign:"middle", fontSize:"14vw", height:"100%" }}>
      <h1>JUAN ESTARLI</h1>
    </div>
    <div style={{ paddingTop: '0px',paddingLeft: "10px", fontFamily: 'SpaceGroteskBold, sans-serif', color: "white", backgroundColor: "black", width: "100%", textAlign: 'left', fontSize:"10vw", height:"40%" }}>
      <h1 style={{width:"50%", lineHeight: "0.8"}}>Featured work</h1>
    </div>
    <CardProject
        imageSrc="https://www.revistaelabasto.com.ar/wp-content/uploads/2022/12/argentina-campeon.jpg"
        imageAlt="Descripción de la imagen"
        title="Argentina"
        description="Campeones del mundo 2022"
      />
      <CardProject
        imageSrc="https://pbs.twimg.com/media/FkSE245XwAIr6_7.jpg:large"
        imageAlt="Descripción de la imagen"
        title="Lionel Messi"
        description="Rey del mundo 2022"
      />
      
    </div>
  );
}

export default App;
