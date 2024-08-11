import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Common/Navbar';
import Home from '../src/components/Home/Home';
import About from '../src/components/About/About';
import Portfolio from '../src/components/Portfolio/Portfolio';
import Contact from '../src/components/Contact/Contact';
import Footer from '../src/components/Common/Footer';
import Services from '../src/components/Services/Services';
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <div
        className="flex flex-col min-h-screen relative background-effect"
        style={{ '--x': `${position.x}px`, '--y': `${position.y}px` }}
      >
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/about" element={<About />} /> */}
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
