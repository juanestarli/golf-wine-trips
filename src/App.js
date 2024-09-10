import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import images from "./data/images";

const slides = [
  
    "https://www.revistaelabasto.com.ar/wp-content/uploads/2022/12/argentina-campeon.jpg", 
    "https://pbs.twimg.com/media/FkSE245XwAIr6_7.jpg:large",     
    "https://www.infobae.com/new-resizer/Oyc0MUqSQrPsH83eJnSh_iXStv4=/1200x900/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YUTXU4BC3TNJFYAXXWGOYK7LIY.jpg",    
    "https://media.cnn.com/api/v1/images/stellar/prod/cnne-1316125-argentina-campeon-de-qatar-2022.jpg?c=original",
    
];

function App() {

  return (
    <div className="App">
      <NavBar />
      <div style={{ padding: '20px', fontFamily: 'SpaceGroteskBold, sans-serif', color: "white", backgroundColor: "black" }}>
      <h1>JUAN ESTARLI</h1>
      <p>
        Hello, my name is Juan Estarli. I am a passionate web developer with a background in
        Information Engineering. Currently, I work as a web developer at Kelsus and also as the
        webmaster of Teatro Colón.
      </p>
      <p>
        I love learning new technologies, and I am constantly looking for opportunities to grow 
        professionally. Some of my key skills include fast learning, attention to detail, and 
        commitment to excellence.
      </p>
      <p>
        In addition to web development, I have a keen interest in cryptocurrencies and enjoy 
        exploring futuristic scenarios related to blockchain technology.
      </p>
      <p>
        Feel free to connect with me if you want to collaborate or learn more about my journey!
      </p>
    </div>
      <Carousel>
        {slides.map((s)=> (
          <img src={s} />
        ))}
      </Carousel>
      
    </div>
  );
}

export default App;
