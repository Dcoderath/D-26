"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TextAnion.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const TextAnion = ({ text, className }) => {
  const textRef = useRef(null);
  const splitRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Revert previous SplitText & animation
    splitRef.current && splitRef.current.revert();
    animationRef.current && animationRef.current.revert();

    // Split the text into lines
    splitRef.current = new SplitText(textRef.current, { type: "lines" });

    // Force perspective on the parent container to make 3D work
    gsap.set(textRef.current, { perspective: 500 });

    // Animate lines in exact 3D flipping style
    animationRef.current = gsap.from(splitRef.current.lines, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%", // when top of element reaches 80% of viewport
        toggleActions: "play none none none",
      },
      rotationX: -100,
      transformOrigin: "50% 50% -160px",
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.25,
    });

    return () => {
      animationRef.current && animationRef.current.revert();
      splitRef.current && splitRef.current.revert();
    };
  }, [text]);

  return (
    <div ref={textRef} className={`text ${className || ""}`}>
      {text}
    </div>
  );
};

export default TextAnion;