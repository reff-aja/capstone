import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/landing";
import Courses from "./pages/courses";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import './App.css';
import './Login.css'

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;