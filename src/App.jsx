// import React, { useState, useEffect } from "react";
// import './App.css'; 
// import Hero from './components/Hero/Hero'; 
// import Navbar from './components/Navbar/Navbar';
// import GridD from './components/GridD/GridD';
// import AdBlank from './components/AdBlank/AdBlank';
// import D from './components/d/D';  // Import D component
// import Footer from './components/Footer/Footer';
// import Plusup from './components/Plusup/Plusup';

// const App = () => {
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 480);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth <= 480);
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup on unmount
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//       <GridD />
//       <AdBlank />
//       {isSmallScreen && <D />} {/* Render only on small screens */}
//       <Plusup />
//       <Footer />
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect, useRef } from "react";
import './App.css'; 
import Hero from './components/Hero/Hero'; 
import Navbar from './components/Navbar/Navbar';
import AdBlank from './components/AdBlank/AdBlank';
import Footer from './components/Footer/Footer';
import NewGrid from "./components/NewGrid/NewGrid";
// import Plusup from './components/Plusup/Plusup';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(userAgent));
    };
    checkIsMobile();

    // Custom white circle cursor
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
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", moveCursor);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="mobile-block-message">
        Sorry, this website is only accessible on desktop devices.
      </div>
    );
  }

  return (
    <div className="App">
      <div ref={cursorRef} className="white-circle-cursor" style={{opacity:0}}></div>
      <Navbar />
      <Hero />
      <NewGrid />
      <AdBlank />
      {/* <Plusup /> */}
      <Footer />
    </div>
  );
};

export default App;
