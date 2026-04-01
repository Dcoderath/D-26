// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";
// import Lenis from "@studio-freight/lenis";
// import "./MarqueeScroll.css";

// gsap.registerPlugin(ScrollTrigger);

// const MarqueeScroll = () => {
//   const containerRef = useRef(null);

//   // Auto-import images from assets
//   const images = Object.entries(
//     import.meta.glob("../../assets/Image/*.jpg", { eager: true })
//   )
//     .sort((a, b) => {
//       const numA = parseInt(a[0].match(/img(\d+)/)?.[1] || 0);
//       const numB = parseInt(b[0].match(/img(\d+)/)?.[1] || 0);
//       return numA - numB;
//     })
//     .map(([, mod]) => mod.default);

//   useEffect(() => {
//     // Initialize Lenis for smooth scrolling
//     const lenis = new Lenis({
//       lerp: 0.1,
//       smoothWheel: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     const ctx = gsap.context(() => {
//       const containers = document.querySelectorAll(".marqueeScroll-container");

//       containers.forEach((container, index) => {
//         const marquee = container.querySelector(".marqueeScroll-marquee");
        
//         // 1. Duplicate the inner content for a seamless loop
//         const originalContent = marquee.innerHTML;
//         marquee.innerHTML = originalContent + originalContent;

//         // 2. Animate the weight of the text on scroll
//         const headings = container.querySelectorAll("h1");
//         headings.forEach((heading) => {
//           const split = new SplitType(heading, { types: "chars" });
          
//           gsap.fromTo(split.chars, 
//             { fontWeight: 100 },
//             {
//               fontWeight: 900,
//               stagger: 0.05,
//               scrollTrigger: {
//                 trigger: container,
//                 start: "top 90%",
//                 end: "top 20%",
//                 scrub: true,
//               },
//             }
//           );
//         });

//         // 3. The Marquee Movement Logic
//         // Even rows go left, Odd rows go right
//         const isEven = index % 2 === 0;
        
//         gsap.fromTo(marquee,
//           { xPercent: isEven ? 0 : -50 },
//           {
//             xPercent: isEven ? -50 : 0,
//             ease: "none",
//             scrollTrigger: {
//               trigger: container,
//               start: "top bottom",
//               end: "bottom top",
//               scrub: 1,
//             },
//           }
//         );
//       });

//       // Recalculate everything on resize to fix mobile height shifts
//       window.addEventListener("resize", () => ScrollTrigger.refresh());
//     }, containerRef);

//     return () => {
//       ctx.revert();
//       lenis.destroy();
//       window.removeEventListener("resize", () => ScrollTrigger.refresh());
//     };
//   }, []);

//   return (
//     <div className="marqueeScroll-wrapper" ref={containerRef}>
//       <section className="marqueeScroll-section">
//         <Row images={images.slice(0, 4)} text="Unique" />
//         <Row images={images.slice(4, 8)} text="Release" />
//         <Row images={images.slice(8, 12)} text="Limited" />
//         <Row images={images.slice(12, 16)} text="Exclusive" />
//       </section>
//     </div>
//   );
// };

// const Row = ({ images, text }) => {
//   return (
//     <div className="marqueeScroll-container">
//       <div className="marqueeScroll-marquee">
//         {/* Left set of images */}
//         {images.slice(0, 2).map((img, i) => (
//           <div className="marqueeScroll-item" key={`img-left-${i}`}>
//             <img src={img} alt="" />
//           </div>
//         ))}

//         {/* Center Text */}
//         <div className="marqueeScroll-item marqueeScroll-text">
//           <h1>{text}</h1>
//         </div>

//         {/* Right set of images */}
//         {images.slice(2, 4).map((img, i) => (
//           <div className="marqueeScroll-item" key={`img-right-${i}`}>
//             <img src={img} alt="" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MarqueeScroll;



// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";
// import Lenis from "@studio-freight/lenis";
// import "./MarqueeScroll.css";

// gsap.registerPlugin(ScrollTrigger);

// const MarqueeScroll = () => {
//   const containerRef = useRef(null);
//   const [isReady, setIsReady] = useState(false);

//   // Load images (stable)
//   const images = Object.entries(
//     import.meta.glob("../../assets/Image/*.{jpg,webp,png}", { eager: true })
//   )
//     .sort((a, b) => {
//       const numA = parseInt(a[0].match(/img(\d+)/)?.[1] || 0);
//       const numB = parseInt(b[0].match(/img(\d+)/)?.[1] || 0);
//       return numA - numB;
//     })
//     .map(([, mod]) => mod.default);

//   useEffect(() => {
//     const isMobile = window.innerWidth <= 480;

//     // ✅ Single Lenis instance (scoped)
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smoothWheel: true,
//       touchMultiplier: 2,
//     });

//     lenis.on("scroll", ScrollTrigger.update);

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     // ✅ Connect GSAP with Lenis
//     ScrollTrigger.scrollerProxy(document.body, {
//       scrollTop(value) {
//         return arguments.length
//           ? lenis.scrollTo(value)
//           : window.scrollY;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//     });

//     const ctx = gsap.context(() => {
//       const containers =
//         containerRef.current.querySelectorAll(".marqueeScroll-container");

//       containers.forEach((container, index) => {
//         const marquee = container.querySelector(".marqueeScroll-marquee");

//         const headings = container.querySelectorAll("h1");

//         headings.forEach((heading) => {
//           if (!heading.dataset.split) {
//             const split = new SplitType(heading, { types: "chars" });
//             heading.dataset.split = "true";

//             gsap.fromTo(
//               split.chars,
//               { fontWeight: 100 },
//               {
//                 fontWeight: 900,
//                 stagger: isMobile ? 0.02 : 0.05,
//                 scrollTrigger: {
//                   trigger: container,
//                   start: "top 95%",
//                   end: "top 30%",
//                   scrub: true,
//                 },
//               }
//             );
//           }
//         });

//         const isEven = index % 2 === 0;

//         gsap.fromTo(
//           marquee,
//           { xPercent: isEven ? 0 : -50 },
//           {
//             xPercent: isEven ? -50 : 0,
//             ease: "none",
//             scrollTrigger: {
//               trigger: container,
//               start: "top bottom",
//               end: "bottom top",
//               scrub: isMobile ? 0.5 : 1,
//             },
//           }
//         );
//       });

//       ScrollTrigger.refresh();
//       setIsReady(true);
//     }, containerRef);

//     const handleLoad = () => ScrollTrigger.refresh();
//     window.addEventListener("load", handleLoad);

//     const timer = setTimeout(() => {
//       ScrollTrigger.refresh();
//     }, 1000);

//     return () => {
//       ctx.revert();
//       lenis.destroy();
//       window.removeEventListener("load", handleLoad);
//       clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <div
//       className={`marqueeScroll-wrapper ${isReady ? "is-visible" : ""}`}
//       ref={containerRef}
//       id="marqueeScrollScope"
//     >
//       <section className="marqueeScroll-section">
//         <Row images={images.slice(0, 4)} text="Unique" priority="high" />
//         <Row images={images.slice(4, 8)} text="Release" priority="high" />
//         <Row images={images.slice(8, 12)} text="Limited" priority="auto" />
//         <Row images={images.slice(12, 16)} text="Exclusive" priority="auto" />
//       </section>
//     </div>
//   );
// };

// const Row = ({ images, text, priority }) => {
//   return (
//     <div className="marqueeScroll-container">
//       <div className="marqueeScroll-marquee">
//         {/* ✅ duplicated safely via React */}
//         {[...images, ...images].map((img, i) => (
//           <div className="marqueeScroll-item" key={`img-${i}`}>
//             <img
//               src={img}
//               alt=""
//               fetchPriority={priority}
//               loading="eager"
//               decoding="async"
//             />
//           </div>
//         ))}

//         {/* Text */}
//         <div className="marqueeScroll-item marqueeScroll-text">
//           <h1>{text}</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarqueeScroll;


"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
import "./MarqueeScroll.css";

gsap.registerPlugin(ScrollTrigger);

const MarqueeScroll = () => {
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  // Load images
  const images = Object.entries(
    import.meta.glob("../../assets/Image/*.{jpg,webp,png}", { eager: true })
  )
    .sort((a, b) => {
      const numA = parseInt(a[0].match(/img(\d+)/)?.[1] || 0);
      const numB = parseInt(b[0].match(/img(\d+)/)?.[1] || 0);
      return numA - numB;
    })
    .map(([, mod]) => mod.default);

  useEffect(() => {
    const isMobile = window.innerWidth <= 480;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value)
          : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    const ctx = gsap.context(() => {
      const containers =
        containerRef.current.querySelectorAll(".marqueeScroll-container");

      containers.forEach((container, index) => {
        const marquee = container.querySelector(".marqueeScroll-marquee");

        const headings = container.querySelectorAll("h1");

        headings.forEach((heading) => {
          if (!heading.dataset.split) {
            const split = new SplitType(heading, { types: "chars" });
            heading.dataset.split = "true";

            gsap.fromTo(
              split.chars,
              { fontWeight: 100 },
              {
                fontWeight: 900,
                stagger: isMobile ? 0.02 : 0.05,
                scrollTrigger: {
                  trigger: container,
                  start: "top 95%",
                  end: "top 30%",
                  scrub: true,
                },
              }
            );
          }
        });

        const isEven = index % 2 === 0;

        gsap.fromTo(
          marquee,
          { xPercent: isEven ? 0 : -50 },
          {
            xPercent: isEven ? -50 : 0,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: isMobile ? 0.5 : 1,
            },
          }
        );
      });

      ScrollTrigger.refresh();
      setIsReady(true);
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className={`marqueeScroll-wrapper ${isReady ? "is-visible" : ""}`}
      ref={containerRef}
      id="marqueeScrollScope"
    >
      <section className="marqueeScroll-section">
        <Row images={images.slice(0, 4)} text="Unique" />
        <Row images={images.slice(4, 8)} text="Release" />
        <Row images={images.slice(8, 12)} text="Limited" />
        <Row images={images.slice(12, 16)} text="Exclusive" />
      </section>
    </div>
  );
};

const Row = ({ images, text }) => {
  return (
    <div className="marqueeScroll-container">
      <div className="marqueeScroll-marquee">
        
        {/* Left Images */}
        {images.map((img, i) => (
          <div className="marqueeScroll-item" key={`l-${i}`}>
            <img src={img} alt="" />
          </div>
        ))}

        {/* Center Text */}
        <div className="marqueeScroll-item marqueeScroll-text">
          <h1>{text}</h1>
        </div>

        {/* Right Images */}
        {images.map((img, i) => (
          <div className="marqueeScroll-item" key={`r-${i}`}>
            <img src={img} alt="" />
          </div>
        ))}

      </div>
    </div>
  );
};

export default MarqueeScroll;