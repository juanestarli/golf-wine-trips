import React from "react";
import './App.css';
import { Inicio } from "./pages/Inicio";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <div className="App" style={{backgroundColor: "black", height: "100vh", overflowX: 'hidden'}}>
      <Header />
      <Inicio />
      
    </div>
  );
}

export default App;
