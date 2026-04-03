// // import React, { useEffect, useRef } from "react";
// // import "./Services.css";

// // // Import images
// // import dex1 from "../../assets/dex1.png";
// // import dex2 from "../../assets/dex2.png";
// // import dex3 from "../../assets/dex3.png";
// // import dex4 from "../../assets/dex4.png";

// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // const Services = () => {
// //  const services = [
// //   {
// //     id: 1,
// //     number: "01",
// //     title: "Websites",
// //     subcategories: ["Business Sites", "Online Stores", "Custom Platforms", "Landing Pages"],
// //     description:
// //       "We create modern, fast, and responsive websites that help businesses grow online.",
// //     img: dex1,
// //   },
// //   {
// //     id: 2,
// //     number: "02",
// //     title: "Mobile Apps",
// //     subcategories: ["Android Apps", "iOS Apps", "Cross-Platform", "App Design"],
// //     description:
// //       "We develop smooth and reliable mobile apps with user-friendly design and strong performance.",
// //     img: dex2,
// //   },
// //   {
// //     id: 3,
// //     number: "03",
// //     title: "UI/UX",
// //     subcategories: ["Interface Design", "User Experience", "Wireframes", "Prototypes"],
// //     description:
// //       "We design clean and simple interfaces that make digital products easy and enjoyable to use.",
// //     img: dex3,
// //   },
// //   {
// //     id: 4,
// //     number: "04",
// //     title: "Maintenance",
// //     subcategories: ["Updates", "Bug Fixes", "Performance", "Technical Help"],
// //     description:
// //       "We keep your website or app running smoothly with updates, improvements, and ongoing support.",
// //     img: dex4,
// //   },
// // ];

// //   const mainTitleRef = useRef(null);
// //   const serviceTitleRefs = useRef([]);

// //   useEffect(() => {
// //     // Helper to wrap text in spans for rolling effect
// //     const splitText = (el) => {
// //       if (!el || el.dataset.wrapped) return;
// //       const text = el.textContent;
// //       el.innerHTML = "";
      
// //       text.split("").forEach((char) => {
// //         const span = document.createElement("span");
// //         span.style.display = "inline-block";
// //         span.style.overflow = "hidden";
// //         span.style.verticalAlign = "top";
// //         span.innerHTML = `
// //           <div class="char-wrapper" style="position: relative; display: block;">
// //             <span class="char-original" style="display: block;">${char === " " ? "&nbsp;" : char}</span>
// //             <span class="char-clone" style="display: block; position: absolute; top: 100%; left: 0;">${char === " " ? "&nbsp;" : char}</span>
// //           </div>
// //         `;
// //         el.appendChild(span);
// //       });
// //       el.dataset.wrapped = "true";
// //     };

// // const animateText = (el) => {
// //       const wrappers = el.querySelectorAll(".char-wrapper");
      
// //       // Create the timeline
// //       const tl = gsap.timeline({ paused: true });
      
// //       tl.to(wrappers, {
// //         yPercent: -100,
// //         duration: 0.5,
// //         ease: "power2.inOut",
// //         // Positive stagger value ensures left-to-right sequence
// //         stagger: {
// //           each: 0.04, 
// //           from: "start" // Explicitly start from the first character
// //         },
// //       });

// //       // ScrollTrigger for initial entry
// //       ScrollTrigger.create({
// //         trigger: el,
// //         start: "top 90%",
// //         onEnter: () => tl.play(),
// //       });

// //       // Hover effect: restarting from 0 ensures the left-to-right flow repeats
// //       el.addEventListener("mouseenter", () => {
// //         tl.restart();
// //       });
// //     };
// //     // Initialize Main Title
// //     if (mainTitleRef.current) {
// //       splitText(mainTitleRef.current);
// //       animateText(mainTitleRef.current);
// //     }

// //     // Initialize Service Titles
// //     serviceTitleRefs.current.forEach((el) => {
// //       if (el) {
// //         splitText(el);
// //         animateText(el);
// //       }
// //     });

// //     return () => {
// //       ScrollTrigger.getAll().forEach(t => t.kill());
// //     };
// //   }, []);

// //   return (
// //     <div id="Services" className="services-main">
// //       <h1 className="main-title" ref={mainTitleRef}>Services</h1>

// //       {services.map((service, index) => (
// //         <div key={service.id} className="service-row">
// //           <div className="service-box number-title-box">
// //             <div className="service-number">{service.number}</div>
// //             <div
// //               className="service-title"
// //               ref={(el) => (serviceTitleRefs.current[index] = el)}
// //               style={{ cursor: "pointer" }}
// //             >
// //               {service.title}
// //             </div>
// //           </div>

// //           <div className="service-box subcategory-box">
// //             {service.subcategories.map((sub, idx) => (
// //               <div key={idx} className="subcategory-item">{sub}</div>
// //             ))}
// //           </div>

// //           <div className="service-box description-box">{service.description}</div>

// //           <div className="service-box image-box">
// //             <img src={service.img} alt={service.title} />
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Services;




// import React, { useEffect, useRef } from "react";
// import "./Services.css";

// // Import images (after img6)
// import img7 from "../../assets/Image/img7.jpg";
// import img8 from "../../assets/Image/img8.jpg";
// import img9 from "../../assets/Image/img9.jpg";
// import img12 from "../../assets/Image/img12.jpg";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function Services() {

// const services = [
//   {
//     id: 1,
//     number: "01",
//     title: "Websites",
//     subcategories: ["Business Sites", "Online Stores", "Custom Platforms", "Landing Pages"],
//     description:
//       "We create modern, fast, and responsive websites that help businesses grow online.",
//     img: img7,
//   },
//   {
//     id: 2,
//     number: "02",
//     title: "Mobile Apps",
//     subcategories: ["Android Apps", "iOS Apps", "Cross-Platform", "App Design"],
//     description:
//       "We develop smooth and reliable mobile apps with user-friendly design and strong performance.",
//     img: img8,
//   },
//   {
//     id: 3,
//     number: "03",
//     title: "UI/UX",
//     subcategories: ["Interface Design", "User Experience", "Wireframes", "Prototypes"],
//     description:
//       "We design clean and simple interfaces that make digital products easy and enjoyable to use.",
//     img: img9,
//   },
//   {
//     id: 4,
//     number: "04",
//     title: "Maintenance",
//     subcategories: ["Updates", "Bug Fixes", "Performance", "Technical Help"],
//     description:
//       "We keep your website or app running smoothly with updates, improvements, and ongoing support.",
//     img: img12,
//   },
// ];

//   const mainTitleRef = useRef(null);
//   const serviceTitleRefs = useRef([]);

//   useEffect(() => {

//     const splitText = (el) => {
//       if (!el || el.dataset.wrapped) return;

//       const text = el.textContent;
//       el.innerHTML = "";

//       text.split("").forEach((char) => {
//         const span = document.createElement("span");

//         span.style.display = "inline-block";
//         span.style.overflow = "hidden";
//         span.style.verticalAlign = "top";

//         span.innerHTML = `
//           <div class="char-wrapper" style="position: relative; display: block;">
//             <span class="char-original" style="display:block;">
//               ${char === " " ? "&nbsp;" : char}
//             </span>
//             <span class="char-clone" style="display:block; position:absolute; top:100%; left:0;">
//               ${char === " " ? "&nbsp;" : char}
//             </span>
//           </div>
//         `;

//         el.appendChild(span);
//       });

//       el.dataset.wrapped = "true";
//     };

//     const animateText = (el) => {

//       const wrappers = el.querySelectorAll(".char-wrapper");

//       const tl = gsap.timeline({ paused: true });

//       tl.to(wrappers, {
//         yPercent: -100,
//         duration: 0.5,
//         ease: "power2.inOut",
//         stagger: {
//           each: 0.04,
//           from: "start",
//         },
//       });

//       ScrollTrigger.create({
//         trigger: el,
//         start: "top 90%",
//         onEnter: () => tl.play(),
//       });

//       el.addEventListener("mouseenter", () => {
//         tl.restart();
//       });
//     };

//     if (mainTitleRef.current) {
//       splitText(mainTitleRef.current);
//       animateText(mainTitleRef.current);
//     }

//     serviceTitleRefs.current.forEach((el) => {
//       if (el) {
//         splitText(el);
//         animateText(el);
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };

//   }, []);

//   return (
//     <div id="Services" className="services-main">

//       <h1 className="main-title" ref={mainTitleRef}>
//         Services
//       </h1>

//       {services.map((service, index) => (

//         <div key={service.id} className="service-row">

//           <div className="service-box number-title-box">

//             <div className="service-number">
//               {service.number}
//             </div>

//             <div
//               className="service-title"
//               ref={(el) => (serviceTitleRefs.current[index] = el)}
//               style={{ cursor: "pointer" }}
//             >
//               {service.title}
//             </div>

//           </div>

//           <div className="service-box subcategory-box">

//             {service.subcategories.map((sub, idx) => (
//               <div key={idx} className="subcategory-item">
//                 {sub}
//               </div>
//             ))}

//           </div>

//           <div className="service-box description-box">
//             {service.description}
//           </div>

//           <div className="service-box image-box">
//             <img src={service.img} alt={service.title} />
//           </div>

//         </div>

//       ))}
//     </div>
//   );
// }

// export default Services;


// "use client";
// import React, { useEffect, useRef } from "react";
// import "./Services.css";

// import img7 from "../../assets/Image/img7.jpg";
// import img8 from "../../assets/Image/img8.jpg";
// import img9 from "../../assets/Image/img9.jpg";
// import img12 from "../../assets/Image/img12.jpg";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function Services() {

// const services = [
//   {
//     id: 1,
//     number: "01",
//     title: "Websites",
//     subcategories: ["Business Sites", "Online Stores", "Custom Platforms", "Landing Pages"],
//     description:
//       "We create modern, fast, and responsive websites that help businesses grow online.",
//     img: img7,
//   },
//   {
//     id: 2,
//     number: "02",
//     title: "Mobile Apps",
//     subcategories: ["Android Apps", "iOS Apps", "Cross-Platform", "App Design"],
//     description:
//       "We develop smooth and reliable mobile apps with user-friendly design and strong performance.",
//     img: img8,
//   },
//   {
//     id: 3,
//     number: "03",
//     title: "UI/UX",
//     subcategories: ["Interface Design", "User Experience", "Wireframes", "Prototypes"],
//     description:
//       "We design clean and simple interfaces that make digital products easy and enjoyable to use.",
//     img: img9,
//   },
//   {
//     id: 4,
//     number: "04",
//     title: "Maintenance",
//     subcategories: ["Updates", "Bug Fixes", "Performance", "Technical Help"],
//     description:
//       "We keep your website or app running smoothly with updates, improvements, and ongoing support.",
//     img: img12,
//   },
// ];

//   const mainTitleRef = useRef(null);
//   const serviceTitleRefs = useRef([]);
//   const rowRefs = useRef([]);
//   const imageRefs = useRef([]);

//   useEffect(() => {

//     const splitText = (el) => {
//       if (!el || el.dataset.wrapped) return;

//       const text = el.textContent;
//       el.innerHTML = "";

//       text.split("").forEach((char) => {

//         const span = document.createElement("span");

//         span.style.display = "inline-block";
//         span.style.overflow = "hidden";
//         span.style.verticalAlign = "top";

//         span.innerHTML = `
//           <div class="char-wrapper">
//             <span class="char-original">
//               ${char === " " ? "&nbsp;" : char}
//             </span>
//             <span class="char-clone">
//               ${char === " " ? "&nbsp;" : char}
//             </span>
//           </div>
//         `;

//         el.appendChild(span);

//       });

//       el.dataset.wrapped = "true";
//     };

//     const animateText = (el) => {

//       const wrappers = el.querySelectorAll(".char-wrapper");

//       const tl = gsap.timeline({ paused: true });

//       tl.to(wrappers, {
//         yPercent: -100,
//         duration: 0.5,
//         ease: "power2.inOut",
//         stagger: {
//           each: 0.04,
//           from: "start",
//         },
//       });

//       ScrollTrigger.create({
//         trigger: el,
//         start: "top 90%",
//         onEnter: () => tl.play(),
//       });

//       el.addEventListener("mouseenter", () => {
//         tl.restart();
//       });

//     };

//     if (mainTitleRef.current) {
//       splitText(mainTitleRef.current);
//       animateText(mainTitleRef.current);
//     }

//     serviceTitleRefs.current.forEach((el) => {
//       if (el) {
//         splitText(el);
//         animateText(el);
//       }
//     });

//     rowRefs.current.forEach((row, i) => {

//       ScrollTrigger.create({
//         trigger: row,
//         start: "top 80%",
//         end: "bottom 20%",
//         onEnter: () => row.classList.add("scroll-hover"),
//         onLeave: () => row.classList.remove("scroll-hover"),
//         onEnterBack: () => row.classList.add("scroll-hover"),
//         onLeaveBack: () => row.classList.remove("scroll-hover"),
//       });

//       gsap.fromTo(
//         imageRefs.current[i],
//         {
//           scale: 1.2,
//           clipPath: "inset(100% 0% 0% 0%)",
//         },
//         {
//           scale: 1,
//           clipPath: "inset(0% 0% 0% 0%)",
//           duration: 1.8,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: row,
//             start: "top 75%",
//           },
//         }
//       );

//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };

//   }, []);

//   return (

//     <div id="Services" className="services-main">

//       <h1 className="main-title" ref={mainTitleRef}>
//         Services
//       </h1>

//       {services.map((service, index) => (

//         <div
//           key={service.id}
//           className="service-row"
//           ref={(el) => (rowRefs.current[index] = el)}
//         >

//           <div className="service-box number-title-box">

//             <div className="service-number">
//               {service.number}
//             </div>

//             <div
//               className="service-title"
//               ref={(el) => (serviceTitleRefs.current[index] = el)}
//             >
//               {service.title}
//             </div>

//           </div>

//           <div className="service-box subcategory-box">

//             {service.subcategories.map((sub, idx) => (

//               <div key={idx} className="subcategory-item">
//                 {sub}
//               </div>

//             ))}

//           </div>

//           <div className="service-box description-box">
//             {service.description}
//           </div>

//           <div className="service-box image-box">

//             <img
//               ref={(el) => (imageRefs.current[index] = el)}
//               src={service.img}
//               alt={service.title}
//             />

//           </div>

//         </div>

//       ))}

//     </div>

//   );

// }

// export default Services;

// "use client";
// import React, { useRef, useEffect } from "react";
// import "./Services.css";

// import img7 from "../../assets/Image/img7.jpg";
// import img8 from "../../assets/Image/img8.jpg";
// import img9 from "../../assets/Image/img9.jpg";
// import img12 from "../../assets/Image/img12.jpg";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import TextAnion from "../TextAnion/TextAnion"; // 3D line animation component

// gsap.registerPlugin(ScrollTrigger);

// function Services() {
//   const services = [
//     {
//       id: 1,
//       number: "01",
//       title: "Websites",
//       subcategories: ["Business Sites", "Online Stores", "Custom Platforms", "Landing Pages"],
//       description:
//         "We create modern, fast, and responsive websites that help businesses grow online.",
//       img: img7,
//     },
//     {
//       id: 2,
//       number: "02",
//       title: "Mobile Apps",
//       subcategories: ["Android Apps", "iOS Apps", "Cross-Platform", "App Design"],
//       description:
//         "We develop smooth and reliable mobile apps with user-friendly design and strong performance.",
//       img: img8,
//     },
//     {
//       id: 3,
//       number: "03",
//       title: "UI/UX",
//       subcategories: ["Interface Design", "User Experience", "Wireframes", "Prototypes"],
//       description:
//         "We design clean and simple interfaces that make digital products easy and enjoyable to use.",
//       img: img9,
//     },
//     {
//       id: 4,
//       number: "04",
//       title: "Maintenance",
//       subcategories: ["Updates", "Bug Fixes", "Performance", "Technical Help"],
//       description:
//         "We keep your website or app running smoothly with updates, improvements, and ongoing support.",
//       img: img12,
//     },
//   ];

//   const rowRefs = useRef([]);
//   const imageRefs = useRef([]);

//   useEffect(() => {
//     // ScrollTrigger for image animations and hover effects
//     rowRefs.current.forEach((row, i) => {
//       ScrollTrigger.create({
//         trigger: row,
//         start: "top 80%",
//         end: "bottom 20%",
//         onEnter: () => row.classList.add("scroll-hover"),
//         onLeave: () => row.classList.remove("scroll-hover"),
//         onEnterBack: () => row.classList.add("scroll-hover"),
//         onLeaveBack: () => row.classList.remove("scroll-hover"),
//       });

//       gsap.fromTo(
//         imageRefs.current[i],
//         { scale: 1.2, clipPath: "inset(100% 0% 0% 0%)" },
//         {
//           scale: 1,
//           clipPath: "inset(0% 0% 0% 0%)",
//           duration: 1.8,
//           ease: "power3.out",
//           scrollTrigger: { trigger: row, start: "top 75%" },
//         }
//       );
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, []);

//   return (
//     <div id="Services" className="services-main">
//       {/* Main Title */}
//       <h1 className="main-title">
//         <TextAnion text="Services" className="main-title-text" start="top 85%" />
//       </h1>

//       {services.map((service, index) => (
//         <div
//           key={service.id}
//           className="service-row"
//           ref={(el) => (rowRefs.current[index] = el)}
//         >
//           <div className="service-box number-title-box">
//             <div className="service-number">
//               <TextAnion text={service.number} className="service-number-text" start="top 85%" />
//             </div>

//             {/* Service title */}
//             <div className="service-title">
//               <TextAnion text={service.title} className="service-title-text" start="top 85%" />
//             </div>
//           </div>

//           <div className="service-box subcategory-box">
//             {service.subcategories.map((sub, idx) => (
//               <div key={idx} className="subcategory-item">
//                 <TextAnion text={sub} className="subcategory-text" start="top 85%" />
//               </div>
//             ))}
//           </div>

//           <div className="service-box description-box">
//             <TextAnion text={service.description} className="description-text" start="top 85%" />
//           </div>

//           <div className="service-box image-box">
//             <img
//               ref={(el) => (imageRefs.current[index] = el)}
//               src={service.img}
//               alt={service.title}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Services;

"use client";
import React, { useRef, useEffect } from "react";
import "./Services.css";

import img7 from "../../assets/Image/img7.jpg";
import img8 from "../../assets/Image/img8.jpg";
import img9 from "../../assets/Image/img9.jpg";
import img12 from "../../assets/Image/img12.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TextAnion from "../TextAnion/TextAnion";

gsap.registerPlugin(ScrollTrigger);

function Services() {
const services = [
  {
    id: 1,
    rowClass: "row-1",
    number: "01",
    title: "Brand Strategy",
    subcategories: [
      "Research & Insights",
      "Brand Model",
      "Positioning",
      "Value Proposition",
      "Messaging",
      "Verbal Identity",
      "Naming"
    ],
    description:
      "It's the core of your company's identity. It guides all business decisions, ensuring a consistent and impactful presence in the market.",
    img: img7,
  },
  {
    id: 2,
    rowClass: "row-2",
    number: "02",
    title: "Visual Identity",
    subcategories: [
      "Logotype, Typography & Colour",
      "Visual Language",
      "Illustrations & 3D",
      "Art Direction",
      "Brandbook & Guidelines",
      "Motion Design",
      "Brand Applications"
    ],
    description:
      "Visual identity is the unique visual language of your brand, creating memorable impressions and emotional connections with your audience.",
    img: img8,
  },
  {
    id: 3,
    rowClass: "row-3",
    number: "03",
    title: "Website",
    subcategories: [
      "UX Design",
      "Website Design",
      "Responsive Design",
      "Website Motion Animations"
    ],
    description:
      "Our website design services blend innovation and creativity to deliver user-centric solutions that elevate your brand and engage your audience.",
    img: img9,
  },
  {
    id: 4,
    rowClass: "row-4",
    number: "04",
    title: "Product",
    subcategories: [
      "UX Design",
      "User Testing",
      "Prototyping",
      "UI Design",
      "App Design",
      "Interaction Design"
    ],
    description:
      "Our product design services focus on creating intuitive and aesthetically pleasing products that resonate with your audience and stand out in the market.",
    img: img12,
  },
];
  const rowRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    rowRefs.current.forEach((row, i) => {
      ScrollTrigger.create({
        trigger: row,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => row.classList.add("scroll-hover"),
        onLeave: () => row.classList.remove("scroll-hover"),
        onEnterBack: () => row.classList.add("scroll-hover"),
        onLeaveBack: () => row.classList.remove("scroll-hover"),
      });

      gsap.fromTo(
        imageRefs.current[i],
        { scale: 1.2, clipPath: "inset(100% 0% 0% 0%)" },
        {
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 75%" },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div id="Services" className="services-main">
      <h1 className="main-title">
        <TextAnion text="Services" className="main-title-text" start="top 85%" />
      </h1>

      {services.map((service, index) => (
        <div
          key={service.id}
          className={`service-row grid-layout ${service.rowClass}`}
          ref={(el) => (rowRefs.current[index] = el)}
        >
          {/* LEFT BOX */}
          <div className="left-box">
            {/* Top: Heading */}
            <div className="left-top">
              <div className="service-number">
                <TextAnion text={service.number} className="service-number-text" start="top 85%" />
              </div>
              <div className="service-title">
                <TextAnion text={service.title} className="service-title-text" start="top 85%" />
              </div>
            </div>

            {/* Bottom: Description + Points */}
            <div className="left-bottom">
              <div className="description-box">
                <TextAnion
                  text={service.description}
                  className="description-text"
                  start="top 85%"
                />
              </div>
              <div className="additional-points">
                {service.subcategories.map((point, idx) => (
                  <TextAnion
                    key={idx}
                    text={point}
                    className="points-text"
                    start="top 85%"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT BOX */}
          <div className="right-box">
            <div className="image-box">
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                src={service.img}
                alt={service.title}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;