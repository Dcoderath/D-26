import React, { useEffect, useRef, useState } from "react";
import "./hero.css";

export default function Hero() {
  const canvasRef = useRef(null);

  const topLines = [
    "~$whoami",
    "Divakar Trivedi",
    "Uttar Pradesh, North India, India",
    "I'M just a HACKER born in a DEVELOPER's body"
  ];
  const bottomLines = [
    "Specialization: Web Security, Pentesting, Exploit Development",
    "Experience: Red Teaming, Threat Analysis, Vulnerability Assessment",
    "Interests: Ethical Hacking, Automation, Open Source Security Tools"
  ];

  const [typedTop, setTypedTop] = useState(topLines.map(() => ""));
  const [typedBottom, setTypedBottom] = useState(bottomLines.map(() => ""));

  useEffect(() => {
    let topLineIndex = 0;
    let topCharIndex = 0;
    let bottomLineIndex = 0;
    let bottomCharIndex = 0;
    const topInterval = setInterval(() => {
      setTypedTop((prev) => {
        const copy = [...prev];
        if (topLineIndex < topLines.length) {
          copy[topLineIndex] = topLines[topLineIndex].slice(0, topCharIndex + 1);
          topCharIndex++;
          if (topCharIndex > topLines[topLineIndex].length) {
            topCharIndex = 0;
            topLineIndex++;
          }
        }
        return copy;
      });
    }, 70);

    const bottomInterval = setInterval(() => {
      setTypedBottom((prev) => {
        const copy = [...prev];
        if (bottomLineIndex < bottomLines.length) {
          copy[bottomLineIndex] = bottomLines[bottomLineIndex].slice(0, bottomCharIndex + 1);
          bottomCharIndex++;
          if (bottomCharIndex > bottomLines[bottomLineIndex].length) {
            bottomCharIndex = 0;
            bottomLineIndex++;
          }
        }
        return copy;
      });
    }, 90);

    return () => {
      clearInterval(topInterval);
      clearInterval(bottomInterval);
    };
  }, []);

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
    <header className="term-hero-root">
      <canvas ref={canvasRef} className="pixel-screen" />

      <div className="overlay top-left" aria-hidden>
        {typedTop.map((line, i) => {
          // Custom formatting for certain lines
          if (line === "Divakar Trivedi") {
            return (
              <div
                key={i}
                className="hacker-line"
                style={{
                  background: "#9d00ff",
                  color: "white",
                  padding: "4px 8px",
                  fontSize:"43px",
                  
                  display: "inline-block",
                }}
              >
                <span>{line}</span>
                <svg
                  width="160"
                  height="6"
                  viewBox="0 0 160 6"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "block", marginTop: "4px" }}
                >
                  <line
                    x1="0"
                    y1="3"
                    x2="160"
                    y2="3"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            );
          }

          if (line.includes("HACKER") || line.includes("DEVELOPER")) {
            const formattedLine = line
           .replace("HACKER", '<span style="background-color: lime; color: black; padding: 2px 4px; ">HACKER</span>')
.replace("DEVELOPER", '<span style="background-color: #FF4C24; color: white; padding: 2px 4px;   ">DEVELOPER</span>');

            return (
              <div
                key={i}
                className="hacker-line"
                dangerouslySetInnerHTML={{ __html: formattedLine }}
              />
            );
          }

          return (
            <div key={i} className="hacker-line">
              <span>{line}</span>
              {typedTop[i] && typedTop[i].length < (topLines[i] || "").length ? (
                <span className="caret" />
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="overlay bottom-right" aria-hidden>
        <div className="bio-panel">
          {typedBottom.map((line, i) => (
            <div key={i} className="bio-line">
              {line}
              {typedBottom[i] && typedBottom[i].length < (bottomLines[i] || "").length ? (
                <span className="caret" />
              ) : null}
            </div>
          ))}
          <div style={{ marginTop: 6, fontSize: 12, opacity: 0.8 }}>
            Cybersecurity · Pentesting · OSINT · Tooling
          </div>
        </div>
      </div>
    </header>
  );
}
