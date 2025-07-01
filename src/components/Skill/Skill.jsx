// Skill.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skill.css';

gsap.registerPlugin(ScrollTrigger);

const skillData = [
{
  title: "Have Projects ?",
  description: "Let’s bring your ideas to life with clean code, smooth interactions, and modern design.",
},
  // {
  //   title: "UI/UX Expertise",
  //   description: "Crafting intuitive and beautiful interfaces with accessibility in mind.",
  // },
  // {
  //   title: "Animation & Interaction",
  //   description: "Bringing static designs to life using CSS animations and GSAP.",
  // },
  // {
  //   title: "Performance Optimization",
  //   description: "Writing efficient, scalable code for lightning-fast experiences.",
  // },
];

const Skill = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="skill-container responsive-skill-container">
      {skillData.map((item, index) => (
        <section className="top-half" ref={addToRefs} key={index}>
          <h2 className="skill-title" id={`skill-${index}`}>{item.title}</h2>
          <p className="skill-description">{item.description}</p>
        </section>
      ))}
      <div className="bottom-spacer"></div>
    </div>
  );
};

export default Skill;
