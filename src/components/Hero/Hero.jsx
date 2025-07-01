import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";
import colourtImage from "../../assets/colourt.svg";
import VerticalLines from "../VerticalLines/VerticalLines";

const Hero = () => {
  const nameRef = useRef(null);
  const selectedWorksRef = useRef(null);

  useEffect(() => {
    if (!nameRef.current) return;
    const nameLetters = nameRef.current.querySelectorAll(".flip-letter");
    const bottomLetters = selectedWorksRef.current ? selectedWorksRef.current.querySelectorAll('.flip-letter') : [];
    gsap.set(nameLetters, { rotateX: 0, opacity: 1 });
    gsap.set(bottomLetters, { rotateX: 0, opacity: 1 });

    // Animate both sets of letters
    const timeline = gsap.timeline({ repeat: -1 });
    nameLetters.forEach((letter, i) => {
      timeline.to(
        letter,
        {
          rotateX: 360,
          duration: 1.2,
          ease: "power2.inOut",
        },
        i * 0.18
      );
      timeline.set(
        letter,
        { rotateX: 0 },
        i * 0.18 + 1.2
      );
    });
    bottomLetters.forEach((letter, i) => {
      timeline.to(
        letter,
        {
          rotateX: 360,
          duration: 1.2,
          ease: "power2.inOut",
        },
        i * 0.18
      );
      timeline.set(
        letter,
        { rotateX: 0 },
        i * 0.18 + 1.2
      );
    });
    return () => timeline.kill();
  }, []);

  const name = "DIVAKAR TRIVEDI";

  return (
    <div className="hero-main">
      {/* Vertical lines now applied to main container */}
      <VerticalLines count={10} />

      <div className="hero-top">
        <h2 ref={nameRef}>
          {name.split("").map((char, i) => (
            <span key={i} className="flip-letter" style={{ display: "inline-block" }}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </h2>
      </div>

      <div className="hero-middle-box">
        <img src={colourtImage} alt="Hero" className="hero-image" />
        <div className="hero-overlay" />
        <div className="middle-text">
          <AnimatedText text="Crafting " />
          <span className="highlight-text"><AnimatedText text="Digital Designs" /></span>
          <AnimatedText text=" that " />
          <br />
          <AnimatedText text="Elevate SaaS & AI Innovators" />
        </div>
      </div>

    <div className="hero-bottom-box">
  <h3
    className="selected-works-animated"
    style={{
      whiteSpace: 'nowrap',
      overflow: 'visible',
      textOverflow: 'unset',
      width: '100vw',
      textAlign: 'center',
      margin: 0,
      padding: 0,
      transform: 'translateX(7vw)' // shift left by 5% of viewport width
    }}
    ref={selectedWorksRef}
  >
{"D  Project".split("").map((char, i) => (
  <span
    key={i}
    className="flip-letter"
  >
    {char === " " ? "\u00A0" : char}
  </span>
))}

  </h3>
</div>

    </div>
  );
};

// AnimatedText component for GSAP letter animation
const AnimatedText = ({ text }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const letters = ref.current.querySelectorAll(".gsap-letter");
    gsap.set(letters, { y: 0, opacity: 1 }); // Always visible, no fade in/out
    const timeline = gsap.timeline({ repeat: -1 });
    letters.forEach((letter, i) => {
      timeline.to(
        letter,
        {
          y: -10,
          duration: 0.7,
          ease: "power2.inOut",
        },
        i * 0.18
      );
      timeline.to(
        letter,
        {
          y: 0,
          duration: 0.7,
          ease: "power2.inOut",
        },
        i * 0.18 + 0.7
      );
    });
    return () => timeline.kill();
  }, [text]);
  return (
    <span ref={ref} style={{ display: "inline-block" }}>
      {text.split("").map((char, i) => (
        <span key={i} className="gsap-letter" style={{ display: "inline-block" }}>{char === " " ? "\u00A0" : char}</span>
      ))}
    </span>
  );
};

export default Hero;
