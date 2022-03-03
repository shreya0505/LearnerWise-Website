import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import  Pricing  from './components/Pricing';
import Catalogue from './components/Catalogue';
import CoursePayment from './components/CoursePayment';
import Dashboard from './components/Dashboard';
import DoubtPayment from './components/DoubtPayment';
import HomeworkPayment from './components/HomeworkPayment';
import TutionPayment from './components/TutionPayment';
import CoursesList from './components/CoursesList';
import StudyMaterial from './components/StudyMaterial';
import Chat from './components/Chat';
import Video from './components/Video';
function App() {
  return (
    <div>
      <Navbar />
       <Video/> 
      <Footer />
    </div>
  );
}

export default App;
