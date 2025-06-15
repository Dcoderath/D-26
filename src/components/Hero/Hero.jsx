import React from "react";
import "./Hero.css";
import colourtImage from "../../assets/colourt.svg";
import VerticalLines from "../VerticalLines/VerticalLines";

const Hero = () => {
  return (
    <div className="hero-main">
      {/* Vertical lines now applied to main container */}
      <VerticalLines count={10} />

      <div className="hero-top">
        <h2>DIVAKAR TRIVEDI</h2>
      </div>

      <div className="hero-middle-box">
        <img src={colourtImage} alt="Hero" className="hero-image" />
        <div className="hero-overlay" />
        <div className="middle-text">
          Crafting <span className="highlight-text">Digital Designs</span> that <br />
          Elevate SaaS & AI Innovators
        </div>
      </div>

      <div className="hero-bottom-box">
        <p>Selected Works</p>
      </div>
    </div>
  );
};

export default Hero;
