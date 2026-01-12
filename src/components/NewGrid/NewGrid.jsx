import React, { useState } from "react";
import "./NewGrid.css";

const tabData = {
  Development: {
    heading: "Full Stack Developer",
    text:
      "Building scalable, high-performance web applications using modern frameworks, REST APIs, and secure architecture — from front-end aesthetics to optimized back-end systems.",
    img: "https://cdn.prod.website-files.com/67726722d415dc401ae23cf6/677289e14dd4dbca1d8e5930_philip-oroni-IANBrm46bF0-unsplash%20(2).avif",
  },
  Security: {
    heading: "Cybersecurity Specialist",
    text:
      "Protecting digital infrastructure through ethical hacking, penetration testing, and secure code principles. Security is not an afterthought — it’s built into every layer.",
    img: "https://cdn.prod.website-files.com/67726722d415dc401ae23cf6/677289e19e4d013c6a4c5a1b_philip-oroni-Zx_G3LpNnV4-unsplash%20(1).avif",
  },
  Innovation: {
    heading: "Tech Innovator",
    text:
      "Blending creativity with logic to design clean code, automation systems, and smart applications that push the boundaries of technology.",
    img: "https://cdn.prod.website-files.com/67726722d415dc401ae23cf6/677289e1c88b5b4c14d1e6fd_philip-oroni-h9N7bm-HRCo-unsplash.avif",
  },
};

const NewGrid = () => {
  const [active, setActive] = useState("Development");

  return (
    <section className="cloneable">
      <div className="wrapper-card">
        <div className="tab-layout">

          <div className="tab-layout-col">
            <div className="tab-layout-container">

              <h1 className="tab-layout-heading black-text">
                Where Aesthetic Meets Architecture — Design, Build, Secure.
              </h1>

              <div className="filter-bar">
                {Object.keys(tabData).map((item) => (
                  <button
                    key={item}
                    className={`filter-button ${active === item ? "active" : ""}`}
                    onClick={() => setActive(item)}
                  >
                    <div className="filter-button__p">{item}</div>
                    <div className="tab-button__bg"></div>
                  </button>
                ))}
              </div>

              <div key={active} className="tab-content animate-slide">
                <h2 className="tab-content__heading black-text">
                  {tabData[active].heading}
                </h2>

                <p className="content-p black-text">
                  {tabData[active].text}
                </p>

                <button
                  className="tab-content__button"
                  onClick={() => {
                    const pricingSection = document.querySelector('.pricing-section');
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <p className="content-p">Explore Projects</p>
                </button>
              </div>

            </div>
          </div>

          <div className="tab-layout-col">
            <div key={active} className="tab-visual-wrap animate-image">
              <img src={tabData[active].img} alt={active} className="tab-image" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewGrid;
