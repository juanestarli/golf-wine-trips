import React from "react";
import './App.css';
import { Inicio } from "./pages/Inicio";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Paquetes from "./pages/Paquetes";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";


function App() {

  return (
    <BrowserRouter basename="/">
      <div className="App" style={{backgroundColor: "white", height: "100vh", overflowX: 'hidden'}}>
      <Header />
      <main>
      <Routes>
        
        <Route path="/" element={<Inicio />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/nosotros" element={<About />} />
        </Routes>
      </main>
      <Footer />
      </div>
      </BrowserRouter>
    
  );
}

export default App;
