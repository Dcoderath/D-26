import React, { useEffect, useRef } from "react";
import "./Footer.css";

const Footer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
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
      ctx.fillStyle = "#0b0b0b";
      ctx.fillRect(0, 0, width, height);

      const size = 30;
      const rows = Math.ceil(height / size);
      const cols = Math.ceil(width / size);

      let seed = 10101;
      function random() {
        seed = (seed * 1664525 + 1013904223) % 4294967296;
        return seed / 4294967296;
      }

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const normalizedX = x / cols;
          const normalizedY = y / rows;

          const heightLimit = 0.6 - normalizedX * 0.3;
          if (normalizedY < heightLimit && normalizedX < 0.4) {
            ctx.fillStyle = "#fff";
            ctx.fillRect(x * size, y * size, size, size);
          } else if (
            normalizedX < 0.45 &&
            normalizedY >= heightLimit &&
            normalizedY < heightLimit + 0.12 &&
            Math.random() > 0.92
          ) {
            ctx.fillStyle = "#fff";
            ctx.fillRect(x * size, y * size, size, size);
            if (Math.random() > 0.7) {
              let cx = x;
              let cy = y;
              const snakeLength = Math.floor(Math.random() * 2) + 2;
              for (let i = 0; i < snakeLength; i++) {
                cx += Math.floor(Math.random() * 3) - 1;
                cy += Math.floor(Math.random() * 2);
                if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
                ctx.fillRect(cx * size, cy * size, size, size);
              }
            }
          } else if (normalizedX >= 0.4 && normalizedX < 0.8) {
            const waveLimit =
              0.4 + Math.sin(normalizedX * 6) * 0.05 + Math.cos(normalizedX * 3) * 0.03;
            if (normalizedY < waveLimit && random() > 0.8) {
              ctx.fillStyle = "#fff";
              let cx = x;
              let cy = y;
              const snakeLength = Math.floor(random() * 4) + 5;
              for (let i = 0; i < snakeLength; i++) {
                ctx.fillRect(cx * size, cy * size, size, size);
                cx += Math.floor(random() * 3) - 1;
                cy += Math.floor(random() * 2) - 1;
                if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
              }
            }
          } else if (normalizedX >= 0.8 && normalizedY < 0.3 && random() > 0.95) {
            ctx.fillStyle = "#fff";
            let cx = x;
            let cy = y;
            const snakeLength = Math.floor(random() * 3) + 4;
            for (let i = 0; i < snakeLength; i++) {
              ctx.fillRect(cx * size, cy * size, size, size);
              cx += Math.floor(random() * 3) - 1;
              cy += Math.floor(random() * 3) - 1;
              if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
            }
          } else if (normalizedX > 0.7 && normalizedY > 0.7) {
            if (random() > 0.1) {
              ctx.fillStyle = "#fff";
              ctx.fillRect(x * size, y * size, size, size);
            }
          }

          const bottomRightLimit = 0.6 - (1 - normalizedX) * 0.3;
          if (normalizedY > 1 - bottomRightLimit && normalizedX > 0.6) {
            ctx.fillStyle = "#fff";
            ctx.fillRect(x * size, y * size, size, size);
          } else if (
            normalizedX > 0.55 &&
            normalizedY <= 1 - bottomRightLimit &&
            normalizedY > 1 - bottomRightLimit - 0.12 &&
            Math.random() > 0.92
          ) {
            ctx.fillStyle = "#fff";
            ctx.fillRect(x * size, y * size, size, size);

            if (Math.random() > 0.7) {
              let cx = x;
              let cy = y;
              const snakeLength = Math.floor(Math.random() * 2) + 2;
              for (let i = 0; i < snakeLength; i++) {
                cx += Math.floor(Math.random() * 3) - 1;
                cy -= Math.floor(Math.random() * 2);
                if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
                ctx.fillRect(cx * size, cy * size, size, size);
              }
            }
          }
        }
      }
    }

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="fofoter-container">
      <canvas ref={canvasRef} className="pixel-screen-footer" />

      <div className="fofoter-content">
        <div className="fofoter-right">
          <h1 className="decorated-dcoderath">DCODERATH</h1>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <p>Imprint © 2025 dcoderath</p>
        </div>
        <div className="footer-container">
          Prajyaraj, Uttar Pradesh - 211001, INDIA | Email: trivedi2693@gmail.com
        </div>
        <div className="footer-container">Website By DECODERATH</div>
      </footer>
    </div>
  );
};

export default Footer;
