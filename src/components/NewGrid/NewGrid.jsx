import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./NewGrid.css";

// ✅ Import your local images
import dex1 from "../../assets/dex1.png";
import dex2 from "../../assets/dex2.png";
import dex3 from "../../assets/dex3.png";


gsap.registerPlugin(ScrollTrigger);

// Tab data with local images
const tabData = {
  "Mobile App Design": {
    heading: "Engaging Mobile Experiences",
    text: "Showcasing product design projects, from ideation to prototyping.",
    img: dex1,
  },
  "Web Design": {
    heading: "Stunning Websites",
    text: "Projects focusing on responsive, modern, and interactive website designs.",
    img: dex2,
  },
  "Brand Identity": {
    heading: "Helping Brands Stand Out",
    text: "Showcasing projects where I created logos, visual identities, and brand systems.",
    img: dex3,
  },
};

const NewGrid = () => {
  const [active, setActive] = useState("Mobile App Design");
  const [words, setWords] = useState([]);

  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // Split heading into words
  useEffect(() => {
    if (tabData[active]) {
      setWords(tabData[active].heading.split(" "));
    }
  }, [active]);

  // Animate heading words and paragraph on mount or tab change
  useEffect(() => {
    const tl = gsap.timeline();

    // Animate heading word by word
    tl.from(".heading-word", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
    });

    // Animate paragraph
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [words]);

  // Hover animation on heading
  const handleHover = () => {
    gsap.to(".heading-word", { scale: 1.05, duration: 0.3, stagger: 0.05 });
  };
  const handleHoverOut = () => {
    gsap.to(".heading-word", { scale: 1, duration: 0.3, stagger: 0.05 });
  };

  // Smooth tab change with exit/enter animation
  const handleTabClick = (tab) => {
    if (tab === active) return; // don't animate if same tab

    const tl = gsap.timeline({
      onComplete: () => setActive(tab), // switch tab after exit animation
    });

    tl.to(contentRef.current, { opacity: 0, y: 20, duration: 0.3 });
    tl.to(imageRef.current, { opacity: 0, scale: 0.95, duration: 0.3 }, "<");
  };

  // Animate new content in after tab changes
  useEffect(() => {
    if (contentRef.current && imageRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [active]);

  return (
    <div className="dex-card">
      <section className="cloneable">
        <div className="wrapper-card">
          <div className="tab-layout">
            {/* Content Column */}
            <div className="tab-layout-col">
              <div className="tab-layout-container">
                <h1
                  className="tab-layout-heading black-text"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverOut}
                >
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="heading-word"
                      style={{ display: "inline-block", marginRight: "0.3em" }}
                    >
                      {word}
                    </span>
                  ))}
                </h1>

                {/* Tab buttons */}
                <div className="filter-bar">
                  {Object.keys(tabData).map((item) => (
                    <button
                      key={item}
                      className={`filter-button ${active === item ? "active" : ""}`}
                      onClick={() => handleTabClick(item)}
                    >
                      <div className="filter-button__p">{item}</div>
                      <div className="tab-button__bg"></div>
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div ref={contentRef} className="tab-content animate-slide">
                  <h2 className="tab-content__heading black-text">
                    {tabData[active]?.heading || ""}
                  </h2>

                  <p ref={textRef} className="content-p black-text">
                    {tabData[active]?.text || ""}
                  </p>

                  <button
                    className="tab-content__button"
                    onClick={() => {
                      const pricingSection = document.querySelector(".pricing-section");
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <p className="content-p">Explore Projects</p>
                  </button>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="tab-layout-col">
              <div ref={imageRef} className="tab-visual-wrap animate-image">
                <img
                  src={tabData[active]?.img || ""}
                  alt={active}
                  className="tab-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewGrid;
