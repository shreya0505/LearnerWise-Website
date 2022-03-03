import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import  Pricing  from './components/Pricing';
import Catalogue from './components/Catalogue';
import Payment from './components/Payment';
function App() {
  return (
    <div>
      <Navbar />
       <Payment/> 
      <Footer />
    </div>
  );
}

export default App;
