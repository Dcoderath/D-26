import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
import "./MarqueeScroll.css";

gsap.registerPlugin(ScrollTrigger);

const MarqueeScroll = () => {
  const containerRef = useRef(null);

  // Import all images and sort by number in filename (img1.jpg → img16.jpg)
  const images = Object.entries(
    import.meta.glob("../../assets/Image/*.jpg", { eager: true })
  )
    .sort((a, b) => {
      const matchA = a[0].match(/img(\d+)\.jpg/i);
      const matchB = b[0].match(/img(\d+)\.jpg/i);
      const numA = matchA ? parseInt(matchA[1]) : 0;
      const numB = matchB ? parseInt(matchB[1]) : 0;
      return numA - numB;
    })
    .map(([, mod]) => mod.default);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const containers = document.querySelectorAll(".marqueeScroll-container");

      containers.forEach((container, index) => {
        const marquee = container.querySelector(".marqueeScroll-marquee");

        // Duplicate content for seamless marquee
        const clone = marquee.innerHTML;
        marquee.innerHTML += clone;

        // Animate text
        const headings = container.querySelectorAll("h1");
        headings.forEach((heading) => {
          const split = new SplitType(heading, { types: "chars" });

          gsap.fromTo(
            split.chars,
            { fontWeight: 100 },
            {
              fontWeight: 900,
              stagger: {
                each: 0.15,
                from: index % 2 !== 0 ? "start" : "end",
              },
              scrollTrigger: {
                trigger: container,
                start: "top 80%",
                end: "top 20%",
                scrub: true,
              },
            }
          );
        });

        // Horizontal marquee animation
        gsap.fromTo(
          marquee,
          { xPercent: index % 2 === 0 ? -20 : 0 },
          {
            xPercent: index % 2 === 0 ? 0 : -20,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "200% top",
              scrub: 1,
            },
          }
        );
      });

      // Lenis smooth scroll
      const lenis = new Lenis({ smooth: true, lerp: 0.08 });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="marqueeScroll-wrapper" ref={containerRef}>
      <section className="marqueeScroll-section">

        <Row images={images.slice(0, 4)} text="Unique" />
        <Row images={images.slice(4, 8)} text="Release" />
        <Row images={images.slice(8, 12)} text="Limited" />
        <Row images={images.slice(12, 16)} text="Exclusive" />

      </section>
    </div>
  );
};

// Row component with only 1 text per row
const Row = ({ images, text }) => {
  return (
    <div className="marqueeScroll-container">
      <div className="marqueeScroll-marquee">

        {/* First two images */}
        {images.slice(0, 2).map((img, i) => (
          <div className="marqueeScroll-item" key={i}>
            <img src={img} alt="" />
          </div>
        ))}

        {/* Single text */}
        <div className="marqueeScroll-item marqueeScroll-text">
          <h1>{text}</h1>
        </div>

        {/* Next two images */}
        {images.slice(2, 4).map((img, i) => (
          <div className="marqueeScroll-item" key={i + 2}>
            <img src={img} alt="" />
          </div>
        ))}

      </div>
    </div>
  );
};

export default MarqueeScroll;