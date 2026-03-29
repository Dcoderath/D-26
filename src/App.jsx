// // import React, { useState, useEffect, useRef } from "react";
// // import { FaRegHandPointer } from "react-icons/fa";
// // import './App.css'; 
// // import Hero from './components/Hero/Hero'; 
// // import Navbar from './components/Navbar/Navbar';
// // import Footer from './components/Footer/Footer';
// // import NewGrid from "./components/NewGrid/NewGrid";
// // import Plusup from "./components/Plusup/Plusup";
// // import AdBlank from "./components/AdBlank/AdBlank";
// // import PricingCard from "./components/PricingCard/PricingCard";

// // const checkDevice = () => {
// //   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
// //   const isMobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i.test(userAgent);
// //   const isSmallScreen = window.innerWidth < 1024;
// //   return isMobileOrTablet || isSmallScreen;
// // };

// // const App = () => {
// //   const [blockAccess, setBlockAccess] = useState(checkDevice());
// //   const [hoveringButton, setHoveringButton] = useState(false);
// //   const [cursorColor, setCursorColor] = useState("#ffffff"); // default white
// //   const cursorRef = useRef(null);

// //   useEffect(() => {
// //     const handleResize = () => setBlockAccess(checkDevice());
// //     window.addEventListener("resize", handleResize);

// //     const moveCursor = (e) => {
// //       if (cursorRef.current) {
// //         cursorRef.current.style.left = `${e.clientX}px`;
// //         cursorRef.current.style.top = `${e.clientY}px`;
// //         cursorRef.current.style.opacity = 1;

// //         // Detect background brightness under the cursor
// //         const element = document.elementFromPoint(e.clientX, e.clientY);
// //         if (element) {
// //           const bgColor = window.getComputedStyle(element).backgroundColor;
// //           const rgb = bgColor.match(/\d+/g);
// //           if (rgb) {
// //             const brightness =
// //               0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
// //             if (brightness > 180) {
// //               setCursorColor("#000000"); // switch to black on bright backgrounds
// //             } else {
// //               setCursorColor("#ffffff"); // white on dark backgrounds
// //             }
// //           }
// //         }
// //       }
// //     };

// //     const hideCursor = () => {
// //       if (cursorRef.current) cursorRef.current.style.opacity = 0;
// //     };

// //     const showCursor = () => {
// //       if (cursorRef.current) cursorRef.current.style.opacity = 1;
// //     };

// //     const handleMouseOver = (e) => {
// //       if (e.target.tagName === "BUTTON") setHoveringButton(true);
// //     };

// //     const handleMouseOut = (e) => {
// //       if (e.target.tagName === "BUTTON") setHoveringButton(false);
// //     };

// //     document.addEventListener("mousemove", moveCursor);
// //     document.addEventListener("mouseleave", hideCursor);
// //     document.addEventListener("mouseenter", showCursor);
// //     document.addEventListener("mouseover", handleMouseOver);
// //     document.addEventListener("mouseout", handleMouseOut);

// //     return () => {
// //       window.removeEventListener("resize", handleResize);
// //       document.removeEventListener("mousemove", moveCursor);
// //       document.removeEventListener("mouseleave", hideCursor);
// //       document.removeEventListener("mouseenter", showCursor);
// //       document.removeEventListener("mouseover", handleMouseOver);
// //       document.removeEventListener("mouseout", handleMouseOut);
// //     };
// //   }, []);

// //   return (
// //     <div className="App">
// //       {/* Always render custom cursor */}
// //       <div
// //         ref={cursorRef}
// //         className="custom-cursor"
// //         style={{ opacity: blockAccess ? 0.3 : 1 }}
// //       >
// //         <FaRegHandPointer
// //           size={26}
// //           color={cursorColor}
// //           style={{
// //             transform: hoveringButton ? "scale(1.3)" : "scale(1)",
// //             transition: "all 0.15s ease",
// //             filter:
// //               cursorColor === "#000000"
// //                 ? "drop-shadow(0 0 3px rgba(255,255,255,0.6))"
// //                 : "drop-shadow(0 0 3px rgba(0,0,0,0.7))",
// //           }}
// //         />
// //       </div>

// //       {/* Conditional content */}
// //       {blockAccess ? (
// //         <div className="mobile-block-message">
// //           <h2>🚫 Access Restricted</h2>
// //           <p>
// //             This website is only accessible on desktop or laptop devices.<br />
// //             Please switch to a supported device.
// //           </p>
// //         </div>
// //       ) : (
// //         <>
// //           <Navbar />
// //           <Hero />
// //           <NewGrid />
// //           <PricingCard />
// //           <AdBlank />
// //           {/* <Plusup /> */}
// //           {/* <Footer /> */}
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default App;


// // import React, { useState, useEffect, useRef } from "react";
// // import { FaRegHandPointer } from "react-icons/fa";
// // import "./App.css";
// // import Hero from "./components/Hero/Hero";
// // import Navbar from "./components/Navbar/Navbar";
// // import Footer from "./components/Footer/Footer";
// // import NewGrid from "./components/NewGrid/NewGrid";
// // import Plusup from "./components/Plusup/Plusup";
// // import AdBlank from "./components/AdBlank/AdBlank";
// // import PricingCard from "./components/PricingCard/PricingCard";
// // import Navbar from "./components/Navbar/Navbar";

// // const App = () => {
// //   const [hoveringButton, setHoveringButton] = useState(false);
// //   const [cursorColor, setCursorColor] = useState("#ffffff");
// //   const cursorRef = useRef(null);

// //   useEffect(() => {
// //     const moveCursor = (e) => {
// //       if (cursorRef.current) {
// //         cursorRef.current.style.left = `${e.clientX}px`;
// //         cursorRef.current.style.top = `${e.clientY}px`;
// //         cursorRef.current.style.opacity = 1;

// //         // Adjust cursor color based on background brightness
// //         const element = document.elementFromPoint(e.clientX, e.clientY);
// //         if (element) {
// //           const bgColor = window.getComputedStyle(element).backgroundColor;
// //           const rgb = bgColor.match(/\d+/g);
// //           if (rgb) {
// //             const brightness =
// //               0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
// //             setCursorColor(brightness > 180 ? "#000000" : "#ffffff");
// //           }
// //         }
// //       }
// //     };

// //     const hideCursor = () => {
// //       if (cursorRef.current) cursorRef.current.style.opacity = 0;
// //     };

// //     const showCursor = () => {
// //       if (cursorRef.current) cursorRef.current.style.opacity = 1;
// //     };

// //     const handleMouseOver = (e) => {
// //       if (e.target.tagName === "BUTTON") setHoveringButton(true);
// //     };

// //     const handleMouseOut = (e) => {
// //       if (e.target.tagName === "BUTTON") setHoveringButton(false);
// //     };

// //     document.addEventListener("mousemove", moveCursor);
// //     document.addEventListener("mouseleave", hideCursor);
// //     document.addEventListener("mouseenter", showCursor);
// //     document.addEventListener("mouseover", handleMouseOver);
// //     document.addEventListener("mouseout", handleMouseOut);

// //     return () => {
// //       document.removeEventListener("mousemove", moveCursor);
// //       document.removeEventListener("mouseleave", hideCursor);
// //       document.removeEventListener("mouseenter", showCursor);
// //       document.removeEventListener("mouseover", handleMouseOver);
// //       document.removeEventListener("mouseout", handleMouseOut);
// //     };
// //   }, []);

// //   return (
// //     <div className="App">
// //       {/* Always render custom cursor */}
// //       <div ref={cursorRef} className="custom-cursor">
// //         <FaRegHandPointer
// //           size={26}
// //           color={cursorColor}
// //           style={{
// //             transform: hoveringButton ? "scale(1.3)" : "scale(1)",
// //             transition: "all 0.15s ease",
// //             filter:
// //               cursorColor === "#000000"
// //                 ? "drop-shadow(0 0 3px rgba(255,255,255,0.6))"
// //                 : "drop-shadow(0 0 3px rgba(0,0,0,0.7))",
// //           }}
// //         />
// //       </div>

// //       {/* ✅ Always show the full site (no mobile block) */}
// //       {/* <Navbar /> */}
// //       <Navbar />
// //       <Hero />
// //       <NewGrid />
// //       <PricingCard />
// //       <AdBlank />
// //       {/* Optional extras */}
// //       {/* <Plusup /> */}
// //       {/* <Footer /> */}
// //     </div>
// //   );
// // };

// // export default App;


// // import React from "react";
// // import "./App.css";
// // import Hero from "./components/Hero/Hero";
// // import NewGrid from "./components/NewGrid/NewGrid";
// // import PricingCard from "./components/PricingCard/PricingCard";
// // import AdBlank from "./components/AdBlank/AdBlank";
// // import Navbar from "./components/Navbar/Navbar";
// // import Home from "./components/Home/Home";

// // const App = () => {
// //   return (
// //     <div className="App">
// //       {/* Navbar is a standalone fullscreen navigation overlay */}
// //         <Navbar />
// //         <Home/>
// //         <Hero id="hero" />
// //         <NewGrid id="newgrid" />
// //         <PricingCard id="pricing" />
// //         <AdBlank id="adblank" />
// //       </div>
  
// //   );
// // };

// // export default App;


// // import React from "react";
// // import "./App.css";
// // import Hero from "./components/Hero/Hero";
// // import NewGrid from "./components/NewGrid/NewGrid";
// // import PricingCard from "./components/PricingCard/PricingCard";
// // import AdBlank from "./components/AdBlank/AdBlank";
// // import Navbar from "./components/Navbar/Navbar";
// // import Home from "./components/Home/Home";
// // import Projects from "./Projects/Projects";


// // const App = () => {
// //   return (
// //     <div className="App">
// //       {/* Navbar is a standalone fullscreen navigation overlay */}
// //         <Navbar />
// //         <Home/>
// //         <Projects />
// //         <Hero id="hero" />
// //         <NewGrid id="newgrid" />
// //         <PricingCard id="pricing" />
// //         <AdBlank id="adblank" />
// //       </div>
  
// //   );
// // };

// // export default App;





















// // import React, { useEffect, useRef, useCallback } from "react";
// // import "./App.css";
// // import Hero from "./components/Hero/Hero";
// // // import NewGrid from "./components/NewGrid/NewGrid";
// // // import PricingCard from "./components/PricingCard/PricingCard";
// // // import AdBlank from "./components/AdBlank/AdBlank";
// // import Navbar from "./components/Navbar/Navbar";
// // import Home from "./components/Home/Home";
// // import Projects from "./components/Projects/Projects";
// // import Services from "./components/Services/Services";
// // import Footer from "./components/Footer/Footer";
// // import WhySection from "./components/WhySection/WhySection";
// // import MarqueeScroll from "./components/MarqueeScroll/MarqueeScroll";



// // const BLOCK_SIZE = 30;

// // const App = () => {
// //   const blocksRef = useRef(null);
// //   const rafIdRef = useRef(null);
// //   const mousePosRef = useRef({ x: 0, y: 0 });

// //   const createBlocks = useCallback(() => {
// //     if (!blocksRef.current) return;

// //     const numCols = Math.ceil(window.innerWidth / BLOCK_SIZE);
// //     const numRows = Math.ceil(window.innerHeight / BLOCK_SIZE);

// //     blocksRef.current.innerHTML = "";
// //     blocksRef.current.style.gridTemplateColumns = `repeat(${numCols}, ${BLOCK_SIZE}px)`;

// //     for (let i = 0; i < numCols * numRows; i++) {
// //       const block = document.createElement("div");
// //       block.className = "app-block";
// //       blocksRef.current.appendChild(block);
// //     }
// //   }, []);

// //   const highlightBlock = useCallback((event) => {
// //     if (!blocksRef.current || rafIdRef.current) return;

// //     mousePosRef.current = { x: event.clientX, y: event.clientY };

// //     rafIdRef.current = requestAnimationFrame(() => {
// //       const rect = blocksRef.current.getBoundingClientRect();
// //       const x = mousePosRef.current.x - rect.left;
// //       const y = mousePosRef.current.y - rect.top;

// //       const col = Math.floor(x / BLOCK_SIZE);
// //       const row = Math.floor(y / BLOCK_SIZE);

// //       const numCols = Math.ceil(window.innerWidth / BLOCK_SIZE);
// //       const index = row * numCols + col;

// //       const block = blocksRef.current.children[index];

// //       if (block && !block.classList.contains("app-highlight")) {
// //         block.classList.add("app-highlight");
// //         setTimeout(() => block.classList.remove("app-highlight"), 300);
// //       }

// //       rafIdRef.current = null;
// //     });
// //   }, []);

// //   useEffect(() => {
// //     createBlocks();
// //     window.addEventListener("resize", createBlocks);
// //     window.addEventListener("mousemove", highlightBlock);

// //     return () => {
// //       window.removeEventListener("resize", createBlocks);
// //       window.removeEventListener("mousemove", highlightBlock);
// //     };
// //   }, [createBlocks, highlightBlock]);

// //   return (
// //     <div className="App">

// //       {/* Global Mouse Grid Overlay */}
// //       <div className="app-blocks-container">
// //         <div ref={blocksRef} className="app-blocks-grid"></div>
// //       </div>

// //       <Navbar />
// //       <Home />
    
// //       {/* <Hero /> */}
// //       < Services/>
// //       <Projects />
// //       {/* <NewGrid />
// //       <PricingCard /> */}
// //       {/* <AdBlank /> */}
// //       <WhySection/>
// //       <MarqueeScroll/>
// //       <Footer/>
// //     </div>
// //   );
// // };

// // export default App;



// // import React, { useEffect, useRef, useCallback } from "react";
// // import "./App.css";

// // import Navbar from "./components/Navbar/Navbar";
// // import Home from "./components/Home/Home";
// // import Projects from "./components/Projects/Projects";
// // import Services from "./components/Services/Services";
// // import Footer from "./components/Footer/Footer";
// // import WhySection from "./components/WhySection/WhySection";
// // import MarqueeScroll from "./components/MarqueeScroll/MarqueeScroll";

// // import { Helmet } from "react-helmet";

// // const BLOCK_SIZE = 30;

// // const App = () => {
// //   const blocksRef = useRef(null);
// //   const rafIdRef = useRef(null);
// //   const mousePosRef = useRef({ x: 0, y: 0 });

// //   // Create grid blocks
// //   const createBlocks = useCallback(() => {
// //     if (!blocksRef.current) return;

// //     const numCols = Math.ceil(window.innerWidth / BLOCK_SIZE);
// //     const numRows = Math.ceil(window.innerHeight / BLOCK_SIZE);

// //     blocksRef.current.innerHTML = "";
// //     blocksRef.current.style.gridTemplateColumns = `repeat(${numCols}, ${BLOCK_SIZE}px)`;

// //     for (let i = 0; i < numCols * numRows; i++) {
// //       const block = document.createElement("div");
// //       block.className = "app-block";
// //       blocksRef.current.appendChild(block);
// //     }
// //   }, []);

// //   // Highlight block under mouse
// //   const highlightBlock = useCallback((event) => {
// //     if (!blocksRef.current || rafIdRef.current) return;

// //     mousePosRef.current = { x: event.clientX, y: event.clientY };

// //     rafIdRef.current = requestAnimationFrame(() => {
// //       const rect = blocksRef.current.getBoundingClientRect();
// //       const x = mousePosRef.current.x - rect.left;
// //       const y = mousePosRef.current.y - rect.top;

// //       const col = Math.floor(x / BLOCK_SIZE);
// //       const row = Math.floor(y / BLOCK_SIZE);

// //       const numCols = Math.ceil(window.innerWidth / BLOCK_SIZE);
// //       const index = row * numCols + col;

// //       const block = blocksRef.current.children[index];

// //       if (block && !block.classList.contains("app-highlight")) {
// //         block.classList.add("app-highlight");
// //         setTimeout(() => block.classList.remove("app-highlight"), 300);
// //       }

// //       rafIdRef.current = null;
// //     });
// //   }, []);

// //   useEffect(() => {
// //     createBlocks();
// //     window.addEventListener("resize", createBlocks);
// //     window.addEventListener("mousemove", highlightBlock);

// //     return () => {
// //       window.removeEventListener("resize", createBlocks);
// //       window.removeEventListener("mousemove", highlightBlock);
// //     };
// //   }, [createBlocks, highlightBlock]);

// //   return (
// //     <div className="App">
// //       {/* Default App Tab Title */}
// //       <Helmet>
// //         <title>Dcoderath | Divakar Trivedi</title>
// //         <meta name="description" content="DCoderAth Junni Landing Page" />
// //       </Helmet>

// //       {/* Global Mouse Grid Overlay */}
// //       <div className="app-blocks-container">
// //         <div ref={blocksRef} className="app-blocks-grid"></div>
// //       </div>

// //       {/* Navigation */}
// //       <Navbar />

// //       {/* Landing Section */}
// //       <section id="landing">
// //         <Helmet>
// //           <meta name="description" content="Welcome to Junni Landing Page" />
// //         </Helmet>
// //         <Home />
// //       </section>

// //       {/* Services Section */}
// //       <section id="services">
// //         <Helmet>
// //           <meta name="description" content="Learn about our Services" />
// //         </Helmet>
// //         <Services />
// //       </section>

// //       {/* Projectss Section */}
// //       <section id="Projectss">
// //         <Helmet>
// //           <meta name="description" content="Our latest Projectss" />
// //         </Helmet>
// //         <Projects />
// //       </section>

// //       {/* Why Choose Us Section */}
// //       <section id="why">
// //         <Helmet>
// //           <meta name="description" content="Reasons to choose us" />
// //         </Helmet>
// //         <WhySection />
// //       </section>

// //       {/* Marquee Section */}
// //       <section id="marquee">
// //         <Helmet>
// //           <meta name="description" content="Scrolling marquee content" />
// //         </Helmet>
// //         <MarqueeScroll />
// //       </section>

// //       {/* Footer Section */}
// //       <section id="footer">
// //         <Footer />
// //       </section>
// //     </div>
// //   );
// // };

// // export default App;











// import React, { useEffect, useRef, useCallback, useState } from "react";
// import "./App.css";

// import Navbar from "./components/Navbar/Navbar";
// import Home from "./components/Home/Home";
// import Projects from "./components/Projects/Projects";
// import Services from "./components/Services/Services";
// import Footer from "./components/Footer/Footer";
// import WhySection from "./components/WhySection/WhySection";
// import MarqueeScroll from "./components/MarqueeScroll/MarqueeScroll";

// import { Helmet } from "react-helmet";

// const BLOCK_SIZE = 30;

// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const [progress, setProgress] = useState(0);

//   const blocksRef = useRef(null);
//   const rafIdRef = useRef(null);
//   const mousePosRef = useRef({ x: 0, y: 0 });

//   /* ---------------- GRID ---------------- */
//   const createBlocks = useCallback(() => {
//     if (!blocksRef.current) return;

//     const cols = Math.ceil(window.innerWidth / BLOCK_SIZE);
//     const rows = Math.ceil(window.innerHeight / BLOCK_SIZE);

//     blocksRef.current.innerHTML = "";
//     blocksRef.current.style.gridTemplateColumns = `repeat(${cols}, ${BLOCK_SIZE}px)`;

//     for (let i = 0; i < cols * rows; i++) {
//       const div = document.createElement("div");
//       div.className = "app-block-grid";
//       blocksRef.current.appendChild(div);
//     }
//   }, []);

//   const highlightBlock = useCallback((e) => {
//     if (!blocksRef.current || rafIdRef.current) return;

//     mousePosRef.current = { x: e.clientX, y: e.clientY };

//     rafIdRef.current = requestAnimationFrame(() => {
//       const rect = blocksRef.current.getBoundingClientRect();
//       const x = mousePosRef.current.x - rect.left;
//       const y = mousePosRef.current.y - rect.top;

//       const col = Math.floor(x / BLOCK_SIZE);
//       const row = Math.floor(y / BLOCK_SIZE);

//       const cols = Math.ceil(window.innerWidth / BLOCK_SIZE);
//       const index = row * cols + col;

//       const block = blocksRef.current.children[index];

//       if (block && !block.classList.contains("app-highlight")) {
//         block.classList.add("app-highlight");
//         setTimeout(() => block.classList.remove("app-highlight"), 250);
//       }

//       rafIdRef.current = null;
//     });
//   }, []);

//   /* ---------------- LOADER ---------------- */
//   useEffect(() => {
//     const MIN_TIME = 3000;
//     const start = Date.now();

//     const images = Array.from(document.images);
//     let loaded = 0;
//     let realProgress = 0;

//     const updateReal = () => {
//       loaded++;
//       realProgress = (loaded / images.length) * 100;
//     };

//     images.forEach((img) => {
//       if (img.complete) updateReal();
//       else {
//         img.addEventListener("load", updateReal);
//         img.addEventListener("error", updateReal);
//       }
//     });

//     const interval = setInterval(() => {
//       const elapsed = Date.now() - start;
//       const fake = Math.min((elapsed / MIN_TIME) * 100, 100);

//       const combined = Math.min(fake, realProgress || 100);
//       setProgress(Math.floor(combined));

//       if (fake >= 100 && (realProgress >= 100 || images.length === 0)) {
//         clearInterval(interval);

//         document.body.classList.add("loaded");

//         setTimeout(() => {
//           setLoading(false);
//         }, 600);
//       }
//     }, 30);

//     return () => clearInterval(interval);
//   }, []);

//   /* ---------------- AFTER LOAD ---------------- */
//   useEffect(() => {
//     if (loading) return;

//     createBlocks();
//     window.addEventListener("resize", createBlocks);
//     window.addEventListener("mousemove", highlightBlock);

//     const runAnimation = async () => {
//       const gsap = (await import("gsap")).default;

//       const overlay = document.getElementById("app-overlay");
//       if (!overlay) return;

//       const blocks = overlay.querySelectorAll(".app-block");

//       overlay.style.display = "grid";

//       gsap.fromTo(
//         blocks,
//         { y: 0 },
//         {
//           y: "-100%",
//           duration: 1.2,
//           stagger: 0.06,
//           ease: "power4.inOut",
//           delay: 0.2,
//           onComplete: () => {
//             overlay.style.display = "none";
//           }
//         }
//       );
//     };

//     runAnimation();

//     return () => {
//       window.removeEventListener("resize", createBlocks);
//       window.removeEventListener("mousemove", highlightBlock);
//     };
//   }, [loading, createBlocks, highlightBlock]);

//   /* ---------------- UI ---------------- */
// if (loading) {
//   return (
//     <div className="loader-screen">
//       <h1 className="loader-center">Codegrid</h1>

//       <div className="loader-bottom">
//         <span className="loader-percent">{progress}%</span>
//         <div className="loader-bar">
//           <div
//             className="loader-fill"
//             style={{ width: `${progress}%` }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// }
//   return (
//     <div className="App">
//       {/* BLOCK REVEAL */}
//       <div className="app-overlay" id="app-overlay">
//         {[...Array(8)].map((_, i) => (
//           <div key={i} className="app-block"></div>
//         ))}
//       </div>

//       <Helmet>
//         <title>Dcoderath | Divakar Trivedi</title>
//       </Helmet>

//       {/* MOUSE GRID */}
//       <div className="app-blocks-container">
//         <div ref={blocksRef} className="app-blocks-grid"></div>
//       </div>

//       <Navbar />
//       <Home />
//       <Services />
//       <Projects />
//       <WhySection />
//       <MarqueeScroll />
//       <Footer />
//     </div>
//   );
// };

// export default App;







import React, { useEffect, useRef, useCallback } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import WhySection from "./components/WhySection/WhySection";
import MarqueeScroll from "./components/MarqueeScroll/MarqueeScroll";

import { Routes, Route, useLocation } from "react-router-dom";
import TermsOfService from "./components/Footer/TermsOfService";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import Careers from "./components/Footer/Careers";

import { Helmet } from "react-helmet";

const BLOCK_SIZE = 30;

const App = () => {
  const location = useLocation();

  const blocksRef = useRef(null);
  const rafIdRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });

  /* ---------------- GRID ---------------- */
  const createBlocks = useCallback(() => {
    if (!blocksRef.current) return;

    const cols = Math.ceil(window.innerWidth / BLOCK_SIZE);
    const rows = Math.ceil(window.innerHeight / BLOCK_SIZE);

    blocksRef.current.innerHTML = "";
    blocksRef.current.style.gridTemplateColumns = `repeat(${cols}, ${BLOCK_SIZE}px)`;

    for (let i = 0; i < cols * rows; i++) {
      const div = document.createElement("div");
      div.className = "app-block-grid";
      blocksRef.current.appendChild(div);
    }
  }, []);

 const prevPosRef = useRef(null);

const highlightBlock = useCallback((e) => {
  if (!blocksRef.current || rafIdRef.current) return;

  mousePosRef.current = { x: e.clientX, y: e.clientY };

  rafIdRef.current = requestAnimationFrame(() => {
    const rect = blocksRef.current.getBoundingClientRect();

    const x = mousePosRef.current.x - rect.left;
    const y = mousePosRef.current.y - rect.top;

    const cols = Math.ceil(window.innerWidth / BLOCK_SIZE);

    const col = Math.floor(x / BLOCK_SIZE);
    const row = Math.floor(y / BLOCK_SIZE);

    if (prevPosRef.current) {
      const prevCol = prevPosRef.current.col;
      const prevRow = prevPosRef.current.row;

      const steps = Math.max(
        Math.abs(col - prevCol),
        Math.abs(row - prevRow)
      );

      for (let i = 0; i <= steps; i++) {
        const interpCol = Math.round(
          prevCol + ((col - prevCol) * i) / steps
        );

        const interpRow = Math.round(
          prevRow + ((row - prevRow) * i) / steps
        );

        const index = interpRow * cols + interpCol;

        const block = blocksRef.current.children[index];

        if (block) {
          block.classList.add("app-highlight");

          setTimeout(() => {
            block.classList.remove("app-highlight");
          }, 300);
        }
      }
    }

    prevPosRef.current = { col, row };

    rafIdRef.current = null;
  });
}, []);

  /* ---------------- GRID ONLY ON HOME ---------------- */
  useEffect(() => {
    if (location.pathname !== "/") return;

    createBlocks();
    window.addEventListener("resize", createBlocks);
    window.addEventListener("mousemove", highlightBlock);

    return () => {
      window.removeEventListener("resize", createBlocks);
      window.removeEventListener("mousemove", highlightBlock);
    };
  }, [location.pathname, createBlocks, highlightBlock]);

  /* ---------------- BRICK ANIMATION (ONLY FIRST TIME) ---------------- */
  useEffect(() => {
    if (sessionStorage.getItem("introPlayed")) return;

    const runAnimation = async () => {
      const gsap = (await import("gsap")).default;

      const overlay = document.getElementById("app-overlay");
      if (!overlay) return;

      const blocks = overlay.querySelectorAll(".app-block");

      overlay.style.display = "grid";

      gsap.fromTo(
        blocks,
        { y: 0 },
        {
          y: "-100%",
          duration: 1.2,
          stagger: 0.06,
          ease: "power4.inOut",
          delay: 0.2,
          onComplete: () => {
            overlay.style.display = "none";
          }
        }
      );

      sessionStorage.setItem("introPlayed", "true");
    };

    runAnimation();
  }, []);

  /* ---------------- SCROLL RESET ---------------- */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  /* ---------------- MAIN ---------------- */
  return (
    <div className="App">

      <Helmet>
        <title>CodeGrid | Web & App Development Agency</title>
        <meta
          name="description"
          content="CodeGrid builds modern websites, apps, and UI/UX experiences."
        />
      </Helmet>

      {/* BRICK OVERLAY */}
      <div className="app-overlay" id="app-overlay">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="app-block"></div>
        ))}
      </div>

      <Navbar />

      {/* GRID ONLY ON HOME */}
      {location.pathname === "/" && (
        <div className="app-blocks-container">
          <div ref={blocksRef} className="app-blocks-grid"></div>
        </div>
      )}

      <Routes>

  {/* HOME */}
  <Route
    path="/"
    element={
      <>
        <Home />
        <Services />
        <Projects />
        <WhySection />
        <MarqueeScroll />
      </>
    }
  />

  {/* TERMS */}
  <Route
    path="/terms"
    element={
      <>
        <Helmet>
          <title>Terms of Service | CodeGrid</title>
        </Helmet>
        <TermsOfService />
      </>
    }
  />

  {/* PRIVACY */}
  <Route
    path="/privacy"
    element={
      <>
        <Helmet>
          <title>Privacy Policy | CodeGrid</title>
        </Helmet>
        <PrivacyPolicy />
      </>
    }
  />

  {/* ✅ CAREERS (MOVE HERE) */}
  <Route
    path="/careers"
    element={
      <>
        <Helmet>
          <title>Careers | CodeGrid</title>
          <meta
            name="description"
            content="Join CodeGrid and build modern digital experiences."
          />
        </Helmet>
        <Careers />
      </>
    }
  />

</Routes>
      <Footer />
    </div>
  );
};

export default App;