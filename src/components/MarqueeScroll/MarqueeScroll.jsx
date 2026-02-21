import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
import "./MarqueeScroll.css";

gsap.registerPlugin(ScrollTrigger);

const MarqueeScroll = () => {
  const containerRef = useRef(null);

  const images = Object.entries(
    import.meta.glob("../../assets/Image/*.jpg", { eager: true })
  )
    .sort((a, b) => {
      const numA = parseInt(a[0].match(/\((\d+)\)/)[1]);
      const numB = parseInt(b[0].match(/\((\d+)\)/)[1]);
      return numA - numB;
    })
    .map(([, mod]) => mod.default);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const containers = document.querySelectorAll(
        ".marqueeScroll-container"
      );

      containers.forEach((container, index) => {
        const marquee = container.querySelector(".marqueeScroll-marquee");

        // ✅ Duplicate content BEFORE SplitType
        const clone = marquee.innerHTML;
        marquee.innerHTML += clone;

        // ✅ Split + Animate ALL texts (both originals + duplicates)
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

        // ✅ Seamless horizontal movement
        gsap.fromTo(
          marquee,
          {
            xPercent: index % 2 === 0 ? -20 : 0,
          },
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

      // ✅ Lenis smooth scroll
      const lenis = new Lenis({
        smooth: true,
        lerp: 0.08,
      });

      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="marqueeScroll-wrapper" ref={containerRef}>
      <section className="marqueeScroll-section">

        <Row
          images={images.slice(0, 4)}
          text1="Unique"
          text2="Design"
        />

        <Row
          images={images.slice(4, 8)}
          text1="Release"
          text2="Drop"
        />

        <Row
          images={images.slice(8, 12)}
          text1="2500"
          text2="Limited"
        />

        <Row
          images={images.slice(12, 16)}
          text1="Rarity"
          text2="Exclusive"
        />

      </section>
    </div>
  );
};

const Row = ({ images, text1, text2 }) => {
  return (
    <div className="marqueeScroll-container">
      <div className="marqueeScroll-marquee">

        {/* First two images */}
        {images.slice(0, 2).map((img, i) => (
          <div className="marqueeScroll-item" key={i}>
            <img src={img} alt="" />
          </div>
        ))}

        <div className="marqueeScroll-item marqueeScroll-text">
          <h1>{text1}</h1>
        </div>

        {/* Next two images */}
        {images.slice(2, 4).map((img, i) => (
          <div className="marqueeScroll-item" key={i + 2}>
            <img src={img} alt="" />
          </div>
        ))}

        <div className="marqueeScroll-item marqueeScroll-text">
          <h1>{text2}</h1>
        </div>

      </div>
    </div>
  );
};

export default MarqueeScroll;