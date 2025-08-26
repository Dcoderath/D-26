import React, { useState, useEffect, useRef } from "react";
import './App.css'; 
import Hero from './components/Hero/Hero'; 
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NewGrid from "./components/NewGrid/NewGrid";
import Plusup from "./components/Plusup/Plusup";

const App = () => {
  const [blockAccess, setBlockAccess] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i.test(userAgent);
      const isSmallScreen = window.innerWidth < 1024;

      setBlockAccess(isMobileOrTablet || isSmallScreen);
    };

    checkDevice();

    window.addEventListener('resize', checkDevice);

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
        cursorRef.current.style.opacity = 1;
      }
    };

    const hideCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = 0;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", moveCursor);

    return () => {
      window.removeEventListener('resize', checkDevice);
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", moveCursor);
    };
  }, []);

  if (blockAccess) {
    return (
      <div className="mobile-block-message">
        <h2>🚫 Access Restricted</h2>
        <p>This website is only accessible on desktop or laptop devices.<br />Please switch to a supported device.</p>
      </div>
    );
  }

  return (
    <div className="App">
      <div ref={cursorRef} className="white-circle-cursor" style={{ opacity: 0 }}></div>
      <Navbar />
      <Hero />
      <NewGrid />
      <Plusup />
      <Footer />
    </div>
  );
};

export default App;
