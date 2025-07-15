import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import SmartNeighborhood from "./components/Projects/SmartNeighborhood";
import LakeChangeDetection from "./components/Projects/LakeChangeDetection";
import Attribution from "./components/Attribution";
import Resume from "./components/Resume/Resume";
import ScrollToTop from "./components/ScrollToTop";
import HospitalSuitability from "./components/Projects/HospitalSuitability";
import ThemeToggle from "./components/ThemeToggle";

import { ThemeProvider } from "./context/ThemeContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ReactGA from "react-ga";

// Initialize Google Analytics
ReactGA.initialize("G-RMYWDEJ1ZG");

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => updateLoad(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/attribution" element={<Attribution />} />
            <Route path="/resume" element={<Resume />} />
<Route path="/smart-neighborhood" element={<SmartNeighborhood />} />
<Route path="/lake-change-detection" element={<LakeChangeDetection />} />
<Route path="/hospital-suitability" element={<HospitalSuitability />} />

          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
