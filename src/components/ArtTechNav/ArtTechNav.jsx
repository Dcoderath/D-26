import React, { useState, useEffect, useRef } from 'react';
import './ArtTechNav.css';

const ArtTechNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timelineRef = useRef(null);
  const overlayRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import('gsap')).default;

      timelineRef.current = gsap.timeline({ 
        paused: true,
        onReverseComplete: () => {
          // Reset pointer-events when animation completes in reverse
          if (overlayRef.current) {
            overlayRef.current.style.pointerEvents = 'none';
          }
          if (menuRef.current) {
            menuRef.current.style.pointerEvents = 'none';
          }
        }
      });

      // First animate blocks
      timelineRef.current.to(".block", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        stagger: 0.075,
        ease: "power3.inOut"
      });

      // Then animate menu items
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
      if (!isOpen) {
        // Enable pointer-events when opening
        if (overlayRef.current) {
          overlayRef.current.style.pointerEvents = 'auto';
        }
        if (menuRef.current) {
          menuRef.current.style.pointerEvents = 'auto';
        }
        timelineRef.current.play();
      } else {
        timelineRef.current.reverse();
      }
    }
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && overlayRef.current) {
        const isClickInsideMenu = menuRef.current.contains(event.target);
        const isClickOnBurger = event.target.closest('.burger');
        const isClickOnToggleBtn = event.target.closest('.toggle-btn');
        
        // Only close if clicking outside both menu and burger button
        if (!isClickInsideMenu && !isClickOnBurger && !isClickOnToggleBtn) {
          handleToggle();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

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
          <button className="elite-btn">
            Elite Web Design
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <div className="logo text-logo">
          <span>web</span>
          <span>design</span>
          <span>elite</span>
          <span>+23</span>
        </div>

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

      {/* Overlay animation blocks - pointer events disabled by default */}
      <div ref={overlayRef} className="overlay">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="block"></div>
        ))}
      </div>

      {/* Menu overlay - pointer events disabled by default */}
      <div ref={menuRef} className="overlay-menu">
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
                  cursor: 'pointer',
                  padding: '10px'
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