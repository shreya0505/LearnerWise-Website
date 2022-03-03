import React from 'react';
import './App.css';
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
import Audio from './components/Audio';
import Notes from './components/Notes'; 
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import JoinUs from './components/JoinUs';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="notes" element={<Notes />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="pricing" element={<Pricing />}/>
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="coursepayment" element={<CoursePayment />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="doubtpayment" element={<DoubtPayment />}/>
          <Route path="homeworkpayment" element={<HomeworkPayment />} />
          <Route path="tuitionpayment" element={<TutionPayment />} />
          <Route path="courseslist" element={<CoursesList />} />
          <Route path="chatbot" element={<Chat />} />
          <Route path="studymaterial" element={<StudyMaterial />} />
          <Route path="video" element={<Video />} />
          <Route path="audio" element={<Audio />} />
          <Route path="joinus" element={<JoinUs />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
