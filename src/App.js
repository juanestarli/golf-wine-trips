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
      <div className="pt-[70px] pl-[20px] pr-[20px]font-['SpaceGroteskBold'] text-white bg-black text-left text-[20px] md:w-1/2 left-[10%]">
      <p>
        Hi, I´m Juan Estarli. I am a passionate web developer with a background in
        Information Engineering. Currently, I work as a web developer at Teatro Colón.
      </p>
    </div>
    <div className="pt-[100px] font-['SpaceGroteskBold'] text-[#FF9A00] bg-black w-full text-center align-middle text-[14vw] h-full">
      <h1>JUAN ESTARLI</h1>
    </div>
    <div className="pt-0 pl-2 font-space-grotesk font-bold text-white bg-black w-full text-left text-[10vw] h-[40%]">
      <h1 className="w-1/2 leading-[0.8]">Featured work</h1>
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
