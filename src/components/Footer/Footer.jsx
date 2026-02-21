// import React, { useEffect, useRef } from "react";
// import "./Footer.css";

// export function Footer() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

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

//       ctx.fillStyle = "#242021";
//       ctx.fillRect(0, 0, width, height);

//       const size = 30;
//       const rows = Math.floor(height / size);
//       const cols = Math.floor(width / size);

//       let seed = 121212;
//       const random = () => {
//         seed = (seed * 1664525 + 1013904223) % 4294967296;
//         return seed / 4294967296;
//       };

//       const drawnPixels = new Set();

//       for (let y = 0; y < rows; y++) {
//         const ny = y / rows;

//         for (let x = 0; x < cols; x++) {
//           const nx = x / cols;

//           const w = x === cols - 1 ? width - x * size : size;
//           const h = y === rows - 1 ? height - y * size : size;

//           let draw = false;

//           // 🔝 15% FULL DENSE
//           if (ny < 0.15) {
//             draw = true;
//           }

//           // 🔹 10% BROKEN LEFT MIX
//           else if (ny >= 0.15 && ny < 0.25) {
//             if (nx < 0.35) draw = true;
//             if (random() > 0.88) draw = true;
//           }

//           // ⬛ 5% BLANK
//           else if (ny >= 0.25 && ny < 0.30) {
//             draw = false;
//           }

//           // 🌫 8% SOFT TRANSITION SCATTER
//           else if (ny >= 0.30 && ny < 0.38) {
//             if (random() > 0.82) draw = true;
//           }

//           // 🔻 LOWER DENSE (raised start, no straight line)
//           else if (ny >= 0.38) {
//             draw = true;

//             // break hard straight top edge
//             if (ny < 0.42 && random() > 0.92) {
//               draw = false;
//             }
//           }

//           if (draw) {
//             ctx.fillStyle = "#F1F1F1";
//             ctx.fillRect(x * size, y * size, w, h);
//             drawnPixels.add(`${x},${y}`);
//           }
//         }
//       }

//       // 🐍 ONLY 2–3 SNAKE COUNTER PIXELS
//       const snakeCount = 2 + Math.floor(random() * 2);

//       for (let i = 0; i < snakeCount; i++) {
//         let x = Math.floor(random() * cols);
//         let y = Math.floor(rows * 0.45 + random() * rows * 0.4);

//         const length = 3 + Math.floor(random() * 2);

//         for (let j = 0; j < length; j++) {
//           const key = `${x},${y}`;

//           if (drawnPixels.has(key)) {
//             drawnPixels.delete(key);
//             ctx.fillStyle = "#242021";
//             ctx.fillRect(x * size, y * size, size, size);
//           }

//           x += random() > 0.5 ? 1 : -1;
//           y += random() > 0.6 ? 1 : 0;

//           if (x <= 1 || x >= cols - 2) break;
//           if (y <= 1 || y >= rows - 2) break;
//         }
//       }

//       // 🔢 Binary only on edge-touching pixels
//       ctx.font = `${size * 0.55}px monospace`;
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";

//       drawnPixels.forEach((pos) => {
//         const [x, y] = pos.split(",").map(Number);

//         if (
//           x === 0 ||
//           y === 0 ||
//           x === cols - 1 ||
//           y === rows - 1
//         )
//           return;

//         const neighbors = [
//           `${x + 1},${y}`,
//           `${x - 1},${y}`,
//           `${x},${y + 1}`,
//           `${x},${y - 1}`,
//         ];

//         const touchingDark = neighbors.some((n) => !drawnPixels.has(n));

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

//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   return (
//     <footer className="footer-pixel-wrapper-unique">
//   <canvas
//     ref={canvasRef}
//     className="footer-pixel-canvas-unique"
//   />

//   <div className="footer-overlay">
//     <div className="footer-bottom-boxes">

//       {/* LEFT SIDE */}
//       <div className="bottom-box">
//         <h2>IF YOU WANT TO KEEP IN TOUCH / UP-TO-DATE</h2>

//         <p>
//           On various releases, updates, etc. might I recommend signing up
//           to a newsletter. I'm not sure how often I'll get around to
//           sending them out, but I'll make sure they're only meaningful /
//           worth your while.
//         </p>

//         <h4>WHAT IT IS</h4>
//         <ul>
//           <li>New releases</li>
//           <li>Free / exclusive content</li>
//           <li>Beta testing</li>
//           <li>Discounts / promos</li>
//           <li>Updates</li>
//         </ul>

//         <h4>WHAT IT ISN'T</h4>
//         <ul>
//           <li>Spam</li>
//           <li>Airing of grievances</li>
//           <li>Conspiracy theories</li>
//         </ul>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="bottom-box">
//         <h3>WHO ARE YOU</h3>
//         <p>[Your Name]</p>

//         <h3>HOW DO I REACH YOU</h3>
//         <p>[Your Email]</p>
//         <p>[ㅈ]</p>
//       </div>

//     </div>
//   </div>
// </footer>

//   );
// }











import React, { useEffect, useRef } from "react";
import "./Footer.css";

export function Footer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawPixels();
    };

    window.addEventListener("resize", resize);
    resize();

    function drawPixels() {
      const { width, height } = canvas;

      ctx.fillStyle = "#242021";
      ctx.fillRect(0, 0, width, height);

      const size = 30;
      const rows = Math.floor(height / size);
      const cols = Math.floor(width / size);

      let seed = 121212;
      const random = () => {
        seed = (seed * 1664525 + 1013904223) % 4294967296;
        return seed / 4294967296;
      };

      const drawnPixels = new Set();

      for (let y = 0; y < rows; y++) {
        const ny = y / rows;

        for (let x = 0; x < cols; x++) {
          const nx = x / cols;

          const w = x === cols - 1 ? width - x * size : size;
          const h = y === rows - 1 ? height - y * size : size;

          let draw = false;

          if (ny < 0.15) {
            draw = true;
          } else if (ny >= 0.15 && ny < 0.25) {
            if (nx < 0.35) draw = true;
            if (random() > 0.88) draw = true;
          } else if (ny >= 0.25 && ny < 0.30) {
            draw = false;
          } else if (ny >= 0.30 && ny < 0.38) {
            if (random() > 0.82) draw = true;
          } else if (ny >= 0.38) {
            draw = true;
            if (ny < 0.42 && random() > 0.92) {
              draw = false;
            }
          }

          if (draw) {
            ctx.fillStyle = "#F1F1F1";
            ctx.fillRect(x * size, y * size, w, h);
            drawnPixels.add(`${x},${y}`);
          }
        }
      }

      // only 2–3 subtle snake cuts
      const snakeCount = 2 + Math.floor(random() * 2);

      for (let i = 0; i < snakeCount; i++) {
        let x = Math.floor(random() * cols);
        let y = Math.floor(rows * 0.45 + random() * rows * 0.4);
        const length = 3 + Math.floor(random() * 2);

        for (let j = 0; j < length; j++) {
          const key = `${x},${y}`;

          if (drawnPixels.has(key)) {
            drawnPixels.delete(key);
            ctx.fillStyle = "#242021";
            ctx.fillRect(x * size, y * size, size, size);
          }

          x += random() > 0.5 ? 1 : -1;
          y += random() > 0.6 ? 1 : 0;

          if (x <= 1 || x >= cols - 2) break;
          if (y <= 1 || y >= rows - 2) break;
        }
      }
    }

    return () => window.removeEventListener("resize", resize);
  }, []);

   return (
    <footer className="footer">
      <canvas ref={canvasRef} className="footer-canvas" />

      <div className="footer-overlay">
        <div className="footer-bottom-container">

          {/* LEFT SIDE */}
          <div className="left-side">

            <div className="left-box">
              <h2>IF YOU WANT TO KEEP IN TOUCH / UP-TO-DATE</h2>
              <p>
                On various releases, updates, etc. might I recommend signing up
                to a newsletter. I'm not sure how often I'll get around to
                sending them out, but I'll make sure they're only meaningful /
                worth your while.
              </p>
            </div>

            <div className="left-box">
              <h4>WHAT IT IS</h4>
              <ul>
                <li>New releases</li>
                <li>Free / exclusive content</li>
                <li>Beta testing</li>
                <li>Discounts / promos</li>
                <li>Updates</li>
              </ul>
            </div>

            <div className="left-box">
              <h4>WHAT IT ISN'T</h4>
            <ul className="cut-text">
  <li>Spam</li>
  <li>Airing of grievances</li>
  <li>Conspiracy theories</li>
</ul>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="right-side">
            <h3>WHO ARE YOU</h3>
            <p className="big-text">[Your Name]</p>

            <h3>HOW DO I REACH YOU</h3>
            <p className="big-text">[Your Email]</p>

            <button className="arrow-button">→</button>
          </div>

        </div>
      </div>
    </footer>
  );
}