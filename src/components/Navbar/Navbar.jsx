import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timelineRef = useRef(null);
  const overlayRef = useRef(null);
  const menuRef = useRef(null);
  const navBtnRef = useRef(null);

  useEffect(() => {
  if (!navBtnRef.current) return;

  import("gsap").then(({ default: gsap }) => {

    const btn = navBtnRef.current;

    const strip = btn.querySelector(".nav-btn-strip");
    const left = btn.querySelector(".nav-left");
    const right = btn.querySelector(".nav-right");

    if (!strip || !left || !right) return;

    const tl = gsap.timeline({ paused: true });

    tl.to(strip, { x: 0, duration: 0.7 })
      .fromTo(left,
        { scale: 0.3, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7 },
        0.15
      )
      .to(right,
        { scale: 0, opacity: 0, duration: 0.3 },
        0
      );

    btn.addEventListener("mouseenter", () => tl.play());
    btn.addEventListener("mouseleave", () => tl.reverse());

  });

}, []);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;

      // --- PAGE LOAD REVEAL ---
      // 1. Set blocks to full and logos to hidden immediately
      gsap.set(".block", { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" });
      gsap.set(".logo, .logo-main, .toggle-btn", { opacity: 0, y: -10 });

      const introTl = gsap.timeline();

      introTl
        // First, animate the blocks away
        .to(".block", {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          stagger: 0.075,
          ease: "power3.inOut",
          onComplete: () => {
            if (overlayRef.current) overlayRef.current.style.display = "none";
          }
        })
        // THEN, show the logos and buttons
        .to(".logo, .logo-main, .toggle-btn", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.2"); // Starts slightly before blocks finish moving

      // --- YOUR ORIGINAL MENU TIMELINE ---
      timelineRef.current = gsap.timeline({
        paused: true,
        onReverseComplete: () => {
          if (overlayRef.current) {
            overlayRef.current.style.pointerEvents = "none";
            overlayRef.current.style.display = "none";
          }
          if (menuRef.current) {
            menuRef.current.style.display = "none";
          }
        },
        onStart: () => {
          if (overlayRef.current) overlayRef.current.style.display = "flex";
          if (menuRef.current) menuRef.current.style.display = "flex";
        },
      });

      timelineRef.current.to(".block", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        stagger: 0.075,
        ease: "power3.inOut",
      });

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
    !isOpen ? timelineRef.current.play() : timelineRef.current.reverse();
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { year: "1", name: "Home", target: "Home" },
    { year: "2", name: "Design Works", target: "Project" },
    { year: "3", name: "Services", target: "Services" },
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
      <nav>
     <div className="logo text-logo">
  <div
    className="nav-btn-frame"
    ref={navBtnRef}
    onClick={() => handleScrollAndClose("Footer")}
  >
    <div className="nav-btn-strip">

      <div className="nav-circle nav-left">
        <div className="nav-arrow"></div>
      </div>

      <div className="nav-box">
        Let’s Work
      </div>

      <div className="nav-circle nav-right">
        <div className="nav-arrow"></div>
      </div>

    </div>
  </div>
</div>
        <div className="logo-main">
          <button className="elite-btn">Elite Web Design</button>
        </div>
        <div className="toggle-btn">
          <button className={`burger ${isOpen ? "active" : ""}`} onClick={handleToggle} />
        </div>
      </nav>

      <div ref={overlayRef} className="overlay" style={{ display: 'flex' }}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="block"></div>
        ))}
      </div>

      <div ref={menuRef} className="overlay-menu">
        <div className="menu-title"><p>[menu]</p></div>
        {menuItems.map((item, i) => (
          <div key={i} className="menu-item">
            <div className="menu-item-year"><p>{item.year}</p></div>
            <div className="menu-item-name"><p>{item.name}</p></div>
            <div className="menu-item-link">
              <button className="menu-link-btn" onClick={() => handleScrollAndClose(item.target)}>Go</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;