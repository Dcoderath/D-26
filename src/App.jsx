// import React, { useState, useEffect, useRef } from "react";
// import { FaRegHandPointer } from "react-icons/fa";
// import './App.css'; 
// import Hero from './components/Hero/Hero'; 
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// import NewGrid from "./components/NewGrid/NewGrid";
// import Plusup from "./components/Plusup/Plusup";
// import AdBlank from "./components/AdBlank/AdBlank";
// import PricingCard from "./components/PricingCard/PricingCard";

// const checkDevice = () => {
//   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
//   const isMobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i.test(userAgent);
//   const isSmallScreen = window.innerWidth < 1024;
//   return isMobileOrTablet || isSmallScreen;
// };

// const App = () => {
//   const [blockAccess, setBlockAccess] = useState(checkDevice());
//   const [hoveringButton, setHoveringButton] = useState(false);
//   const [cursorColor, setCursorColor] = useState("#ffffff"); // default white
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => setBlockAccess(checkDevice());
//     window.addEventListener("resize", handleResize);

//     const moveCursor = (e) => {
//       if (cursorRef.current) {
//         cursorRef.current.style.left = `${e.clientX}px`;
//         cursorRef.current.style.top = `${e.clientY}px`;
//         cursorRef.current.style.opacity = 1;

//         // Detect background brightness under the cursor
//         const element = document.elementFromPoint(e.clientX, e.clientY);
//         if (element) {
//           const bgColor = window.getComputedStyle(element).backgroundColor;
//           const rgb = bgColor.match(/\d+/g);
//           if (rgb) {
//             const brightness =
//               0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
//             if (brightness > 180) {
//               setCursorColor("#000000"); // switch to black on bright backgrounds
//             } else {
//               setCursorColor("#ffffff"); // white on dark backgrounds
//             }
//           }
//         }
//       }
//     };

//     const hideCursor = () => {
//       if (cursorRef.current) cursorRef.current.style.opacity = 0;
//     };

//     const showCursor = () => {
//       if (cursorRef.current) cursorRef.current.style.opacity = 1;
//     };

//     const handleMouseOver = (e) => {
//       if (e.target.tagName === "BUTTON") setHoveringButton(true);
//     };

//     const handleMouseOut = (e) => {
//       if (e.target.tagName === "BUTTON") setHoveringButton(false);
//     };

//     document.addEventListener("mousemove", moveCursor);
//     document.addEventListener("mouseleave", hideCursor);
//     document.addEventListener("mouseenter", showCursor);
//     document.addEventListener("mouseover", handleMouseOver);
//     document.addEventListener("mouseout", handleMouseOut);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       document.removeEventListener("mousemove", moveCursor);
//       document.removeEventListener("mouseleave", hideCursor);
//       document.removeEventListener("mouseenter", showCursor);
//       document.removeEventListener("mouseover", handleMouseOver);
//       document.removeEventListener("mouseout", handleMouseOut);
//     };
//   }, []);

//   return (
//     <div className="App">
//       {/* Always render custom cursor */}
//       <div
//         ref={cursorRef}
//         className="custom-cursor"
//         style={{ opacity: blockAccess ? 0.3 : 1 }}
//       >
//         <FaRegHandPointer
//           size={26}
//           color={cursorColor}
//           style={{
//             transform: hoveringButton ? "scale(1.3)" : "scale(1)",
//             transition: "all 0.15s ease",
//             filter:
//               cursorColor === "#000000"
//                 ? "drop-shadow(0 0 3px rgba(255,255,255,0.6))"
//                 : "drop-shadow(0 0 3px rgba(0,0,0,0.7))",
//           }}
//         />
//       </div>

//       {/* Conditional content */}
//       {blockAccess ? (
//         <div className="mobile-block-message">
//           <h2>🚫 Access Restricted</h2>
//           <p>
//             This website is only accessible on desktop or laptop devices.<br />
//             Please switch to a supported device.
//           </p>
//         </div>
//       ) : (
//         <>
//           <Navbar />
//           <Hero />
//           <NewGrid />
//           <PricingCard />
//           <AdBlank />
//           {/* <Plusup /> */}
//           {/* <Footer /> */}
//         </>
//       )}
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect, useRef } from "react";
// import { FaRegHandPointer } from "react-icons/fa";
// import "./App.css";
// import Hero from "./components/Hero/Hero";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import NewGrid from "./components/NewGrid/NewGrid";
// import Plusup from "./components/Plusup/Plusup";
// import AdBlank from "./components/AdBlank/AdBlank";
// import PricingCard from "./components/PricingCard/PricingCard";
// import ArtTechNav from "./components/ArtTechNav/ArtTechNav";

// const App = () => {
//   const [hoveringButton, setHoveringButton] = useState(false);
//   const [cursorColor, setCursorColor] = useState("#ffffff");
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       if (cursorRef.current) {
//         cursorRef.current.style.left = `${e.clientX}px`;
//         cursorRef.current.style.top = `${e.clientY}px`;
//         cursorRef.current.style.opacity = 1;

//         // Adjust cursor color based on background brightness
//         const element = document.elementFromPoint(e.clientX, e.clientY);
//         if (element) {
//           const bgColor = window.getComputedStyle(element).backgroundColor;
//           const rgb = bgColor.match(/\d+/g);
//           if (rgb) {
//             const brightness =
//               0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
//             setCursorColor(brightness > 180 ? "#000000" : "#ffffff");
//           }
//         }
//       }
//     };

//     const hideCursor = () => {
//       if (cursorRef.current) cursorRef.current.style.opacity = 0;
//     };

//     const showCursor = () => {
//       if (cursorRef.current) cursorRef.current.style.opacity = 1;
//     };

//     const handleMouseOver = (e) => {
//       if (e.target.tagName === "BUTTON") setHoveringButton(true);
//     };

//     const handleMouseOut = (e) => {
//       if (e.target.tagName === "BUTTON") setHoveringButton(false);
//     };

//     document.addEventListener("mousemove", moveCursor);
//     document.addEventListener("mouseleave", hideCursor);
//     document.addEventListener("mouseenter", showCursor);
//     document.addEventListener("mouseover", handleMouseOver);
//     document.addEventListener("mouseout", handleMouseOut);

//     return () => {
//       document.removeEventListener("mousemove", moveCursor);
//       document.removeEventListener("mouseleave", hideCursor);
//       document.removeEventListener("mouseenter", showCursor);
//       document.removeEventListener("mouseover", handleMouseOver);
//       document.removeEventListener("mouseout", handleMouseOut);
//     };
//   }, []);

//   return (
//     <div className="App">
//       {/* Always render custom cursor */}
//       <div ref={cursorRef} className="custom-cursor">
//         <FaRegHandPointer
//           size={26}
//           color={cursorColor}
//           style={{
//             transform: hoveringButton ? "scale(1.3)" : "scale(1)",
//             transition: "all 0.15s ease",
//             filter:
//               cursorColor === "#000000"
//                 ? "drop-shadow(0 0 3px rgba(255,255,255,0.6))"
//                 : "drop-shadow(0 0 3px rgba(0,0,0,0.7))",
//           }}
//         />
//       </div>

//       {/* ✅ Always show the full site (no mobile block) */}
//       {/* <Navbar /> */}
//       <ArtTechNav />
//       <Hero />
//       <NewGrid />
//       <PricingCard />
//       <AdBlank />
//       {/* Optional extras */}
//       {/* <Plusup /> */}
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default App;


import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import NewGrid from "./components/NewGrid/NewGrid";
import PricingCard from "./components/PricingCard/PricingCard";
import AdBlank from "./components/AdBlank/AdBlank";
import ArtTechNav from "./components/ArtTechNav/ArtTechNav";
import JunniLandingPage from "./components/JunniLandingPage/JunniLandingPage";

const App = () => {
  return (
    <div className="App">
      {/* ArtTechNav is a standalone fullscreen navigation overlay */}
        <ArtTechNav />
        <JunniLandingPage/>
        <Hero id="hero" />
        <NewGrid id="newgrid" />
        <PricingCard id="pricing" />
        <AdBlank id="adblank" />
      </div>
  
  );
};

export default App;