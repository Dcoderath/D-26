// // =============================
// // WhySection.jsx
// // =============================

// "use client";

// import { motion } from "framer-motion";
// import "./WhySection.css";



// const features = [
//   {
//     id: "01",
//     title: "We Think Like Founders",
//     description:
//       "We don’t just build projects — we think like business owners. Every decision we make is focused on growth, profitability, and long-term success for your company.",
//   },
//   {
//     id: "02",
//     title: "Results Over Hype",
//     description:
//       "We focus on real outcomes, not empty promises. Our work is driven by strategy, performance, and measurable impact that helps your business move forward.",
//   },
//   {
//     id: "03",
//     title: "Clear Communication",
//     description:
//       "No confusion, no technical overwhelm. We keep the process simple, transparent, and collaborative so you always know what’s happening and why.",
//   },
//   {
//     id: "04",
//     title: "Long-Term Partnership",
//     description:
//       "We build relationships, not one-time projects. Our goal is to grow with you, support your evolution, and help you build a business that lasts.",
//   },
// ];
// // const features = [
// //   {
// //     id: "01",
// //     title: "Business Architecture",
// //     description:
// //       "We design and structure your online business from the ground up — offer creation, positioning, pricing, and scalable revenue models.",
// //   },
// //   {
// //     id: "02",
// //     title: "Growth Infrastructure",
// //     description:
// //       "We implement high-converting funnels, automation systems, and digital assets that work 24/7 to drive consistent growth.",
// //   },
// //   {
// //     id: "03",
// //     title: "Authority & Brand Building",
// //     description:
// //       "We help you stand out in competitive markets by building a powerful brand presence and market authority.",
// //   },
// //   {
// //     id: "04",
// //     title: "Long-Term Scaling",
// //     description:
// //       "Our focus is not short-term wins. We help you scale sustainably, optimize operations, and build a company that lasts.",
// //   },
// // ];
// // const features = [
// //   {
// //     id: "01",
// //     title: "Equipment",
// //     description:
// //       "We use advanced technologies and modern dental equipment at all stages of diagnosis and treatment.",
// //   },
// //   {
// //     id: "02",
// //     title: "Offices",
// //     description:
// //       "Our rooms are designed in a comfortable style to make you feel safe and relaxed during procedures and treatment.",
// //   },
// //   {
// //     id: "03",
// //     title: "Professionalism",
// //     description:
// //       "Our specialists have the latest treatment methods, modern knowledge, and extensive experience.",
// //   },
// //   {
// //     id: "04",
// //     title: "Individuality",
// //     description:
// //       "We offer an individual approach to each patient, ensure anonymity, and provide psycho-emotional support.",
// //   },
// // ];

// export default function WhyWeBestSolutionSection() {
//   return (
//     <section className="why-section">
//       <div className="why-container">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="why-heading"
//         >
//           <div className="heading-left">[ WHY ARE WE</div>
//           <div className="heading-right">THE BEST SOLUTION</div>
//           <div className="heading-center">FOR YOU? ] </div>
//         </motion.div>

//         <div className="why-list">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="why-item"
//             >
//               <div className="why-grid">
//                 <div className="why-box why-number">
//                   {feature.id}
//                 </div>

//                 <div className="why-box why-title">
//                   {feature.title}
//                 </div>

//                 <div className="why-box why-description">
//                   {feature.description}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import "./WhySection.css";
// import D8 from "../../assets/D/d8.svg"; // make sure this path is correct

// const features = [
//   {
//     id: "01",
//     title: "We Think Like Founders",
//     description:
//       "We don’t just build projects — we think like business owners. Every decision we make is focused on growth, profitability, and long-term success for your company.",
//   },
//   {
//     id: "02",
//     title: "Results Over Hype",
//     description:
//       "We focus on real outcomes, not empty promises. Our work is driven by strategy, performance, and measurable impact that helps your business move forward.",
//   },
//   {
//     id: "03",
//     title: "Clear Communication",
//     description:
//       "No confusion, no technical overwhelm. We keep the process simple, transparent, and collaborative so you always know what’s happening and why.",
//   },
//   {
//     id: "04",
//     title: "Long-Term Partnership",
//     description:
//       "We build relationships, not one-time projects. Our goal is to grow with you, support your evolution, and help you build a business that lasts.",
//   },
// ];

// export function WhySection() {
//   return (
//     <section className="why-section">
//       <div className="why-container">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="why-heading"
//         >
//           <div className="heading-left">[ WHY ARE WE</div>
//           <div className="heading-right">THE BEST SOLUTION</div>
//           <div className="heading-center">FOR YOU? ]</div>
//         </motion.div>

//         {/* Features List */}
//         <div className="why-list">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="why-item"
//             >
//               <div className="why-grid">
//                 <div className="why-box why-number">{feature.id}</div>
//                 <div className="why-box why-title">{feature.title}</div>
//                 <div className="why-box why-description">{feature.description}</div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Banners */}
//         <div className="why-banner-wrapper">
//           {/* Top banner: scroll left → right */}
//           <div className="why-banner why-banner-left">
//             <div className="why-banner-track">
//               {[...Array(40)].map((_, i) => (
//                 <div className="why-banner-item" key={i}>
//                   <div className="why-banner-text">JUST IMAGINE, WE DESIGN</div>
//                   <img src={D8} alt="Logo" className="why-banner-image" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Bottom banner: scroll right → left */}
//           <div className="why-banner why-banner-right">
//             <div className="why-banner-track">
//               {[...Array(40)].map((_, i) => (
//                 <div className="why-banner-item" key={i}>
//                   <div className="why-banner-text">JUST IMAGINE, WE DESIGN</div>
//                   <img src={D8} alt="Logo" className="why-banner-image" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhySection;




// "use client";

// import { motion } from "framer-motion";
// import "./WhySection.css";
// import D8 from "../../assets/D/d8.svg";

// // const features = [
// //   {
// //     id: "01",
// //     title: "We Think Like Founders",
// //     description:
// //       "We don’t just build projects — we think like business owners. Every decision we make is focused on growth, profitability, and long-term success for your company.",
// //   },
// //   {
// //     id: "02",
// //     title: "Results Over Hype",
// //     description:
// //       "We focus on real outcomes, not empty promises. Our work is driven by strategy, performance, and measurable impact that helps your business move forward.",
// //   },
// //   {
// //     id: "03",
// //     title: "Clear Communication",
// //     description:
// //       "No confusion, no technical overwhelm. We keep the process simple, transparent, and collaborative so you always know what’s happening and why.",
// //   },
// //   {
// //     id: "04",
// //     title: "Long-Term Partnership",
// //     description:
// //       "We build relationships, not one-time projects. Our goal is to grow with you, support your evolution, and help you build a business that lasts.",
// //   },
// // ];

// const features = [
//   {
//     id: "01",
//     title: "Founder-First Engineering",
//     description:
//       "We transcend code. We analyze your product through a business lens, ensuring every technical decision accelerates your market growth and maximizes ROI.",
//   },
//   {
//     id: "02",
//     title: "Data-Driven Precision",
//     description:
//       "Performance isn't an afterthought. We build high-velocity systems designed for measurable impact, converting complex user journeys into seamless revenue drivers.",
//   },
//   {
//     id: "03",
//     title: "Radical Transparency",
//     description:
//       "Eliminate the black box of development. Our workflow is defined by direct communication, rapid iteration cycles, and absolute alignment with your roadmap.",
//   },
//   {
//     id: "04",
//     title: "Scalable Architecture",
//     description:
//       "We don't build for today; we engineer for your future. Our solutions are architected to scale globally, maintaining stability as your user base explodes.",
//   },
// ];

// export function WhySection() {
//   return (
//     <section className="why-section">
//       <div className="why-container">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="why-heading"
//         >
//           <div className="heading-left">[ WHY THE WORLD'S</div>
//           <div className="heading-right">FASTEST-GROWING TEAMS</div>
//           <div className="heading-center">CHOOSE US ]</div>
//         </motion.div>

//         {/* Features */}
//         <div className="why-list">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className={`why-item why-item-${index}`}
//             >
//               <div className="why-grid">
//                 <div className="why-box why-number">{feature.id}</div>
//                 <div className="why-box why-title">{feature.title}</div>
//                 <div className="why-box why-description">{feature.description}</div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Banners */}
//         <div className="why-banner-wrapper">
//           <div className="why-banner why-banner-left">
//             <div className="why-banner-track">
//               {[...Array(40)].map((_, i) => (
//                 <div className="why-banner-item" key={i}>
//                   <div className="why-banner-text">JUST IMAGINE, WE DESIGN</div>
//                   <img src={D8} alt="Logo" className="why-banner-image" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="why-banner why-banner-right">
//             <div className="why-banner-track">
//               {[...Array(40)].map((_, i) => (
//                 <div className="why-banner-item" key={i}>
//                   <div className="why-banner-text">JUST IMAGINE, WE DESIGN</div>
//                   <img src={D8} alt="Logo" className="why-banner-image" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }



"use client";
import React, { useEffect, useRef } from "react";
import "./WhySection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import D8 from "../../assets/D/d8.svg";
import img13 from "../../assets/Image/img13.jpg";
import img14 from "../../assets/Image/img14.jpg";
import img15 from "../../assets/Image/img15.jpg";
import img16 from "../../assets/Image/img16.jpg";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: "01",
    title: "Founder Mindset",
    description:
      "We think like business owners, not just developers. Every decision is made to support growth, reduce unnecessary costs, and improve long-term outcomes. Our focus stays on building solutions that actually move your business forward.",
    icon: img13,
    bgColor: "#C3ABFF",
    textColor: "#111",
  },
  {
    id: "02",
    title: "Fast Execution",
    description:
      "Speed matters in today’s market, and we deliver without cutting corners. We follow a streamlined process that helps you launch faster while maintaining quality. This allows you to test, iterate, and scale ahead of your competition.",
    icon: img14,
    bgColor: "#ffffff",
    textColor: "#111",
  },
  {
    id: "03",
    title: "Clear Process",
    description:
      "We keep everything simple and transparent from day one. You always know what’s happening, what’s next, and where things stand. No confusion, no hidden steps—just clear communication and smooth collaboration.",
    icon: img15,
    bgColor: "#fed35b",
    textColor: "#111",
  },
  {
    id: "04",
    title: "Scalable Systems",
    description:
      "We build systems that are ready for growth from the start. As your users increase, performance stays stable and reliable. Our goal is to give you a strong foundation that supports your future expansion without issues.",
    icon: img16,
    bgColor: "#2d2c2c",
    textColor: "#fff",
  },
];

export function WhySection() {
  const cardsRef = useRef([]);
  const listRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const list = listRef.current;

      if (!list) return;

      const headerOffset = 110;

      cards.forEach((card, index) => {
        if (!card) return;

        ScrollTrigger.create({
          trigger: card,
          start: `top ${index * headerOffset}px`,
          endTrigger: list,
          end: `bottom ${((cards.length - 1) * headerOffset) + 400}px`,
          pin: true,
          pinSpacing: false,
          scrub: true,
          invalidateOnRefresh: true,
        });
      });
    }, sectionRef); // 👈 scoped to this section only

    return () => ctx.revert(); // 👈 clean up safely
  }, []);

  return (
    <section className="why-section" ref={sectionRef}>
      <div className="why-container">
        
        <div className="why-heading-wrapper">
          <div className="why-heading-bold">
            <span className="bracket"></span>
            WHY THE WORLD'S FASTEST GROWING TEAMS CHOOSE US
            <span className="bracket"></span>
          </div>
        </div>

        {/* ✅ IMPORTANT REF */}
        <div className="why-full-list" ref={listRef}>
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className="why-item-card"
              ref={(el) => (cardsRef.current[idx] = el)}
              style={{
                backgroundColor: feature.bgColor,
                color: feature.textColor,
                zIndex: idx + 1
              }}
            >
              <div className="card-left">
                <div className="card-left-top">{feature.title}</div>
                <div className="card-left-bottom">{feature.description}</div>
              </div>

              <div className="card-right">
                <img src={feature.icon} alt={feature.title} className="card-img" />
              </div>
            </div>
          ))}
        </div>

        {/* MARQUEE */}
        <div className="why-banner-wrapper">
          <div className="why-banner why-banner-left">
            <div className="why-banner-track">
              {[...Array(20)].map((_, i) => (
                <div className="why-banner-item" key={i}>
                  <div className="why-banner-text">JUST IMAGINE, WE DESIGN</div>
                  <img src={D8} alt="Logo" className="why-banner-image" />
                </div>
              ))}
            </div>
          </div>

          <div className="why-banner why-banner-right">
            <div className="why-banner-track">
              {[...Array(20)].map((_, i) => (
                <div className="why-banner-item" key={i}>
                  <div className="why-banner-text">JUST IMAGINE, WE DESIGN</div>
                  <img src={D8} alt="Logo" className="why-banner-image" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhySection;








