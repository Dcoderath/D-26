// =============================
// WhySection.jsx
// =============================

"use client";

import { motion } from "framer-motion";
import "./WhySection.css";

const features = [
  {
    id: "01",
    title: "Equipment",
    description:
      "We use advanced technologies and modern dental equipment at all stages of diagnosis and treatment.",
  },
  {
    id: "02",
    title: "Offices",
    description:
      "Our rooms are designed in a comfortable style to make you feel safe and relaxed during procedures and treatment.",
  },
  {
    id: "03",
    title: "Professionalism",
    description:
      "Our specialists have the latest treatment methods, modern knowledge, and extensive experience.",
  },
  {
    id: "04",
    title: "Individuality",
    description:
      "We offer an individual approach to each patient, ensure anonymity, and provide psycho-emotional support.",
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
          <div className="heading-left">WHY ARE WE</div>
          <div className="heading-right">THE BEST SOLUTION</div>
          <div className="heading-center">FOR YOU?</div>
        </motion.div>

        <div className="why-list">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="why-item"
            >
              <div className="why-grid">
                <div className="why-box why-number">
                  {feature.id}
                </div>

                <div className="why-box why-title">
                  {feature.title}
                </div>

                <div className="why-box why-description">
                  {feature.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



