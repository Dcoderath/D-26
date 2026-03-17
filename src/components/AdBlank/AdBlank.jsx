"use client";

import { motion } from "framer-motion";
import "./WhySection.css";
import D8 from "../../assets/D/d8.svg";

const features = [
  {
    id: "01",
    title: "We Think Like Founders",
    description:
      "We don’t just build projects — we think like business owners. Every decision we make is focused on growth, profitability, and long-term success for your company.",
  },
  {
    id: "02",
    title: "Results Over Hype",
    description:
      "We focus on real outcomes, not empty promises. Our work is driven by strategy, performance, and measurable impact that helps your business move forward.",
  },
  {
    id: "03",
    title: "Clear Communication",
    description:
      "No confusion, no technical overwhelm. We keep the process simple, transparent, and collaborative so you always know what’s happening and why.",
  },
  {
    id: "04",
    title: "Long-Term Partnership",
    description:
      "We build relationships, not one-time projects. Our goal is to grow with you, support your evolution, and help you build a business that lasts.",
  },
];

export function WhySection() {
  return (
    <section className="why-section">
      <div className="why-container">
        {/* Heading */}
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

        {/* Features List */}
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
                <div className="why-box why-number">{feature.id}</div>
                <div className="why-box why-title">{feature.title}</div>
                <div className="why-box why-description">{feature.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner Section (copied from AdBlank) */}
        <div className="adblank__banner-wrapper">
          <div className="adblank__banner">
            <div className="adblank__banner-track">
              {[...Array(20)].map((_, i) => (
                <div className="adblank__banner-item" key={i}>
                  <div className="adblank__banner-text">JUST IMAGINE, WE DESIGN</div>
                  <img src={D8} alt="Logo" className="adblank__banner-image" />
                </div>
              ))}
            </div>
          </div>

          <div className="adblank__banner adblank__banner--alt">
            <div className="adblank__banner-track">
              {[...Array(20)].map((_, i) => (
                <div className="adblank__banner-item" key={i}>
                  <div className="adblank__banner-text">JUST IMAGINE, WE DESIGN</div>
                  <img src={D8} alt="Logo" className="adblank__banner-image" />
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