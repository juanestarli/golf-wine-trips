import React from "react";
import './App.css';
import { Inicio } from "./pages/Inicio";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Work from "./pages/Work";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";


function App() {

  return (
    <BrowserRouter>
      <div className="App" style={{backgroundColor: "white", height: "100vh", overflowX: 'hidden'}}>
      <Header />
      <main>
      <Routes>
        
        <Route path="/" element={<Inicio />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        </Routes>
      </main>
      <Footer />
      </div>
      </BrowserRouter>
    
  );
}

export default App;
