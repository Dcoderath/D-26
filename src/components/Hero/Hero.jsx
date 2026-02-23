// // // import React, { useEffect, useRef, useState } from "react";
// // // import "./hero.css";

// // // export default function Hero() {
// // //   const canvasRef = useRef(null);

// // //   const topLines = [
// // //     "~$whoami",
// // //     "Divakar Trivedi",
// // //     "Uttar Pradesh, North India, India",
// // //     "I'M just a HACKER born in a DEVELOPER's body"
// // //   ];
// // //   const bottomLines = [
// // //     "Specialization: Web Security, Pentesting, Exploit Development",
// // //     "Experience: Red Teaming, Threat Analysis, Vulnerability Assessment",
// // //     "Interests: Ethical Hacking, Automation, Open Source Security Tools"
// // //   ];

// // //   const [typedTop, setTypedTop] = useState(topLines.map(() => ""));
// // //   const [typedBottom, setTypedBottom] = useState(bottomLines.map(() => ""));

// // //   useEffect(() => {
// // //     let topLineIndex = 0;
// // //     let topCharIndex = 0;
// // //     let bottomLineIndex = 0;
// // //     let bottomCharIndex = 0;
// // //     const topInterval = setInterval(() => {
// // //       setTypedTop((prev) => {
// // //         const copy = [...prev];
// // //         if (topLineIndex < topLines.length) {
// // //           copy[topLineIndex] = topLines[topLineIndex].slice(0, topCharIndex + 1);
// // //           topCharIndex++;
// // //           if (topCharIndex > topLines[topLineIndex].length) {
// // //             topCharIndex = 0;
// // //             topLineIndex++;
// // //           }
// // //         }
// // //         return copy;
// // //       });
// // //     }, 70);

// // //     const bottomInterval = setInterval(() => {
// // //       setTypedBottom((prev) => {
// // //         const copy = [...prev];
// // //         if (bottomLineIndex < bottomLines.length) {
// // //           copy[bottomLineIndex] = bottomLines[bottomLineIndex].slice(0, bottomCharIndex + 1);
// // //           bottomCharIndex++;
// // //           if (bottomCharIndex > bottomLines[bottomLineIndex].length) {
// // //             bottomCharIndex = 0;
// // //             bottomLineIndex++;
// // //           }
// // //         }
// // //         return copy;
// // //       });
// // //     }, 90);

// // //     return () => {
// // //       clearInterval(topInterval);
// // //       clearInterval(bottomInterval);
// // //     };
// // //   }, []);

// // //   useEffect(() => {
// // //     const canvas = canvasRef.current;
// // //     const ctx = canvas.getContext("2d");

// // //     const resize = () => {
// // //       canvas.width = window.innerWidth;
// // //       canvas.height = window.innerHeight;
// // //       drawPixels();
// // //     };

// // //     window.addEventListener("resize", resize);
// // //     resize();

// // //     function drawPixels() {
// // //       const { width, height } = canvas;
// // //       ctx.fillStyle = "#0b0b0b";
// // //       ctx.fillRect(0, 0, width, height);

// // //       const size = 30;
// // //       const rows = Math.ceil(height / size);
// // //       const cols = Math.ceil(width / size);

// // //       let seed = 10101;
// // //       function random() {
// // //         seed = (seed * 1664525 + 1013904223) % 4294967296;
// // //         return seed / 4294967296;
// // //       }

// // //       // Store which pixels are drawn
// // //       const drawnPixels = new Set();

// // //       for (let y = 0; y < rows; y++) {
// // //         for (let x = 0; x < cols; x++) {
// // //           const normalizedX = x / cols;
// // //           const normalizedY = y / rows;

// // //           const heightLimit = 0.6 - normalizedX * 0.3;
// // //           if (normalizedY < heightLimit && normalizedX < 0.4) {
// // //             ctx.fillStyle = "#fff";
// // //             ctx.fillRect(x * size, y * size, size, size);
// // //             drawnPixels.add(`${x},${y}`);
// // //           } else if (
// // //             normalizedX < 0.45 &&
// // //             normalizedY >= heightLimit &&
// // //             normalizedY < heightLimit + 0.12 &&
// // //             Math.random() > 0.92
// // //           ) {
// // //             ctx.fillStyle = "#fff";
// // //             ctx.fillRect(x * size, y * size, size, size);
// // //             drawnPixels.add(`${x},${y}`);
// // //             if (Math.random() > 0.7) {
// // //               let cx = x;
// // //               let cy = y;
// // //               const snakeLength = Math.floor(Math.random() * 2) + 2;
// // //               for (let i = 0; i < snakeLength; i++) {
// // //                 cx += Math.floor(Math.random() * 3) - 1;
// // //                 cy += Math.floor(Math.random() * 2);
// // //                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
// // //                 ctx.fillRect(cx * size, cy * size, size, size);
// // //                 drawnPixels.add(`${cx},${cy}`);
// // //               }
// // //             }
// // //           } else if (normalizedX >= 0.4 && normalizedX < 0.8) {
// // //             const waveLimit =
// // //               0.4 + Math.sin(normalizedX * 6) * 0.05 + Math.cos(normalizedX * 3) * 0.03;
// // //             if (normalizedY < waveLimit && random() > 0.8) {
// // //               ctx.fillStyle = "#fff";
// // //               let cx = x;
// // //               let cy = y;
// // //               const snakeLength = Math.floor(random() * 4) + 5;
// // //               for (let i = 0; i < snakeLength; i++) {
// // //                 ctx.fillRect(cx * size, cy * size, size, size);
// // //                 drawnPixels.add(`${cx},${cy}`);
// // //                 cx += Math.floor(random() * 3) - 1;
// // //                 cy += Math.floor(random() * 2) - 1;
// // //                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
// // //               }
// // //             }
// // //           } else if (normalizedX >= 0.8 && normalizedY < 0.3 && random() > 0.95) {
// // //             ctx.fillStyle = "#fff";
// // //             let cx = x;
// // //             let cy = y;
// // //             const snakeLength = Math.floor(random() * 3) + 4;
// // //             for (let i = 0; i < snakeLength; i++) {
// // //               ctx.fillRect(cx * size, cy * size, size, size);
// // //               drawnPixels.add(`${cx},${cy}`);
// // //               cx += Math.floor(random() * 3) - 1;
// // //               cy += Math.floor(random() * 3) - 1;
// // //               if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
// // //             }
// // //           } else if (normalizedX > 0.7 && normalizedY > 0.7) {
// // //             if (random() > 0.1) {
// // //               ctx.fillStyle = "#fff";
// // //               ctx.fillRect(x * size, y * size, size, size);
// // //               drawnPixels.add(`${x},${y}`);
// // //             }
// // //           }

// // //           const bottomRightLimit = 0.6 - (1 - normalizedX) * 0.3;
// // //           if (normalizedY > 1 - bottomRightLimit && normalizedX > 0.6) {
// // //             ctx.fillStyle = "#fff";
// // //             ctx.fillRect(x * size, y * size, size, size);
// // //             drawnPixels.add(`${x},${y}`);
// // //           } else if (
// // //             normalizedX > 0.55 &&
// // //             normalizedY <= 1 - bottomRightLimit &&
// // //             normalizedY > 1 - bottomRightLimit - 0.12 &&
// // //             Math.random() > 0.92
// // //           ) {
// // //             ctx.fillStyle = "#fff";
// // //             ctx.fillRect(x * size, y * size, size, size);
// // //             drawnPixels.add(`${x},${y}`);

// // //             if (Math.random() > 0.7) {
// // //               let cx = x;
// // //               let cy = y;
// // //               const snakeLength = Math.floor(Math.random() * 2) + 2;
// // //               for (let i = 0; i < snakeLength; i++) {
// // //                 cx += Math.floor(Math.random() * 3) - 1;
// // //                 cy -= Math.floor(Math.random() * 2);
// // //                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
// // //                 ctx.fillRect(cx * size, cy * size, size, size);
// // //                 drawnPixels.add(`${cx},${cy}`);
// // //               }
// // //             }
// // //           }
// // //         }
// // //       }

// // //       // Add 0/1 to each bottom last pixel
// // //       ctx.font = "14px monospace";
// // //       ctx.textAlign = "center";
// // //       ctx.textBaseline = "middle";
// // //       ctx.fillStyle = "#000";

// // //       // Find and mark bottom last pixels in each column
// // //       for (let x = 0; x < cols; x++) {
// // //         let bottomLastY = -1;
        
// // //         // Find the bottom-most drawn pixel in this column
// // //         for (let y = rows - 1; y >= 0; y--) {
// // //           if (drawnPixels.has(`${x},${y}`)) {
// // //             bottomLastY = y;
// // //             break;
// // //           }
// // //         }
        
// // //         // Add 0/1 to the bottom last pixel
// // //         if (bottomLastY !== -1) {
// // //           const isZero = x % 2 === 0; // Alternate 0/1 pattern
// // //           if (isZero) {
// // //             ctx.fillText("0", x * size + size / 2, bottomLastY * size + size / 2);
// // //           } else {
// // //             ctx.fillText("1", x * size + size / 2, bottomLastY * size + size / 2);
// // //           }
// // //         }
// // //       }
// // //     }

// // //     return () => window.removeEventListener("resize", resize);
// // //   }, []);

// // //   return (
// // //     <header className="term-hero-root">
// // //       <canvas ref={canvasRef} className="pixel-screen" />

// // //       <div className="overlay top-left" aria-hidden>
// // //         {typedTop.map((line, i) => {
// // //           // Custom formatting for certain lines
// // //           if (line === "Divakar Trivedi") {
// // //             return (
// // //               <div
// // //                 key={i}
// // //                 className="hacker-line"
// // //                 style={{
// // //                   background: "#9d00ff",
// // //                   color: "white",
// // //                   padding: "4px 8px",
// // //                   fontSize:"43px",
                  
// // //                   display: "inline-block",
// // //                 }}
// // //               >
// // //                 <span>{line}</span>
// // //                 <svg
// // //                   width="160"
// // //                   height="6"
// // //                   viewBox="0 0 160 6"
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   style={{ display: "block", marginTop: "4px" }}
// // //                 >
// // //                   <line
// // //                     x1="0"
// // //                     y1="3"
// // //                     x2="160"
// // //                     y2="3"
// // //                     stroke="white"
// // //                     strokeWidth="2"
// // //                     strokeLinecap="round"
// // //                   />
// // //                 </svg>
// // //               </div>
// // //             );
// // //           }

// // //           if (line.includes("HACKER") || line.includes("DEVELOPER")) {
// // //             const formattedLine = line
// // //            .replace("HACKER", '<span style="background-color: lime; color: black; padding: 2px 4px; ">HACKER</span>')
// // // .replace("DEVELOPER", '<span style="background-color: #FF4C24; color: white; padding: 2px 4px;   ">DEVELOPER</span>');

// // //             return (
// // //               <div
// // //                 key={i}
// // //                 className="hacker-line"
// // //                 dangerouslySetInnerHTML={{ __html: formattedLine }}
// // //               />
// // //             );
// // //           }

// // //           return (
// // //             <div key={i} className="hacker-line">
// // //               <span>{line}</span>
// // //               {typedTop[i] && typedTop[i].length < (topLines[i] || "").length ? (
// // //                 <span className="caret" />
// // //               ) : null}
// // //             </div>
// // //           );
// // //         })}
// // //       </div>

// // //       <div className="overlay bottom-right" aria-hidden>
// // //         <div className="bio-panel">
// // //           {typedBottom.map((line, i) => (
// // //             <div key={i} className="bio-line">
// // //               {line}
// // //               {typedBottom[i] && typedBottom[i].length < (bottomLines[i] || "").length ? (
// // //                 <span className="caret" />
// // //               ) : null}
// // //             </div>
// // //           ))}
// // //           <div style={{ marginTop: 6, fontSize: 12, opacity: 0.8 }}>
// // //             Cybersecurity · Pentesting · OSINT · Tooling
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // }


// // // import React, { useEffect, useRef, useState } from "react";
// // // import "./hero.css";

// // // export default function Hero() {
// // //   const canvasRef = useRef(null);

// // //   const topLines = [
// // //     "~$whoami",
// // //     "Divakar Trivedi",
// // //     "Uttar Pradesh, North India, India",
// // //     "I'M just a HACKER born in a DEVELOPER's body"
// // //   ];
// // //   const bottomLines = [
// // //     "Specialization: Web Security, Pentesting, Exploit Development",
// // //     "Experience: Red Teaming, Threat Analysis, Vulnerability Assessment",
// // //     "Interests: Ethical Hacking, Automation, Open Source Security Tools"
// // //   ];

// // //   const [typedTop, setTypedTop] = useState(topLines.map(() => ""));
// // //   const [typedBottom, setTypedBottom] = useState(bottomLines.map(() => ""));

// // //   useEffect(() => {
// // //     let topLineIndex = 0;
// // //     let topCharIndex = 0;
// // //     let bottomLineIndex = 0;
// // //     let bottomCharIndex = 0;
// // //     const topInterval = setInterval(() => {
// // //       setTypedTop((prev) => {
// // //         const copy = [...prev];
// // //         if (topLineIndex < topLines.length) {
// // //           copy[topLineIndex] = topLines[topLineIndex].slice(0, topCharIndex + 1);
// // //           topCharIndex++;
// // //           if (topCharIndex > topLines[topLineIndex].length) {
// // //             topCharIndex = 0;
// // //             topLineIndex++;
// // //           }
// // //         }
// // //         return copy;
// // //       });
// // //     }, 70);

// // //     const bottomInterval = setInterval(() => {
// // //       setTypedBottom((prev) => {
// // //         const copy = [...prev];
// // //         if (bottomLineIndex < bottomLines.length) {
// // //           copy[bottomLineIndex] = bottomLines[bottomLineIndex].slice(0, bottomCharIndex + 1);
// // //           bottomCharIndex++;
// // //           if (bottomCharIndex > bottomLines[bottomLineIndex].length) {
// // //             bottomCharIndex = 0;
// // //             bottomLineIndex++;
// // //           }
// // //         }
// // //         return copy;
// // //       });
// // //     }, 90);

// // //     return () => {
// // //       clearInterval(topInterval);
// // //       clearInterval(bottomInterval);
// // //     };
// // //   }, []);

// // //   useEffect(() => {
// // //     const canvas = canvasRef.current;
// // //     const ctx = canvas.getContext("2d");

// // //     const resize = () => {
// // //       canvas.width = window.innerWidth;
// // //       canvas.height = window.innerHeight;
// // //       drawPixels();
// // //     };

// // //     window.addEventListener("resize", resize);
// // //     resize();

// // //     function drawPixels() {
// // //       const { width, height } = canvas;
// // //       ctx.fillStyle = "#0b0b0b";
// // //       ctx.fillRect(0, 0, width, height);

// // //       const size = 30;
// // //       const rows = Math.ceil(height / size);
// // //       const cols = Math.ceil(width / size);

// // //       let seed = 10101;
// // //       function random() {
// // //         seed = (seed * 1664525 + 1013904223) % 4294967296;
// // //         return seed / 4294967296;
// // //       }

// // //       // Store which pixels are drawn
// // //       const drawnPixels = new Set();

// // //       for (let y = 0; y < rows; y++) {
// // //         for (let x = 0; x < cols; x++) {
// // //           const normalizedX = x / cols;
// // //           const normalizedY = y / rows;

// // //           const heightLimit = 0.6 - normalizedX * 0.3;
// // //           if (normalizedY < heightLimit && normalizedX < 0.4) {
// // //             ctx.fillStyle = "#fff";
// // //             ctx.fillRect(x * size, y * size, size, size);
// // //             drawnPixels.add(`${x},${y}`);
// // //           } else if (
// // //             normalizedX < 0.45 &&
// // //             normalizedY >= heightLimit &&
// // //             normalizedY < heightLimit + 0.12 &&
// // //             Math.random() > 0.92
// // //           ) {
// // //             ctx.fillStyle = "#fff";
// // //             ctx.fillRect(x * size, y * size, size, size);
// // //             drawnPixels.add(`${x},${y}`);
// // //             if (Math.random() > 0.7) {
// // //               let cx = x;
// // //               let cy = y;
// // //               const snakeLength = Math.floor(Math.random() * 2) + 2;
// // //               for (let i = 0; i < snakeLength; i++) {
// // //                 cx += Math.floor(Math.random() * 3) - 1;
// // //                 cy += Math.floor(Math.random() * 2);
// // //                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
// // //                 ctx.fillRect(cx * size, cy * size, size, size);
// // //                 drawnPixels.add(`${cx},${cy}`);
// // //               }
// // //             }
// // //           } else if (normalizedX >= 0.4 && normalizedX < 0.8) {
// // //             const waveLimit =
// // //               0.4 + Math.sin(normalizedX * 6) * 0.05 + Math.cos(normalizedX * 3) * 0.03;
// // //             if (normalizedY < waveLimit && random() > 0.8) {
// // //               ctx.fillStyle = "#fff";
// // //               let cx = x;
// // //               let cy = y;
// // //               const snakeLength = Math.floor(random() * 4) + 5;
// // //               for (let i = 0; i < snakeLength; i++) {
// // //                 ctx.fillRect(cx * size, cy * size, size, size);
// // //                 drawnPixels.add(`${cx},${cy}`);
// // //                 cx += Math.floor(random() * 3) - 1;
// // //                 cy += Math.floor(random() * 2) - 1;
// // //                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
// // //               }
// // //             }
// // //           } else if (normalizedX >= 0.8 && normalizedY < 0.3 && random() > 0.95) {
// // //             ctx.fillStyle = "#fff";
// // //             let cx = x;
// // //             let cy = y;
// // //             const snakeLength = Math.floor(random() * 3) + 4;
// // //             for (let i = 0; i < snakeLength; i++) {
// // //               ctx.fillRect(cx * size, cy * size, size, size);
// // //               drawnPixels.add(`${cx},${cy}`);
// // //               cx += Math.floor(random() * 3) - 1;
// // //               cy += Math.floor(random() * 3) - 1;
// // //               if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
// // //             }
// // //           } else if (normalizedX > 0.7 && normalizedY > 0.7) {
// // //             if (random() > 0.1) {
// // //               ctx.fillStyle = "#fff";
// // //               ctx.fillRect(x * size, y * size, size, size);
// // //               drawnPixels.add(`${x},${y}`);
// // //             }
// // //           }

// // //           const bottomRightLimit = 0.6 - (1 - normalizedX) * 0.3;
// // //           if (normalizedY > 1 - bottomRightLimit && normalizedX > 0.6) {
// // //             ctx.fillStyle = "#fff";
// // //             ctx.fillRect(x * size, y * size, size, size);
// // //             drawnPixels.add(`${x},${y}`);
// // //           } else if (
// // //             normalizedX > 0.55 &&
// // //             normalizedY <= 1 - bottomRightLimit &&
// // //             normalizedY > 1 - bottomRightLimit - 0.12 &&
// // //             Math.random() > 0.92
// // //           ) {
// // //             ctx.fillStyle = "#fff";
// // //             ctx.fillRect(x * size, y * size, size, size);
// // //             drawnPixels.add(`${x},${y}`);

// // //             if (Math.random() > 0.7) {
// // //               let cx = x;
// // //               let cy = y;
// // //               const snakeLength = Math.floor(Math.random() * 2) + 2;
// // //               for (let i = 0; i < snakeLength; i++) {
// // //                 cx += Math.floor(Math.random() * 3) - 1;
// // //                 cy -= Math.floor(Math.random() * 2);
// // //                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
// // //                 ctx.fillRect(cx * size, cy * size, size, size);
// // //                 drawnPixels.add(`${cx},${cy}`);
// // //               }
// // //             }
// // //           }
// // //         }
// // //       }

// // //       // 🔢 Add glowing green 0/1 numbers to bottom pixels
// // //       ctx.font = "bold 20px monospace";
// // //       ctx.textAlign = "center";
// // //       ctx.textBaseline = "middle";
// // //       ctx.fillStyle = "#000000ff"; // neon green
// // //       ctx.shadowColor = "#000000ff";
     

// // //       for (let x = 0; x < cols; x++) {
// // //         let bottomLastY = -1;
// // //         for (let y = rows - 1; y >= 0; y--) {
// // //           if (drawnPixels.has(`${x},${y}`)) {
// // //             bottomLastY = y;
// // //             break;
// // //           }
// // //         }
// // //         if (bottomLastY !== -1) {
// // //           const isZero = x % 2 === 0;
// // //           const text = isZero ? "0" : "1";
// // //           ctx.fillText(text, x * size + size / 2, bottomLastY * size + size / 2);
// // //         }
// // //       }

// // //       ctx.shadowBlur = 0;
// // //       ctx.shadowColor = "transparent";
// // //     }

// // //     return () => window.removeEventListener("resize", resize);
// // //   }, []);

// // //   return (
// // //     <header className="term-hero-root">
// // //       <canvas ref={canvasRef} className="pixel-screen" />

// // //       <div className="overlay top-left" aria-hidden>
// // //         {typedTop.map((line, i) => {
// // //           if (line === "Divakar Trivedi") {
// // //             return (
// // //               <div
// // //                 key={i}
// // //                 className="hacker-line"
// // //                 style={{
// // //                   background: "#9d00ff",
// // //                   color: "white",
// // //                   padding: "4px 8px",
// // //                   fontSize: "43px",
// // //                   display: "inline-block",
// // //                 }}
// // //               >
// // //                 <span>{line}</span>
// // //                 <svg
// // //                   width="160"
// // //                   height="6"
// // //                   viewBox="0 0 160 6"
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   style={{ display: "block", marginTop: "4px" }}
// // //                 >
// // //                   <line
// // //                     x1="0"
// // //                     y1="3"
// // //                     x2="160"
// // //                     y2="3"
// // //                     stroke="white"
// // //                     strokeWidth="2"
// // //                     strokeLinecap="round"
// // //                   />
// // //                 </svg>
// // //               </div>
// // //             );
// // //           }

// // //           if (line.includes("HACKER") || line.includes("DEVELOPER")) {
// // //             const formattedLine = line
// // //               .replace(
// // //                 "HACKER",
// // //                 '<span style="background-color: lime; color: black; padding: 2px 4px;">HACKER</span>'
// // //               )
// // //               .replace(
// // //                 "DEVELOPER",
// // //                 '<span style="background-color: #FF4C24; color: white; padding: 2px 4px;">DEVELOPER</span>'
// // //               );

// // //             return (
// // //               <div
// // //                 key={i}
// // //                 className="hacker-line"
// // //                 dangerouslySetInnerHTML={{ __html: formattedLine }}
// // //               />
// // //             );
// // //           }

// // //           return (
// // //             <div key={i} className="hacker-line">
// // //               <span>{line}</span>
// // //               {typedTop[i] && typedTop[i].length < (topLines[i] || "").length ? (
// // //                 <span className="caret" />
// // //               ) : null}
// // //             </div>
// // //           );
// // //         })}
// // //       </div>

// // //       <div className="overlay bottom-right" aria-hidden>
// // //         <div className="bio-panel">
// // //           {typedBottom.map((line, i) => (
// // //             <div key={i} className="bio-line">
// // //               {line}
// // //               {typedBottom[i] && typedBottom[i].length < (bottomLines[i] || "").length ? (
// // //                 <span className="caret" />
// // //               ) : null}
// // //             </div>
// // //           ))}
// // //           <div style={{ marginTop: 6, fontSize: 12, opacity: 0.8 }}>
// // //             Cybersecurity · Pentesting · OSINT · Tooling
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // }



// // import React, { useEffect, useRef, useState } from "react";
// // import "./hero.css";

// // export default function Hero() {
// //   const canvasRef = useRef(null);

// //   const topLines = [
// //     "~$whoami",
// //     "Divakar Trivedi",
// //     "Uttar Pradesh, North India, India",
// //     "I'M just a HACKER born in a DEVELOPER's body"
// //   ];
// //   const bottomLines = [
// //     "Specialization: Web Security, Pentesting, Exploit Development",
// //     "Experience: Red Teaming, Threat Analysis, Vulnerability Assessment",
// //     "Interests: Ethical Hacking, Automation, Open Source Security Tools"
// //   ];

// //   const [typedTop, setTypedTop] = useState(topLines.map(() => ""));
// //   const [typedBottom, setTypedBottom] = useState(bottomLines.map(() => ""));

// //   useEffect(() => {
// //     let topLineIndex = 0;
// //     let topCharIndex = 0;
// //     let bottomLineIndex = 0;
// //     let bottomCharIndex = 0;

// //     const topInterval = setInterval(() => {
// //       setTypedTop((prev) => {
// //         const copy = [...prev];
// //         if (topLineIndex < topLines.length) {
// //           copy[topLineIndex] = topLines[topLineIndex].slice(0, topCharIndex + 1);
// //           topCharIndex++;
// //           if (topCharIndex > topLines[topLineIndex].length) {
// //             topCharIndex = 0;
// //             topLineIndex++;
// //           }
// //         }
// //         return copy;
// //       });
// //     }, 70);

// //     const bottomInterval = setInterval(() => {
// //       setTypedBottom((prev) => {
// //         const copy = [...prev];
// //         if (bottomLineIndex < bottomLines.length) {
// //           copy[bottomLineIndex] = bottomLines[bottomLineIndex].slice(0, bottomCharIndex + 1);
// //           bottomCharIndex++;
// //           if (bottomCharIndex > bottomLines[bottomLineIndex].length) {
// //             bottomCharIndex = 0;
// //             bottomLineIndex++;
// //           }
// //         }
// //         return copy;
// //       });
// //     }, 90);

// //     return () => {
// //       clearInterval(topInterval);
// //       clearInterval(bottomInterval);
// //     };
// //   }, []);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
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
// //       ctx.fillStyle = "#0b0b0b";
// //       ctx.fillRect(0, 0, width, height);

// //       const size = 30;
// //       const rows = Math.ceil(height / size);
// //       const cols = Math.ceil(width / size);

// //       let seed = 10101;
// //       function random() {
// //         seed = (seed * 1664525 + 1013904223) % 4294967296;
// //         return seed / 4294967296;
// //       }

// //       const drawnPixels = new Set();

// //       for (let y = 0; y < rows; y++) {
// //         for (let x = 0; x < cols; x++) {
// //           const normalizedX = x / cols;
// //           const normalizedY = y / rows;

// //           const heightLimit = 0.6 - normalizedX * 0.3;
// //           if (normalizedY < heightLimit && normalizedX < 0.4) {
// //             ctx.fillStyle = "#fff";
// //             ctx.fillRect(x * size, y * size, size, size);
// //             drawnPixels.add(`${x},${y}`);
// //           } else if (
// //             normalizedX < 0.45 &&
// //             normalizedY >= heightLimit &&
// //             normalizedY < heightLimit + 0.12 &&
// //             Math.random() > 0.92
// //           ) {
// //             ctx.fillStyle = "#fff";
// //             ctx.fillRect(x * size, y * size, size, size);
// //             drawnPixels.add(`${x},${y}`);
// //             if (Math.random() > 0.7) {
// //               let cx = x;
// //               let cy = y;
// //               const snakeLength = Math.floor(Math.random() * 2) + 2;
// //               for (let i = 0; i < snakeLength; i++) {
// //                 cx += Math.floor(Math.random() * 3) - 1;
// //                 cy += Math.floor(Math.random() * 2);
// //                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
// //                 ctx.fillRect(cx * size, cy * size, size, size);
// //                 drawnPixels.add(`${cx},${cy}`);
// //               }
// //             }
// //           } else if (normalizedX >= 0.4 && normalizedX < 0.8) {
// //             const waveLimit =
// //               0.4 + Math.sin(normalizedX * 6) * 0.05 + Math.cos(normalizedX * 3) * 0.03;
// //             if (normalizedY < waveLimit && random() > 0.8) {
// //               ctx.fillStyle = "#fff";
// //               let cx = x;
// //               let cy = y;
// //               const snakeLength = Math.floor(random() * 4) + 5;
// //               for (let i = 0; i < snakeLength; i++) {
// //                 ctx.fillRect(cx * size, cy * size, size, size);
// //                 drawnPixels.add(`${cx},${cy}`);
// //                 cx += Math.floor(random() * 3) - 1;
// //                 cy += Math.floor(random() * 2) - 1;
// //                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
// //               }
// //             }
// //           } else if (normalizedX >= 0.8 && normalizedY < 0.3 && random() > 0.95) {
// //             ctx.fillStyle = "#fff";
// //             let cx = x;
// //             let cy = y;
// //             const snakeLength = Math.floor(random() * 3) + 4;
// //             for (let i = 0; i < snakeLength; i++) {
// //               ctx.fillRect(cx * size, cy * size, size, size);
// //               drawnPixels.add(`${cx},${cy}`);
// //               cx += Math.floor(random() * 3) - 1;
// //               cy += Math.floor(random() * 3) - 1;
// //               if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
// //             }
// //           } else if (normalizedX > 0.7 && normalizedY > 0.7) {
// //             if (random() > 0.1) {
// //               ctx.fillStyle = "#fff";
// //               ctx.fillRect(x * size, y * size, size, size);
// //               drawnPixels.add(`${x},${y}`);
// //             }
// //           }

// //           const bottomRightLimit = 0.6 - (1 - normalizedX) * 0.3;
// //           if (normalizedY > 1 - bottomRightLimit && normalizedX > 0.6) {
// //             ctx.fillStyle = "#fff";
// //             ctx.fillRect(x * size, y * size, size, size);
// //             drawnPixels.add(`${x},${y}`);
// //           } else if (
// //             normalizedX > 0.55 &&
// //             normalizedY <= 1 - bottomRightLimit &&
// //             normalizedY > 1 - bottomRightLimit - 0.12 &&
// //             Math.random() > 0.92
// //           ) {
// //             ctx.fillStyle = "#fff";
// //             ctx.fillRect(x * size, y * size, size, size);
// //             drawnPixels.add(`${x},${y}`);

// //             if (Math.random() > 0.7) {
// //               let cx = x;
// //               let cy = y;
// //               const snakeLength = Math.floor(Math.random() * 2) + 2;
// //               for (let i = 0; i < snakeLength; i++) {
// //                 cx += Math.floor(Math.random() * 3) - 1;
// //                 cy -= Math.floor(Math.random() * 2);
// //                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
// //                 ctx.fillRect(cx * size, cy * size, size, size);
// //                 drawnPixels.add(`${cx},${cy}`);
// //               }
// //             }
// //           }
// //         }
// //       }

// //       // ⛔ 0/1 NUMBER DRAWING REMOVED COMPLETELY
// //     }

// //     return () => window.removeEventListener("resize", resize);
// //   }, []);

// //   return (
// //     <header className="term-hero-root">
// //       <canvas ref={canvasRef} className="pixel-screen" />

// //       <div className="overlay top-left" aria-hidden>
// //         {typedTop.map((line, i) => {
// //           if (line === "Divakar Trivedi") {
// //             return (
// //               <div
// //                 key={i}
// //                 className="hacker-line"
// //                 style={{
// //                   background: "#9d00ff",
// //                   color: "white",
// //                   padding: "4px 8px",
// //                   fontSize: "43px",
// //                   display: "inline-block",
// //                 }}
// //               >
// //                 <span>{line}</span>
// //                 <svg
// //                   width="160"
// //                   height="6"
// //                   viewBox="0 0 160 6"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   style={{ display: "block", marginTop: "4px" }}
// //                 >
// //                   <line
// //                     x1="0"
// //                     y1="3"
// //                     x2="160"
// //                     y2="3"
// //                     stroke="white"
// //                     strokeWidth="2"
// //                     strokeLinecap="round"
// //                   />
// //                 </svg>
// //               </div>
// //             );
// //           }

// //           if (line.includes("HACKER") || line.includes("DEVELOPER")) {
// //             const formattedLine = line
// //               .replace(
// //                 "HACKER",
// //                 '<span style="background-color: lime; color: black; padding: 2px 4px;">HACKER</span>'
// //               )
// //               .replace(
// //                 "DEVELOPER",
// //                 '<span style="background-color: #FF4C24; color: white; padding: 2px 4px;">DEVELOPER</span>'
// //               );

// //             return (
// //               <div
// //                 key={i}
// //                 className="hacker-line"
// //                 dangerouslySetInnerHTML={{ __html: formattedLine }}
// //               />
// //             );
// //           }

// //           return (
// //             <div key={i} className="hacker-line">
// //               <span>{line}</span>
// //               {typedTop[i] && typedTop[i].length < (topLines[i] || "").length ? (
// //                 <span className="caret" />
// //               ) : null}
// //             </div>
// //           );
// //         })}
// //       </div>

// //       <div className="overlay bottom-right" aria-hidden>
// //         <div className="bio-panel">
// //           {typedBottom.map((line, i) => (
// //             <div key={i} className="bio-line">
// //               {line}
// //               {typedBottom[i] && typedBottom[i].length < (bottomLines[i] || "").length ? (
// //                 <span className="caret" />
// //               ) : null}
// //             </div>
// //           ))}
// //           <div style={{ marginTop: 6, fontSize: 12, opacity: 0.8 }}>
// //             Cybersecurity · Pentesting · OSINT · Tooling
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }



// import React, { useEffect, useRef } from "react";
// import "./hero.css";

// export default function Hero() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       drawPixels();
//     };

//     window.addEventListener("resize", resize);
//     resize();

//     function drawPixels() {
//       const { width, height } = canvas;
//       ctx.fillStyle = "#ffffff";
//       ctx.fillRect(0, 0, width, height);

//       const size = 30;
//       const rows = Math.ceil(height / size);
//       const cols = Math.ceil(width / size);

//       let seed = 10101;
//       function random() {
//         seed = (seed * 1664525 + 1013904223) % 4294967296;
//         return seed / 4294967296;
//       }

//       const drawnPixels = new Set();

//       for (let y = 0; y < rows; y++) {
//         for (let x = 0; x < cols; x++) {
//           const normalizedX = x / cols;
//           const normalizedY = y / rows;

//           const heightLimit = 0.6 - normalizedX * 0.3;
//           if (normalizedY < heightLimit && normalizedX < 0.4) {
//             ctx.fillStyle = "#3300FF";
//             ctx.fillRect(x * size, y * size, size, size);
//             drawnPixels.add(`${x},${y}`);
//           } else if (
//             normalizedX < 0.45 &&
//             normalizedY >= heightLimit &&
//             normalizedY < heightLimit + 0.12 &&
//             Math.random() > 0.92
//           ) {
//             ctx.fillStyle = "#3300FF";
//             ctx.fillRect(x * size, y * size, size, size);
//             drawnPixels.add(`${x},${y}`);
//             if (Math.random() > 0.7) {
//               let cx = x;
//               let cy = y;
//               const snakeLength = Math.floor(Math.random() * 2) + 2;
//               for (let i = 0; i < snakeLength; i++) {
//                 cx += Math.floor(Math.random() * 3) - 1;
//                 cy += Math.floor(Math.random() * 2);
//                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
//                 ctx.fillRect(cx * size, cy * size, size, size);
//                 drawnPixels.add(`${cx},${cy}`);
//               }
//             }
//           } else if (normalizedX >= 0.4 && normalizedX < 0.8) {
//             const waveLimit =
//               0.4 + Math.sin(normalizedX * 6) * 0.05 + Math.cos(normalizedX * 3) * 0.03;
//             if (normalizedY < waveLimit && random() > 0.8) {
//               ctx.fillStyle = "#3300FF";
//               let cx = x;
//               let cy = y;
//               const snakeLength = Math.floor(random() * 4) + 5;
//               for (let i = 0; i < snakeLength; i++) {
//                 ctx.fillRect(cx * size, cy * size, size, size);
//                 drawnPixels.add(`${cx},${cy}`);
//                 cx += Math.floor(random() * 3) - 1;
//                 cy += Math.floor(random() * 2) - 1;
//                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
//               }
//             }
//           } else if (normalizedX >= 0.8 && normalizedY < 0.3 && random() > 0.95) {
//             ctx.fillStyle = "#3300FF";
//             let cx = x;
//             let cy = y;
//             const snakeLength = Math.floor(Math.random() * 3) + 4;
//             for (let i = 0; i < snakeLength; i++) {
//               ctx.fillRect(cx * size, cy * size, size, size);
//               drawnPixels.add(`${cx},${cy}`);
//               cx += Math.floor(random() * 3) - 1;
//               cy += Math.floor(random() * 3) - 1;
//               if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
//             }
//           } else if (normalizedX > 0.7 && normalizedY > 0.7) {
//             if (random() > 0.1) {
//               ctx.fillStyle = "#3300FF";
//               ctx.fillRect(x * size, y * size, size, size);
//               drawnPixels.add(`${x},${y}`);
//             }
//           }

//           const bottomRightLimit = 0.6 - (1 - normalizedX) * 0.3;
//           if (normalizedY > 1 - bottomRightLimit && normalizedX > 0.6) {
//             ctx.fillStyle = "#3300FF";
//             ctx.fillRect(x * size, y * size, size, size);
//             drawnPixels.add(`${x},${y}`);
//           } else if (
//             normalizedX > 0.55 &&
//             normalizedY <= 1 - bottomRightLimit &&
//             normalizedY > 1 - bottomRightLimit - 0.12 &&
//             Math.random() > 0.92
//           ) {
//             ctx.fillStyle = "#3300FF";
//             ctx.fillRect(x * size, y * size, size, size);
//             drawnPixels.add(`${x},${y}`);

//             if (Math.random() > 0.7) {
//               let cx = x;
//               let cy = y;
//               const snakeLength = Math.floor(Math.random() * 2) + 2;
//               for (let i = 0; i < snakeLength; i++) {
//                 cx += Math.floor(Math.random() * 3) - 1;
//                 cy -= Math.floor(Math.random() * 2);
//                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
//                 ctx.fillRect(cx * size, cy * size, size, size);
//                 drawnPixels.add(`${cx},${cy}`);
//               }
//             }
//           }
//         }
//       }
//     }

//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   return (
//     <header className="term-hero-root">
//       <canvas ref={canvasRef} className="pixel-screen" />
//     </header>
//   );
// }








// import React, { useEffect, useRef } from "react";
// import "./hero.css";

// export default function Hero() {
//   const canvasRef = useRef(null);
//   const servicesRef = useRef(null); // Right-side buttons container

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     // ===== PIXEL CANVAS CODE UNCHANGED =====
//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       drawPixels();
//     };

//     window.addEventListener("resize", resize);
//     resize();

//     function drawPixels() {
//       const { width, height } = canvas;
//       ctx.fillStyle = "#ffffff";
//       ctx.fillRect(0, 0, width, height);

//       const size = 30;
//       const rows = Math.ceil(height / size);
//       const cols = Math.ceil(width / size);

//       let seed = 10101;
//       function random() {
//         seed = (seed * 1664525 + 1013904223) % 4294967296;
//         return seed / 4294967296;
//       }

//       const drawnPixels = new Set();

//       for (let y = 0; y < rows; y++) {
//         for (let x = 0; x < cols; x++) {
//           const normalizedX = x / cols;
//           const normalizedY = y / rows;

//           const heightLimit = 0.6 - normalizedX * 0.3;
//           if (normalizedY < heightLimit && normalizedX < 0.4) {
//             ctx.fillStyle = "#3300FF";
//             ctx.fillRect(x * size, y * size, size, size);
//             drawnPixels.add(`${x},${y}`);
//           } else if (
//             normalizedX < 0.45 &&
//             normalizedY >= heightLimit &&
//             normalizedY < heightLimit + 0.12 &&
//             Math.random() > 0.92
//           ) {
//             ctx.fillStyle = "#3300FF";
//             ctx.fillRect(x * size, y * size, size, size);
//             drawnPixels.add(`${x},${y}`);
//             if (Math.random() > 0.7) {
//               let cx = x;
//               let cy = y;
//               const snakeLength = Math.floor(Math.random() * 2) + 2;
//               for (let i = 0; i < snakeLength; i++) {
//                 cx += Math.floor(Math.random() * 3) - 1;
//                 cy += Math.floor(Math.random() * 2);
//                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
//                 ctx.fillRect(cx * size, cy * size, size, size);
//                 drawnPixels.add(`${cx},${cy}`);
//               }
//             }
//           } else if (normalizedX >= 0.4 && normalizedX < 0.8) {
//             const waveLimit =
//               0.4 + Math.sin(normalizedX * 6) * 0.05 + Math.cos(normalizedX * 3) * 0.03;
//             if (normalizedY < waveLimit && random() > 0.8) {
//               ctx.fillStyle = "#3300FF";
//               let cx = x;
//               let cy = y;
//               const snakeLength = Math.floor(random() * 4) + 5;
//               for (let i = 0; i < snakeLength; i++) {
//                 ctx.fillRect(cx * size, cy * size, size, size);
//                 drawnPixels.add(`${cx},${cy}`);
//                 cx += Math.floor(random() * 3) - 1;
//                 cy += Math.floor(random() * 2) - 1;
//                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
//               }
//             }
//           } else if (normalizedX >= 0.8 && normalizedY < 0.3 && random() > 0.95) {
//             ctx.fillStyle = "#3300FF";
//             let cx = x;
//             let cy = y;
//             const snakeLength = Math.floor(Math.random() * 3) + 4;
//             for (let i = 0; i < snakeLength; i++) {
//               ctx.fillRect(cx * size, cy * size, size, size);
//               drawnPixels.add(`${cx},${cy}`);
//               cx += Math.floor(random() * 3) - 1;
//               cy += Math.floor(random() * 3) - 1;
//               if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
//             }
//           } else if (normalizedX > 0.7 && normalizedY > 0.7) {
//             if (random() > 0.1) {
//               ctx.fillStyle = "#3300FF";
//               ctx.fillRect(x * size, y * size, size, size);
//               drawnPixels.add(`${x},${y}`);
//             }
//           }

//           const bottomRightLimit = 0.6 - (1 - normalizedX) * 0.3;
//           if (normalizedY > 1 - bottomRightLimit && normalizedX > 0.6) {
//             ctx.fillStyle = "#3300FF";
//             ctx.fillRect(x * size, y * size, size, size);
//             drawnPixels.add(`${x},${y}`);
//           } else if (
//             normalizedX > 0.55 &&
//             normalizedY <= 1 - bottomRightLimit &&
//             normalizedY > 1 - bottomRightLimit - 0.12 &&
//             Math.random() > 0.92
//           ) {
//             ctx.fillStyle = "#3300FF";
//             ctx.fillRect(x * size, y * size, size, size);
//             drawnPixels.add(`${x},${y}`);

//             if (Math.random() > 0.7) {
//               let cx = x;
//               let cy = y;
//               const snakeLength = Math.floor(Math.random() * 2) + 2;
//               for (let i = 0; i < snakeLength; i++) {
//                 cx += Math.floor(Math.random() * 3) - 1;
//                 cy -= Math.floor(Math.random() * 2);
//                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
//                 ctx.fillRect(cx * size, cy * size, size, size);
//                 drawnPixels.add(`${cx},${cy}`);
//               }
//             }
//           }
//         }
//       }
//     }

//     // ===== RIGHT-SIDE BUTTON FALLING ANIMATION =====
//     if (servicesRef.current) {
//       const items = servicesRef.current.querySelectorAll(".term-hero__services span");
//       const spacing = 10;

//       items.forEach((item, index) => {
//         const finalY = index * (item.offsetHeight + spacing);
//         item.style.top = "-80px";

//         let y = -80;
//         const fallSpeed = 2 + Math.random() * 2;

//         const fall = () => {
//           y += fallSpeed;
//           if (y >= finalY) y = finalY;
//           item.style.top = `${y}px`;

//           if (y < finalY) requestAnimationFrame(fall);
//         };

//         fall();
//       });
//     }

//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   return (
//     <header className="term-hero-root">
//       <canvas ref={canvasRef} className="pixel-screen" />

//       <div className="term-hero__overlay">
//         {/* LEFT */}
//         <div className="term-hero__overlay-left">
//           <div className="term-hero__intro">
//             <span className="term-hero__availability">
//               Available for Projects Jan ’26
//             </span>
//             <h1 className="term-hero__headline">
//               Helping Brands & Startups <br />
//               Build Design That Solves Problems <br />
//               And Stands Bold.
//             </h1>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="term-hero__overlay-right">
//           <div className="term-hero__services" ref={servicesRef}>
//             <span>Brand Identity</span>
//             <span>UI / UX Design</span>
//             <span>Product Design</span>
//             <span>Web Design</span>
//             <span>Mobile App Design</span>
//             <span>Design Systems</span>
//             <span>Visual Direction</span>
//             <span>Brand Strategy</span>
//             <span>Creative Consulting</span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }



// import React, { useEffect, useRef, useState } from "react";
// import "./Hero.css";

// export default function Hero() {
//   const canvasRef = useRef(null);
//   const servicesRef = useRef(null);
//   const [hoveredButtons, setHoveredButtons] = useState({});

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     // ===== PIXEL CANVAS CODE UNCHANGED =====
//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       drawPixels();
//     };

//     window.addEventListener("resize", resize);
//     resize();

//     function drawPixels() {
//       const { width, height } = canvas;
//       ctx.fillStyle = "#1B1C1F";
//       ctx.fillRect(0, 0, width, height);

//       const size = 30;
//       const rows = Math.ceil(height / size);
//       const cols = Math.ceil(width / size);

//       let seed = 10101;
//       function random() {
//         seed = (seed * 1664525 + 1013904223) % 4294967296;
//         return seed / 4294967296;
//       }

//       const drawnPixels = new Set();

//       for (let y = 0; y < rows; y++) {
//         for (let x = 0; x < cols; x++) {
//           const normalizedX = x / cols;
//           const normalizedY = y / rows;

//           const heightLimit = 0.6 - normalizedX * 0.3;
//           if (normalizedY < heightLimit && normalizedX < 0.4) {
//             ctx.fillStyle = "#ffffff";
//             ctx.fillRect(x * size, y * size, size, size);
//             drawnPixels.add(`${x},${y}`);
//           } else if (
//             normalizedX < 0.45 &&
//             normalizedY >= heightLimit &&
//             normalizedY < heightLimit + 0.12 &&
//             Math.random() > 0.92
//           ) {
//             ctx.fillStyle = "#ffffff";
//             ctx.fillRect(x * size, y * size, size, size);
//             drawnPixels.add(`${x},${y}`);
//             if (Math.random() > 0.7) {
//               let cx = x;
//               let cy = y;
//               const snakeLength = Math.floor(Math.random() * 2) + 2;
//               for (let i = 0; i < snakeLength; i++) {
//                 cx += Math.floor(Math.random() * 3) - 1;
//                 cy += Math.floor(Math.random() * 2);
//                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
//                 ctx.fillRect(cx * size, cy * size, size, size);
//                 drawnPixels.add(`${cx},${cy}`);
//               }
//             }
//           } else if (normalizedX >= 0.4 && normalizedX < 0.8) {
//             const waveLimit =
//               0.4 + Math.sin(normalizedX * 6) * 0.05 + Math.cos(normalizedX * 3) * 0.03;
//             if (normalizedY < waveLimit && random() > 0.8) {
//               ctx.fillStyle = "#ffffff";
//               let cx = x;
//               let cy = y;
//               const snakeLength = Math.floor(random() * 4) + 5;
//               for (let i = 0; i < snakeLength; i++) {
//                 ctx.fillRect(cx * size, cy * size, size, size);
//                 drawnPixels.add(`${cx},${cy}`);
//                 cx += Math.floor(random() * 3) - 1;
//                 cy += Math.floor(random() * 2) - 1;
//                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
//               }
//             }
//           } else if (normalizedX >= 0.8 && normalizedY < 0.3 && random() > 0.95) {
//             ctx.fillStyle = "#ffffff";
//             let cx = x;
//             let cy = y;
//             const snakeLength = Math.floor(Math.random() * 3) + 4;
//             for (let i = 0; i < snakeLength; i++) {
//               ctx.fillRect(cx * size, cy * size, size, size);
//               drawnPixels.add(`${cx},${cy}`);
//               cx += Math.floor(random() * 3) - 1;
//               cy += Math.floor(random() * 3) - 1;
//               if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
//             }
//           } else if (normalizedX > 0.7 && normalizedY > 0.7) {
//             if (random() > 0.1) {
//               ctx.fillStyle = "#ffffff";
//               ctx.fillRect(x * size, y * size, size, size);
//               drawnPixels.add(`${x},${y}`);
//             }
//           }

//           const bottomRightLimit = 0.6 - (1 - normalizedX) * 0.3;
//           if (normalizedY > 1 - bottomRightLimit && normalizedX > 0.6) {
//             ctx.fillStyle = "#ffffff";
//             ctx.fillRect(x * size, y * size, size, size);
//             drawnPixels.add(`${x},${y}`);
//           } else if (
//             normalizedX > 0.55 &&
//             normalizedY <= 1 - bottomRightLimit &&
//             normalizedY > 1 - bottomRightLimit - 0.12 &&
//             Math.random() > 0.92
//           ) {
//             ctx.fillStyle = "#ffffff";
//             ctx.fillRect(x * size, y * size, size, size);
//             drawnPixels.add(`${x},${y}`);

//             if (Math.random() > 0.7) {
//               let cx = x;
//               let cy = y;
//               const snakeLength = Math.floor(Math.random() * 2) + 2;
//               for (let i = 0; i < snakeLength; i++) {
//                 cx += Math.floor(Math.random() * 3) - 1;
//                 cy -= Math.floor(Math.random() * 2);
//                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
//                 ctx.fillRect(cx * size, cy * size, size, size);
//                 drawnPixels.add(`${cx},${cy}`);
//               }
//             }
//           }
//         }
//       }
//     }

//     // Add hover event listeners to buttons
//     const setupButtonHovers = () => {
//       if (!servicesRef.current) return;

//       const container = servicesRef.current;
//       const buttons = container.querySelectorAll("span");
      
//       buttons.forEach((button, index) => {
//         // Remove any existing event listeners first
//         const newButton = button.cloneNode(true);
//         button.parentNode.replaceChild(newButton, button);

//         // Mouse enter event
//         newButton.addEventListener("mouseenter", () => {
//           setHoveredButtons(prev => ({ ...prev, [index]: true }));
//           newButton.style.background = "#FF3300";
//           newButton.style.color = "white";
//           newButton.style.transform = "scale(1.05)";
//           newButton.style.transition = "all 0.2s ease";
//         });

//         // Mouse leave event
//         newButton.addEventListener("mouseleave", () => {
//           setHoveredButtons(prev => ({ ...prev, [index]: false }));
//           newButton.style.background = "";
//           newButton.style.color = "";
//           newButton.style.transform = "";
//         });
//       });
//     };

//     // Setup button hovers
//     setTimeout(setupButtonHovers, 100);

//     return () => {
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
// <header id="Hero" className="term-hero-root">

//       <canvas ref={canvasRef} className="pixel-screen" />

//       <div className="term-hero__overlay">
//         {/* LEFT - UNCHANGED */}
//         <div className="term-hero__overlay-left">
//           <div className="term-hero__intro">
//             <span className="term-hero__availability">
//               Available for Projects Jan ’26
//             </span>
//             <h1 className="term-hero__headline">
//               Helping Brands & Startups <br />
//               Build Design That Solves Problems <br />
//               And Stands Bold.
//             </h1>
//           </div>
//         </div>

//         {/* RIGHT - BUTTONS STACKED LIKE BRICKS AT BOTTOM */}
//         <div className="term-hero__overlay-right">
//           <div className="term-hero__services" ref={servicesRef}>
//             <span className={hoveredButtons[0] ? "stuck" : ""}>Brand Identity</span>
//             <span className={hoveredButtons[1] ? "stuck" : ""}>UI / UX Design</span>
//             <span className={hoveredButtons[2] ? "stuck" : ""}>Product Design</span>
//             <span className={hoveredButtons[3] ? "stuck" : ""}>Web Design</span>
//             <span className={hoveredButtons[4] ? "stuck" : ""}>Mobile App Design</span>
//             <span className={hoveredButtons[5] ? "stuck" : ""}>Design Systems</span>
//             <span className={hoveredButtons[6] ? "stuck" : ""}>Visual Direction</span>
//             <span className={hoveredButtons[7] ? "stuck" : ""}>Brand Strategy</span>
//             <span className={hoveredButtons[8] ? "stuck" : ""}>Creative Consulting</span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }




// import React, { useEffect, useRef } from "react";

// export default function Hero() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     // 🔥 SET SIZE ONLY ONCE (NO RESIZE LISTENER)
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     drawPixels();

//     function drawPixels() {
//       const { width, height } = canvas;

//       ctx.fillStyle = "#242021";
//       ctx.fillRect(0, 0, width, height);

//       const size = 30;
//       const rows = Math.floor(height / size);
//       const cols = Math.floor(width / size);

//       let seed = 10101;
//       const random = () => {
//         seed = (seed * 1664525 + 1013904223) % 4294967296;
//         return seed / 4294967296;
//       };

//       const drawnPixels = new Set();

//       for (let y = 0; y < rows; y++) {
//         for (let x = 0; x < cols; x++) {
//           const normalizedX = x / cols;
//           const normalizedY = y / rows;

//           const w = x === cols - 1 ? width - x * size : size;
//           const h = y === rows - 1 ? height - y * size : size;

//           // Top dense block
//           if (normalizedY <= 0.2) {
//             ctx.fillStyle = "#F1F1F1";
//             ctx.fillRect(x * size, y * size, w, h);
//             drawnPixels.add(`${x},${y}`);
//             continue;
//           }

//           const heightLimit = 0.6 - normalizedX * 0.3;

//           if (normalizedY < heightLimit && normalizedX < 0.4) {
//             ctx.fillStyle = "#F1F1F1";
//             ctx.fillRect(x * size, y * size, w, h);
//             drawnPixels.add(`${x},${y}`);
//           } else if (
//             normalizedX < 0.45 &&
//             normalizedY >= heightLimit &&
//             normalizedY < heightLimit + 0.12 &&
//             random() > 0.92
//           ) {
//             ctx.fillStyle = "#F1F1F1";
//             ctx.fillRect(x * size, y * size, w, h);
//             drawnPixels.add(`${x},${y}`);

//             if (random() > 0.7) {
//               let cx = x;
//               let cy = y;
//               const snakeLength = Math.floor(random() * 2) + 2;

//               for (let i = 0; i < snakeLength; i++) {
//                 cx += Math.floor(random() * 3) - 1;
//                 cy += Math.floor(random() * 2);

//                 if (cx < 0 || cx >= cols || cy >= rows) break;

//                 const sw = cx === cols - 1 ? width - cx * size : size;
//                 const sh = cy === rows - 1 ? height - cy * size : size;

//                 ctx.fillRect(cx * size, cy * size, sw, sh);
//                 drawnPixels.add(`${cx},${cy}`);
//               }
//             }
//           } else if (normalizedX >= 0.4 && normalizedX < 0.8) {
//             const waveLimit =
//               0.4 +
//               Math.sin(normalizedX * 6) * 0.05 +
//               Math.cos(normalizedX * 3) * 0.03;

//             if (normalizedY < waveLimit && random() > 0.8) {
//               ctx.fillStyle = "#F1F1F1";

//               let cx = x;
//               let cy = y;
//               const snakeLength = Math.floor(random() * 4) + 5;

//               for (let i = 0; i < snakeLength; i++) {
//                 const sw = cx === cols - 1 ? width - cx * size : size;
//                 const sh = cy === rows - 1 ? height - cy * size : size;

//                 ctx.fillRect(cx * size, cy * size, sw, sh);
//                 drawnPixels.add(`${cx},${cy}`);

//                 cx += Math.floor(random() * 3) - 1;
//                 cy += Math.floor(random() * 2) - 1;

//                 if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
//               }
//             }
//           } else if (
//             normalizedX >= 0.8 &&
//             normalizedY < 0.3 &&
//             random() > 0.95
//           ) {
//             ctx.fillStyle = "#F1F1F1";

//             let cx = x;
//             let cy = y;
//             const snakeLength = Math.floor(random() * 3) + 4;

//             for (let i = 0; i < snakeLength; i++) {
//               const sw = cx === cols - 1 ? width - cx * size : size;
//               const sh = cy === rows - 1 ? height - cy * size : size;

//               ctx.fillRect(cx * size, cy * size, sw, sh);
//               drawnPixels.add(`${cx},${cy}`);

//               cx += Math.floor(random() * 3) - 1;
//               cy += Math.floor(random() * 3) - 1;

//               if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
//             }
//           } else if (normalizedX > 0.7 && normalizedY > 0.7) {
//             if (random() > 0.1) {
//               ctx.fillStyle = "#F1F1F1";
//               ctx.fillRect(x * size, y * size, w, h);
//               drawnPixels.add(`${x},${y}`);
//             }
//           }

//           const bottomRightLimit = 0.35 - (1 - normalizedX) * 0.1;

//           if (normalizedY > 1 - bottomRightLimit && normalizedX > 0.6) {
//             ctx.fillStyle = "#F1F1F1";
//             ctx.fillRect(x * size, y * size, w, h);
//             drawnPixels.add(`${x},${y}`);

//             if (random() > 0.7) {
//               let cx = x - 1;
//               let cy = y;
//               const snakeLength = Math.floor(random() * 3) + 2;

//               for (let i = 0; i < snakeLength; i++) {
//                 if (cx < 0) break;

//                 const sw = cx === cols - 1 ? width - cx * size : size;
//                 const sh = cy === rows - 1 ? height - cy * size : size;

//                 ctx.fillRect(cx * size, cy * size, sw, sh);
//                 drawnPixels.add(`${cx},${cy}`);

//                 cx -= 1;
//                 cy += Math.floor(random() * 2) - 1;
//               }
//             }
//           }
//         }
//       }

//       // Binary numbers
//       ctx.font = `${size * 0.55}px monospace`;
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";

//       drawnPixels.forEach((pos) => {
//         const [x, y] = pos.split(",").map(Number);

//         if (x === 0 || x === cols - 1 || y === 0 || y === rows - 1) return;

//         const neighbors = [
//           `${x + 1},${y}`,
//           `${x - 1},${y}`,
//           `${x},${y + 1}`,
//           `${x},${y - 1}`,
//         ];

//         const touchingDark = neighbors.some(
//           (n) => !drawnPixels.has(n)
//         );

//         if (touchingDark) {
//           ctx.fillStyle = "#000000";
//           ctx.fillText(
//             random() > 0.5 ? "1" : "0",
//             x * size + size / 2,
//             y * size + size / 2
//           );
//         }
//       });
//     }
//   }, []);

//   return (
//     <header
//       style={{
//         width: "100vw",
//         height: "100dvh", // stable mobile height
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       <canvas
//         ref={canvasRef}
//         style={{
//           display: "block",
//           width: "100%",
//           height: "100%",
//         }}
//       />
//     </header>
//   );
// }


import React, { useEffect, useRef, useCallback } from "react";

export default function Hero() {
  const canvasRef = useRef(null);

  const drawPixels = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;

    ctx.fillStyle = "#242021";
    ctx.fillRect(0, 0, width, height);

    // 📐 Calculate pixel size based on screen width
    // This makes pixels scale with screen size
    const baseSize = Math.min(width, height) * 0.035; // 3.5% of smallest dimension
    const size = Math.max(20, Math.min(40, Math.floor(baseSize))); // Clamp between 20-40px
    
    const rows = Math.floor(height / size);
    const cols = Math.floor(width / size);

    let seed = 10101;
    const random = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };

    const drawnPixels = new Set();

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const normalizedX = x / cols;
        const normalizedY = y / rows;

        const w = x === cols - 1 ? width - x * size : size;
        const h = y === rows - 1 ? height - y * size : size;

        // Top dense block
        if (normalizedY <= 0.2) {
          ctx.fillStyle = "#F1F1F1";
          ctx.fillRect(x * size, y * size, w, h);
          drawnPixels.add(`${x},${y}`);
          continue;
        }

        const heightLimit = 0.6 - normalizedX * 0.3;

        if (normalizedY < heightLimit && normalizedX < 0.4) {
          ctx.fillStyle = "#F1F1F1";
          ctx.fillRect(x * size, y * size, w, h);
          drawnPixels.add(`${x},${y}`);
        } else if (
          normalizedX < 0.45 &&
          normalizedY >= heightLimit &&
          normalizedY < heightLimit + 0.12 &&
          random() > 0.92
        ) {
          ctx.fillStyle = "#F1F1F1";
          ctx.fillRect(x * size, y * size, w, h);
          drawnPixels.add(`${x},${y}`);

          if (random() > 0.7) {
            let cx = x;
            let cy = y;
            const snakeLength = Math.floor(random() * 2) + 2;

            for (let i = 0; i < snakeLength; i++) {
              cx += Math.floor(random() * 3) - 1;
              cy += Math.floor(random() * 2);

              if (cx < 0 || cx >= cols || cy >= rows) break;

              const sw = cx === cols - 1 ? width - cx * size : size;
              const sh = cy === rows - 1 ? height - cy * size : size;

              ctx.fillRect(cx * size, cy * size, sw, sh);
              drawnPixels.add(`${cx},${cy}`);
            }
          }
        } else if (normalizedX >= 0.4 && normalizedX < 0.8) {
          const waveLimit =
            0.4 +
            Math.sin(normalizedX * 6) * 0.05 +
            Math.cos(normalizedX * 3) * 0.03;

          if (normalizedY < waveLimit && random() > 0.8) {
            ctx.fillStyle = "#F1F1F1";

            let cx = x;
            let cy = y;
            const snakeLength = Math.floor(random() * 4) + 5;

            for (let i = 0; i < snakeLength; i++) {
              const sw = cx === cols - 1 ? width - cx * size : size;
              const sh = cy === rows - 1 ? height - cy * size : size;

              ctx.fillRect(cx * size, cy * size, sw, sh);
              drawnPixels.add(`${cx},${cy}`);

              cx += Math.floor(random() * 3) - 1;
              cy += Math.floor(random() * 2) - 1;

              if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
            }
          }
        } else if (
          normalizedX >= 0.8 &&
          normalizedY < 0.3 &&
          random() > 0.95
        ) {
          ctx.fillStyle = "#F1F1F1";

          let cx = x;
          let cy = y;
          const snakeLength = Math.floor(random() * 3) + 4;

          for (let i = 0; i < snakeLength; i++) {
            const sw = cx === cols - 1 ? width - cx * size : size;
            const sh = cy === rows - 1 ? height - cy * size : size;

            ctx.fillRect(cx * size, cy * size, sw, sh);
            drawnPixels.add(`${cx},${cy}`);

            cx += Math.floor(random() * 3) - 1;
            cy += Math.floor(random() * 3) - 1;

            if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
          }
        } else if (normalizedX > 0.7 && normalizedY > 0.7) {
          if (random() > 0.1) {
            ctx.fillStyle = "#F1F1F1";
            ctx.fillRect(x * size, y * size, w, h);
            drawnPixels.add(`${x},${y}`);
          }
        }

        const bottomRightLimit = 0.35 - (1 - normalizedX) * 0.1;

        if (normalizedY > 1 - bottomRightLimit && normalizedX > 0.6) {
          ctx.fillStyle = "#F1F1F1";
          ctx.fillRect(x * size, y * size, w, h);
          drawnPixels.add(`${x},${y}`);

          if (random() > 0.7) {
            let cx = x - 1;
            let cy = y;
            const snakeLength = Math.floor(random() * 3) + 2;

            for (let i = 0; i < snakeLength; i++) {
              if (cx < 0) break;

              const sw = cx === cols - 1 ? width - cx * size : size;
              const sh = cy === rows - 1 ? height - cy * size : size;

              ctx.fillRect(cx * size, cy * size, sw, sh);
              drawnPixels.add(`${cx},${cy}`);

              cx -= 1;
              cy += Math.floor(random() * 2) - 1;
            }
          }
        }
      }
    }

    // Binary numbers - scale font with pixel size
    ctx.font = `${Math.floor(size * 0.55)}px monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    drawnPixels.forEach((pos) => {
      const [x, y] = pos.split(",").map(Number);

      if (x === 0 || x === cols - 1 || y === 0 || y === rows - 1) return;

      const neighbors = [
        `${x + 1},${y}`,
        `${x - 1},${y}`,
        `${x},${y + 1}`,
        `${x},${y - 1}`,
      ];

      const touchingDark = neighbors.some(
        (n) => !drawnPixels.has(n)
      );

      if (touchingDark) {
        ctx.fillStyle = "#000000";
        ctx.fillText(
          random() > 0.5 ? "1" : "0",
          x * size + size / 2,
          y * size + size / 2
        );
      }
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    
    const handleResize = () => {
      // Update canvas size on resize
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Redraw with new dimensions
      drawPixels();
    };

    // Initial setup
    handleResize();

    // Add resize listener with debounce for better performance
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debouncedResize);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [drawPixels]);

  return (
    <header
      style={{
        width: "100vw",
        height: "100dvh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />
    </header>
  );
}