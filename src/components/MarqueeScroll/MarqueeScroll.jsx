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

  // 1. Optimization: Use eager glob and sort
  // Tip: Convert your .jpg to .webp to reduce size by 70% automatically
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
    // 2. Smooth Scroll Init
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. GSAP Context for clean cleanup
    const ctx = gsap.context(() => {
      const containers = document.querySelectorAll(".marqueeScroll-container");

      containers.forEach((container, index) => {
        const marquee = container.querySelector(".marqueeScroll-marquee");
        
        // Duplicate content for seamless loop
        const originalContent = marquee.innerHTML;
        marquee.innerHTML = originalContent + originalContent;

        // Weight Animation
        const headings = container.querySelectorAll("h1");
        headings.forEach((heading) => {
          const split = new SplitType(heading, { types: "chars" });
          gsap.fromTo(split.chars, 
            { fontWeight: 100 },
            {
              fontWeight: 900,
              stagger: 0.05,
              scrollTrigger: {
                trigger: container,
                start: "top 90%",
                end: "top 20%",
                scrub: true,
              },
            }
          );
        });

        // Marquee Movement
        const isEven = index % 2 === 0;
        gsap.fromTo(marquee,
          { xPercent: isEven ? 0 : -50 },
          {
            xPercent: isEven ? -50 : 0,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      // Refresh triggers once everything is rendered
      ScrollTrigger.refresh();
      setIsReady(true);
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div className={`marqueeScroll-wrapper ${isReady ? 'is-visible' : ''}`} ref={containerRef}>
      <section className="marqueeScroll-section">
        {/* Pass priority to top rows to ensure they load first */}
        <Row images={images.slice(0, 4)} text="Unique" priority="high" />
        <Row images={images.slice(4, 8)} text="Release" priority="high" />
        <Row images={images.slice(8, 12)} text="Limited" priority="auto" />
        <Row images={images.slice(12, 16)} text="Exclusive" priority="auto" />
      </section>
    </div>
  );
};

const Row = ({ images, text, priority }) => {
  return (
    <div className="marqueeScroll-container">
      <div className="marqueeScroll-marquee">
        {/* Left set */}
        {images.slice(0, 2).map((img, i) => (
          <div className="marqueeScroll-item" key={`img-l-${i}`}>
            <img 
              src={img} 
              alt="" 
              fetchpriority={priority} 
              loading="eager" 
              decoding="sync"
            />
          </div>
        ))}

        {/* Center Text */}
        <div className="marqueeScroll-item marqueeScroll-text">
          <h1>{text}</h1>
        </div>

        {/* Right set */}
        {images.slice(2, 4).map((img, i) => (
          <div className="marqueeScroll-item" key={`img-r-${i}`}>
            <img 
              src={img} 
              alt="" 
              fetchpriority={priority} 
              loading="eager" 
              decoding="sync"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeScroll;