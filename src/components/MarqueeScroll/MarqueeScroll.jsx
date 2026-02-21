import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
import "./MarqueeScroll.css";

gsap.registerPlugin(ScrollTrigger);

const MarqueeScroll = () => {
  const containerRef = useRef(null);

  // ✅ Load and SORT images properly (1 → 16)
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
      function animateChars(chars, reverse = false) {
        gsap.fromTo(
          chars,
          { fontWeight: 100 },
          {
            fontWeight: 900,
            duration: 1,
            ease: "none",
            stagger: {
              each: 0.35,
              from: reverse ? "start" : "end",
            },
            scrollTrigger: {
              trigger: chars[0].closest(".marqueeScroll-container"),
              start: "50% bottom",
              end: "top top",
              scrub: true,
            },
          }
        );
      }

      new SplitType(".marqueeScroll-item h1", { types: "chars" });

      const containers = document.querySelectorAll(
        ".marqueeScroll-container"
      );

      containers.forEach((container, index) => {
        const marquee = container.querySelector(".marqueeScroll-marquee");
        const words = marquee.querySelectorAll("h1");

        const start = "0%";
        const end = index % 2 === 0 ? "10%" : "-15%";

        gsap.fromTo(
          marquee,
          { x: start },
          {
            x: end,
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "150% top",
              scrub: true,
            },
          }
        );

        words.forEach((word) => {
          const chars = Array.from(word.querySelectorAll(".char"));
          if (chars.length) {
            animateChars(chars, index % 2 !== 0);
          }
        });
      });

      const lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="marqueeScroll-wrapper" ref={containerRef}>
      <section className="marqueeScroll-section">

        {/* ROW 1 */}
        <div className="marqueeScroll-container">
          <div className="marqueeScroll-marquee">
            <div className="marqueeScroll-item">
              <img src={images[0]} alt="" />
            </div>
            <div className="marqueeScroll-item marqueeScroll-text">
              <h1>Unique</h1>
            </div>
            <div className="marqueeScroll-item">
              <img src={images[1]} alt="" />
            </div>
            <div className="marqueeScroll-item">
              <img src={images[2]} alt="" />
            </div>
            <div className="marqueeScroll-item">
              <img src={images[3]} alt="" />
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="marqueeScroll-container">
          <div className="marqueeScroll-marquee">
            <div className="marqueeScroll-item">
              <img src={images[4]} alt="" />
            </div>
            <div className="marqueeScroll-item">
              <img src={images[5]} alt="" />
            </div>
            <div className="marqueeScroll-item">
              <img src={images[6]} alt="" />
            </div>
            <div className="marqueeScroll-item marqueeScroll-text">
              <h1>Release</h1>
            </div>
            <div className="marqueeScroll-item">
              <img src={images[7]} alt="" />
            </div>
          </div>
        </div>

        {/* ROW 3 */}
        <div className="marqueeScroll-container">
          <div className="marqueeScroll-marquee">
            <div className="marqueeScroll-item">
              <img src={images[8]} alt="" />
            </div>
            <div className="marqueeScroll-item marqueeScroll-text">
              <h1>2500</h1>
            </div>
            <div className="marqueeScroll-item">
              <img src={images[9]} alt="" />
            </div>
            <div className="marqueeScroll-item">
              <img src={images[10]} alt="" />
            </div>
            <div className="marqueeScroll-item">
              <img src={images[11]} alt="" />
            </div>
          </div>
        </div>

        {/* ROW 4 */}
        <div className="marqueeScroll-container">
          <div className="marqueeScroll-marquee">
            <div className="marqueeScroll-item">
              <img src={images[12]} alt="" />
            </div>
            <div className="marqueeScroll-item">
              <img src={images[13]} alt="" />
            </div>
            <div className="marqueeScroll-item">
              <img src={images[14]} alt="" />
            </div>
            <div className="marqueeScroll-item marqueeScroll-text">
              <h1>Rarity</h1>
            </div>
            <div className="marqueeScroll-item">
              <img src={images[15]} alt="" />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default MarqueeScroll;