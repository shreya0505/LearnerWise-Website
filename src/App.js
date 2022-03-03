import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import  Pricing  from './components/Pricing';
import Catalogue from './components/Catalogue';
import Payment from './components/CoursePayment';
import Dashboard from './components/Dashboard';
import Doubt from './components/DoubtPayment';
import Homework from './components/HomeworkPayment';
import Tution from './components/TutionPayment';
function App() {
  return (
    <div>
      <Navbar />
       <Tution/> 
      <Footer />
    </div>
  );
}

export default App;
