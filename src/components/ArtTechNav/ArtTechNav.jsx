import React, { useState, useEffect, useRef } from 'react';
import './ArtTechNav.css';

const ArtTechNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import('gsap')).default;

      timelineRef.current = gsap.timeline({ paused: true });

      timelineRef.current.to(".block", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        stagger: 0.075,
        ease: "power3.inOut"
      });

      timelineRef.current.to(".menu-title, .menu-item", {
        duration: 0.3,
        opacity: 1,
        stagger: 0.05
      }, "-=0.5");
    };

    loadGSAP();
  }, []);

  const handleToggle = () => {
    if (timelineRef.current) {
      isOpen ? timelineRef.current.reverse() : timelineRef.current.play();
    }
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { year: "2023", name: "Digital Art Collecting" },
    { year: "2022", name: "Art NFT Collecting" },
    { year: "2021", name: "Collectors Edition" },
    { year: "Learn More", name: "About" },
  ];

  return (
    <div className="art-tech-nav-container">
      {/* Background content */}
      <div className="website-content">
        <div className="header">
          {/* Center Top Button (replacing image) */}
          <button className="elite-btn">
            Elite Web Design
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        {/* Top Left Text (replacing image) */}
        <div className="logo text-logo">
          <span>web</span>
          <span>design</span>
          <span>elite</span>
          <span>+23</span>
        </div>

        {/* Center button again if needed inside nav */}
        <div className="logo-main">
          <button className="elite-btn">
            Elite Web Design
          </button>
        </div>

        <div className="toggle-btn">
          <button
            className={`burger ${isOpen ? 'active' : ''}`}
            onClick={handleToggle}
            aria-label="Toggle menu"
          />
        </div>
      </nav>

      {/* Overlay animation blocks */}
      <div className="overlay">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="block"></div>
        ))}
      </div>

      {/* Menu overlay */}
      <div className="overlay-menu">
        <div className="menu-title">
          <p>[menu]</p>
        </div>

        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="menu-item-year">
              <p>{item.year}</p>
            </div>
            <div className="menu-item-name">
              <p>{item.name}</p>
            </div>
            <div className="menu-item-link">
              <button
                onClick={handleToggle}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontFamily: '"Space Mono", monospace',
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                [explore]
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtTechNav;
