import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Project.css";

import D1 from "../../assets/D/D1.jpg";
import D2 from "../../assets/D/D2.jpg";
import D3 from "../../assets/D/D3.jpg";
import D4 from "../../assets/D/D4.jpg";
import D5 from "../../assets/D/D5.jpg";
import D6 from "../../assets/D/D6.jpg";

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleProject = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const projects = [
    {
      category: "Open Plan Offices",
      client: "Hotel Ponsonby:",
      title:
        "transforming a heritage building into a chic gastropub",
      tags: ["Cube\u2122", "Etch\u2122", "Frontier\u2122", "Symphony\u00AE"],
      img1: D1,
      img2: D2,
    },
    {
      category: "Recording Studios and Radio",
      client: "Mediaworks:",
      title:
        "Capturing the rebellious soul of radio",
      tags: ["CubeT", "Quietspaco® Panel"],
      img1: D3,
      img2: D4,
    },
    {
      category: "Hotel Lobbies and Foyers",
      client: "Custom Frontier™ system",
      title:
        "for Headingley Stadium's Emerald Suite",
      tags: ["FrontierTM"],
      img1: D5,
      img2: D6,
    },
  ];

  return (
    <section className="project-section">

      {/* TOP HEADING */}
      <div style={{ marginBottom: "80px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Beautiful projects
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.7 }}>
          from around the world
        </p>
      </div>

      {/* PROJECT LIST */}
      {projects.map((project, index) => (
        <div key={index} className="project-row">
          <div className="project-grid">

            {/* CATEGORY WITH ACTIVE CIRCLE */}
            <div
              className="project-category"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  border: "1px solid white",
                  backgroundColor:
                    activeIndex === index ? "white" : "transparent",
                  transition: "0.3s ease",
                }}
              />
              {project.category}
            </div>

            {/* CONTENT */}
            <div className="project-content">
              <h3>{project.client}</h3>

              <p className="project-title">
                {project.title}
              </p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="project-actions">
              <button className="project-btn">
                View case
              </button>

              <button
                className="project-btn"
                onClick={() => toggleProject(index)}
              >
                {activeIndex === index ? "Hide" : "Show details"}
              </button>
            </div>

            {/* IMAGES */}
            {activeIndex === index && (
              <motion.div
                className="detail-images"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <img src={project.img1} alt="" />
                <img src={project.img2} alt="" />
              </motion.div>
            )}

          </div>
        </div>
      ))}

   {/* BOTTOM BIG SECTION */}
<div className="project-bottom">
  <div className="project-bottom-row">
    <h2 className="project-big-title">
      Projects
      <span className="project-count">26</span>
    </h2>

    <div className="arrow-circle-big">→</div>
  </div>
</div>

    </section>
  );
}
