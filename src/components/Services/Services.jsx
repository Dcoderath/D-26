import React, { useEffect, useRef } from "react";
import "./Services.css";

// Import images
import dex1 from "../../assets/dex1.png";
import dex2 from "../../assets/dex2.png";
import dex3 from "../../assets/dex3.png";
import dex4 from "../../assets/dex4.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
 const services = [
  {
    id: 1,
    number: "01",
    title: "Websites",
    subcategories: ["Business Sites", "Online Stores", "Custom Platforms", "Landing Pages"],
    description:
      "We create modern, fast, and responsive websites that help businesses grow online.",
    img: dex1,
  },
  {
    id: 2,
    number: "02",
    title: "Mobile Apps",
    subcategories: ["Android Apps", "iOS Apps", "Cross-Platform", "App Design"],
    description:
      "We develop smooth and reliable mobile apps with user-friendly design and strong performance.",
    img: dex2,
  },
  {
    id: 3,
    number: "03",
    title: "UI/UX",
    subcategories: ["Interface Design", "User Experience", "Wireframes", "Prototypes"],
    description:
      "We design clean and simple interfaces that make digital products easy and enjoyable to use.",
    img: dex3,
  },
  {
    id: 4,
    number: "04",
    title: "Maintenance",
    subcategories: ["Updates", "Bug Fixes", "Performance", "Technical Help"],
    description:
      "We keep your website or app running smoothly with updates, improvements, and ongoing support.",
    img: dex4,
  },
];

  const mainTitleRef = useRef(null);
  const serviceTitleRefs = useRef([]);

  useEffect(() => {
    // Helper to wrap text in spans for rolling effect
    const splitText = (el) => {
      if (!el || el.dataset.wrapped) return;
      const text = el.textContent;
      el.innerHTML = "";
      
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.style.display = "inline-block";
        span.style.overflow = "hidden";
        span.style.verticalAlign = "top";
        span.innerHTML = `
          <div class="char-wrapper" style="position: relative; display: block;">
            <span class="char-original" style="display: block;">${char === " " ? "&nbsp;" : char}</span>
            <span class="char-clone" style="display: block; position: absolute; top: 100%; left: 0;">${char === " " ? "&nbsp;" : char}</span>
          </div>
        `;
        el.appendChild(span);
      });
      el.dataset.wrapped = "true";
    };

    // Animation Logic
    const animateText = (el) => {
      const wrappers = el.querySelectorAll(".char-wrapper");
      
      const tl = gsap.timeline({ paused: true });
      tl.to(wrappers, {
        yPercent: -100,
        duration: 0.6,
        ease: "power3.inOut",
        stagger: 0.03, // This creates the "wave" effect
      });

      // ScrollTrigger for initial entry
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        onEnter: () => tl.play(),
      });

      // Hover effect
      el.addEventListener("mouseenter", () => tl.restart());
    };

    // Initialize Main Title
    if (mainTitleRef.current) {
      splitText(mainTitleRef.current);
      animateText(mainTitleRef.current);
    }

    // Initialize Service Titles
    serviceTitleRefs.current.forEach((el) => {
      if (el) {
        splitText(el);
        animateText(el);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div id="Services" className="services-main">
      <h1 className="main-title" ref={mainTitleRef}>Services</h1>

      {services.map((service, index) => (
        <div key={service.id} className="service-row">
          <div className="service-box number-title-box">
            <div className="service-number">{service.number}</div>
            <div
              className="service-title"
              ref={(el) => (serviceTitleRefs.current[index] = el)}
              style={{ cursor: "pointer" }}
            >
              {service.title}
            </div>
          </div>

          <div className="service-box subcategory-box">
            {service.subcategories.map((sub, idx) => (
              <div key={idx} className="subcategory-item">{sub}</div>
            ))}
          </div>

          <div className="service-box description-box">{service.description}</div>

          <div className="service-box image-box">
            <img src={service.img} alt={service.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;