"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  const sections = [
    { title: "Scope of Expertise", text: "CodeGrid provides bespoke digital solutions including full-stack development, UI/UX engineering, and strategic technical consulting." },
    { title: "Client Partnership", text: "Project success relies on collaborative transparency. Clients agree to provide necessary assets and feedback within 48 hours." },
    { title: "Financial Terms", text: "A non-refundable commencement fee is required. Final assets are released upon settlement of the closing invoice." },
    { title: "Iterative Refinement", text: "Our process includes two rounds of high-fidelity revisions. Scope expansions will be billed at our standard hourly rate." },
    { title: "Asset Ownership", text: "Full intellectual property rights are transferred to the Client upon final payment. CodeGrid retains portfolio showcase rights." },
    { title: "Risk Mitigation", text: "CodeGrid employs industry-standard security practices but is not liable for indirect loss or third-party API disruptions." },
    { title: "Strategic Support", text: "Post-launch maintenance is available via a dedicated Service Level Agreement (SLA) to ensure long-term stability." },
    { title: "Agreement Exit", text: "Either party may terminate the engagement with 14 days' written notice. Pro-rated payment is required for work completed." },
  ];

  return (
    <section
      style={{
        width: "100%",
        padding: "clamp(40px,6vw,100px) clamp(15px,5vw,80px)",
        background: "#FBC1D4",
        color: "#202020",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ marginBottom: "80px" }}>
          <h1
            style={{
              fontSize: "clamp(36px,9vw,100px)",
              margin: 0,
              lineHeight: 1,
              color: "#111",
            }}
          >
            Service <span style={{ fontWeight: 300 }}>Protocol</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(18px,4vw,40px)",
              marginTop: "10px",
              opacity: 0.8,
            }}
          >
            Terms that power elite execution.
          </p>
        </div>

        {/* LIST */}
        <div style={{ borderTop: "1px solid #1b1b1b25" }}>
          {sections.map((item, index) => (
            <SectionRow key={index} item={item} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "100px", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(32px,12vw,86px)",
              color: "#fff",
              WebkitTextStroke: "2px #000",
              textShadow:
                "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
            }}
          >
            Start Project
          </h2>

          <div style={{ marginTop: "40px" }}>
            <div className="btn-frame">
              <div className="btn-strip">
                <div className="circle side-left">
                  <div className="arrow"></div>
                </div>

                <div className="box">Accept & Proceed</div>

                <div className="circle side-right">
                  <div className="arrow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BUTTON CSS */}
      <style jsx>{`
        .btn-frame {
          width: 280px;
          height: 48px;
          overflow: hidden;
          cursor: pointer;
          border-radius: 999px;
          margin: auto;
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

        @media (max-width: 768px) {
          .btn-frame {
            width: 90%;
          }
        }
      `}</style>
    </section>
  );
};

/* ROW */
const SectionRow = ({ item, index }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        padding: "clamp(20px,4vw,40px)",
        borderBottom: "1px solid #1b1b1b25",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* BG */}
      <motion.div
        animate={{ x: hover ? "0%" : "-101%" }}
        transition={{ duration: 0.5 }}
        style={{
          position: "absolute",
          inset: 0,
          background: "#8B0000",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "80px 1fr 2fr",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <div style={{ color: hover ? "#fff" : "#000", opacity: 0.7 }}>
          [{String(index + 1).padStart(2, "0")}]
        </div>

        <div
          style={{
            fontSize: "clamp(20px,3vw,36px)",
            fontWeight: 600,
            color: hover ? "#fff" : "#000",
          }}
        >
          {item.title}
        </div>

        <div
          style={{
            fontSize: "clamp(14px,2vw,18px)",
            color: hover ? "#eee" : "#444",
            lineHeight: 1.6,
          }}
        >
          {item.text}
        </div>
      </div>

      {/* MOBILE FIX */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid"] {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default TermsOfService;