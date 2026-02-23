import React, { useState, useEffect, useRef } from "react";
import "./ArtTechNav.css";

const ArtTechNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timelineRef = useRef(null);
  const overlayRef = useRef(null);
  const menuRef = useRef(null);

  // GSAP animation
  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;

      timelineRef.current = gsap.timeline({
        paused: true,
        onReverseComplete: () => {
          if (overlayRef.current) {
            overlayRef.current.style.pointerEvents = "none";
            overlayRef.current.style.display = "none";
          }
          if (menuRef.current) {
            menuRef.current.style.pointerEvents = "none";
            menuRef.current.style.display = "none";
          }
        },
        onStart: () => {
          if (overlayRef.current) overlayRef.current.style.display = "flex";
          if (menuRef.current) menuRef.current.style.display = "flex";
        },
      });

      // Animate overlay blocks
      timelineRef.current.to(".block", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        stagger: 0.075,
        ease: "power3.inOut",
      });

      // Animate menu items
      timelineRef.current.to(
        ".menu-title, .menu-item",
        { duration: 0.3, opacity: 1, stagger: 0.05, pointerEvents: "auto" },
        "-=0.5"
      );
    };

    loadGSAP();
  }, []);

  const handleToggle = () => {
    if (!timelineRef.current) return;

    if (!isOpen) {
      timelineRef.current.play();
    } else {
      timelineRef.current.reverse();
    }

    setIsOpen(!isOpen);
  };

  const menuItems = [
        { year: "1", name: "Home", target: "Home" },
    { year: "2", name: "Design Works", target: "Project" },
    { year: "3", name: "Professional Services", target: "Services" },
    { year: "26", name: "Let’s Talk", target: "Footer" },
  ];

  const handleScrollAndClose = (targetId) => {
    const element = document.getElementById(targetId);
    if (!timelineRef.current) return;

    timelineRef.current.reverse();

    timelineRef.current.eventCallback("onReverseComplete", () => {
      if (element) element.scrollIntoView({ behavior: "smooth" });
      timelineRef.current.eventCallback("onReverseComplete", null);
    });

    setIsOpen(false);
  };

  return (
    <div className={`art-tech-nav-container ${isOpen ? "menu-open" : ""}`}>
      {/* Navigation */}
      <nav>
        <div className="logo text-logo">
          <span>web</span>
          <span>design</span>
          <span>elite</span>
          <span>+23</span>
        </div>

        <div className="logo-main">
          <button className="elite-btn">Elite Web Design</button>
        </div>

        <div className="toggle-btn">
          <button
            className={`burger ${isOpen ? "active" : ""}`}
            onClick={handleToggle}
          />
        </div>
      </nav>

      {/* Overlay animation blocks */}
      <div ref={overlayRef} className="overlay">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="block"></div>
        ))}
      </div>

      {/* Menu overlay */}
      <div ref={menuRef} className="overlay-menu">
        <div className="menu-title">
          <p>[menu]</p>
        </div>

        {menuItems.map((item, i) => (
          <div key={i} className="menu-item">
            <div className="menu-item-year">
              <p>{item.year}</p>
            </div>
            <div className="menu-item-name">
              <p>{item.name}</p>
            </div>
            <div className="menu-item-link">
              <button
                className="menu-link-btn"
                onClick={() => handleScrollAndClose(item.target)}
              >
                Go
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtTechNav;
