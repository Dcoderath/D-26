// // import React, { useEffect, useRef } from "react";
// // import "./Footer.css";

// // export function Footer() {
// //   const canvasRef = useRef(null);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;

// //     const ctx = canvas.getContext("2d");

// //     const resize = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //       drawPixels();
// //     };

// //     window.addEventListener("resize", resize);
// //     resize();

// //     function drawPixels() {
// //       const { width, height } = canvas;

// //       ctx.fillStyle = "#242021";
// //       ctx.fillRect(0, 0, width, height);

// //       const size = 30;
// //       const rows = Math.floor(height / size);
// //       const cols = Math.floor(width / size);

// //       let seed = 121212;
// //       const random = () => {
// //         seed = (seed * 1664525 + 1013904223) % 4294967296;
// //         return seed / 4294967296;
// //       };

// //       const drawnPixels = new Set();

// //       for (let y = 0; y < rows; y++) {
// //         const ny = y / rows;

// //         for (let x = 0; x < cols; x++) {
// //           const nx = x / cols;

// //           const w = x === cols - 1 ? width - x * size : size;
// //           const h = y === rows - 1 ? height - y * size : size;

// //           let draw = false;

// //           // 🔝 15% FULL DENSE
// //           if (ny < 0.15) {
// //             draw = true;
// //           }

// //           // 🔹 10% BROKEN LEFT MIX
// //           else if (ny >= 0.15 && ny < 0.25) {
// //             if (nx < 0.35) draw = true;
// //             if (random() > 0.88) draw = true;
// //           }

// //           // ⬛ 5% BLANK
// //           else if (ny >= 0.25 && ny < 0.30) {
// //             draw = false;
// //           }

// //           // 🌫 8% SOFT TRANSITION SCATTER
// //           else if (ny >= 0.30 && ny < 0.38) {
// //             if (random() > 0.82) draw = true;
// //           }

// //           // 🔻 LOWER DENSE (raised start, no straight line)
// //           else if (ny >= 0.38) {
// //             draw = true;

// //             // break hard straight top edge
// //             if (ny < 0.42 && random() > 0.92) {
// //               draw = false;
// //             }
// //           }

// //           if (draw) {
// //             ctx.fillStyle = "#F1F1F1";
// //             ctx.fillRect(x * size, y * size, w, h);
// //             drawnPixels.add(`${x},${y}`);
// //           }
// //         }
// //       }

// //       // 🐍 ONLY 2–3 SNAKE COUNTER PIXELS
// //       const snakeCount = 2 + Math.floor(random() * 2);

// //       for (let i = 0; i < snakeCount; i++) {
// //         let x = Math.floor(random() * cols);
// //         let y = Math.floor(rows * 0.45 + random() * rows * 0.4);

// //         const length = 3 + Math.floor(random() * 2);

// //         for (let j = 0; j < length; j++) {
// //           const key = `${x},${y}`;

// //           if (drawnPixels.has(key)) {
// //             drawnPixels.delete(key);
// //             ctx.fillStyle = "#242021";
// //             ctx.fillRect(x * size, y * size, size, size);
// //           }

// //           x += random() > 0.5 ? 1 : -1;
// //           y += random() > 0.6 ? 1 : 0;

// //           if (x <= 1 || x >= cols - 2) break;
// //           if (y <= 1 || y >= rows - 2) break;
// //         }
// //       }

// //       // 🔢 Binary only on edge-touching pixels
// //       ctx.font = `${size * 0.55}px monospace`;
// //       ctx.textAlign = "center";
// //       ctx.textBaseline = "middle";

// //       drawnPixels.forEach((pos) => {
// //         const [x, y] = pos.split(",").map(Number);

// //         if (
// //           x === 0 ||
// //           y === 0 ||
// //           x === cols - 1 ||
// //           y === rows - 1
// //         )
// //           return;

// //         const neighbors = [
// //           `${x + 1},${y}`,
// //           `${x - 1},${y}`,
// //           `${x},${y + 1}`,
// //           `${x},${y - 1}`,
// //         ];

// //         const touchingDark = neighbors.some((n) => !drawnPixels.has(n));

// //         if (touchingDark) {
// //           ctx.fillStyle = "#000000";
// //           ctx.fillText(
// //             random() > 0.5 ? "1" : "0",
// //             x * size + size / 2,
// //             y * size + size / 2
// //           );
// //         }
// //       });
// //     }

// //     return () => window.removeEventListener("resize", resize);
// //   }, []);

// //   return (
// //     <footer className="footer-pixel-wrapper-unique">
// //   <canvas
// //     ref={canvasRef}
// //     className="footer-pixel-canvas-unique"
// //   />

// //   <div className="footer-overlay">
// //     <div className="footer-bottom-boxes">

// //       {/* LEFT SIDE */}
// //       <div className="bottom-box">
// //         <h2>IF YOU WANT TO KEEP IN TOUCH / UP-TO-DATE</h2>

// //         <p>
// //           On various releases, updates, etc. might I recommend signing up
// //           to a newsletter. I'm not sure how often I'll get around to
// //           sending them out, but I'll make sure they're only meaningful /
// //           worth your while.
// //         </p>

// //         <h4>WHAT IT IS</h4>
// //         <ul>
// //           <li>New releases</li>
// //           <li>Free / exclusive content</li>
// //           <li>Beta testing</li>
// //           <li>Discounts / promos</li>
// //           <li>Updates</li>
// //         </ul>

// //         <h4>WHAT IT ISN'T</h4>
// //         <ul>
// //           <li>Spam</li>
// //           <li>Airing of grievances</li>
// //           <li>Conspiracy theories</li>
// //         </ul>
// //       </div>

// //       {/* RIGHT SIDE */}
// //       <div className="bottom-box">
// //         <h3>WHO ARE YOU</h3>
// //         <p>[Your Name]</p>

// //         <h3>HOW DO I REACH YOU</h3>
// //         <p>[Your Email]</p>
// //         <p>[ㅈ]</p>
// //       </div>

// //     </div>
// //   </div>
// // </footer>

// //   );
// // }











// // import React, { useEffect, useRef } from "react";
// // import "./Footer.css";

// // export function Footer() {
// //   const canvasRef = useRef(null);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;

// //     const ctx = canvas.getContext("2d");

// //     const resize = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //       drawPixels();
// //     };

// //     window.addEventListener("resize", resize);
// //     resize();

// //     function drawPixels() {
// //       const { width, height } = canvas;

// //       ctx.fillStyle = "#242021";
// //       ctx.fillRect(0, 0, width, height);

// //       const size = 30;
// //       const rows = Math.floor(height / size);
// //       const cols = Math.floor(width / size);

// //       let seed = 121212;
// //       const random = () => {
// //         seed = (seed * 1664525 + 1013904223) % 4294967296;
// //         return seed / 4294967296;
// //       };

// //       const drawnPixels = new Set();

// //       for (let y = 0; y < rows; y++) {
// //         const ny = y / rows;

// //         for (let x = 0; x < cols; x++) {
// //           const nx = x / cols;

// //           const w = x === cols - 1 ? width - x * size : size;
// //           const h = y === rows - 1 ? height - y * size : size;

// //           let draw = false;

// //           if (ny < 0.15) {
// //             draw = true;
// //           } else if (ny >= 0.15 && ny < 0.25) {
// //             if (nx < 0.35) draw = true;
// //             if (random() > 0.88) draw = true;
// //           } else if (ny >= 0.25 && ny < 0.30) {
// //             draw = false;
// //           } else if (ny >= 0.30 && ny < 0.38) {
// //             if (random() > 0.82) draw = true;
// //           } else if (ny >= 0.38) {
// //             draw = true;
// //             if (ny < 0.42 && random() > 0.92) {
// //               draw = false;
// //             }
// //           }

// //           if (draw) {
// //             ctx.fillStyle = "#F1F1F1";
// //             ctx.fillRect(x * size, y * size, w, h);
// //             drawnPixels.add(`${x},${y}`);
// //           }
// //         }
// //       }

// //       // only 2–3 subtle snake cuts
// //       const snakeCount = 2 + Math.floor(random() * 2);

// //       for (let i = 0; i < snakeCount; i++) {
// //         let x = Math.floor(random() * cols);
// //         let y = Math.floor(rows * 0.45 + random() * rows * 0.4);
// //         const length = 3 + Math.floor(random() * 2);

// //         for (let j = 0; j < length; j++) {
// //           const key = `${x},${y}`;

// //           if (drawnPixels.has(key)) {
// //             drawnPixels.delete(key);
// //             ctx.fillStyle = "#242021";
// //             ctx.fillRect(x * size, y * size, size, size);
// //           }

// //           x += random() > 0.5 ? 1 : -1;
// //           y += random() > 0.6 ? 1 : 0;

// //           if (x <= 1 || x >= cols - 2) break;
// //           if (y <= 1 || y >= rows - 2) break;
// //         }
// //       }
// //     }

// //     return () => window.removeEventListener("resize", resize);
// //   }, []);

// //    return (
// //     <footer className="footer">
// //       <canvas ref={canvasRef} className="footer-canvas" />

// //       <div className="footer-overlay">
// //         <div className="footer-bottom-container">

// //           {/* LEFT SIDE */}
// //           <div className="left-side">

// //             <div className="left-box">
// //               <h2>IF YOU WANT TO KEEP IN TOUCH / UP-TO-DATE</h2>
// //               <p>
// //                 On various releases, updates, etc. might I recommend signing up
// //                 to a newsletter. I'm not sure how often I'll get around to
// //                 sending them out, but I'll make sure they're only meaningful /
// //                 worth your while.
// //               </p>
// //             </div>

// //             <div className="left-box">
// //               <h4>WHAT IT IS</h4>
// //               <ul>
// //                 <li>New releases</li>
// //                 <li>Free / exclusive content</li>
// //                 <li>Beta testing</li>
// //                 <li>Discounts / promos</li>
// //                 <li>Updates</li>
// //               </ul>
// //             </div>

// //             <div className="left-box">
// //               <h4>WHAT IT ISN'T</h4>
// //             <ul className="cut-text">
// //   <li>Spam</li>
// //   <li>Airing of grievances</li>
// //   <li>Conspiracy theories</li>
// // </ul>
// //             </div>

// //           </div>

// //           {/* RIGHT SIDE */}
// //           <div className="right-side">
// //             <h3>WHO ARE YOU</h3>
// //             <p className="big-text">[Your Name]</p>

// //             <h3>HOW DO I REACH YOU</h3>
// //             <p className="big-text">[Your Email]</p>

// //             <button className="arrow-button">→</button>
// //           </div>

// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }


// import React, { useEffect, useRef, useCallback } from "react";
// import "./Footer.css";

// export function Footer() {
//   const canvasRef = useRef(null);

//   const drawPixels = useCallback(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     const { width, height } = canvas;

//     ctx.fillStyle = "#242021";
//     ctx.fillRect(0, 0, width, height);

//     // 📐 Calculate pixel size based on screen width
//     const baseSize = Math.min(width, height) * 0.035; // 3.5% of smallest dimension
//     const size = Math.max(20, Math.min(40, Math.floor(baseSize))); // Clamp between 20-40px

//     const rows = Math.floor(height / size);
//     const cols = Math.floor(width / size);

//     let seed = 121212;
//     const random = () => {
//       seed = (seed * 1664525 + 1013904223) % 4294967296;
//       return seed / 4294967296;
//     };

//     const drawnPixels = new Set();

//     for (let y = 0; y < rows; y++) {
//       const ny = y / rows;

//       for (let x = 0; x < cols; x++) {
//         const nx = x / cols;

//         const w = x === cols - 1 ? width - x * size : size;
//         const h = y === rows - 1 ? height - y * size : size;

//         let draw = false;

//         if (ny < 0.15) {
//           draw = true;
//         } else if (ny >= 0.15 && ny < 0.25) {
//           if (nx < 0.35) draw = true;
//           if (random() > 0.88) draw = true;
//         } else if (ny >= 0.25 && ny < 0.30) {
//           draw = false;
//         } else if (ny >= 0.30 && ny < 0.38) {
//           if (random() > 0.82) draw = true;
//         } else if (ny >= 0.38) {
//           draw = true;
//           if (ny < 0.42 && random() > 0.92) {
//             draw = false;
//           }
//         }

//         if (draw) {
//           ctx.fillStyle = "#F1F1F1";
//           ctx.fillRect(x * size, y * size, w, h);
//           drawnPixels.add(`${x},${y}`);
//         }
//       }
//     }

//     // only 2–3 subtle snake cuts
//     const snakeCount = 2 + Math.floor(random() * 2);

//     for (let i = 0; i < snakeCount; i++) {
//       let x = Math.floor(random() * cols);
//       let y = Math.floor(rows * 0.45 + random() * rows * 0.4);
//       const length = 3 + Math.floor(random() * 2);

//       for (let j = 0; j < length; j++) {
//         const key = `${x},${y}`;

//         if (drawnPixels.has(key)) {
//           drawnPixels.delete(key);
//           ctx.fillStyle = "#242021";
//           ctx.fillRect(x * size, y * size, size, size);
//         }

//         x += random() > 0.5 ? 1 : -1;
//         y += random() > 0.6 ? 1 : 0;

//         if (x <= 1 || x >= cols - 2) break;
//         if (y <= 1 || y >= rows - 2) break;
//       }
//     }
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
    
//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       drawPixels();
//     };

//     // Initial setup
//     handleResize();

//     // Debounced resize for better performance
//     let timeoutId;
//     const debouncedResize = () => {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(handleResize, 100);
//     };

//     window.addEventListener("resize", debouncedResize);
    
//     return () => {
//       window.removeEventListener("resize", debouncedResize);
//       clearTimeout(timeoutId);
//     };
//   }, [drawPixels]);

//   return (
//    <footer className="footer">
//   <canvas ref={canvasRef} className="footer-canvas" />

//   <div className="footer-overlay">

//  {/* TOP CONTAINER */}
// <div className="top-container">

//   {/* TOP - TOP SECTION */}
//   <div className="top-top">
//     <div className="top-box">Box 1</div>
//     <div className="top-box">Box 2</div>
//     <div className="top-box">Box 3</div>
//     <div className="top-box">Box 4</div>
//   </div>

//   {/* TOP - BOTTOM SECTION */}
//   <div className="top-bottom">
//     <h2>STAY CONNECTED</h2>
//     <p>
//       Sign up for updates, sneak peeks, or exclusive insights. Everything first, directly to you!
//     </p>
//   </div>

// </div>
//     {/* BOTTOM CONTAINER (existing) */}
//     <div className="footer-bottom-container">
//       {/* LEFT SIDE */}
//       <div className="left-side">
//         <div className="left-box">
//           <h2>IF YOU WANT TO KEEP IN TOUCH / UP-TO-DATE</h2>
//           <p>
//             On various releases, updates, etc. might I recommend signing up
//             to a newsletter. I'm not sure how often I'll get around to
//             sending them out, but I'll make sure they're only meaningful /
//             worth your while.
//           </p>
//         </div>

//         <div className="left-box">
//           <h4>WHAT IT IS</h4>
//           <ul>
//             <li>New releases</li>
//             <li>Free / exclusive content</li>
//             <li>Beta testing</li>
//             <li>Discounts / promos</li>
//             <li>Updates</li>
//           </ul>
//         </div>

//         <div className="left-box">
//           <h4>WHAT IT ISN'T</h4>
//           <ul className="cut-text">
//             <li>Spam</li>
//             <li>Airing of grievances</li>
//             <li>Conspiracy theories</li>
//           </ul>
//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//   <div className="right-side">
//   <div className="form-layout-wrapper">
    
//     {/* Group for Inputs */}
//     <div className="inputs-group">
//       <div className="form-box">
//         <h3>WHO ARE YOU</h3>
//         <input type="text" className="big-text-input" placeholder="[Your Name]" />
//       </div>

//       <div className="form-box">
//         <h3>HOW DO I REACH YOU</h3>
//         <input type="email" className="big-text-input" placeholder="[Your Email]" />
//       </div>
//     </div>

//     {/* The Button as the 3rd Box */}
//     <button className="submit-box-button">
//       <span>SEND</span>
//       <span className="arrow">→</span>
//     </button>
    
//   </div>
// </div>
//     </div>

//   </div>
// </footer>
//   );
// }















// import React from 'react';
// import './Footer.css';

// export const Footer = () => {
//   return (
//     <div className="mita-wrapper">
//       {/* Absolute Top Nav */}
//       <nav className="mita-top-nav">
//         <div className="nav-socials">
//           <span>IG</span> <span>TT</span> <span>X</span> <span>IN</span>
//         </div>
//         <div className="nav-menu">
//           <span>MITA</span> <span>THE APP</span> <span>NOT NFTS</span> <span>FAQ IT</span> <span>FOUNDERS</span>
//         </div>
//         <div className="nav-access">
//           ↗ EARLY ACCESS
//         </div>
//       </nav>

//       {/* Main Content Area */}
//       <div className="mita-content">
//         <section className="mita-hero">
//           <h1 className="mita-title">JOIN US</h1>
//           <div className="mita-subtitles">
//             <span>A MOVEMENT</span>
//             <span>IN</span>
//             <span>MUSIC</span>
//           </div>
//         </section>

//         <section className="mita-form-zone">
//           <p className="mita-instruction">
//             TYPE YOUR NAME AND EMAIL BELOW TO <br />
//             PRE-REGISTER FOR EARLY ACCESS...
//           </p>
          
//           <div className="mita-input-row">
//             <input type="text" placeholder="YOUR NAME..." />
//             <span className="mita-star">*</span>
//           </div>

//           <div className="mita-input-row">
//             <input type="email" placeholder="YOUR EMAIL..." />
//             <span className="mita-star">*</span>
//           </div>

//           <button className="mita-submit-btn">
//             <span>&nbsp;PRE-REGISTER ↗</span>
//           </button>
//           <p className="mita-spam-text">DON'T WORRY, WE WON'T SPAM YOU</p>
//         </section>

//         <footer className="mita-bottom-bar">
//           <div className="mita-links-group">
//             <span>MORE QUESTIONS? <a href="#">CONTACT US</a></span>
//             <span>WANNA <a href="#">JOIN THE TEAM?</a></span>
//           </div>
//           <div className="mita-links-group">
//             <a href="#">TERMS OF SERVICE</a>
//             <a href="#">PRIVACY POLICY</a>
//             <span>MADE BY <a href="#">SOMEFOLK</a></span>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };












import React, { useState } from 'react';
import './Footer.css';

export const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message] = useState('Pre-register request');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const isFormValid =
    name.trim() !== '' &&
    email.trim() !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || loading) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("key", API_KEY);
      formData.append("name", name.trim());
      formData.append("email", email.trim());
      formData.append("message", message);
      formData.append("website", "");

      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData
      });

      setSubmitted(true);
      setName('');
      setEmail('');
    } catch (err) {
      console.error("Form submission error:", err);
      alert("❌ Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // ✅ IMPORTANT FIX HERE
    <div id="Footer" className="mita-wrapper">
      
      <nav className="mita-top-nav">
        <div className="nav-socials">
          <span>IG</span> <span>TT</span> <span>X</span> <span>IN</span>
        </div>
        <div className="nav-menu">
          <span>MITA</span>
          <span>THE APP</span>
          <span>NOT NFTS</span>
          <span>FAQ IT</span>
          <span>FOUNDERS</span>
        </div>
        <div className="nav-access">↗ EARLY ACCESS</div>
      </nav>

      <div className="mita-content">
        <section className="mita-hero">
          <h1 className="mita-title">JOIN US</h1>
          <div className="mita-subtitles">
            <span>A MOVEMENT</span>
            <span>IN</span>
            <span>MUSIC</span>
          </div>
        </section>

        <section className="mita-form-zone">
          <p className="mita-instruction">
            TYPE YOUR NAME AND EMAIL BELOW TO <br />
            PRE-REGISTER FOR EARLY ACCESS...
          </p>

          {submitted ? (
            <p className="mita-spam-text">
              THANK YOU FOR PRE-REGISTERING!
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mita-input-row">
                <input
                  type="text"
                  placeholder="YOUR NAME..."
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                <span className="mita-star">*</span>
              </div>

              <div className="mita-input-row">
                <input
                  type="email"
                  placeholder="YOUR EMAIL..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <span className="mita-star">*</span>
              </div>

              {!isFormValid && email !== '' && (
                <p style={{ color: 'red', marginTop: '5px' }}>
                  ⚠️ Please enter a valid name and email
                </p>
              )}

              <button
                className="mita-submit-btn"
                type="submit"
                disabled={!isFormValid || loading}
              >
                {loading ? 'SENDING...' : 'PRE-REGISTER ↗'}
              </button>
            </form>
          )}

          {!submitted && (
            <p className="mita-spam-text">
              DON'T WORRY, WE WON'T SPAM YOU
            </p>
          )}
        </section>

        <footer className="mita-bottom-bar">
          <div className="mita-links-group">
            <span>MORE QUESTIONS? <a href="#">CONTACT US</a></span>
            <span>WANNA <a href="#">JOIN THE TEAM?</a></span>
          </div>

          <div className="mita-links-group">
            <a href="#">TERMS OF SERVICE</a>
            <a href="#">PRIVACY POLICY</a>
            <span>MADE BY <a href="#">SOMEFOLK</a></span>
          </div>
        </footer>

      </div>
    </div>
  );
};