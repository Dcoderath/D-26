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



"use client";

import { motion } from "framer-motion";
import { FiUsers, FiTrendingUp, FiMessageCircle, FiBriefcase } from "react-icons/fi"; // all valid icons
import "./WhySection.css";

const features = [
  {
    id: "01",
    title: "We Think Like Founders",
    description:
      "We don’t just build projects — we think like business owners. Every decision we make is focused on growth, profitability, and long-term success for your company.",
    icon: FiUsers,
  },
  {
    id: "02",
    title: "Results Over Hype",
    description:
      "We focus on real outcomes, not empty promises. Our work is driven by strategy, performance, and measurable impact that helps your business move forward.",
    icon: FiTrendingUp,
  },
  {
    id: "03",
    title: "Clear Communication",
    description:
      "No confusion, no technical overwhelm. We keep the process simple, transparent, and collaborative so you always know what’s happening and why.",
    icon: FiMessageCircle,
  },
  {
    id: "04",
    title: "Long-Term Partnership",
    description:
      "We build relationships, not one-time projects. Our goal is to grow with you, support your evolution, and help you build a business that lasts.",
    icon: FiBriefcase,
  },
];

export default function WhyWeBestSolutionSection() {
  return (
    <section className="why-section">
      <div className="why-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="why-heading"
        >
          <div className="heading-left">[ WHY ARE WE</div>
          <div className="heading-right">THE BEST SOLUTION</div>
          <div className="heading-center">FOR YOU? ]</div>
        </motion.div>

        <div className="why-list">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="why-item"
              >
                <div className="why-grid">
                  <div className="why-box why-number">{feature.id}</div>

                  <div className="why-box why-title">
                    <Icon className="why-icon" />
                    {feature.title}
                  </div>

                  <div className="why-box why-description">{feature.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}