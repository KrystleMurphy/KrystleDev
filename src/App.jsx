import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Common/Navbar'; 
import Home from './Pages/Home/Home'; 
import About from './Pages/About/About'; 
import Portfolio from './Pages/Portfolio/Portfolio'; 
import Contact from './Pages/Contact/Contact'; 
import Footer from './Pages/Common/Footer';
import Services from './Pages/Services/Services';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <div className="background-image"></div>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
