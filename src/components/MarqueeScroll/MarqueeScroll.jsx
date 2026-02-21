import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
import imagesLoaded from "imagesloaded";
import "./MarqueeScroll.css";

gsap.registerPlugin(ScrollTrigger);

const MarqueeScroll = () => {
  const containerRef = useRef(null);

  // ✅ Preload images immediately
  const images = Object.entries(
    import.meta.glob("../../assets/Image/*.jpg", { eager: true })
  )
    .sort((a, b) => {
      const numA = parseInt(a[0].match(/\((\d+)\)/)[1]);
      const numB = parseInt(b[0].match(/\((\d+)\)/)[1]);
      return numA - numB;
    })
    .map(([, mod]) => {
      const img = new Image();
      img.src = mod.default; // preload
      return mod.default;
    });

  useEffect(() => {
    const container = containerRef.current;

    // ✅ Wait until all images are loaded
    imagesLoaded(container, { background: true }, () => {
      // Initialize GSAP and Lenis after images load
      const ctx = gsap.context(() => {
        const rows = container.querySelectorAll(".marqueeScroll-container");

        rows.forEach((row, index) => {
          const marquee = row.querySelector(".marqueeScroll-marquee");

          // Duplicate content in JSX instead of innerHTML += innerHTML
          // (already done in Row component)

          // SplitType text animations
          const headings = row.querySelectorAll("h1");
          headings.forEach((heading) => {
            const split = new SplitType(heading, { types: "chars" });
            gsap.fromTo(
              split.chars,
              { fontWeight: 100 },
              {
                fontWeight: 900,
                stagger: { each: 0.15, from: index % 2 !== 0 ? "start" : "end" },
                scrollTrigger: {
                  trigger: row,
                  start: "top 80%",
                  end: "top 20%",
                  scrub: true,
                },
              }
            );
          });

          // Horizontal marquee movement
          ScrollTrigger.matchMedia({
            "(max-width: 768px)": () => {
              // Small screens: slower, shorter movement
              gsap.fromTo(
                marquee,
                { xPercent: 0 },
                {
                  xPercent: -10,
                  ease: "none",
                  scrollTrigger: {
                    trigger: row,
                    start: "top 90%",
                    end: "top 10%",
                    scrub: 1,
                  },
                }
              );
            },
            "(min-width: 769px)": () => {
              // Larger screens
              gsap.fromTo(
                marquee,
                { xPercent: index % 2 === 0 ? -20 : 0 },
                {
                  xPercent: index % 2 === 0 ? 0 : -20,
                  ease: "none",
                  scrollTrigger: {
                    trigger: row,
                    start: "top bottom",
                    end: "200% top",
                    scrub: 1,
                  },
                }
              );
            },
          });
        });

        // Lenis smooth scrolling
        const lenis = new Lenis({ smooth: true, lerp: 0.08 });
        lenis.on("scroll", ScrollTrigger.update);

        const raf = (time) => {
          lenis.raf(time * 1000);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        gsap.ticker.lagSmoothing(0);
      }, container);

      return () => ctx.revert();
    });
  }, []);

  return (
    <div className="marqueeScroll-wrapper" ref={containerRef}>
      <section className="marqueeScroll-section">
        <Row images={images.slice(0, 4)} text1="Unique" text2="Design" />
        <Row images={images.slice(4, 8)} text1="Release" text2="Drop" />
        <Row images={images.slice(8, 12)} text1="2500" text2="Limited" />
        <Row images={images.slice(12, 16)} text1="Rarity" text2="Exclusive" />
      </section>
    </div>
  );
};

// ✅ Row component with duplicated content in JSX
const Row = ({ images, text1, text2 }) => {
  // Combine images + text for duplication
  const items = [
    ...images.slice(0, 2),
    text1,
    ...images.slice(2, 4),
    text2,
  ];

  return (
    <div className="marqueeScroll-container">
      <div className="marqueeScroll-marquee">
        {items.map((item, i) =>
          typeof item === "string" ? (
            <div className="marqueeScroll-item marqueeScroll-text" key={i}>
              <h1>{item}</h1>
            </div>
          ) : (
            <div className="marqueeScroll-item" key={i}>
              <img src={item} alt="" loading="eager" />
            </div>
          )
        )}
        {/* Duplicate for seamless scroll */}
        {items.map((item, i) =>
          typeof item === "string" ? (
            <div className="marqueeScroll-item marqueeScroll-text" key={i + items.length}>
              <h1>{item}</h1>
            </div>
          ) : (
            <div className="marqueeScroll-item" key={i + items.length}>
              <img src={item} alt="" loading="eager" />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MarqueeScroll;