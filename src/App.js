import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import CustomSlider from "./components/custom.slider";
import images from "./data/images";

function App() {

  return (
    <div className="App">
      <NavBar />
      
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
    </div>
  );
}

export default App;
