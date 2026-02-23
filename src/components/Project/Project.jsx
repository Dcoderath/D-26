import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import "./Project.css";

import D1 from "../../assets/D/D1.jpg";
import D2 from "../../assets/D/D2.jpg";
import D3 from "../../assets/D/D3.jpg";
import D4 from "../../assets/D/D4.jpg";
import D5 from "../../assets/D/D5.jpg";
import D6 from "../../assets/D/D6.jpg";

export default function Project() {
  // 1. Set to 0 so the first project is open by default
  const [activeIndex, setActiveIndex] = useState(0);
  
  // 2. Refs for canvases and project rows
  const topRightCanvas = useRef(null);
  const bottomLeftCanvas = useRef(null);
  const projectRefs = useRef([]);

  // 3. Updated toggle with smooth scroll to center
const toggleProject = (index) => {
  const isOpening = activeIndex !== index;
  setActiveIndex(isOpening ? index : null);

  if (isOpening) {
    // We wait for the "height: auto" animation to start 
    // so the center calculation is more accurate
    requestAnimationFrame(() => {
      setTimeout(() => {
        projectRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "center", // Keeps the project in the sweet spot of the screen
        });
      }, 300); // 300ms is the "Goldilocks" zone for smooth transitions
    });
  }
};

  const drawPixels = useCallback((canvas, type) => {
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width;
    canvas.height = rect.height;
    const size = rect.width;
    
    const pixelSizeMultiplier = 0.06;
    const basePixelSize = size * pixelSizeMultiplier;
    const pixel = Math.max(25, Math.min(60, Math.floor(basePixelSize)));
    
    const rows = Math.floor(size / pixel);
    const cols = Math.floor(size / pixel);

    ctx.clearRect(0, 0, size, size);
    ctx.font = `${pixel * 0.6}px monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const edgeMargin = Math.max(2, Math.floor(cols * 0.08));

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const nx = x / cols;
        const ny = y / rows;
        let distance;

        if (type === "top") {
          const dx = 1 - nx;
          const dy = ny;
          distance = Math.sqrt(dx * dx + dy * dy);
        } else if (type === "bottom") {
          const dx = nx;
          const dy = 1 - ny;
          distance = Math.sqrt(dx * dx + dy * dy);
        }

        const coreRadius = 0.32;
        const scatterRadius = 0.9;

        if (distance <= coreRadius) {
          ctx.fillStyle = "#f1f1f1";
          ctx.fillRect(x * pixel, y * pixel, pixel, pixel);
          const isEdge = x < edgeMargin || y < edgeMargin || x >= cols - edgeMargin || y >= rows - edgeMargin;
          if (!isEdge && Math.random() > 0.3) {
            ctx.fillStyle = "#000";
            ctx.fillText(Math.random() > 0.5 ? "1" : "0", x * pixel + pixel / 2, y * pixel + pixel / 2);
          }
        } else if (distance <= scatterRadius) {
          const fade = (distance - coreRadius) / (scatterRadius - coreRadius);
          const density = 1 - fade;
          if (Math.random() < density) {
            ctx.fillStyle = "#f1f1f1";
            ctx.fillRect(x * pixel, y * pixel, pixel, pixel);
            const isEdge = x < edgeMargin || y < edgeMargin || x >= cols - edgeMargin || y >= rows - edgeMargin;
            if (!isEdge && Math.random() > 0.7) {
              ctx.fillStyle = "#000";
              ctx.fillText(Math.random() > 0.5 ? "1" : "0", x * pixel + pixel / 2, y * pixel + pixel / 2);
            }
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (topRightCanvas.current) drawPixels(topRightCanvas.current, "top");
      if (bottomLeftCanvas.current) drawPixels(bottomLeftCanvas.current, "bottom");
    };

    handleResize();
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debouncedResize);
    const resizeObserver = new ResizeObserver(debouncedResize);
    
    if (topRightCanvas.current) resizeObserver.observe(topRightCanvas.current);
    if (bottomLeftCanvas.current) resizeObserver.observe(bottomLeftCanvas.current);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
    };
  }, [drawPixels]);

  const projects = [
    {
      category: "Open Plan Offices",
      client: "Hotel Ponsonby:",
      title: "transforming a heritage building into a chic gastropub",
      tags: ["Cube™", "Etch™", "Frontier™", "Symphony®"],
      img1: D1,
      img2: D2,
    },
    {
      category: "Recording Studios and Radio",
      client: "Mediaworks:",
      title: "Capturing the rebellious soul of radio",
      tags: ["CubeT", "Quietspaco® Panel"],
      img1: D3,
      img2: D4,
    },
    {
      category: "Hotel Lobbies and Foyers",
      client: "Custom Frontier™ system",
      title: "for Headingley Stadium's Emerald Suite",
      tags: ["FrontierTM"],
      img1: D5,
      img2: D6,
    },
  ];

  return (
    <section className="project-section">
      <canvas ref={topRightCanvas} className="canvas-top" />
      <canvas ref={bottomLeftCanvas} className="canvas-bottom" />

      <div className="project-content-wrapper">
        <div className="project-heading">
          <h1>Beautiful projects</h1>
          <p>from around the world</p>
        </div>

        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-row"
            ref={(el) => (projectRefs.current[index] = el)}
          >
            <div className="project-grid">
              <div className="project-category">
                <span className={`dot ${activeIndex === index ? "active" : ""}`} />
                {project.category}
              </div>

              <div className="project-content">
                <h3>{project.client}</h3>
                <p className="project-title">{project.title}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                </div>
              </div>

              <div className="project-actions">
                <button className="project-btn">View case</button>
                <button
                  className="project-btn"
                  onClick={() => toggleProject(index)}
                >
                  {activeIndex === index ? "Hide" : "Show details"}
                </button>
              </div>

        {activeIndex === index && (
  <motion.div
    className="detail-images"
    initial={{ opacity: 0, height: 0, y: -10 }}
    animate={{ opacity: 1, height: "auto", y: 0 }}
    exit={{ opacity: 0, height: 0, y: -10 }}
    transition={{ 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] // Custom "Expo" easing for a luxury feel
    }}
    style={{ overflow: "hidden" }} // Prevents jitter during expansion
  >
    <img src={project.img1} alt="" />
    <img src={project.img2} alt="" />
  </motion.div>
)}
            </div>
          </div>
        ))}

        <div className="project-bottom">
          <div className="project-bottom-row">
            <h2 className="project-big-title">
              Projects <span className="project-count">[ 26 ]</span>
            </h2>
            <div className="arrow-circle-big">→</div>
          </div>
        </div>
      </div>
    </section>
  );
}