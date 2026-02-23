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
      title: "Brand",
      subcategories: ["Look & feel", "Core Elements", "Guidelines"],
      description:
        "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
      img: dex1,
    },
    {
      id: 2,
      number: "02",
      title: "Rollout",
      subcategories: ["Key visuals", "Campaign Toolkit"],
      description:
        "We craft your campaign’s creative identity—key visuals, messaging, and adaptable designs across all touchpoints. From partnerships to events, we connect fans, brands, and unforgettable moments.",
      img: dex2,
    },
    {
      id: 3,
      number: "03",
      title: "Content",
      subcategories: ["Social Content", "Out of Home", "Motion & Photography"],
      description:
        "We create tailored content for every stage of your strategy, from awareness visuals to engaging social media assets. Think videos, motion graphics, and impactful designs that inspire and drive action.",
      img: dex3,
    },
    {
      id: 4,
      number: "04",
      title: "Product",
      subcategories: ["Printables", "Kits", "Packaging", "Merchandise"],
      description:
        "We craft innovative products that merge design and functionality, delivering tangible solutions that elevate your brand and connect with your audience.",
      img: dex4,
    },
  ];

  const mainTitleRef = useRef(null);
  const serviceTitleRefs = useRef([]);

  useEffect(() => {
    const wrapChars = (element) => {
      if (!element || element.dataset.wrapped) return; // Prevent duplicates
      const text = element.textContent;
      element.innerHTML = "";

      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.classList.add("char");

        const original = document.createElement("div");
        original.classList.add("original-text");
        original.textContent = char;

        const clone = document.createElement("div");
        clone.classList.add("clone-text");
        clone.textContent = char;

        span.appendChild(original);
        span.appendChild(clone);
        element.appendChild(span);
      });

      element.dataset.wrapped = "true";
    };

    // Wrap main title
    if (mainTitleRef.current) wrapChars(mainTitleRef.current);

    // Wrap service titles
    serviceTitleRefs.current.forEach((el) => wrapChars(el));

    // Rolling animation function
    const createRollingAnimation = (container) => {
      const chars = container.querySelectorAll(".char");
      const tl = gsap.timeline({ paused: true });

      chars.forEach((char, i) => {
        const original = char.querySelector(".original-text");
        const clone = char.querySelector(".clone-text");

        // Ensure animation uses exact pixel height
        requestAnimationFrame(() => {
          const charHeight = char.getBoundingClientRect().height;

          gsap.set(clone, { y: i % 2 === 0 ? -charHeight : charHeight });
          gsap.set([original, clone], { transformOrigin: "top" });

          const roll = gsap.to([original, clone], {
            repeat: 1,
            ease: "none",
            y: i % 2 === 0 ? "+=" + charHeight : "-=" + charHeight,
            duration: 1,
          });

          tl.add(roll, 0);
        });
      });

      return tl;
    };

    // Animate main title
    if (mainTitleRef.current) {
      const mainTl = createRollingAnimation(mainTitleRef.current);

      ScrollTrigger.create({
        trigger: mainTitleRef.current,
        start: "top 80%",
        onEnter: () => mainTl.play(),
      });

      mainTitleRef.current.addEventListener("mouseenter", () => mainTl.restart());
    }

    // Animate service titles
    serviceTitleRefs.current.forEach((el) => {
      if (!el) return;
      const tl = createRollingAnimation(el);

      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        onEnter: () => tl.play(),
      });

      el.addEventListener("mouseenter", () => tl.restart());
    });
  }, []);

  return (
    <div id="Services" className="services-main">
      {/* Main heading */}
      <h1 className="main-title" ref={mainTitleRef}>
        Services
      </h1>

      {services.map((service, index) => (
        <div key={service.id} className="service-row">
          {/* Number + Title */}
          <div className="service-box number-title-box">
            <div className="service-number">{service.number}</div>
            <div
              className="service-title"
              ref={(el) => (serviceTitleRefs.current[index] = el)}
            >
              {service.title}
            </div>
          </div>

          {/* Subcategories */}
          <div className="service-box subcategory-box">
            {service.subcategories.map((sub, idx) => (
              <div key={idx} className="subcategory-item">
                {sub}
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="service-box description-box">{service.description}</div>

          {/* Image */}
          <div className="service-box image-box">
            <img src={service.img} alt={service.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;