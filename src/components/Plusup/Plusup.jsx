import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import './plusup.css';

import AdBlank from '../AdBlank/AdBlank';

const Plusup = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const pinnedTrigger = ScrollTrigger.create({
      trigger: ".plusup-pinned",
      start: "top top",
      endTrigger: ".plusup-whitespace",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });

    const headerInfoTrigger = ScrollTrigger.create({
      trigger: ".plusup-header-info",
      start: "top top",
      end: "bottom+=50% top",
      pin: true,
      pinSpacing: false,
    });

    const rotationTrigger = ScrollTrigger.create({
      trigger: ".plusup-pinned",
      start: "top top",
      endTrigger: ".plusup-header-info",
      end: "bottom bottom",
      onUpdate: (self) => {
        const rotation = self.progress * 360;
        gsap.to(".plusup-revealer", { rotation });
      },
    });

    const clipPathTrigger = ScrollTrigger.create({
      trigger: ".plusup-pinned",
      start: "top top",
      endTrigger: ".plusup-header-info",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress;
        const clipPath = `polygon(
          ${45 - 45 * progress}% ${0}%,
          ${55 + 45 * progress}% ${0}%,
          ${55 + 45 * progress}% 100%,
          ${45 - 45 * progress}% 100%
        )`;
        gsap.to(".plusup-revealer-1, .plusup-revealer-2", {
          clipPath: clipPath,
          ease: "none",
          duration: 0,
        });
      },
    });

    const horizontalTrigger = ScrollTrigger.create({
      trigger: ".plusup-header-info",
      start: "top top",
      end: "bottom 80%",
      scrub: 1,
      onUpdate: (self) => {
        const left = 35 + 15 * self.progress;
        gsap.to(".plusup-revealer", {
          left: `${left}%`,
          ease: "none",
          duration: 0,
        });
      },
    });

    const scaleTrigger = ScrollTrigger.create({
      trigger: ".plusup-header-info",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 0.5,
      pin: true,
      onUpdate: (self) => {
        const maxScaleX = 25;
        const maxScaleY = 9;

        const scaleX = 1 + (maxScaleX - 1) * self.progress;
        const scaleY = 1 + (maxScaleY - 1) * self.progress;

        gsap.to(".plusup-revealer", {
          scaleX,
          scaleY,
          transformOrigin: "center center",
          ease: "power2.out",
          duration: 0,
        });
      },
    });

    const headerRowsRoll = gsap.utils.toArray(".plusup-header-row").map((row) => {
      row.parentNode.style.perspective = "1000px";

      return ScrollTrigger.create({
        trigger: row,
        start: "top 60%",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const rotate = self.progress * 360;
          gsap.set(row, {
            rotateX: rotate,
            transformOrigin: "center center",
            transformStyle: "preserve-3d",
          });
        },
      });
    });

    return () => {
      [
        pinnedTrigger,
        headerInfoTrigger,
        rotationTrigger,
        clipPathTrigger,
        horizontalTrigger,
        scaleTrigger,
        ...headerRowsRoll
      ].forEach(trigger => trigger.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <div className="plusup-container">
      <section className="plusup-hero">
        <AdBlank />
      </section>

      <section className="plusup-info">
        <div className="plusup-header-rows">
          <div className="plusup-header-row"><h1>Motion</h1></div>
          <div className="plusup-header-row"><h1>Stills</h1></div>
        </div>
      </section>

      <section className="plusup-header-info"></section>

      <section className="plusup-pinned">
        <div className="plusup-revealer">
          <div className="plusup-revealer-1"></div>
          <div className="plusup-revealer-2"></div>
        </div>
      </section>

      <section className="plusup-whitespace"></section>

      <section className="plusup-website-content"></section>
    </div>
  );
};

export default Plusup;
