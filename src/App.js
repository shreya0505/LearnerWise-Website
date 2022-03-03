import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import  Pricing  from './components/Pricing';
function App() {
  return (
    <div>
      <Navbar />
       <Pricing/> 
         
      
      <Footer />
    </div>
  );
}

export default App;
