"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const policies = [
    { id: "01", title: "Data Acquisition", text: "We collect identifying information including full name, corporate email, and project-specific technical requirements to facilitate a seamless service architecture." },
    { id: "02", title: "Strategic Utilization", text: "Your data is strictly utilized to engineer personalized solutions, maintain communication channels, and refine the CodeGrid user experience." },
    { id: "03", title: "Security Infrastructure", text: "We implement industry-standard encryption and secure server protocols. We prioritize the integrity of your intellectual assets above all else." },
    { id: "04", title: "Zero-Sale Mandate", text: "CodeGrid maintains a strict policy against the monetization of user data. Information is only disclosed when legally mandated or vital for service execution." },
    { id: "05", title: "Analytical Cookies", text: "We utilize telemetry and session cookies to optimize platform performance and understand user interaction patterns within our digital ecosystem." },
    { id: "06", title: "Third-Party Integration", text: "Our workflows may involve premium third-party tools. We recommend reviewing their specific privacy frameworks as they operate independently." },
    { id: "07", title: "User Autonomy", text: "You retain full rights to your data. Requests for access, modification, or permanent deletion of personal records are processed with priority." },
    { id: "08", title: "Policy Evolution", text: "This framework is subject to periodic updates to remain compliant with global data standards. Continued engagement implies acceptance." },
  ];

  return (
    <section className="privacy-section">
      <div className="privacy-container">
        
        {/* HEADER */}
        <div className="privacy-header">
          <h1>
            Privacy <span>Governance</span>
          </h1>
          <p>Your data. Your control. Our responsibility.</p>
        </div>

        {/* LIST */}
        <div className="policy-list">
          {policies.map((item, index) => (
            <PolicyRow key={index} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="privacy-cta">
          <h2>Data Rights</h2>

          <div className="btn-frame">
            <div className="btn-strip">
              <div className="circle side-left">
                <div className="arrow"></div>
              </div>
              <div className="box">Contact Compliance</div>
              <div className="circle side-right">
                <div className="arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .privacy-section {
          width: 100%;
          padding: clamp(40px, 6vw, 100px) clamp(15px, 5vw, 80px);
          background: #FBC1D4;
          color: #202020;
        }

        .privacy-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .privacy-header {
          margin-bottom: clamp(40px, 8vw, 100px);
        }

        .privacy-header h1 {
          font-size: clamp(36px, 9vw, 100px);
          margin: 0;
          line-height: 1;
        }

        .privacy-header span {
          font-weight: 300;
        }

        .privacy-header p {
          font-size: clamp(16px, 3vw, 28px);
          margin-top: 10px;
          opacity: 0.8;
        }

        .policy-list {
          border-top: 1px solid #1b1b1b25;
        }

        .privacy-cta {
          margin-top: clamp(60px, 10vw, 120px);
          text-align: center;
        }

        .privacy-cta h2 {
          font-size: clamp(32px, 12vw, 86px);
          color: #fff;
          -webkit-text-stroke: 2px #000;
          text-shadow:
            -1px -1px 0 #000,
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000;
        }

        /* BUTTON */
        .btn-frame {
          width: clamp(200px, 60%, 320px);
          height: 48px;
          overflow: hidden;
          cursor: pointer;
          border-radius: 999px;
          margin: 40px auto 0;
        }

        .btn-strip {
          display: flex;
          align-items: center;
          width: calc(100% + 48px);
          transform: translateX(-48px);
          transition: transform 0.45s cubic-bezier(.22,.61,.36,1);
        }

        .btn-frame:hover .btn-strip {
          transform: translateX(0);
        }

        .box {
          flex: 1;
          height: 48px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          font-size: clamp(14px, 2vw, 16px);
        }

        .circle {
          width: 48px;
          height: 48px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .arrow {
          width: 8px;
          height: 8px;
          border-top: 2px solid #111;
          border-right: 2px solid #111;
          transform: rotate(45deg);
        }

        /* TABLET */
        @media (max-width: 768px) {
          .privacy-header {
            text-align: center;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          .privacy-section {
            padding: 40px 15px;
          }

          .privacy-header h1 {
            line-height: 1.1;
          }

          .privacy-cta h2 {
            -webkit-text-stroke: 1px #000;
          }
        }
      `}</style>
    </section>
  );
};

const PolicyRow = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="policy-row"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        className="bg"
        animate={{ x: hover ? "0%" : "-101%" }}
        transition={{ duration: 0.5 }}
      />

      <div className="content">
        <div className="id">[{item.id}]</div>
        <div className="title">{item.title}</div>
        <div className="text">{item.text}</div>
      </div>

      <style jsx>{`
        .policy-row {
          position: relative;
          padding: clamp(20px, 4vw, 40px);
          border-bottom: 1px solid #1b1b1b25;
          overflow: hidden;
        }

        .bg {
          position: absolute;
          inset: 0;
          background: #8B0000;
          z-index: 0;
        }

        .content {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 80px 1fr 2fr;
          gap: 20px;
          align-items: start;
        }

        .id {
          opacity: 0.7;
          font-size: 12px;
        }

        .title {
          font-size: clamp(18px, 3vw, 32px);
          font-weight: 600;
        }

        .text {
          font-size: clamp(14px, 2vw, 18px);
          line-height: 1.6;
          max-width: 600px;
        }

        /* TABLET */
        @media (max-width: 900px) {
          .content {
            grid-template-columns: 60px 1fr;
          }

          .text {
            grid-column: span 2;
          }
        }

        /* MOBILE */
        @media (max-width: 480px) {
          .content {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .id {
            font-size: 11px;
          }

          .title {
            font-size: 18px;
          }

          .text {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;