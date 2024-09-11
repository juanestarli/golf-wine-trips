import React from "react";
import './App.css';
import { Inicio } from "./pages/Inicio";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Work from "./pages/Work";


function App() {

  return (
    <BrowserRouter>
      <div className="App" style={{backgroundColor: "black", height: "100vh", overflowX: 'hidden'}}>
      <Header />
      <main>
      <Routes>
        
        <Route path="/" element={<Inicio />} />
        <Route path="/Work" element={<Work />} />
        
        </Routes>
      </main>
      <Footer />
      </div>
      </BrowserRouter>
    
  );
}

export default App;
