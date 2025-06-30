import React, { useEffect, useRef } from "react";
import "./GridD.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// You can keep or remove these if you no longer want to use images
import D1 from "../../assets/D/D1.jpg";
import D2 from "../../assets/D/D2.jpg";
import D3 from "../../assets/D/D3.jpg";
import D4 from "../../assets/D/D4.jpg";
import D5 from "../../assets/D/D5.jpg";
import D6 from "../../assets/D/D6.jpg";

const images = [D1, D2, D3, D4, D5, D6];

const expertise = [
  {
    category: "Visual Identity",
    items: ["Logo", "Brand guideline", "Content Creation", "Signage"],
  },
  {
    category: "Digital Marketing",
    items: [
      "Digital Strategy",
      "SEO",
      "Online Advertising",
      "Community Management",
      "Email Marketing",
      "Performance Analysis",
    ],
  },
  {
    category: "Web Development",
    items: [
      "Website Design",
      "E-commerce Website",
      "Website Redesign",
      "Blog",
      "Web Application",
      "Hosting, Maintenance & Support",
    ],
  },
  {
    category: "Creative Development",
    items: [
      "Immersive Experience",
      "Promotional Website",
      "Animation & Motion Design",
      "3D",
    ],
  },
];

const IMAGE_HEIGHT = 280;

gsap.registerPlugin(ScrollTrigger);

const GridD = () => {
  const galleryRef = useRef(null);
  const imagesRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const gallery = galleryRef.current;
    const imagesContainer = imagesRef.current;

    if (!gallery || !imagesContainer) return;

    imagesContainer.style.height = `${IMAGE_HEIGHT * images.length}px`;

    gsap.set(gallery, { autoAlpha: 0, scale: 1 });

    const setTop = gsap.quickSetter(gallery, "top", "px");
    const setLeft = gsap.quickSetter(gallery, "left", "px");

    let currentMarginTop = 0;
    let targetMarginTop = 0;

    gsap.ticker.add(() => {
      currentMarginTop += (targetMarginTop - currentMarginTop) * 0.15;
      gsap.set(imagesContainer, { marginTop: -currentMarginTop });
    });

    itemsRef.current.forEach((el, index) => {
      if (!el) return;

      const onMouseEnter = () => {
        targetMarginTop = IMAGE_HEIGHT * index;

        gsap.to(el, {
          scale: 1.1,
          rotation: 3,
          color: "#f39c12",
          duration: 0.5,
          ease: "power3.out",
          boxShadow: "0 15px 30px rgba(243,156,18,0.6)",
          zIndex: 20,
          filter: "drop-shadow(0 0 15px #f39c12)",
        });

        gsap.to(imagesRef.current.children[index % images.length], {
          scale: 1.15,
          filter: "drop-shadow(0 0 25px #f39c12)",
          duration: 0.5,
          ease: "power3.out",
          zIndex: 20,
          position: "relative",
        });
      };

      const onMouseLeave = () => {
        targetMarginTop = 0;

        gsap.to(el, {
          scale: 1,
          rotation: 0,
          color: "#222",
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
          boxShadow: "none",
          zIndex: 1,
          filter: "none",
        });

        gsap.to(imagesRef.current.children[index % images.length], {
          scale: 1,
          filter: "none",
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
          zIndex: 1,
          position: "relative",
        });
      };

      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);

      el._onMouseEnter = onMouseEnter;
      el._onMouseLeave = onMouseLeave;
    });

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      setTop(y - IMAGE_HEIGHT / 2);

      const galleryWidth = 300;
      let left = x - galleryWidth / 2;
      if (left < 0) left = 0;
      if (left + galleryWidth > window.innerWidth)
        left = window.innerWidth - galleryWidth;

      setLeft(left);

      gsap.to(imagesContainer, {
        x: (x - window.innerWidth / 2) * 0.04,
        y: (y - window.innerHeight / 2) * 0.04,
        rotationX: (y - window.innerHeight / 2) * 0.01,
        rotationY: (x - window.innerWidth / 2) * 0.01,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 500,
        transformOrigin: "center center",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    itemsRef.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 40, scale: 0.95 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: i * 0.1,
        }
      );
    });

    // GSAP ScrollTrigger animation for container fade-in
    gsap.fromTo(
      '.container-works',
      { autoAlpha: 0, y: 60 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.container-works',
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
          scrub: false,
          once: false,
          markers: false,
        },
      }
    );

    // GSAP ScrollTrigger animation for masonry items (text boxes)
    if (itemsRef.current && itemsRef.current.length) {
      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 60, scale: 0.95 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play reverse play reverse',
              scrub: false,
              once: false,
              markers: false,
            },
            delay: i * 0.08,
          }
        );
        // Animate the text inside each box
        const title = el.querySelector('.item-name');
        if (title) {
          gsap.fromTo(
            title,
            { x: -40, autoAlpha: 0 },
            {
              x: 0,
              autoAlpha: 1,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play reverse play reverse',
                scrub: false,
                once: false,
                markers: false,
              },
              delay: 0.2 + i * 0.05,
            }
          );
        }
      });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      itemsRef.current.forEach((el) => {
        if (!el) return;
        el.removeEventListener("mouseenter", el._onMouseEnter);
        el.removeEventListener("mouseleave", el._onMouseLeave);
      });
    };
  }, []);

  const handleMouseEnter = () => {
    if (galleryRef.current) {
      gsap.to(galleryRef.current, {
        autoAlpha: 1,
        scale: 1.1,
        duration: 0.3,
        ease: "power1.out",
        filter: "drop-shadow(0 20px 40px rgba(243,156,18,0.6))",
      });
    }
  };

  const handleMouseLeave = () => {
    if (galleryRef.current) {
      gsap.to(galleryRef.current, {
        autoAlpha: 0,
        scale: 1,
        duration: 0.4,
        ease: "power1.out",
        filter: "none",
      });
    }
  };

  return (
    <section className="works">
      <div className="container-works">
        <div className="content-works">
          <div className="header-works">
            <h3>Expertise</h3>
          </div>

          <div
            id="gallery-work"
            ref={galleryRef}
            style={{
              height: IMAGE_HEIGHT,
              position: "fixed",
              pointerEvents: "none",
              top: 0,
              left: 0,
              width: 300,
              zIndex: 1000,
              borderRadius: 12,
              overflow: "hidden",
              backgroundColor: "rgba(0,0,0,0.1)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              id="work-images"
              ref={imagesRef}
              style={{ position: "relative", top: 0 }}
            >
              {images.map((src, i) => (
                <div
                  key={i}
                  className="work-image"
                  style={{
                    backgroundImage: `url(${src})`,
                    height: IMAGE_HEIGHT,
                    borderRadius: "8px",
                    marginBottom: "20px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.3s ease",
                    willChange: "transform, filter",
                  }}
                />
              ))}
            </div>
          </div>

          <div
            className="items-works"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="grid-works masonry-text-grid"
              style={{
                gap: 0,
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)", // only 2 columns per row
                gridAutoRows: "minmax(220px, auto)",
                width: "100%",
                justifyContent: "stretch",
                alignItems: "stretch",
              }}
            >
              {expertise.map((group, i) => (
                <div
                  key={i}
                  className={`item-work masonry-text-item masonry-size-${i}`}
                  ref={(el) => (itemsRef.current[i] = el)}
                >
                  <div className="title">
                    <div className="item-columns">
                      <span className="item-number">
                        {String(i + 1).padStart(2, "0")})
                      </span>
                      <span className="item-name">{group.category}</span>
                    </div>
                  </div>

                  <div className="tech-stack">
                    {group.items.map((item, idx) => (
                      <span key={idx} className="tech-badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridD;
